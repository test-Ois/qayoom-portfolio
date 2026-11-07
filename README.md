# Qayoom Akhtar - Software Engineer Portfolio

Personal developer portfolio showcasing full-stack applications, system architecture case studies, and engineering background.

Live deployment: [qayoom-portfolio.vercel.app](https://qayoom-portfolio.vercel.app/)

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend / APIs**: Node.js, Express, NestJS, RESTful APIs, Server-Sent Events (SSE), Socket.IO
- **Databases**: PostgreSQL, Prisma ORM, MongoDB, Qdrant Vector DB
- **Deployment**: Vercel Serverless Functions

---

## 🚀 Featured Projects

### 1. InboxIQ AI – Email Intelligence & Triage Platform
Full-stack platform that normalizes incoming email threads, extracts action items and deadlines using Google Gemini, classifies message urgency, and cross-references sender domains to flag potential phishing.
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: NestJS, PostgreSQL, Prisma ORM
- **Repository**: [InboxIQ-AI](https://github.com/test-Ois/InboxIQ-AI)

### 2. AI Career Agent – Resume Parsing & Application Tracking
Multi-model career management application that parses resumes into structured JSON, scores ATS keyword alignment, refines bullet points, and tracks job applications in a Kanban pipeline.
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express, PostgreSQL (Neon), Prisma ORM
- **Repository**: [ai-career-agent](https://github.com/test-Ois/ai-career-agent)

### 3. Game Galaxy Hub – Real-Time Multiplayer Gaming Platform
Real-time browser gaming platform for Tic-Tac-Toe and Ludo with server-authoritative move validation, sub-50ms WebSocket delivery via Socket.IO, and a Minimax AI fallback.
- **Frontend**: Next.js, TypeScript, Tailwind CSS, Zustand
- **Backend**: Node.js, Express, Socket.IO
- **Live Demo**: [game-galaxy-hub.vercel.app](https://game-galaxy-hub.vercel.app/)
- **Repository**: [Game-Galaxy-Hub](https://github.com/test-Ois/Game-Galaxy-Hub)

### 4. Qyro – Full-Stack E-Commerce Application
MERN-stack application featuring compound MongoDB text indexing for catalog search, cross-tab cart synchronization using browser storage events, and JWT-authenticated order tracking.
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Repository**: [qyro-ecommerce](https://github.com/test-Ois/qyro-ecommerce)

---

## 💻 Local Development

### Prerequisites
Node.js (v18+) and npm/pnpm.

```bash
# 1. Clone the repository
git clone https://github.com/test-Ois/portfolio-web.git
cd portfolio-web

# 2. Install dependencies
npm install

# 3. Environment configuration
cp .env.example .env
# Provide your VITE_EMAILJS_* keys in .env

# 4. Start local development server
npm run dev
```

### Production Build & Linting

```bash
npm run lint
npm run build
```

---

## 📄 License
MIT
