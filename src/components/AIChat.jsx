// src/components/AIChat.jsx
import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, User, RefreshCw, AlertCircle, X, ExternalLink, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SUGGESTED_QUESTIONS = [
  "Tell me about Qayoom",
  "What projects has Qayoom built?",
  "What technologies does Qayoom use?",
  "What is Qayoom's technical background?",
  "How can I contact Qayoom?",
];

const INITIAL_MESSAGE = {
  id: "welcome",
  role: "assistant",
  content: `Hi! 👋 I'm **Qayoom AI**.

I can tell you about Qayoom's background, projects, technical skills, experience, and the technologies he works with.

You can also ask about his projects, career focus, or how to get in touch with him.`,
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

// URL safety checker
const isSafeUrl = (url) => {
  if (!url) return false;
  const lowercase = url.toLowerCase().trim();
  return (
    lowercase.startsWith("https://") ||
    lowercase.startsWith("http://") ||
    lowercase.startsWith("mailto:") ||
    lowercase.startsWith("tel:")
  );
};

// Markdown component renderers (Clean typography, zero bulky cards)
const markdownComponents = {
  a: ({ href, children, ...props }) => {
    if (!isSafeUrl(href)) {
      return <span>{children}</span>;
    }
    const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a
        href={href}
        target={isMailOrTel ? "_self" : "_blank"}
        rel={isMailOrTel ? undefined : "noopener noreferrer"}
        className="inline-flex items-center gap-1 font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors duration-200"
        {...props}
      >
        <span>{children}</span>
        {!isMailOrTel && <ExternalLink size={12} className="opacity-80 shrink-0 inline-block" />}
      </a>
    );
  },
  p: ({ children }) => (
    <p className="mb-2.5 last:mb-0 leading-relaxed text-gray-200 border-none bg-transparent p-0 m-0">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 mb-3 space-y-1 text-left text-gray-200 border-none bg-transparent p-0 m-0">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 mb-3 space-y-1 text-left text-gray-200 border-none bg-transparent p-0 m-0">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed text-gray-200 border-none bg-transparent p-0 m-0">{children}</li>
  ),
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  code: ({ inline, className, children, ...props }) => {
    if (inline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-purple-950/60 text-purple-300 border border-purple-800/40"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <pre className="p-3 my-2.5 rounded-xl bg-black/70 border border-purple-900/40 text-purple-200 font-mono text-xs overflow-x-auto">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
  h1: ({ children }) => (
    <h1 className="text-base font-bold text-white mb-2 mt-3.5 border-none bg-transparent p-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-sm font-bold text-white mb-2 mt-3 border-none bg-transparent p-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xs font-bold text-white mb-1.5 mt-2.5 border-none bg-transparent p-0">
      {children}
    </h3>
  ),
};

const getThinkingLabel = (message) => {
  const text = (message || "").toLowerCase();
  if (text.includes("project") || text.includes("built") || text.includes("career")) {
    return "Looking up Qayoom's projects...";
  }
  if (text.includes("skill") || text.includes("technology") || text.includes("stack")) {
    return "Looking up technical skills...";
  }
  if (text.includes("experience") || text.includes("background") || text.includes("education")) {
    return "Looking up background...";
  }
  if (text.includes("contact") || text.includes("email") || text.includes("linkedin") || text.includes("resume")) {
    return "Looking up contact details...";
  }
  return "Thinking...";
};

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statusText, setStatusText] = useState("");
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = (behavior = "smooth") => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: behavior,
      });
    }
  };

  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    const isBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollBottom(!isBottom);
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom("auto");
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    setError(null);
    setInputValue("");

    const userMsg = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setStatusText(getThinkingLabel(text));

    setTimeout(() => scrollToBottom("smooth"), 50);

    try {
      const history = [...messages, userMsg]
        .filter((m) => m.id !== "welcome")
        .slice(-8)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          conversationHistory: history,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || "Sorry, I couldn't process that request right now. Please try again."
        );
      }

      const aiMsgId = (Date.now() + 1).toString();
      const initialAiMsg = {
        id: aiMsgId,
        role: "assistant",
        content: "",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      let aiResponseContent = "";
      let hasReceivedFirstChunk = false;

      if (res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith("data: ")) {
              const dataStr = trimmed.slice(6);
              if (dataStr === "[DONE]") break;

              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.error) throw new Error(parsed.error);
                if (parsed.content) {
                  if (!hasReceivedFirstChunk) {
                    hasReceivedFirstChunk = true;
                    setStatusText("");
                    setMessages((prev) => [...prev, initialAiMsg]);
                  }
                  aiResponseContent += parsed.content;

                  setMessages((prev) =>
                    prev.map((m) => (m.id === aiMsgId ? { ...m, content: aiResponseContent } : m))
                  );

                  if (!showScrollBottom) {
                    scrollToBottom("smooth");
                  }
                }
              } catch (e) {
                if (e.message !== "Unexpected end of JSON input") {
                  console.error("SSE parse error:", e);
                }
              }
            }
          }
        }
      }

      if (!hasReceivedFirstChunk) {
        throw new Error("Received empty response from AI model.");
      }
    } catch (err) {
      console.error("[AIChat Error]", err);
      setError(err.message || "Sorry, I couldn't process that request right now. Please try again.");
    } finally {
      setStatusText("");
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setStatusText("");
    setMessages([INITIAL_MESSAGE]);
    setError(null);
  };

  return (
    <>
      {/* ── Floating Toggle Button (Clean, Stationary, Premium) ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full cursor-pointer select-none transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #8254EE 0%, #00C2FF 100%)",
                boxShadow: "0 4px 20px rgba(130, 84, 238, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 28px rgba(130, 84, 238, 0.6)";
                e.currentTarget.style.filter = "brightness(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(130, 84, 238, 0.4)";
                e.currentTarget.style.filter = "none";
              }}
              aria-label="Open Ask Qayoom AI Assistant"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Ask Qayoom AI
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* ── Chat Modal Drawer (Smooth Transformative Opening) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-24 w-auto sm:w-[420px] h-[580px] max-h-[82vh] z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl chatbot-drawer"
            style={{
              background: "rgba(10, 9, 14, 0.96)",
              border: "1px solid rgba(130, 84, 238, 0.25)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 16px 48px rgba(0, 0, 0, 0.8), 0 0 32px rgba(130, 84, 238, 0.18)",
            }}
          >
            {/* ── Clean Header (No Model Information) ── */}
            <div
              className="px-4 py-3.5 flex items-center justify-between border-b relative select-none shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(130, 84, 238, 0.18), rgba(0, 194, 255, 0.08))",
                borderColor: "rgba(130, 84, 238, 0.18)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #8254EE, #00C2FF)" }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-sm text-white tracking-wide">
                    Ask Qayoom AI
                  </h3>
                  <div className="text-[11px] font-normal" style={{ color: "#82717B" }}>
                    Your guide to Qayoom&apos;s work, projects &amp; skills
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── Conversation Stream Container ── */}
            <div
              ref={messagesContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-purple-900/40 relative"
            >
              {messages.map((msg) => (
                <div key={msg.id} className="w-full">
                  {msg.role === "user" ? (
                    <div className="flex justify-end items-start gap-2.5">
                      <div
                        className="max-w-[80%] p-3.5 rounded-2xl rounded-tr-none text-left text-xs sm:text-sm text-white shadow-md"
                        style={{
                          background: "linear-gradient(135deg, #8254EE, #6d3fd4)",
                          boxShadow: "0 2px 14px rgba(130, 84, 238, 0.3)",
                        }}
                      >
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                        <span className="block text-[10px] mt-1.5 text-right opacity-60 font-mono">
                          {msg.timestamp}
                        </span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-md">
                        <User className="w-4 h-4" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-3 w-full text-left">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="text-[11px] font-semibold text-purple-300 mb-1 tracking-wide">
                          Qayoom AI
                        </div>
                        <div className="assistant-content text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={markdownComponents}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                        <span className="block text-[10px] mt-2 opacity-40 font-mono" style={{ color: "#82717B" }}>
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Thinking Status Indicator */}
              {isLoading && statusText && (
                <div className="flex items-start gap-3 w-full text-left">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-cyan-300" />
                  </div>
                  <div className="flex items-center gap-2 py-1 text-xs text-purple-300 font-medium">
                    <span>{statusText}</span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "200ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "400ms" }} />
                    </span>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {error && (
                <div className="p-3 rounded-xl bg-red-950/50 border border-red-800/40 flex items-center gap-2 text-red-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="flex-1 text-left">{error}</span>
                </div>
              )}
            </div>

            {/* Floating Scroll-to-Bottom Button */}
            {showScrollBottom && (
              <button
                onClick={() => scrollToBottom("smooth")}
                className="absolute bottom-20 right-6 p-2 rounded-full bg-purple-900/80 text-white shadow-lg border border-purple-500/40 hover:bg-purple-800 transition-colors z-10 cursor-pointer"
                title="Scroll to latest response"
              >
                <ArrowDown size={14} />
              </button>
            )}

            {/* ── Suggested Prompts ── */}
            {messages.length <= 1 && !isLoading && (
              <div className="px-4 py-2.5 flex flex-wrap gap-1.5 border-t border-purple-900/20 bg-black/40 shrink-0">
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="text-[11px] px-2.5 py-1 rounded-full text-left transition-all duration-200 cursor-pointer"
                    style={{
                      background: "rgba(130, 84, 238, 0.12)",
                      border: "1px solid rgba(130, 84, 238, 0.25)",
                      color: "#C1CFC1",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(130, 84, 238, 0.28)";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(130, 84, 238, 0.12)";
                      e.currentTarget.style.color = "#C1CFC1";
                    }}
                  >
                    ✦ {q}
                  </button>
                ))}
              </div>
            )}

            {/* ── Input Bar (Clean, Ends Naturally without Model Footer) ── */}
            <div
              className="p-3 border-t relative shrink-0"
              style={{
                background: "rgba(9, 9, 9, 0.95)",
                borderColor: "rgba(130, 84, 238, 0.2)",
              }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Qayoom..."
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-purple-900/30 focus:border-purple-500/60 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background:
                      inputValue.trim() && !isLoading
                        ? "linear-gradient(135deg, #8254EE, #00C2FF)"
                        : "rgba(59, 53, 60, 0.4)",
                    color: "#FFFFFF",
                  }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
