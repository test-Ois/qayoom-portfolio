// src/data/projectsData.js
// Technical case studies for Qayoom Akhtar's featured software projects.

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "InboxIQ AI",
    subtitle: "Email Intelligence & Triage Platform",
    category: "Full-Stack AI",
    status: "Completed",
    isOngoing: false,
    image: "/projects/inboxAI.png",
    accent: "#00C2FF",
    githubUrl: "https://github.com/test-Ois/InboxIQ-AI",
    demoUrl: null,
    summary:
      "A full-stack email platform that extracts action items, classifies message urgency, and flags suspicious sender domains using Google Gemini, Next.js, and a NestJS/PostgreSQL backend.",
    overview: {
      about:
        "InboxIQ AI parses incoming email messages into structured summaries, identifying action items, deadlines, and urgency levels before the reader opens the full thread.",
      problem:
        "Long email threads bury actionable requests under quoted signatures and status chatter. Readers spend significant time identifying who owes what.",
      solution:
        "Built a text normalization and parsing pipeline that cleans thread content, extracts key dates and tasks with Google Gemini, and indexes records in PostgreSQL via Prisma ORM.",
      value:
        "Extracts concrete to-do items from long conversation threads and highlights suspicious sender domains before users click links.",
    },
    keyFeatures: [
      {
        title: "Thread Parsing & Task Extraction",
        description:
          "Normalizes raw message content to extract assignees, action items, and stated deadlines into structured cards.",
        icon: "Sparkles",
      },
      {
        title: "Priority Classification",
        description:
          "Categorizes incoming messages into Action Required, Newsletters, and Transactional buckets.",
        icon: "Layers",
      },
      {
        title: "Suspicious Domain Flagging",
        description:
          "Cross-references sender headers, mismatched domains, and body links to highlight potential phishing attempts.",
        icon: "ShieldCheck",
      },
      {
        title: "Modular NestJS Backend",
        description:
          "Separated controllers, validation pipes, and Prisma repositories to keep data access isolated and testable.",
        icon: "Cpu",
      },
      {
        title: "Triage Metrics Dashboard",
        description:
          "Tracks volume, pending action items, and response turnarounds in a responsive Next.js view.",
        icon: "Database",
      },
      {
        title: "Client-Side Search & Filtering",
        description:
          "Provides instantaneous keyword filtering across parsed email metadata without server re-fetching.",
        icon: "Zap",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["NestJS", "Node.js", "TypeScript", "RESTful APIs", "Class Validator"],
      aiMl: ["Google Gemini AI API", "Prompt Engineering", "Structured Output Parsing"],
      database: ["PostgreSQL", "Prisma ORM", "Relational Indexes"],
      authSecurity: ["JWT Authentication", "CORS Protection", "HTML Sanitization"],
      deployment: ["Docker", "Vercel", "Git & GitHub"],
    },
    architecture: {
      client:
        "Next.js App Router client with a split-pane inbox, client-side category filters, and modal views for parsed thread summaries.",
      backend:
        "NestJS REST API organized into feature modules with decoupled services, DTO validation pipes, and Prisma repositories.",
      dataAndAi:
        "PostgreSQL database linking Users, Threads, Messages, and ExtractedTasks. Gemini calls run asynchronously with cached results for repeated thread queries.",
      realtimeOrSecurity:
        "Bearer token validation on protected endpoints, DOMPurify sanitization to block malicious HTML payloads, and request rate limiting.",
    },
    challenges: [
      {
        title: "Context Window Limits on Large Email Chains",
        challenge:
          "Lengthy back-and-forth threads with repetitive quoted headers quickly exhausted model token budgets.",
        solution:
          "Implemented a regex pre-processing step that strips quoted historical text and signature blocks before sending the payload to Gemini.",
      },
      {
        title: "Schema Migrations Under Changing Requirements",
        challenge:
          "Adding task extraction fields required schema updates without breaking existing message relationships.",
        solution:
          "Managed schema changes through versioned Prisma migrations with automated rollback scripts and test seeders.",
      },
    ],
    highlights: [
      "NestJS + Prisma + PostgreSQL backend with type-safe DTOs",
      "Automated action item and deadline extraction via Gemini AI",
      "Sanitized email rendering pipeline to protect against XSS",
      "End-to-end TypeScript coverage from client components to database queries",
    ],
  },
  {
    id: 2,
    title: "AI Career Agent",
    subtitle: "Resume Parsing & Application Tracking System",
    category: "Full-Stack AI",
    status: "Active Project",
    isOngoing: true,
    image: "/projects/inboxAI.png",
    accent: "#8254EE",
    githubUrl: "https://github.com/test-Ois/ai-career-agent",
    demoUrl: null,
    summary:
      "A career platform that parses resumes into structured JSON, evaluates keyword alignment against job descriptions, and tracks applications in a unified Kanban pipeline.",
    overview: {
      about:
        "AI Career Agent combines multi-format resume parsing, ATS keyword comparison, tailored bullet point generation, and application status tracking in one interface.",
      problem:
        "Applicants submit generic resumes that fail automated ATS keyword checks, while juggling spreadsheets to track dozens of job applications.",
      solution:
        "Built a multi-model processing pipeline using specialized LLMs: GLM for structured entity extraction, NVIDIA endpoints for text tailoring, and Gemini for conversational interview prep.",
      value:
        "Centralizes job applications in a Kanban board while pinpointing missing technical skills and quantifying resume keyword alignment.",
    },
    keyFeatures: [
      {
        title: "Resume Parsing & Keyword Scoring",
        description:
          "Extracts work history, skills, and education into structured JSON and compares content against job requirements.",
        icon: "ShieldCheck",
      },
      {
        title: "Bullet Point Refinement",
        description:
          "Generates targeted, action-oriented bullet points tailored to specific job postings.",
        icon: "Sparkles",
      },
      {
        title: "Job Description Analysis",
        description:
          "Identifies key technical requirements from job listings and generates draft cover letters aligned to those criteria.",
        icon: "Workflow",
      },
      {
        title: "Interactive Interview Coach",
        description:
          "Conversational assistant powered by Gemini for behavioral practice and technical question preparation.",
        icon: "Cpu",
      },
      {
        title: "Kanban Application Tracker",
        description:
          "Organizes jobs by stage (Applied, Screening, Interview, Offer, Rejected) with follow-up reminders.",
        icon: "Layers",
      },
      {
        title: "Google OAuth Authentication",
        description:
          "Single sign-on via Google OAuth with persistent user sessions and isolated account storage.",
        icon: "Database",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "TypeScript", "Prisma ORM", "RESTful APIs"],
      aiMl: [
        "NVIDIA API (Resume Tailoring)",
        "GLM (Structured Extraction)",
        "Google Gemini (Interview Prep)",
        "Prompt Engineering",
      ],
      database: ["PostgreSQL (Neon)", "Prisma ORM", "JSONB Schemas"],
      authSecurity: ["Google OAuth", "JWT Token Handling", "CORS Middleware"],
      deployment: ["Vercel", "Git & GitHub"],
    },
    architecture: {
      client:
        "Next.js App Router frontend with drag-and-drop Kanban tracking, markdown editors, and live scorecards.",
      backend:
        "Express.js backend structured around `/api/v1` routes with separated controllers, service layers, and Prisma query handlers.",
      dataAndAi:
        "PostgreSQL on Neon with relational tables for Users, Resumes, TargetJobs, and Applications, plus JSONB columns for varied resume structures.",
      realtimeOrSecurity:
        "OAuth 2.0 session tokens, payload size restrictions for document uploads, and input sanitization.",
    },
    challenges: [
      {
        title: "Latency and Failure Isolation in Multi-Model AI Routing",
        challenge:
          "Relying on a single AI endpoint caused slow responses for quick queries and formatted-output errors on complex extractions.",
        solution:
          "Delegated specific tasks to specialized models: fast chat to Gemini, structured JSON extraction to GLM, and resume tailoring to NVIDIA endpoints.",
      },
      {
        title: "Variable Resume Formats",
        challenge:
          "Resumes feature unpredictable sections, custom headers, and differing date formats.",
        solution:
          "Designed a normalized PostgreSQL schema with JSONB fallbacks to store custom sections without database migration bottlenecks.",
      },
    ],
    highlights: [
      "Task-specific AI routing across multiple model providers",
      "PostgreSQL on Neon with Prisma ORM data modeling",
      "Full application lifecycle tracking with an interactive Kanban interface",
      "Google OAuth authentication and secure user data isolation",
    ],
  },
  {
    id: 3,
    title: "Game Galaxy Hub",
    subtitle: "Real-Time Multiplayer Gaming Platform",
    category: "Full-Stack WebSockets",
    status: "Completed",
    isOngoing: false,
    image: "/projects/gameGalaxy.png",
    accent: "#00C2FF",
    githubUrl: "https://github.com/test-Ois/Game-Galaxy-Hub",
    demoUrl: "https://game-galaxy-hub.vercel.app/",
    summary:
      "A real-time multiplayer gaming hub for Tic-Tac-Toe and Ludo built with Socket.IO, Next.js, and an authoritative server-side state machine with an algorithmic AI fallback.",
    overview: {
      about:
        "Game Galaxy Hub lets players create private rooms, invite peers with 6-character room codes, play multiplayer board games with immediate state synchronization, or practice against an algorithmic bot.",
      problem:
        "Browser-based games that rely on HTTP polling suffer from high latency, out-of-order move execution, and desynchronized board states.",
      solution:
        "Built a bidirectional WebSocket architecture with Socket.IO where game rules and turn states are validated strictly on the server before broadcasting updates to clients.",
      value:
        "Eliminates out-of-order moves and game state conflicts with sub-50ms event delivery and automatic reconnection handling.",
    },
    keyFeatures: [
      {
        title: "Socket.IO Room Management",
        description:
          "Generates short room codes for matchmaking, managing player join/leave cycles and active lobby state.",
        icon: "Zap",
      },
      {
        title: "Server-Authoritative State Machine",
        description:
          "Validates moves and evaluates win conditions on the backend, preventing invalid or out-of-turn actions.",
        icon: "ShieldCheck",
      },
      {
        title: "In-Game Chat",
        description:
          "Bidirectional messaging within active rooms with delivery receipts and room event logging.",
        icon: "Sparkles",
      },
      {
        title: "Minimax Bot Opponent",
        description:
          "Provides a solo singleplayer mode powered by a Minimax decision algorithm for offline practice.",
        icon: "Cpu",
      },
      {
        title: "Turn Clocks & Move Feedback",
        description:
          "Displays active turn timers, board highlight transitions, and audio cues for game events.",
        icon: "Layers",
      },
      {
        title: "Live Production Deployment",
        description:
          "Hosted on Vercel with optimized WebSocket transport negotiation and HTTP fallback.",
        icon: "Database",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Zustand"],
      backend: ["Node.js", "Express.js", "Socket.IO", "WebSockets"],
      aiMl: ["Minimax Algorithm", "Game State Decision Trees"],
      database: ["In-Memory Room State Map", "Session Store"],
      authSecurity: ["Event Payload Validation", "Room Code Sanitization"],
      deployment: ["Vercel", "Git & GitHub"],
    },
    architecture: {
      client:
        "TypeScript Next.js application managing socket event listeners, local board rendering, and reactive turn indicators.",
      backend:
        "Socket.IO event gateway running on Node.js/Express, managing rooms, player heartbeats, and namespace broadcasts.",
      dataAndAi:
        "In-memory state map storing active room matrices, turn counters, and player mappings with O(1) lookups.",
      realtimeOrSecurity:
        "WebSocket transport with automatic polling fallback, payload validation on every event, and reconnection tokens.",
    },
    challenges: [
      {
        title: "Handling Network Dropouts",
        challenge:
          "Brief mobile network interruptions originally dropped players and destroyed active match sessions.",
        solution:
          "Built a 30-second reconnection window backed by session tokens, allowing players to reconnect and restore exact board state.",
      },
      {
        title: "Concurrent Move Race Conditions",
        challenge:
          "Rapid clicks from both players could trigger simultaneous move attempts before the UI updated.",
        solution:
          "Enforced server-side turn locks that discard subsequent inputs until the first move is validated and acknowledged.",
      },
    ],
    highlights: [
      "Sub-50ms WebSocket multiplayer latency with Socket.IO",
      "Server-authoritative state logic preventing cheated moves",
      "Minimax algorithm for solo AI gameplay",
      "Live production deployment accessible at game-galaxy-hub.vercel.app",
    ],
  },
  {
    id: 4,
    title: "Qyro",
    subtitle: "Full-Stack E-Commerce Application",
    category: "Full-Stack MERN",
    status: "Completed",
    isOngoing: false,
    image: "/projects/Qyro.png",
    accent: "#8254EE",
    githubUrl: "https://github.com/test-Ois/qyro-ecommerce",
    demoUrl: null,
    summary:
      "A MERN-stack e-commerce web application featuring compound text indexing for product discovery, synchronized multi-tab shopping cart state, and JWT-authenticated order tracking.",
    overview: {
      about:
        "Qyro is an online shopping platform with category filtering, real-time cart state management, and user order history tracking.",
      problem:
        "Many simple e-commerce apps suffer from sluggish keyword searching and lost cart updates when users open multiple tabs.",
      solution:
        "Designed a MERN architecture featuring MongoDB compound text indexes for search, browser storage synchronization events for multi-tab cart consistency, and JWT authentication.",
      value:
        "Provides fast product discovery, reliable cart state persistence across tabs, and authenticated customer checkout workflows.",
    },
    keyFeatures: [
      {
        title: "Product Search & Faceted Filtering",
        description:
          "Multi-parameter search filtering by categories, price ranges, and text matches using MongoDB text indexes.",
        icon: "Sparkles",
      },
      {
        title: "Cross-Tab Cart Synchronization",
        description:
          "Maintains synchronized cart quantities and totals across multiple open browser tabs via storage events.",
        icon: "Layers",
      },
      {
        title: "Authentication & Order History",
        description:
          "JWT-based session authentication with bcrypt password hashing and persistent customer order records.",
        icon: "ShieldCheck",
      },
      {
        title: "Document Schema with Mongoose",
        description:
          "Indexed schemas for products, user profiles, inventory counts, and customer orders.",
        icon: "Database",
      },
      {
        title: "Responsive Catalog Layout",
        description:
          "Grid views, responsive mobile drawers, and quick-view modals built with Tailwind CSS.",
        icon: "Cpu",
      },
      {
        title: "Server-Side Validation",
        description:
          "Validates cart prices and inventory on the server before completing order creation.",
        icon: "Zap",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React.js", "Tailwind CSS", "Lucide React", "Framer Motion"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "MVC Pattern"],
      aiMl: ["Search Query Expansion", "Recommendation Heuristics"],
      database: ["MongoDB", "Mongoose ODM", "Compound Text Indexes"],
      authSecurity: ["JWT Authentication", "bcryptjs", "CORS Middleware"],
      deployment: ["Vercel", "Render", "Git & GitHub"],
    },
    architecture: {
      client:
        "Next.js client interface with debounced search inputs, global cart context, and responsive product grids.",
      backend:
        "Express.js REST API with controller-service architecture, authentication middleware, and input validation.",
      dataAndAi:
        "MongoDB database with compound indexes on product titles, categories, and tags for rapid querying.",
      realtimeOrSecurity:
        "HTTP-only session cookies, bcrypt password salting, and parameterized queries to prevent injection attacks.",
    },
    challenges: [
      {
        title: "Cart State Desynchronization Across Tabs",
        challenge:
          "Modifying cart items in one tab left other open tabs displaying stale quantities and pricing totals.",
        solution:
          "Connected client state to `window.storage` event listeners, automatically reconciling cart data across all active tabs.",
      },
      {
        title: "Search Query Latency",
        challenge:
          "Unindexed regular expression queries degraded response times as sample inventory expanded.",
        solution:
          "Replaced regex matching with compound MongoDB text indexes and optimized projection fields, keeping query times below 40ms.",
      },
    ],
    highlights: [
      "Production-ready MERN e-commerce architecture",
      "Compound MongoDB text indexes for sub-40ms catalog search",
      "Resilient cross-tab cart state synchronization",
      "Strict server-side validation on prices and inventory during checkout",
    ],
  },
];
