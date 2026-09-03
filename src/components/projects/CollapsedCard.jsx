// src/components/projects/CollapsedCard.jsx
import PropTypes from "prop-types";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const CollapsedCard = ({ project, onExpand }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onExpand();
    }
  };

  return (
    <div
      onClick={onExpand}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded="false"
      aria-label={`View ${project.title} Case Study`}
      className="group relative h-full flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 select-none text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "var(--shadow-card)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-card-hover)";
        e.currentTarget.style.borderColor = `${project.accent}55`;
        e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.borderColor = "var(--border-card)";
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      }}
    >
      {/* Top accent gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      {/* Framed Project Preview Image Container */}
      <div
        className="p-2 sm:p-2.5 m-2.5 mb-0 rounded-xl relative transition-all duration-300"
        style={{
          background: "var(--bg-img-frame)",
          border: "1px solid var(--border-img-frame)",
        }}
      >
        <div className="h-44 sm:h-48 w-full overflow-hidden relative rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, transparent 60%)",
            }}
          />

          {/* Category Pill on Image (Left) */}
          <div className="absolute top-2.5 left-2.5 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-medium rounded-full backdrop-blur-md"
              style={{
                background: "var(--bg-currently)",
                border: `1px solid ${project.accent}40`,
                color: project.accent,
              }}
            >
              <Sparkles size={11} className="shrink-0" />
              {project.category}
            </span>
          </div>

          {/* Status Badge (Ongoing) or Number identifier (Right) */}
          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
            {project.isOngoing && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase shadow-lg backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Ongoing Project
              </span>
            )}
            <span
              className="text-[11px] font-mono px-2 py-0.5 rounded-md backdrop-blur-md"
              style={{
                background: "var(--bg-currently)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-card)",
              }}
            >
              0{project.id}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed font-medium" style={{ color: "var(--text-muted)" }}>
            {project.subtitle}
          </p>
        </div>

        {/* Action button */}
        <div className="mt-5 pt-3.5 flex items-center justify-between border-t border-purple-900/20">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="text-xs font-semibold tracking-wide flex items-center gap-1.5 bg-transparent border-none p-0 cursor-pointer focus:outline-none"
          >
            <span
              className="cta-shimmer-text"
              style={{
                backgroundImage: `linear-gradient(110deg, ${project.accent} 0%, ${project.accent} 35%, #ffffff 50%, ${project.accent} 65%, ${project.accent} 100%)`,
              }}
            >
              Explore Project
            </span>
          </button>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 pointer-events-none select-none"
            style={{
              background: "rgba(var(--purple-rgb), 0.08)",
              border: `1px solid ${project.accent}33`,
              color: project.accent,
            }}
          >
            <ArrowDown size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

CollapsedCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    isOngoing: PropTypes.bool,
  }).isRequired,
  onExpand: PropTypes.func.isRequired,
};
