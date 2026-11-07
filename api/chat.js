import OpenAI from "openai";
import { PORTFOLIO_CONTEXT } from "./portfolioContext.js";

// In-memory rate limiting map
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30;

function checkRateLimit(ip) {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + RATE_LIMIT_WINDOW_MS;
  } else {
    clientData.count += 1;
  }

  rateLimitMap.set(ip, clientData);
  return clientData.count <= MAX_REQUESTS_PER_WINDOW;
}

const SYSTEM_PROMPT = `You are the portfolio assistant for Qayoom Akhtar.
Your role is to answer questions from recruiters and visitors about Qayoom's technical background, projects, architecture decisions, and contact details.

AUTHORITATIVE PORTFOLIO DATA:
${JSON.stringify(PORTFOLIO_CONTEXT, null, 2)}

COMMUNICATION GUIDELINES:
1. Tone & Style:
   - Concise, direct, professional, and technical.
   - No sycophantic filler, no generic buzzwords.
   - Answer the question asked without unsolicited marketing pitches.

2. Core Facts:
   - Full Stack Engineer specializing in TypeScript, Next.js, React, Node.js, Express, PostgreSQL, Prisma, and practical LLM/RAG integrations.
   - Work history: Full Stack Development Intern at Infotech Service (optimized REST APIs, built reusable React UI components).
   - Education: B.Tech in Computer Science Engineering at Chandigarh University, Mohali (2022 – 2026).
   - Projects: InboxIQ AI, AI Career Agent, Game Galaxy Hub, and Qyro.

3. Formatting:
   - Short paragraphs and concise bullet points.
   - Do not use fenced code blocks for URLs or plain text.
   - Use clean markdown links: [GitHub](https://github.com/test-Ois), [LinkedIn](https://www.linkedin.com/in/qayoom-akhtar), [Resume](https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL), [Email](mailto:qayoomakhtar72@gmail.com).

4. Strict Accuracy:
   - Do not invent claims, metrics, degrees, or companies outside the provided portfolio context.
   - If information is not in the dataset, say: "I don't have that information in Qayoom's portfolio records."`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed. Only POST requests are permitted." });
  }

  const clientIp = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "anonymous";
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: "Too many requests. Please wait a minute before trying again." });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: "Invalid JSON payload." });
      }
    }

    const { message, conversationHistory } = body || {};

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "Message content cannot be empty." });
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length > 4000) {
      return res.status(400).json({ error: "Message exceeds maximum allowed length of 4000 characters." });
    }

    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey || apiKey.trim() === "" || apiKey === "your_actual_nvidia_key") {
      console.error("[NVIDIA Chat API Error] NVIDIA_API_KEY is missing or contains placeholder.");
      return res.status(500).json({
        error: "NVIDIA_API_KEY is missing or invalid. Please configure your NVIDIA_API_KEY environment variable.",
      });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: "https://integrate.api.nvidia.com/v1",
    });

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (Array.isArray(conversationHistory)) {
      const validHistory = conversationHistory
        .slice(-8)
        .filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
        .map((item) => ({ role: item.role, content: item.content.slice(0, 1500) }));

      messages.push(...validHistory);
    }

    messages.push({ role: "user", content: trimmedMessage });

    // Enable streaming response with Server-Sent Events (SSE)
    const completion = await openai.chat.completions.create({
      model: "moonshotai/kimi-k3",
      messages: messages,
      temperature: 0.6,
      top_p: 0.95,
      max_tokens: 2048,
      stream: true,
    });

    // Set streaming headers
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of completion) {
      // Stream only content delta (ignoring reasoning_content)
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write("data: [DONE]\n\n");
    return res.end();
  } catch (err) {
    console.error("[NVIDIA Chat API Error]", err.message || err);

    let userFacingError = "Sorry, I couldn't process that request right now. Please try again.";
    if (err.status === 401) {
      userFacingError = "Authentication error with AI provider. Please check key configuration.";
    } else if (err.status === 429) {
      userFacingError = "AI service quota or rate limit exceeded. Please wait a moment.";
    }

    if (!res.headersSent) {
      return res.status(500).json({ error: userFacingError });
    } else {
      res.write(`data: ${JSON.stringify({ error: userFacingError })}\n\n`);
      return res.end();
    }
  }
}
