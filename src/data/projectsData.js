// src/data/projectsData.js
// Authoritative case-study data for Qayoom Akhtar's featured portfolio projects.

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI Career Agent",
    subtitle: "AI-Powered Career & Resume Intelligence Platform",
    category: "AI Career Platform",
    status: "Ongoing Project",
    isOngoing: true,
    image: "/projects/project2.png",
    accent: "#8254EE",
    githubUrl: "https://github.com/test-Ois",
    demoUrl: null,
    summary:
      "A full-stack AI-powered career platform designed to help users improve their resumes, analyze job descriptions, optimize applications, generate tailored career documents, manage job applications, and streamline their job-search workflow.",
    overview: {
      about:
        "AI Career Agent is an end-to-end career intelligence and application management platform. It combines resume parsing, visual and semantic ATS analysis, AI-powered bullet point recommendations, job description matching, AI-generated cover letters, and an interactive career assistant into one unified dashboard.",
      problem:
        "Job seekers face low application response rates due to generic resumes, non-ATS-compliant formatting, tedious manual tailoring for every individual job posting, and chaotic application tracking across dozens of job boards.",
      solution:
        "Engineered a specialized multi-model AI architecture utilizing dedicated LLMs for distinct tasks: NVIDIA Muse Glimmer 30B for deep resume optimization and tailoring, GLM 5.2 for structured data extraction, Google Gemini for interactive career coaching, and Inkling v1 for visual ATS analysis.",
      value:
        "Dramatically improves interview conversion rates by ensuring resumes beat ATS parsers, cuts tailoring time from hours to seconds, and centralizes the entire job application lifecycle.",
    },
    keyFeatures: [
      {
        title: "Resume Parsing & ATS Scoring",
        description:
          "Extracts structured data from multi-format resumes and evaluates them against industry ATS criteria with actionable visual scorecards.",
        icon: "ShieldCheck",
      },
      {
        title: "AI Resume Optimization & Tailoring",
        description:
          "Powered by NVIDIA meta/muse-glimmer-30b to refine bullet points, integrate impactful action verbs, and dynamically align skills to specific job descriptions.",
        icon: "Sparkles",
      },
      {
        title: "Job Description Analysis & Cover Letters",
        description:
          "Extracts core requirements and candidate gaps from job postings and generates targeted, role-specific cover letters.",
        icon: "Workflow",
      },
      {
        title: "Ask AI Career Assistant",
        description:
          "Interactive conversational career coach powered by Gemini 1.5 Flash for salary negotiation tips, mock interview prep, and career strategy.",
        icon: "Cpu",
      },
      {
        title: "Job & Application Tracking Pipeline",
        description:
          "Kanban-style job management system tracking application statuses, interviews, offer letters, follow-up deadlines, and company notes.",
        icon: "Layers",
      },
      {
        title: "Dashboard & Google Authentication",
        description:
          "Secure Google OAuth session management with responsive dashboard views for Resumes, Jobs, Applications, Automation, and Settings.",
        icon: "Database",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Lucide React", "Framer Motion"],
      backend: ["Node.js", "Express.js", "Prisma ORM", "/api/v1 REST Architecture", "TypeScript"],
      aiMl: [
        "NVIDIA meta/muse-glimmer-30b (Optimization & Tailoring)",
        "GLM glm-5.2 (Structured Extraction)",
        "Google Gemini gemini-1.5-flash (Ask AI Chat)",
        "Inkling inkling-v1 (Visual ATS Analysis)",
        "Prompt Engineering",
      ],
      database: ["PostgreSQL", "Neon PostgreSQL", "Prisma ORM", "Relational Indexing"],
      authSecurity: ["Google OAuth", "JWT Token Verification", "CORS Protection", "Validation Middleware"],
      deployment: ["Vercel", "Git & GitHub"],
    },
    architecture: {
      client:
        "Next.js frontend featuring dedicated product modules for Dashboard, Resumes, Jobs, Applications, AI Assistant, Automation Workflows, Companies, Profile, and Settings.",
      backend:
        "Modular Node.js and Express backend structured around clean `/api/v1` routes with controller/service decoupling and Prisma ORM data access layers.",
      dataAndAi:
        "PostgreSQL on Neon with relational schemas linking Users, Resumes, TargetJobs, Applications, and AISuggestions. Asynchronous task queue routes specific tasks to 4 dedicated AI models.",
      realtimeOrSecurity:
        "Google OAuth session verification, strict payload validation pipes, and sanitized HTML sanitization for resume rendering.",
    },
    challenges: [
      {
        title: "Multi-Model AI Task Routing & Orchestration",
        challenge:
          "Using a single LLM for all tasks caused high latency for simple chat and inconsistent JSON formatting during complex resume extraction.",
        solution:
          "Separated responsibilities: routed deep reasoning and tailoring to NVIDIA Muse Glimmer 30B, structured extraction to GLM 5.2, fast chat to Gemini 1.5 Flash, and visual ATS checks to Inkling v1.",
      },
      {
        title: "Complex Multi-Section Resume Schema Evolution",
        challenge:
          "Varying user resume formats (experience, education, projects, skills, certifications) required flexible yet strictly typed database modeling.",
        solution:
          "Designed a normalized PostgreSQL schema with Prisma ORM migrations and JSONB flexibility for custom user-defined sections.",
      },
    ],
    highlights: [
      "Multi-model AI architecture routing 4 specialized LLMs (NVIDIA, GLM, Gemini, Inkling)",
      "Full-stack Next.js + Express + PostgreSQL (Neon) + Prisma ORM",
      "End-to-end career suite: Resumes, ATS Scoring, Job Tracker & AI Coach",
      "Enterprise Google OAuth authentication with `/api/v1` architecture",
    ],
  },
  {
    id: 2,
    title: "InboxIQ AI",
    subtitle: "AI-Powered Email Intelligence Platform",
    category: "AI & Full-Stack",
    status: "Completed",
    isOngoing: false,
    image: "/projects/inboxAI.png",
    accent: "#00C2FF",
    githubUrl: "https://github.com/test-Ois/inboxiq-ai",
    demoUrl: null,
    summary:
      "A full-stack email intelligence platform designed to eliminate inbox overload through automated thread summarization, priority scoring, semantic categorization, and real-time spam/fraud anomaly detection powered by Gemini AI and PostgreSQL/Prisma.",
    overview: {
      about:
        "InboxIQ AI transforms dense, disorganized email communications into clear, actionable intelligence. It analyzes incoming messages, generates concise thread executive summaries, extracts action items, classifies urgency, and highlights suspicious or phishing elements automatically.",
      problem:
        "Knowledge workers waste hours daily triaging bloated email threads, missing urgent deadlines, and falling prey to sophisticated phishing attempts.",
      solution:
        "Engineered an automated ingestion and analysis pipeline backed by Google Gemini AI that extracts sentiment, priority scores, and key deliverables, presenting them in a clean dashboard backed by a high-performance PostgreSQL database.",
      value:
        "Reduces email triage time by up to 60%, flags suspicious emails before interaction, and ensures high-priority requests never slip through the cracks.",
    },
    keyFeatures: [
      {
        title: "Thread Summarization & Action Extraction",
        description:
          "Converts multi-email conversation chains into 3-bullet executive summaries with assigned owners and deadlines.",
        icon: "Sparkles",
      },
      {
        title: "Semantic Categorization & Priority Scoring",
        description:
          "Automatically sorts incoming emails into VIP, Action Required, Newsletters, and Transactional categories.",
        icon: "Layers",
      },
      {
        title: "Spam & Phishing Anomaly Detection",
        description:
          "Analyzes email body context, links, and sender domains to flag potential security risks and impersonation attempts.",
        icon: "ShieldCheck",
      },
      {
        title: "Type-Safe REST APIs with NestJS",
        description:
          "Modular backend architecture built with NestJS and Prisma ORM ensuring strict compile-time type safety.",
        icon: "Cpu",
      },
      {
        title: "Productivity Insights Dashboard",
        description:
          "Visual metrics tracking email volume, response velocity, and pending action items with dark-mode charts.",
        icon: "Database",
      },
      {
        title: "Responsive Next.js Frontend",
        description:
          "Built with Next.js App Router, Tailwind CSS, and optimized server/client component boundaries.",
        icon: "Zap",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Lucide React", "Framer Motion"],
      backend: ["NestJS", "Node.js", "TypeScript", "RESTful APIs", "Dependency Injection"],
      aiMl: ["Google Gemini AI API", "NLP Prompt Engineering", "Text Classification"],
      database: ["PostgreSQL", "Prisma ORM", "Relational Indexing"],
      authSecurity: ["JWT Authentication", "CORS Protection", "Validation Pipes"],
      deployment: ["Docker", "Vercel", "Git & GitHub"],
    },
    architecture: {
      client:
        "Next.js App Router frontend featuring an interactive split-pane inbox, real-time message filter state, and dynamic AI summary modals.",
      backend:
        "NestJS backend following clean architectural patterns with decoupled controllers, business logic services, DTO validation pipes, and Prisma repositories.",
      dataAndAi:
        "PostgreSQL relational database with foreign-key constraints across Users, MailThreads, Messages, and AIInsights. Gemini AI processing runs asynchronously with cached results.",
      realtimeOrSecurity:
        "Cryptographic token verification, sanitized HTML message parsers to neutralize XSS attacks, and rate-limited API gateways.",
    },
    challenges: [
      {
        title: "Context Window Limits on Lengthy Email Chains",
        challenge:
          "Massive email threads with redundant quoted replies exceeded token budgets and increased API processing costs.",
        solution:
          "Engineered a pre-processing normalization filter that strips repeated signature blocks and quoted text before passing content to Gemini AI.",
      },
      {
        title: "Schema Evolution & Migration Integrity",
        challenge:
          "Rapidly evolving features required frequent schema additions without risking corruption of existing email relational metadata.",
        solution:
          "Leveraged Prisma Migrate with strict schema declarations and automated database seeders for repeatable development environments.",
      },
    ],
    highlights: [
      "Enterprise NestJS + Prisma ORM + PostgreSQL architecture",
      "Integrated Gemini AI for automated email triage and fraud detection",
      "100% end-to-end type safety with TypeScript",
      "Sanitized email rendering pipeline preventing XSS vulnerabilities",
    ],
  },
  {
    id: 3,
    title: "Xynox AI",
    subtitle: "AI Assistant Platform",
    category: "AI & Full-Stack",
    status: "Completed",
    isOngoing: false,
    image: "/projects/project3.png",
    accent: "#8254EE",
    githubUrl: "https://github.com/test-Ois/xynox-ai",
    demoUrl: null,
    summary:
      "A production-grade AI assistant platform featuring multi-provider AI model routing (Groq, NVIDIA, Cerebras), real-time token streaming via Server-Sent Events (SSE), and a Retrieval-Augmented Generation (RAG) pipeline powered by Qdrant vector database.",
    overview: {
      about:
        "Xynox AI is a full-stack conversational intelligence platform engineered to provide low-latency, multi-model AI reasoning combined with deep document understanding. Users can chat with cutting-edge open-source and proprietary LLMs, upload contextual documents (PDFs), and receive verifiable, cited answers grounded in their custom knowledge base.",
      problem:
        "Most consumer AI chat applications lock users into a single provider, suffer from high first-token latency, lack transparent document search integration, and struggle with session memory across complex engineering prompts.",
      solution:
        "Built a resilient multi-provider routing layer that balances queries across Groq, NVIDIA NIM, and Cerebras APIs. Integrated a custom RAG pipeline with high-precision text chunking and Qdrant vector search to ground responses with sub-second retrieval times.",
      value:
        "Eliminates vendor lock-in, ensures high availability with automatic failover, and delivers ultra-fast streaming responses with enterprise-grade document grounding.",
    },
    keyFeatures: [
      {
        title: "Multi-Provider LLM Routing",
        description:
          "Intelligently routes prompts across Groq, NVIDIA NIM, and Cerebras endpoints with automatic fallback to maximize throughput and uptime.",
        icon: "Cpu",
      },
      {
        title: "High-Precision RAG Pipeline",
        description:
          "Parses PDFs, extracts text chunks, computes vector embeddings, and performs cosine similarity search via Qdrant Vector Database.",
        icon: "Database",
      },
      {
        title: "Real-Time SSE Streaming",
        description:
          "Engineered ChatGPT/Claude-like token-by-token streaming using Server-Sent Events with incremental markdown rendering and auto-scroll.",
        icon: "Zap",
      },
      {
        title: "Secure Google & Firebase Auth",
        description:
          "Firebase Authentication integration with Firebase Admin SDK verification on Express endpoints using cryptographic JWT verification.",
        icon: "ShieldCheck",
      },
      {
        title: "Context Memory & Prompt Library",
        description:
          "Maintains multi-turn conversation context history, follow-up intent classification, and curated developer prompt templates.",
        icon: "Sparkles",
      },
      {
        title: "Optimized Frontend Architecture",
        description:
          "React memoization, virtualized stream buffers, and responsive dark-mode UI styled with modern Tailwind CSS glassmorphism.",
        icon: "Layers",
      },
    ],
    techStack: {
      frontend: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React", "React Markdown"],
      backend: ["Node.js", "Express.js", "Server-Sent Events (SSE)", "RESTful APIs"],
      aiMl: ["Groq Cloud API", "NVIDIA NIM API", "Cerebras API", "Vector Embeddings", "RAG Pipeline", "Prompt Engineering"],
      database: ["Qdrant Vector Database"],
      authSecurity: ["Firebase Authentication", "Firebase Admin SDK", "JWT Tokens", "Rate Limiting"],
      deployment: ["Vercel", "Render", "Git & GitHub"],
    },
    architecture: {
      client:
        "React/Vite single-page application utilizing custom SSE ReadableStream readers, responsive token rendering, and memoized Markdown components to prevent unnecessary DOM re-renders during high-frequency token updates.",
      backend:
        "Modular Express.js server providing authenticated REST endpoints, client IP rate limiting, input sanitization, and resilient orchestration between AI provider APIs.",
      dataAndAi:
        "Document ingestion engine that cleans PDF text, applies sliding-window chunking (500 tokens with 10% overlap), generates dense embeddings, and queries Qdrant vector collections via cosine metric.",
      realtimeOrSecurity:
        "Server-Sent Events (text/event-stream) delivering sub-100ms time-to-first-token. Firebase token validation middleware safeguards all chat completions and document stores.",
    },
    challenges: [
      {
        title: "UI Jitter & Streaming Re-render Thrashing",
        challenge:
          "High-frequency token chunks delivered via SSE caused continuous full-component re-renders in React, creating visible typing stutter on mobile devices.",
        solution:
          "Implemented local chunk buffering and optimized React state updates using selective component memoization and requestAnimationFrame synchronization.",
      },
      {
        title: "RAG Context Truncation & Hallucination",
        challenge:
          "Arbitrary document chunk boundaries often cut off essential sentences, leading to incomplete context retrieval during vector queries.",
        solution:
          "Adopted semantic sliding-window chunking with sentence boundary preservation and configured a top-k similarity threshold to filter irrelevant chunks.",
      },
      {
        title: "Upstream Provider Rate Limit Failures",
        challenge:
          "Single-provider rate limits and quota spikes could interrupt ongoing user conversations without graceful recovery.",
        solution:
          "Architected an abstract provider adapter with exponential backoff and automated secondary provider failover (Groq -> NVIDIA -> Cerebras).",
      },
    ],
    highlights: [
      "Sub-100ms time-to-first-token streaming via SSE",
      "End-to-end RAG architecture with Qdrant vector database",
      "Multi-provider failover across 3 enterprise AI cloud backends",
      "Production Firebase JWT authentication and security headers",
    ],
  },
  {
    id: 4,
    title: "Qyro",
    subtitle: "Full Stack E-Commerce Platform",
    category: "Full-Stack",
    status: "Completed",
    isOngoing: false,
    image: "/projects/Qyro.png",
    accent: "#8254EE",
    githubUrl: "https://github.com/test-Ois/qyro-ecommerce",
    demoUrl: null,
    summary:
      "A modern full-stack e-commerce web application featuring intelligent product search, personalized recommendations, comprehensive cart & order workflows, and a scalable MERN architecture.",
    overview: {
      about:
        "Qyro is a feature-rich online shopping platform built with a high-performance MERN stack. It provides shoppers with an intuitive catalog browsing experience, smart product filtering, responsive shopping cart workflows, and secure user profile and order tracking management.",
      problem:
        "Online shoppers often encounter rigid keyword search interfaces, clunky checkout flows, and cart synchronization errors across tabs and mobile devices.",
      solution:
        "Engineered an optimized MERN architecture with indexed MongoDB product collections, centralized cart state persistence, and a responsive Next.js frontend.",
      value:
        "Delivers a fast, seamless shopping and checkout experience with reliable cart persistence and modern responsive interfaces.",
    },
    keyFeatures: [
      {
        title: "Smart Product Search & Filtering",
        description:
          "Fast catalog discovery with multi-parameter filtering by categories, price ranges, ratings, and instant text search.",
        icon: "Sparkles",
      },
      {
        title: "Dynamic Recommendation Engine",
        description:
          "Suggests relevant accessories and complementary items based on viewing history and current cart composition.",
        icon: "Zap",
      },
      {
        title: "Full Cart & Checkout State Management",
        description:
          "Optimistic cart updates, local storage synchronization, quantity validation, and order history tracking.",
        icon: "Layers",
      },
      {
        title: "Secure Authentication & Profiles",
        description:
          "JWT-based user sessions, encrypted passwords via bcrypt, and customer order management dashboards.",
        icon: "ShieldCheck",
      },
      {
        title: "Scalable MongoDB Catalog",
        description:
          "Indexed product schemas supporting categories, dynamic attributes, stock counts, and customer reviews.",
        icon: "Database",
      },
      {
        title: "Responsive Glassmorphic UI",
        description:
          "Crafted with Tailwind CSS, animated interactive product cards, quick-view modals, and mobile drawer navigation.",
        icon: "Cpu",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "Tailwind CSS", "Lucide React", "Framer Motion"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "MVC Architecture"],
      aiMl: ["Smart Search Expansion", "Recommendation Heuristics"],
      database: ["MongoDB", "Mongoose ODM", "Text Indexing"],
      authSecurity: ["JWT Authentication", "bcryptjs", "CORS Middleware"],
      deployment: ["Vercel", "Render", "Git & GitHub"],
    },
    architecture: {
      client:
        "Next.js client interface with client-side state providers for cart persistence, instant search debouncing, and responsive product grids.",
      backend:
        "Express.js REST API with organized controllers, middleware authentication guards, and validation handlers for product and order routes.",
      dataAndAi:
        "MongoDB cluster with compound text indexes on product titles, descriptions, and categories supporting fast indexed aggregation queries.",
      realtimeOrSecurity:
        "Secure HTTP-only cookie handling, hashed user passwords with bcrypt, and parameterized Mongoose queries to prevent injection.",
    },
    challenges: [
      {
        title: "Cart State Desynchronization Across Tabs",
        challenge:
          "Users modifying their cart in multiple browser tabs experienced stale totals and incorrect inventory checkout requests.",
        solution:
          "Implemented cross-tab storage event listeners and optimistic server validation prior to order confirmation.",
      },
      {
        title: "Catalog Search Latency Under Load",
        challenge:
          "Complex regex text searches on MongoDB slowed catalog filtering as the number of items increased.",
        solution:
          "Created compound MongoDB text indexes and optimized projection fields, dropping average query times below 40ms.",
      },
    ],
    highlights: [
      "Production-ready MERN e-commerce architecture",
      "Dynamic product discovery and recommendation system",
      "Optimistic UI updates with resilient local cart synchronization",
      "Responsive design optimized across mobile, tablet, and desktop",
    ],
  },
  {
    id: 5,
    title: "Game Galaxy Hub",
    subtitle: "Real-Time Multiplayer Gaming Platform",
    category: "Full-Stack & WebSockets",
    status: "Completed",
    isOngoing: false,
    image: "/projects/gameGalaxy.png",
    accent: "#00C2FF",
    githubUrl: "https://github.com/test-Ois/game-galaxy-hub",
    demoUrl: "https://game-galaxy-hub.vercel.app/",
    summary:
      "A high-octane real-time multiplayer gaming hub for Tic-Tac-Toe and Ludo with low-latency WebSocket rooms, live state synchronization, interactive in-game chat using Socket.io, and smart fallback AI logic.",
    overview: {
      about:
        "Game Galaxy Hub brings friends together for instant, real-time multiplayer gaming in the browser. Players can create private game rooms, share instant invite codes, make synchronized game moves with sub-50ms latency, chat in real-time, or test their skills against intelligent algorithmic AI bots.",
      problem:
        "Traditional web games often rely on clumsy polling mechanisms or slow turn updates, resulting in poor responsiveness, desynchronized board states, and frustrating disconnections.",
      solution:
        "Built a full-duplex WebSocket communication architecture using Socket.io and Next.js. State is validated authoritatively on the server, guaranteeing that both players always share an identical, tamper-proof game state.",
      value:
        "Provides seamless zero-lag multiplayer gaming directly from the browser with no installation required, complete with a live production deployment.",
    },
    keyFeatures: [
      {
        title: "Instant WebSocket Room Creation",
        description:
          "Generate unique 6-character room codes for quick 1-click sharing and instant peer-to-peer game matchmaking.",
        icon: "Zap",
      },
      {
        title: "Authoritative Board State Sync",
        description:
          "Server-side move validation and win condition checks prevent cheated or out-of-turn moves across clients.",
        icon: "ShieldCheck",
      },
      {
        title: "Real-Time In-Game Chat",
        description:
          "Low-latency messaging channel within active game rooms with instant delivery notifications and system event logs.",
        icon: "Sparkles",
      },
      {
        title: "Algorithmic AI Bot Fallback",
        description:
          "Built-in Minimax and heuristic AI logic allows solo players to practice against intelligent computer opponents.",
        icon: "Cpu",
      },
      {
        title: "Turn Indicators & Sound Feedback",
        description:
          "Visual turn clocks, responsive interactive board highlights, and audio cues for moves, wins, and draws.",
        icon: "Layers",
      },
      {
        title: "Live Production Deployment",
        description:
          "Fully deployed on Vercel with high availability and optimized WebSocket transport negotiation.",
        icon: "Database",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Lucide React", "Framer Motion"],
      backend: ["Node.js", "Express.js", "Socket.io", "WebSockets"],
      aiMl: ["Minimax Algorithm", "Heuristic Decision Engine"],
      database: ["In-Memory Room State Map", "Session Store"],
      authSecurity: ["Sanitized Socket Event Payloads", "Room Code Validation"],
      deployment: ["Vercel", "Git & GitHub"],
    },
    architecture: {
      client:
        "TypeScript Next.js application handling client-side socket event subscriptions, optimistic board rendering, and reactive turn state.",
      backend:
        "Socket.io event gateway managing room lifecycles, player disconnections, ping/pong heartbeats, and room broadcast namespaces.",
      dataAndAi:
        "High-speed in-memory state engine tracking active board matrices, player turn pointers, and move history with O(1) state lookup.",
      realtimeOrSecurity:
        "Full-duplex WebSocket connection with automatic HTTP long-polling fallback, strict payload size verification, and disconnect recovery.",
    },
    challenges: [
      {
        title: "Client Disconnects & Mid-Game Reconnection",
        challenge:
          "Temporary mobile network dropouts previously caused matches to immediately abort, frustrating active players.",
        solution:
          "Built a 30-second reconnection grace period with session token resumption, restoring the board state seamlessly upon reconnect.",
      },
      {
        title: "Simultaneous Move Race Conditions",
        challenge:
          "High-frequency simultaneous client clicks could trigger double moves before the state updated across the network.",
        solution:
          "Enforced strict server-side turn locks and client move blocking until the server acknowledges and broadcasts state diffs.",
      },
    ],
    highlights: [
      "Sub-50ms WebSocket multiplayer latency using Socket.io",
      "Authoritative server state validation preventing game desynchronization",
      "Solo AI mode powered by Minimax algorithmic decision engine",
      "Active live production deployment at game-galaxy-hub.vercel.app",
    ],
  },
];
