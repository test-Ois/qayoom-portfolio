# Qayoom Akhtar - Professional Portfolio Website

Welcome to my portfolio! This is a modern, responsive, and visually interactive single-page application showcasing my projects, skills, and background as a Full Stack Developer & AI Enthusiast. It features a space-themed stellar background, custom dark/light theme options, categorized metrics progress bars, and a direct EmailJS-connected contact channel.

---

## 🚀 Featured Projects

### 1. InboxIQ AI – AI-Powered Email Intelligence Platform

#### Overview
InboxIQ AI is a production-ready email productivity platform that automates inbox organization. By leveraging LLM integration, it reads, analyzes, and highlights critical emails, providing the user with actionable intelligence.

#### Features
- **AI Email Analysis**: Automatically parses email contents to rank priority and summarize key action items.
- **Categorization**: Groups messages dynamically based on context (Work, Personal, Newsletter, Social).
- **Spam & Fraud Protection**: Identifies phishing, spam indicators, and fraudulent content.
- **Scalable REST APIs**: Clean database schema management and swift CRUD routes.

#### Tech Stack
- **Frontend**: Next.js (React), Tailwind CSS
- **Backend**: NestJS, Node.js
- **Database**: PostgreSQL (Prisma ORM)
- **AI Integrations**: Gemini AI

#### Architecture Summary
Features a split frontend-backend design. The Next.js client interacts with a NestJS REST API, which handles authorization, talks to PostgreSQL via Prisma ORM for storage, and invokes Gemini AI API routes for text classification.

#### Links
- **GitHub Repository**: [inboxiq-ai](https://github.com/test-Ois/inboxiq-ai)
- **Live Demo**: [Live Link (Not Deployed)](#)

---

### 2. Game Galaxy Hub – Real-Time Multiplayer Gaming Platform

#### Overview
Game Galaxy Hub is a real-time multiplayer gaming hub supporting classic board games. Players can form rooms, invite friends, and play matches with immediate state synchronization.

#### Features
- **Real-Time Board Games**: Multiplayer matches for Tic-Tac-Toe and Ludo.
- **Room Management**: Generate lobby invite codes, join lobbies, and track online match status.
- **Live In-game Chat**: Chat with lobby players instantly using socket connection paths.
- **AI Opponents**: Supports standalone singleplayer matching against computer bots.

#### Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, Socket.io
- **WebSockets**: Socket.io-client

#### Architecture Summary
Utilizes a WebSocket-focused architecture. The client maintains an active Socket.io connection to a gaming server, which serializes room lists, handles match states, syncs moves, and dispatches chat events with low-latency delivery.

#### Links
- **GitHub Repository**: [game-galaxy-hub](https://github.com/test-Ois/game-galaxy-hub)
- **Live Demo**: [Live Link (Not Deployed)](#)

---

## 🛠️ Portfolio Features

- **Dynamic Theme Toggling**: Seamless light/dark modes backed by local storage persistence.
- **Space Effect Starfield**: High-performance animated stars and falling meteors (accelerated via GPU properties).
- **Categorized Skills Graph**: Filters metrics between Front-End, Back-End, and Development Tools.
- **Interactive Contact Form**: Direct form submission utilizing EmailJS with validation checks and toasts.
- **Responsive Layout**: Designed for optimal scaling on mobile, tablet, and desktop display screens.

---

## 💻 Tech Stack

- **Framework**: React v18 (Vite build bundler)
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Email Delivery**: EmailJS
- **Toast Engine**: Radix UI Toast
- **Icons**: Lucide React & React Icons

---

## ⚙️ Installation & Setup

### Prerequisites
Make sure you have Node.js (version 18 or above) installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/test-Ois/portfolio-web.git
cd portfolio-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the project folder and configure your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

## 运行 Locally (Run Locally)

Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

---

## 📦 Production Build & Deployment

To generate optimized static build files:
```bash
npm run build
```
The output assets will be created in the `dist` directory. You can preview the production bundle locally:
```bash
npm run preview
```

### Deployment Configuration
This portfolio can be hosted on static providers such as Vercel, Netlify, or GitHub Pages. Simply configure the build command to `npm run build` and the output directory to `dist`.

---

## 📬 Contact Information

- **Name**: Qayoom Akhtar
- **Location**: Mohali, Punjab, India
- **Email**: [qayoomakhtar72@gmail.com](mailto:qayoomakhtar72@gmail.com)
- **Phone**: +91 9798413263
- **LinkedIn**: [Qayoom Akhtar](https://www.linkedin.com/in/qayoom-akhtar)
- **GitHub**: [test-Ois](https://github.com/test-Ois)
