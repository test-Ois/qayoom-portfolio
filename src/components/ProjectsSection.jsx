// src/components/ProjectsSection.jsx
import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Reveal, revealItemVariants } from "./Reveal";

const projects = [
  {
    id: 1,
    title: "InboxIQ AI – AI-Powered Email Intelligence Platform",
    description: "A production-grade email productivity platform. Features AI analysis, message prioritization, semantic email categorization, intelligent spam/fraud detection using Gemini AI, and scalable REST APIs with PostgreSQL and Prisma.",
    image: "/projects/inboxAI.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Gemini AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/test-Ois/inboxiq-ai",
  },
  {
    id: 2,
    title: "Qyro – E-Commerce Platform",
    description: "A modern AI-powered e-commerce platform that enhances the shopping experience with intelligent product recommendations, AI-assisted search, secure authentication, responsive UI, and a scalable full-stack architecture built using the MERN ecosystem.",
    image: "/projects/Qyro.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js", "Gemini AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/test-Ois/qyro-ecommerce",
  },

  {
    id: 3,
    title: "Game Galaxy Hub – Real-Time Multiplayer Gaming Platform",
    description: "A real-time multiplayer gaming hub for Tic-Tac-Toe and Ludo. Implements low-latency WebSocket rooms, live synchronization, chat connectivity using Socket.io, and fallback AI logic.",
    image: "/projects/gameGalaxy.png",
    tags: ["Next.js", "TypeScript", "Socket.io", "Tailwind CSS"],
    demoUrl: "https://game-galaxy-hub.vercel.app/",
    githubUrl: "https://github.com/test-Ois/game-galaxy-hub",
  },
];

export const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
            Featured <span className="text-primary"> Projects </span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </Reveal>

        <Reveal
          staggerChildren={0.12}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const CardContent = (
              <div className="group bg-[#0f1219]/40 border border-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl h-full flex flex-col transition-all duration-500 hover:border-[#8b5cf6]/30 hover:shadow-[0_4px_24px_rgba(139,92,246,0.1)]">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1219]/20 to-transparent pointer-events-none" />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium border border-white/5 rounded-full bg-white/[0.02] text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-left tracking-tight text-foreground/90 font-sans">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 text-left font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/[0.02] border border-white/5 text-zinc-300 backdrop-blur-sm hover:text-[#8b5cf6] hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 hover:scale-110 active:scale-95 transition-all duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/[0.02] border border-white/5 text-zinc-300 backdrop-blur-sm hover:text-[#8b5cf6] hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 hover:scale-110 active:scale-95 transition-all duration-300"
                        title="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div key={project.id} variants={itemVariants} className="h-full">
                {isMobile ? (
                  CardContent
                ) : (
                  <Tilt
                    options={{ max: 10, scale: 1.01, speed: 300 }}
                    className="h-full"
                  >
                    {CardContent}
                  </Tilt>
                )}
              </motion.div>
            );
          })}
        </Reveal>

        <Reveal delay={0.2} className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/test-Ois"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
