// src/components/projects/CollapsedCard.jsx
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

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
      aria-label={`View ${project.title} case study`}
      className="group relative h-full flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-200 select-none text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 hover:-translate-y-1"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        boxShadow: "var(--shadow-card)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--bg-card-hover)";
        e.currentTarget.style.borderColor = "var(--border-card-hover)";
        e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.borderColor = "var(--border-card)";
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      }}
    >
      <div
        className="p-2 sm:p-2.5 m-2.5 mb-0 rounded-lg relative transition-all duration-200"
        style={{
          background: "var(--bg-img-frame)",
          border: "1px solid var(--border-img-frame)",
        }}
      >
        <div className="h-44 sm:h-48 w-full overflow-hidden relative rounded-md">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 60%)",
            }}
          />

          <div className="absolute top-2.5 left-2.5 z-10">
            <span
              className="inline-flex items-center px-2.5 py-1 text-[11px] font-mono font-medium rounded-md backdrop-blur-md"
              style={{
                background: "var(--bg-currently)",
                border: "1px solid var(--border-card)",
                color: "var(--text-heading)",
              }}
            >
              {project.category}
            </span>
          </div>

          <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
            {project.isOngoing && (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Active
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

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-1 tracking-tight transition-colors" style={{ color: "var(--text-heading)" }}>
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed font-normal" style={{ color: "var(--text-muted)" }}>
            {project.subtitle}
          </p>
        </div>

        <div className="mt-5 pt-3.5 flex items-center justify-between border-t" style={{ borderColor: "var(--border-section)" }}>
          <span
            className="text-xs font-medium tracking-wide flex items-center gap-1"
            style={{ color: "var(--color-purple)" }}
          >
            Case Study
          </span>
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 pointer-events-none select-none"
            style={{
              background: "var(--bg-pill)",
              border: "1px solid var(--border-tag)",
              color: "var(--color-purple)",
            }}
            aria-hidden="true"
          >
            <ArrowUpRight size={14} />
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
