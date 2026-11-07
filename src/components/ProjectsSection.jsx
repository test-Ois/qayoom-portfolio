// src/components/ProjectsSection.jsx
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Github } from "lucide-react";
import { useReducedMotion, motion, LayoutGroup } from "framer-motion";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./projects/ProjectCard";
import { PROJECTS_DATA } from "../data/projectsData";

export const ProjectsSection = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const isReduced = useReducedMotion();
  const sectionRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => () => window.clearTimeout(scrollTimeoutRef.current), []);

  const handleToggleProject = (id) => {
    window.clearTimeout(scrollTimeoutRef.current);
    const navbarHeight = 85;

    if (expandedProjectId === id) {
      const targetCardEl = document.getElementById(`project-${id}`);
      let targetScrollY = null;

      if (targetCardEl) {
        const cardRect = targetCardEl.getBoundingClientRect();
        targetScrollY = cardRect.top + window.scrollY - navbarHeight;
      } else if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        targetScrollY = sectionRect.top + window.scrollY - navbarHeight;
      }

      setExpandedProjectId(null);

      if (targetScrollY !== null) {
        window.scrollTo({
          top: Math.max(0, targetScrollY),
          behavior: isReduced ? "auto" : "smooth",
        });

        scrollTimeoutRef.current = window.setTimeout(() => {
          const postEl = document.getElementById(`project-${id}`);
          if (postEl) {
            const postRect = postEl.getBoundingClientRect();
            const actualY = postRect.top + window.scrollY - navbarHeight;
            if (Math.abs(window.scrollY - actualY) > 60) {
              window.scrollTo({
                top: Math.max(0, actualY),
                behavior: isReduced ? "auto" : "smooth",
              });
            }
          }
        }, 360);
      }
    } else {
      setExpandedProjectId(id);

      scrollTimeoutRef.current = window.setTimeout(() => {
        const targetCardEl = document.getElementById(`project-${id}`);
        if (targetCardEl) {
          const cardRect = targetCardEl.getBoundingClientRect();
          const targetY = cardRect.top + window.scrollY - navbarHeight;
          window.scrollTo({
            top: Math.max(0, targetY),
            behavior: isReduced ? "auto" : "smooth",
          });
        }
      }, 120);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <div className="flex justify-center mb-3">
            <span className="section-label">Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight" style={{ color: "var(--text-heading)" }}>
            Featured Projects
          </h2>
          <p className="text-center mb-9 sm:mb-11 max-w-xl mx-auto leading-relaxed text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
            Technical case studies covering system design, database schemas, and implementation challenges.
            Click any card to read the complete breakdown.
          </p>
        </Reveal>

        <LayoutGroup>
          <motion.div
            layout={!isReduced}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start"
          >
            {PROJECTS_DATA.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedProjectId === project.id}
                onToggle={() => handleToggleProject(project.id)}
                isMobile={isMobile}
                isReduced={isReduced}
              />
            ))}
          </motion.div>
        </LayoutGroup>

        <Reveal delay={0.15} className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid var(--border-card)",
              background: "var(--bg-card)",
              color: "var(--text-heading)",
            }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/test-Ois"
          >
            <Github size={16} /> View More on GitHub <ArrowRight size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
