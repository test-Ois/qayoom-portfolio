// src/data/projectsData.js
// Authoritative case-study data for Qayoom Akhtar's featured portfolio projects.

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "InboxIQ AI",
    subtitle: "AI-Powered Email Intelligence Platform",
    category: "AI & Full-Stack",
    status: "Completed",
    isOngoing: false,
    image: "/projects/inboxAI.png",
    accent: "#00C2FF",
    githubUrl: "https://github.com/test-Ois/InboxIQ-AI",
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
    id: 2,
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
    id: 3,
    title: "Game Galaxy Hub",
    subtitle: "Real-Time Multiplayer Gaming Platform",
    category: "Full-Stack & WebSockets",
    status: "Completed",
    isOngoing: false,
    image: "/projects/gameGalaxy.png",
    accent: "#00C2FF",
    githubUrl: "https://github.com/test-Ois/Game-Galaxy-Hub",
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
