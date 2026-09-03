// src/components/AboutSection.jsx
import { Briefcase, Code, User } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    Icon: Code,
    title: "Full Stack AI Development",
    body: "Building production AI-integrated web applications with React, Next.js, Node.js, Express, and modern DBs.",
  },
  {
    Icon: User,
    title: "RAG & LLM Integration",
    body: "Developing RAG pipelines using Qdrant vector database, multi-provider LLM routing (Groq, NVIDIA, Cerebras, Gemini, OpenAI), and SSE streaming.",
  },
  {
    Icon: Briefcase,
    title: "System Design & Architecture",
    body: "Designing scalable REST APIs, secure JWT/Firebase authentication, and production-ready system architectures.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--orb-purple), transparent 70%)", filter: "blur(60px)", transform: "translateY(-50%)" }}
      />

      <Reveal className="container mx-auto max-w-5xl">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="section-label">About Me</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center tracking-tight" style={{ color: "var(--text-heading)" }}>
          Who I <span style={{ background: "var(--grad-heading)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Am</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left text */}
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-bold tracking-tight" style={{ color: "#f5f5f7" }}>
              Passionate Full Stack AI Engineer
            </h3>

            <p className="leading-relaxed" style={{ color: "var(--text-body)" }}>
              Full Stack AI Engineer with{" "}
              <span style={{ color: "var(--text-heading)" }}>6+ months of experience</span> building production
              AI-integrated web applications combining React/Next.js frontends with Node.js/Express backends,
              multi-provider LLM integration, and RAG pipelines.
            </p>

            <p className="leading-relaxed" style={{ color: "var(--text-body)" }}>
              Experienced in designing{" "}
              <span style={{ color: "var(--color-purple)", fontWeight: 500 }}>real-time streaming interfaces (SSE)</span>,{" "}
              <span style={{ color: "var(--color-blue)", fontWeight: 500 }}>Qdrant vector databases</span>, and secure REST APIs
              while pursuing B.Tech in Computer Science Engineering at Chandigarh University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
                target="_blank" rel="noopener noreferrer"
                className="ghost-button text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 gap-5">
            {cards.map(({ Icon, title, body }, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover p-6 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(var(--purple-rgb), 0.12)", border: "1px solid rgba(var(--purple-rgb), 0.2)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--color-purple)" }} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-base mb-1" style={{ color: "var(--text-heading)" }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
