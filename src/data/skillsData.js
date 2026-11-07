// src/data/skillsData.js
// Technical skills dataset organized by engineering discipline.

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Systems" },
  { id: "database", label: "Databases & Storage" },
  { id: "ai-llm", label: "AI & Retrieval" },
  { id: "tools", label: "Tooling & Platform" },
];

export const SKILLS_DATA = [
  // ── FRONTEND ──
  {
    name: "React.js",
    category: "frontend",
    context: "Custom hooks, state management, component lifecycles",
    icon: "Atom",
  },
  {
    name: "Next.js",
    category: "frontend",
    context: "App Router, server/client boundaries, route handlers",
    icon: "Globe",
  },
  {
    name: "TypeScript",
    category: "frontend",
    context: "End-to-end type safety, generics, schema inference",
    icon: "FileCode2",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    context: "Async programming, event loops, DOM performance",
    icon: "FileCode",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    context: "Utility-first responsive layouts, custom design tokens",
    icon: "Palette",
  },
  {
    name: "Framer Motion",
    category: "frontend",
    context: "Accessible layout transitions, scroll triggers",
    icon: "Layout",
  },

  // ── BACKEND & SYSTEMS ──
  {
    name: "Node.js",
    category: "backend",
    context: "Event-driven runtime, streams, server architecture",
    icon: "Server",
  },
  {
    name: "Express.js",
    category: "backend",
    context: "REST API routing, middleware pipelines, error handlers",
    icon: "Workflow",
  },
  {
    name: "NestJS",
    category: "backend",
    context: "Modular controllers, dependency injection, DTO pipes",
    icon: "Layers",
  },
  {
    name: "Socket.IO",
    category: "backend",
    context: "Real-time bi-directional events, room namespaces",
    icon: "Radio",
  },
  {
    name: "Server-Sent Events (SSE)",
    category: "backend",
    context: "One-way token streaming for LLM text responses",
    icon: "Activity",
  },
  {
    name: "JWT & OAuth",
    category: "backend",
    context: "Token validation, refresh rotations, Google OAuth",
    icon: "ShieldCheck",
  },

  // ── DATABASES & STORAGE ──
  {
    name: "PostgreSQL",
    category: "database",
    context: "Relational schema design, foreign keys, indexing",
    icon: "Database",
  },
  {
    name: "Prisma ORM",
    category: "database",
    context: "Type-safe query building, declarative migrations",
    icon: "Layers",
  },
  {
    name: "MongoDB",
    category: "database",
    context: "Document modeling, compound text search indexing",
    icon: "Boxes",
  },
  {
    name: "Qdrant",
    category: "database",
    context: "Vector collection management, cosine similarity lookup",
    icon: "Compass",
  },
  {
    name: "Redis",
    category: "database",
    context: "Session caching, rate limiting counters",
    icon: "Zap",
  },

  // ── AI & RETRIEVAL ──
  {
    name: "LLM API Integration",
    category: "ai-llm",
    context: "Gemini, Groq, NVIDIA NIM, and OpenAI API orchestration",
    icon: "Bot",
  },
  {
    name: "RAG Pipelines",
    category: "ai-llm",
    context: "Document chunking, dense vector retrieval, context injection",
    icon: "BrainCircuit",
  },
  {
    name: "Vector Embeddings",
    category: "ai-llm",
    context: "Dense text embeddings for semantic similarity search",
    icon: "Binary",
  },
  {
    name: "Multi-Model Routing",
    category: "ai-llm",
    context: "Task-specialized model delegation with fallback handling",
    icon: "Network",
  },
  {
    name: "Prompt Engineering",
    category: "ai-llm",
    context: "Few-shot templates, structured JSON outputs, guardrails",
    icon: "Terminal",
  },

  // ── TOOLS & PLATFORMS ──
  {
    name: "Git & GitHub",
    category: "tools",
    context: "Version control, branching workflows, pull requests",
    icon: "GitBranch",
  },
  {
    name: "Docker",
    category: "tools",
    context: "Containerized environments, multi-stage Dockerfiles",
    icon: "Box",
  },
  {
    name: "Postman",
    category: "tools",
    context: "API contract testing, environment variables, mocking",
    icon: "Send",
  },
  {
    name: "Vercel",
    category: "tools",
    context: "Edge & serverless deployments, environment configs",
    icon: "Cloud",
  },
];
