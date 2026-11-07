// src/components/AboutSection.jsx
import { Code2, Database, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const focusAreas = [
  {
    Icon: Code2,
    title: "Full-Stack Web Development",
    body: "Building responsive, component-driven client applications with Next.js, React, and TypeScript. Connecting frontends to structured Node.js/Express APIs with strict schema validation.",
  },
  {
    Icon: Sparkles,
    title: "LLM Integration & Retrieval",
    body: "Implementing RAG pipelines, chunking strategies, vector search with Qdrant, and real-time Server-Sent Events (SSE) streaming for fast generative responses.",
  },
  {
    Icon: Database,
    title: "Data Modeling & Architecture",
    body: "Designing normalized schemas with PostgreSQL and Prisma ORM, indexing document stores in MongoDB, and implementing secure JWT and OAuth session handling.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <Reveal className="container mx-auto max-w-5xl">
        <div className="flex justify-center mb-3">
          <span className="section-label">Background</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center tracking-tight"
          style={{ color: "var(--text-heading)" }}
        >
          Engineering Approach &amp; Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Background prose */}
          <div className="md:col-span-6 space-y-5 text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: "var(--text-heading)" }}>
              Building software that solves practical problems.
            </h3>

            <p className="leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-body)" }}>
              I am a Full Stack Engineer pursuing my B.Tech in Computer Science at Chandigarh University
              (2022–2026). My work centers on building production web applications that combine clean
              client interfaces with reliable backend services and practical AI integrations.
            </p>

            <p className="leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-body)" }}>
              During my internship at Infotech Service, I built reusable React components and integrated RESTful
              APIs, reducing server response times by 15–20% through targeted query and state optimizations.
              I treat AI as an engineering layer rather than a gimmick: evaluating prompts, grounding responses
              in vector stores, and handling streaming data gracefully.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{
                  background: "var(--color-purple)",
                  color: "#ffffff",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{
                  border: "1px solid var(--border-card)",
                  background: "var(--bg-card)",
                  color: "var(--text-heading)",
                }}
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Technical focus cards */}
          <div className="md:col-span-6 grid grid-cols-1 gap-4">
            {focusAreas.map(({ Icon, title, body }, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl text-left transition-all duration-200"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: "var(--bg-pill)",
                      color: "var(--color-purple)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: "var(--text-heading)" }}>
                    {title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
