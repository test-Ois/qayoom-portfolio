// src/components/HeroSection.jsx
import { ArrowDown, ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, revealItemVariants } from "./Reveal";
import {
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const techStack = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "GitHub", Icon: SiGithub },
];

const highlights = [
  { value: "4", label: "Production Case Studies" },
  { value: "Intern", label: "Infotech Service (Full Stack)" },
  { value: "B.Tech CSE", label: "Chandigarh University ('26)" },
];

export const HeroSection = () => {
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between items-center px-4 sm:px-6 pt-28 sm:pt-32 pb-10 sm:pb-12"
    >
      <div className="w-full flex-1 flex flex-col items-center justify-center">
        <Reveal
          triggerOnLoad
          staggerChildren={0.08}
          className="container mx-auto flex flex-col items-center justify-center text-center max-w-4xl space-y-7 sm:space-y-8"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium"
              style={{
                border: "1px solid var(--border-card)",
                background: "var(--bg-card)",
                color: "var(--text-muted)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for engineering roles</span>
            </div>
          </motion.div>

          {/* Headline + Lead */}
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]"
              style={{ color: "var(--text-heading)" }}
            >
              Hi, I&apos;m{" "}
              <span
                style={{
                  background: "var(--grad-heading)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Qayoom Akhtar
              </span>
              .
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight"
              style={{ color: "var(--text-body)" }}
            >
              Full Stack Engineer building web applications and practical AI systems.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed pt-2"
              style={{ color: "var(--text-muted)" }}
            >
              I build scalable frontend and backend architectures with TypeScript, React, Next.js, and Node.js.
              Experienced in type-safe database schemas, real-time communication, and grounded LLM integrations.
            </motion.p>
          </div>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--color-purple)",
                boxShadow: "0 2px 10px rgba(124, 58, 237, 0.25)",
              }}
            >
              View Case Studies <ArrowRight size={15} />
            </a>

            <a
              href="https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: "1px solid var(--border-card)",
                background: "var(--bg-card)",
                color: "var(--text-heading)",
              }}
            >
              <FileText size={15} /> Download CV
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://github.com/test-Ois"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-lg transition-colors duration-200"
                style={{
                  border: "1px solid var(--border-card)",
                  background: "var(--bg-card)",
                  color: "var(--text-muted)",
                }}
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/qayoom-akhtar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-lg transition-colors duration-200"
                style={{
                  border: "1px solid var(--border-card)",
                  background: "var(--bg-card)",
                  color: "var(--text-muted)",
                }}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>

          {/* Highlights / Credentials */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-4"
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="p-3.5 rounded-lg text-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                }}
              >
                <div
                  className="text-base sm:text-lg font-bold font-mono tracking-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  {h.value}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {h.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="w-full pt-4">
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-body)",
                  }}
                >
                  <tech.Icon size={14} className="opacity-80" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="mt-8 flex flex-col items-center gap-1.5 select-none">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 hover:opacity-80"
          style={{
            border: "1px solid var(--border-card)",
            background: "var(--bg-card)",
            color: "var(--text-muted)",
          }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
};
