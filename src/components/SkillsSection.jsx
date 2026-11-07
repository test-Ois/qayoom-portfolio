// src/components/SkillsSection.jsx
import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Bot,
  BrainCircuit,
  Binary,
  Network,
  Terminal,
  Atom,
  Globe,
  FileCode2,
  FileCode,
  Palette,
  Layout,
  Server,
  Workflow,
  Activity,
  Radio,
  Database,
  Layers,
  Boxes,
  Compass,
  Zap,
  GitBranch,
  Box,
  Cloud,
  ShieldCheck,
  Send,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SKILLS_DATA, SKILL_CATEGORIES } from "../data/skillsData";

const iconMap = {
  Bot,
  BrainCircuit,
  Binary,
  Network,
  Terminal,
  Atom,
  Globe,
  FileCode2,
  FileCode,
  Palette,
  Layout,
  Server,
  Workflow,
  Activity,
  Radio,
  Database,
  Layers,
  Boxes,
  Compass,
  Zap,
  GitBranch,
  Box,
  Cloud,
  ShieldCheck,
  Send,
};

const getSkillIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Sparkles;
  return <IconComponent className="w-4 h-4" />;
};

const SkillCard = ({ skill, isReduced }) => {
  return (
    <motion.div
      layout={!isReduced}
      initial={{ opacity: 0, y: isReduced ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isReduced ? 0 : -8 }}
      transition={{ duration: isReduced ? 0.1 : 0.2, ease: "easeOut" }}
      className="p-4 rounded-xl text-left transition-all duration-200"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
      }}
    >
      <div className="flex items-center gap-2.5 mb-1.5">
        <div
          className="p-1.5 rounded-md"
          style={{
            background: "var(--bg-pill)",
            color: "var(--color-purple)",
            border: "1px solid var(--border-tag)",
          }}
        >
          {getSkillIcon(skill.icon)}
        </div>
        <h4 className="font-semibold text-sm tracking-tight" style={{ color: "var(--text-heading)" }}>
          {skill.name}
        </h4>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {skill.context}
      </p>
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  isReduced: PropTypes.bool,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const isReduced = useReducedMotion();

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return SKILLS_DATA;
    return SKILLS_DATA.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <Reveal className="container mx-auto max-w-5xl">
        <div className="flex justify-center mb-3">
          <span className="section-label">Capabilities</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight"
          style={{ color: "var(--text-heading)" }}
        >
          Technical Competencies
        </h2>
        <p
          className="text-center mb-9 sm:mb-11 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Technologies, frameworks, and tools I use to build production web systems.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer"
                style={{
                  background: isActive ? "var(--color-purple)" : "var(--bg-card)",
                  color: isActive ? "#ffffff" : "var(--text-body)",
                  border: `1px solid ${isActive ? "var(--color-purple)" : "var(--border-card)"}`,
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout={!isReduced}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} isReduced={isReduced} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Reveal>
    </section>
  );
};
