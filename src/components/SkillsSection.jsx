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
  Wifi,
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Reveal } from "./Reveal";
import {
  SKILLS_DATA,
  SKILL_CATEGORIES,
  CURRENTLY_WORKING_WITH_PRIMARY,
  CURRENTLY_WORKING_WITH_ALL,
  CURATED_ALL_SKILL_NAMES,
} from "../data/skillsData";

// Dynamic Icon Resolver
const getSkillIcon = (iconName) => {
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
    Wifi,
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
  const IconComponent = iconMap[iconName] || Sparkles;
  return <IconComponent size={18} />;
};

// Dot color and style by realistic proficiency level
const getLevelDotColor = (level) => {
  switch (level) {
    case "Advanced":
      return "bg-cyan-400 shadow-[0_0_8px_rgba(0,194,255,0.6)]";
    case "Proficient":
      return "bg-purple-400 shadow-[0_0_8px_rgba(130,84,238,0.6)]";
    case "Intermediate":
      return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]";
    default:
      return "bg-gray-400";
  }
};

const SkillCard = ({ skill, isReduced }) => {
  return (
    <motion.div
      layout={!isReduced}
      initial={{ opacity: 0, scale: isReduced ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: isReduced ? 1 : 0.96 }}
      transition={{ duration: isReduced ? 0.1 : 0.22, ease: "easeOut" }}
      className="h-full"
    >
      <div
        className="h-full flex flex-col justify-between p-5 rounded-2xl transition-all duration-300 select-none text-left group"
        style={{
          background: "rgba(59, 53, 60, 0.16)",
          border: "1px solid rgba(130, 84, 238, 0.14)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${skill.accent}55`;
          e.currentTarget.style.boxShadow = `0 10px 32px ${skill.accent}22, 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)`;
          e.currentTarget.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(130, 84, 238, 0.14)";
          e.currentTarget.style.boxShadow =
            "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.04)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div>
          {/* Top Row: Icon Container & Realistic Proficiency Badge */}
          <div className="flex items-center justify-between mb-3.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{
                background: `${skill.accent}15`,
                border: `1px solid ${skill.accent}33`,
                color: skill.accent,
              }}
            >
              {getSkillIcon(skill.icon)}
            </div>

            {/* Realistic Level Indicator */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-black/60 border border-white/10 text-gray-300">
              <span className={`w-1.5 h-1.5 rounded-full ${getLevelDotColor(skill.level)}`} />
              {skill.level}
            </span>
          </div>

          {/* Title & Role */}
          <h3 className="text-base font-bold text-white mb-1 tracking-tight group-hover:text-white transition-colors">
            {skill.name}
          </h3>
          <p className="text-xs text-gray-400 mb-3.5 font-medium leading-relaxed" style={{ color: "#82717B" }}>
            {skill.role}
          </p>
        </div>

        {/* Footer: Keywords */}
        <div className="pt-3 border-t border-purple-900/20 flex flex-wrap gap-1.5">
          {skill.keywords.map((kw, i) => (
            <span
              key={i}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/5"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
  }).isRequired,
  isReduced: PropTypes.bool,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isWorkingWithExpanded, setIsWorkingWithExpanded] = useState(false);
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const isReduced = useReducedMotion();

  // Determine which skills to display
  const displayedSkills = useMemo(() => {
    if (activeCategory === "all") {
      if (isAllExpanded) {
        return SKILLS_DATA;
      }
      // Curated initial smart mix (2 AI/LLM, 3 Frontend, 1 Backend, 1 Database, 1 Tools)
      return SKILLS_DATA.filter((s) => CURATED_ALL_SKILL_NAMES.includes(s.name));
    }
    // Specific category selected
    return SKILLS_DATA.filter((s) => s.category === activeCategory);
  }, [activeCategory, isAllExpanded]);

  const activeWorkingWithList = isWorkingWithExpanded
    ? CURRENTLY_WORKING_WITH_ALL
    : CURRENTLY_WORKING_WITH_PRIMARY;

  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,194,255,0.06), transparent 70%)",
          filter: "blur(70px)",
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(130,84,238,0.06), transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      <div className="container mx-auto max-w-5xl">
        <Reveal>
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="section-label">Skills</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center tracking-tight text-white">
            My{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8254EE, #00C2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tech Stack
            </span>
          </h2>

          {/* Supporting Subtitle */}
          <p
            className="text-center mb-7 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
            style={{ color: "#82717B" }}
          >
            Technologies I use to build modern full-stack applications.
          </p>

          {/* Compact, Expandable "Currently working with" Bar (Max 2 rows collapsed) */}
          <div className="max-w-3xl mx-auto mb-10 p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-purple-900/20 backdrop-blur-md transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
              {/* Header Label */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-purple-300 font-semibold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Currently working with:
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                <AnimatePresence initial={false}>
                  {activeWorkingWithList.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-950/50 text-purple-200 border border-purple-800/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>

              {/* Expand / Collapse Button */}
              <button
                type="button"
                onClick={() => setIsWorkingWithExpanded(!isWorkingWithExpanded)}
                aria-expanded={isWorkingWithExpanded}
                aria-label={isWorkingWithExpanded ? "Show fewer active technologies" : "Show all active technologies"}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-200 cursor-pointer shrink-0"
              >
                <span>{isWorkingWithExpanded ? "Less" : `+${CURRENTLY_WORKING_WITH_ALL.length - CURRENTLY_WORKING_WITH_PRIMARY.length}`}</span>
                {isWorkingWithExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div
            role="tablist"
            aria-label="Technology Categories"
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          >
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    // If switching to a category other than 'all', reset isAllExpanded
                    if (cat.id !== "all") {
                      setIsAllExpanded(false);
                    }
                  }}
                  className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(135deg, #8254EE, #6d3fd4)",
                          color: "#ffffff",
                          boxShadow: "0 0 16px rgba(130,84,238,0.35)",
                          border: "1px solid rgba(130,84,238,0.5)",
                        }
                      : {
                          background: "rgba(59,53,60,0.2)",
                          color: "#82717B",
                          border: "1px solid rgba(130,84,238,0.12)",
                          backdropFilter: "blur(8px)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#C1CFC1";
                      e.currentTarget.style.borderColor = "rgba(130,84,238,0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#82717B";
                      e.currentTarget.style.borderColor = "rgba(130,84,238,0.12)";
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Skills Grid */}
        <motion.div
          layout={!isReduced}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                isReduced={isReduced}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More / Show Less Button for "All" Category */}
        {activeCategory === "all" && (
          <Reveal delay={0.1} className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => {
                if (isAllExpanded) {
                  // If collapsing, smoothly bring section header into view
                  const skillsEl = document.getElementById("skills");
                  if (skillsEl) {
                    const targetY = skillsEl.getBoundingClientRect().top + window.scrollY - 85;
                    window.scrollTo({
                      top: Math.max(0, targetY),
                      behavior: isReduced ? "auto" : "smooth",
                    });
                  }
                }
                setIsAllExpanded(!isAllExpanded);
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold font-mono tracking-wide text-purple-200 border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/50 hover:border-purple-400/50 transition-all duration-300 flex items-center gap-2 shadow-lg backdrop-blur-md cursor-pointer hover:shadow-[0_0_20px_rgba(130,84,238,0.3)]"
            >
              <span>
                {isAllExpanded
                  ? "Show Less (Curated View)"
                  : `Show All Skills (${SKILLS_DATA.length - CURATED_ALL_SKILL_NAMES.length} more)`}
              </span>
              {isAllExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </Reveal>
        )}
      </div>
    </section>
  );
};
