// src/components/SkillsSection.jsx
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal, revealItemVariants } from "./Reveal";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 85, category: "tools" },
  { name: "System Design", level: 80, category: "tools" },
  { name: "Rest APIs", level: 70, category: "tools" },
  { name: "AI / ML ", level: 65, category: "tools" },
  { name: "Redis", level: 65, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const radius = 36;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius; // ~226.195
  const targetOffset = circumference - (skill.level / 100) * circumference;
  const safeId = skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-');

  return (
    <div
      ref={ref}
      className="bg-[#0f1219]/40 border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#8b5cf6]/30 hover:shadow-[0_4px_24px_rgba(139,92,246,0.1)]"
    >
      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
        {/* SVG Circular Progress Ring */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          <defs>
            <linearGradient id={`grad-${safeId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Track Circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            stroke={`url(#grad-${safeId})`}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDashoffset: targetOffset }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        {/* Percentage text in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-foreground font-sans">{skill.level}%</span>
        </div>
      </div>
      {/* Skill name below ring */}
      <h3 className="font-bold text-base tracking-tight text-foreground/90 font-sans">
        {skill.name}
      </h3>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            My <span className="text-primary"> Skills</span>
          </h2>

          {/* Categories Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                  activeCategory === category
                    ? "bg-[#8b5cf6] text-white shadow-[0_0_12px_rgba(139,92,246,0.25)] border border-[#8b5cf6]/50"
                    : "bg-[#0f1219]/40 border border-white/5 text-zinc-300 backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/10 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Grid - Staggered entrance, resets on filter change */}
        <Reveal
          staggerChildren={0.06}
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, key) => (
            <motion.div key={`${skill.name}-${key}`} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
