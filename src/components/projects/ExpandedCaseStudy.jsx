// src/components/projects/ExpandedCaseStudy.jsx
import PropTypes from "prop-types";
import {
  ChevronUp,
  Github,
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Workflow,
  Server,
  Code2,
  Terminal,
  ShieldAlert,
} from "lucide-react";

// Helper to resolve icon components dynamically
const getIcon = (iconName) => {
  const iconMap = {
    Cpu: Cpu,
    Database: Database,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Layers: Layers,
    Server: Server,
    Workflow: Workflow,
    Terminal: Terminal,
  };
  const IconComponent = iconMap[iconName] || Sparkles;
  return <IconComponent size={18} />;
};

export const ExpandedCaseStudy = ({ project, onCollapse }) => {
  const hasLiveDemo = project.demoUrl && project.demoUrl.trim() !== "" && project.demoUrl !== "#";

  return (
    <div className="w-full text-left text-white" id={`project-case-study-${project.id}`}>
      {/* ── 1. PROJECT HERO ── */}
      <div
        className="relative rounded-2xl overflow-hidden mb-10 transition-all duration-300"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Top Accent Line */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          }}
        />

        {/* Hero Cover Image (Main prominent cover ONLY - NO screenshot gallery) */}
        <div
          className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden"
          style={{ background: "var(--bg-img-frame)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-90"
          />
          {/* Subtle vignette / gradient overlays */}
          <div
            className="absolute inset-0 pointer-events-none case-study-vignette"
            style={{
              background:
                "linear-gradient(to top, var(--bg-card) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at bottom left, ${project.accent}18 0%, transparent 70%)`,
            }}
          />

          {/* Quick Collapse Button on Top Right */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCollapse();
            }}
            aria-label="Collapse case study"
            className="absolute top-4 right-4 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md cursor-pointer transition-all duration-300 shadow-lg"
            style={{
              background: "var(--bg-card)",
              border: `1px solid var(--border-card)`,
              color: project.accent,
              boxShadow: "var(--shadow-card)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${project.accent}25`;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(13, 15, 26, 0.85)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ChevronUp size={15} />
            <span>Collapse</span>
          </button>
        </div>

        {/* Hero Meta Details */}
        <div className="p-6 sm:p-8 -mt-16 sm:-mt-20 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold rounded-full"
              style={{
                background: `${project.accent}18`,
                border: `1px solid ${project.accent}40`,
                color: project.accent,
              }}
            >
              <Sparkles size={12} />
              {project.category}
            </span>

            {project.isOngoing && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold tracking-wider rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Ongoing Project
              </span>
            )}

            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Featured Case Study 0{project.id}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2" style={{ color: "var(--text-heading)" }}>
            {project.title}
          </h2>
          <h3 className="text-sm sm:text-base font-medium mb-4" style={{ color: project.accent }}>
            {project.subtitle}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed max-w-4xl mb-6" style={{ color: "var(--text-body)" }}>
            {project.summary}
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {hasLiveDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}, #3b82f6)`,
                  color: "#ffffff",
                  boxShadow: `0 0 20px ${project.accent}40`,
                }}
              >
                <span>Live Production Demo</span>
                <ExternalLink size={15} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-button text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
              >
                <Github size={15} />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCollapse();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ml-auto"
              style={{
                background: "var(--bg-tag)",
                border: "1px solid var(--border-tag)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-purple)";
                e.currentTarget.style.borderColor = "rgba(var(--purple-rgb), 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border-tag)";
              }}
            >
              <ChevronUp size={16} />
              <span>Collapse Case Study</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── 2. OVERVIEW ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="p-2 rounded-xl"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            <BookOpen size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">Project Overview</h4>
            <p className="text-xs text-gray-400">Background, problem statement &amp; core solution</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-card)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              What It Is &amp; Purpose
            </h5>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{project.overview.about}</p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-card)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              The Core Problem
            </h5>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{project.overview.problem}</p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-card)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Engineered Solution
            </h5>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{project.overview.solution}</p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--border-card)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Key Value &amp; Impact
            </h5>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>{project.overview.value}</p>
          </div>
        </div>
      </div>

      {/* ── 3. KEY FEATURES ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="p-2 rounded-xl"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">Key Features</h4>
            <p className="text-xs text-gray-400">Core architectural capabilities &amp; user features</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between group"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-card)",
                boxShadow: "var(--shadow-card)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card-hover)";
                e.currentTarget.style.background = "var(--bg-card-hover)";
                e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
                e.currentTarget.style.background = "var(--bg-card)";
                e.currentTarget.style.boxShadow = "var(--shadow-card)";
              }}
            >
              <div>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--bg-icon)",
                    color: "var(--color-purple)",
                    border: "1px solid var(--border-purple)",
                  }}
                >
                  {getIcon(feat.icon)}
                </div>
                <h5 className="text-sm font-bold mb-2 leading-snug" style={{ color: "var(--text-heading)" }}>{feat.title}</h5>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-body)" }}>{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. TECHNOLOGY STACK ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="p-2 rounded-xl"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            <Layers size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">Technology Stack</h4>
            <p className="text-xs text-gray-400">Complete categorized tech ecosystem</p>
          </div>
        </div>

        <div
          className="p-6 rounded-2xl border space-y-5"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border-card)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {Object.entries(project.techStack).map(([categoryKey, techList]) => {
            const formattedCategory =
              {
                frontend: "Frontend & UI",
                backend: "Backend & APIs",
                aiMl: "AI / ML & Orchestration",
                database: "Database & Storage",
                authSecurity: "Authentication & Security",
                deployment: "Deployment & Infrastructure",
              }[categoryKey] || categoryKey;

            return (
              <div
                key={categoryKey}
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pb-4 border-b border-purple-900/10 last:border-0 last:pb-0"
              >
                <span className="text-xs font-mono font-semibold sm:w-48 shrink-0 flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                  <Code2 size={13} style={{ color: project.accent }} />
                  {formattedCategory}
                </span>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-200"
                      style={{
                        background: "var(--bg-tag)",
                        border: "1px solid var(--border-tag)",
                        color: "var(--tag-text)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 5. ARCHITECTURE & IMPLEMENTATION ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="p-2 rounded-xl"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            <Workflow size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">Architecture &amp; Implementation</h4>
            <p className="text-xs text-gray-400">System design, data pipelines &amp; flow analysis</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-card)", boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-purple-400">
              <Terminal size={14} />
              <span>CLIENT-SIDE ARCHITECTURE</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              {project.architecture.client}
            </p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-card)", boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-cyan-400">
              <Server size={14} />
              <span>BACKEND &amp; API PIPELINE</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              {project.architecture.backend}
            </p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-card)", boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-emerald-400">
              <Database size={14} />
              <span>DATA STORAGE &amp; AI INTEGRATION</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              {project.architecture.dataAndAi}
            </p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-card)", boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-amber-400">
              <ShieldCheck size={14} />
              <span>SECURITY &amp; REAL-TIME TRANSPORT</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              {project.architecture.realtimeOrSecurity}
            </p>
          </div>
        </div>
      </div>

      {/* ── 6. DEVELOPMENT CHALLENGES & SOLUTIONS ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="p-2 rounded-xl"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            <ShieldAlert size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">Engineering Challenges &amp; Solutions</h4>
            <p className="text-xs text-gray-400">Real-world technical bottlenecks and architectural resolutions</p>
          </div>
        </div>

        <div className="space-y-4">
          {project.challenges.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border transition-all duration-300"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-card)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h5 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "var(--text-heading)" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
                {item.title}
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-900/30">
                  <span className="block text-[11px] font-mono font-bold text-red-400 mb-1 uppercase tracking-wider">
                    Technical Challenge
                  </span>
                  <p className="leading-relaxed" style={{ color: "var(--text-body)" }}>{item.challenge}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/30">
                  <span className="block text-[11px] font-mono font-bold text-emerald-400 mb-1 uppercase tracking-wider">
                    Engineered Solution
                  </span>
                  <p className="leading-relaxed" style={{ color: "var(--text-body)" }}>{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. TECHNICAL HIGHLIGHTS ── */}
      <div className="mb-12">
        <div className="flex items-center gap-2.5 mb-5">
          <div
            className="p-2 rounded-xl"
            style={{ background: `${project.accent}18`, color: project.accent }}
          >
            <Zap size={20} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">Technical Highlights</h4>
            <p className="text-xs text-gray-400">Key engineering accomplishments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border flex items-center gap-3 transition-all duration-300"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-card)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--bg-icon)", color: "var(--color-purple)" }}
              >
                <CheckCircle2 size={16} />
              </div>
              <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--text-body)" }}>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. PROJECT LINKS (FOOTER ACTIONS) ── */}
      <div
        className="p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          background: "var(--grad-cta-panel)",
          borderColor: "var(--border-purple)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
            >
              <Github size={15} />
              <span>GitHub Repository →</span>
            </a>
          )}

          {hasLiveDemo && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Live Demo →</span>
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onCollapse();
          }}
          className="ghost-button text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 w-full sm:w-auto justify-center"
        >
          <ChevronUp size={16} />
          <span>Collapse Case Study ↑</span>
        </button>
      </div>
    </div>
  );
};

ExpandedCaseStudy.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,
    demoUrl: PropTypes.string,
    summary: PropTypes.string.isRequired,
    isOngoing: PropTypes.bool,
    overview: PropTypes.shape({
      about: PropTypes.string.isRequired,
      problem: PropTypes.string.isRequired,
      solution: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    keyFeatures: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.string,
      })
    ).isRequired,
    techStack: PropTypes.object.isRequired,
    architecture: PropTypes.shape({
      client: PropTypes.string.isRequired,
      backend: PropTypes.string.isRequired,
      dataAndAi: PropTypes.string.isRequired,
      realtimeOrSecurity: PropTypes.string.isRequired,
    }).isRequired,
    challenges: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        challenge: PropTypes.string.isRequired,
        solution: PropTypes.string.isRequired,
      })
    ).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onCollapse: PropTypes.func.isRequired,
};
