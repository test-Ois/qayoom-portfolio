// src/components/ProjectsSection.jsx
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useReducedMotion, motion, LayoutGroup } from "framer-motion";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./projects/ProjectCard";
import { PROJECTS_DATA } from "../data/projectsData";

export const ProjectsSection = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const isReduced = useReducedMotion();
  const sectionRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleToggleProject = (id) => {
    const navbarHeight = 85;

    if (expandedProjectId === id) {
      // ── USER IS COLLAPSING THE ACTIVE PROJECT ──
      // 1. Measure the card's anchor position before the height shrinks
      const targetCardEl = document.getElementById(`project-${id}`);
      let targetScrollY = null;

      if (targetCardEl) {
        const cardRect = targetCardEl.getBoundingClientRect();
        targetScrollY = cardRect.top + window.scrollY - navbarHeight;
      } else if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        targetScrollY = sectionRect.top + window.scrollY - navbarHeight;
      }

      // 2. Trigger collapse
      setExpandedProjectId(null);

      // 3. Prevent browser from clamping scroll to footer by immediately guiding viewport
      if (targetScrollY !== null) {
        window.scrollTo({
          top: Math.max(0, targetScrollY),
          behavior: isReduced ? "auto" : "smooth",
        });

        // 4. Post-collapse verification check after exit animation completes
        setTimeout(() => {
          const postEl = document.getElementById(`project-${id}`);
          if (postEl) {
            const postRect = postEl.getBoundingClientRect();
            const actualY = postRect.top + window.scrollY - navbarHeight;
            // If viewport drifted away from the card, gently re-center
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
      // ── USER IS EXPANDING PROJECT `id` ──
      setExpandedProjectId(id);

      setTimeout(() => {
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
    <section id="projects" ref={sectionRef} className="py-28 px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-72 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(130,84,238,0.1), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <Reveal>
          <div className="flex justify-center mb-4">
            <span className="section-label">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight text-white">
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8254EE, #00C2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects &amp; Case Studies
            </span>
          </h2>
          <p className="text-center mb-14 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base" style={{ color: "#82717B" }}>
            Explore my production-ready applications and ongoing platforms. Click{" "}
            <span className="text-purple-300 font-semibold">&ldquo;Explore Project&rdquo;</span> on any card below to expand the complete technical case study inline.
          </p>
        </Reveal>

        {/* Project Cards Grid with Accordion Inline Expansion */}
        <LayoutGroup>
          <motion.div
            layout={!isReduced}
            className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start"
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

        {/* Bottom GitHub CTA */}
        <Reveal delay={0.2} className="text-center mt-14">
          <a
            className="cosmic-button inline-flex items-center gap-2 mx-auto"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/test-Ois"
          >
            Explore All 15+ Repositories on GitHub <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
