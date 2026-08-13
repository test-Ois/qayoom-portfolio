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
      <div className="relative rounded-2xl overflow-hidden border border-purple-900/30 bg-black/40 shadow-2xl mb-10">
        {/* Top Accent Line */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          }}
        />

        {/* Hero Cover Image (Main prominent cover ONLY - NO screenshot gallery) */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-black/60">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-90"
          />
          {/* Subtle vignette / gradient overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(9, 9, 9, 0.95) 0%, rgba(9, 9, 9, 0.6) 45%, rgba(9, 9, 9, 0.2) 100%)",
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
              background: "rgba(9, 9, 9, 0.85)",
              border: `1px solid ${project.accent}40`,
              color: project.accent,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${project.accent}25`;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(9, 9, 9, 0.85)";
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

            <span className="text-xs font-mono text-gray-400">Featured Case Study 0{project.id}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <h3 className="text-sm sm:text-base font-medium mb-4" style={{ color: project.accent }}>
            {project.subtitle}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl mb-6">
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
                  background: `linear-gradient(135deg, ${project.accent}, #00C2FF)`,
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
                background: "rgba(130, 84, 238, 0.08)",
                border: "1px solid rgba(130, 84, 238, 0.2)",
                color: "#82717B",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "rgba(130, 84, 238, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#82717B";
                e.currentTarget.style.borderColor = "rgba(130, 84, 238, 0.2)";
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
              background: "rgba(59, 53, 60, 0.14)",
              borderColor: "rgba(130, 84, 238, 0.15)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              What It Is &amp; Purpose
            </h5>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.overview.about}</p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{
              background: "rgba(59, 53, 60, 0.14)",
              borderColor: "rgba(130, 84, 238, 0.15)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              The Core Problem
            </h5>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.overview.problem}</p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{
              background: "rgba(59, 53, 60, 0.14)",
              borderColor: "rgba(130, 84, 238, 0.15)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-300 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Engineered Solution
            </h5>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.overview.solution}</p>
          </div>

          <div
            className="p-5 rounded-xl border transition-all duration-300"
            style={{
              background: "rgba(59, 53, 60, 0.14)",
              borderColor: "rgba(130, 84, 238, 0.15)",
            }}
          >
            <h5 className="text-xs font-mono uppercase tracking-wider text-amber-300 mb-2 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Key Value &amp; Impact
            </h5>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.overview.value}</p>
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
                background: "rgba(59, 53, 60, 0.12)",
                borderColor: "rgba(130, 84, 238, 0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${project.accent}44`;
                e.currentTarget.style.background = "rgba(59, 53, 60, 0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(130, 84, 238, 0.12)";
                e.currentTarget.style.background = "rgba(59, 53, 60, 0.12)";
              }}
            >
              <div>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${project.accent}15`,
                    color: project.accent,
                    border: `1px solid ${project.accent}33`,
                  }}
                >
                  {getIcon(feat.icon)}
                </div>
                <h5 className="text-sm font-bold text-white mb-2 leading-snug">{feat.title}</h5>
                <p className="text-xs text-gray-300 leading-relaxed">{feat.description}</p>
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

        <div className="p-6 rounded-2xl border bg-black/40 border-purple-900/20 space-y-5">
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
                className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0"
              >
                <span className="text-xs font-mono font-semibold text-gray-400 sm:w-48 shrink-0 flex items-center gap-2">
                  <Code2 size={13} style={{ color: project.accent }} />
                  {formattedCategory}
                </span>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg transition-all duration-200"
                      style={{
                        background: "rgba(130, 84, 238, 0.08)",
                        border: "1px solid rgba(130, 84, 238, 0.18)",
                        color: "#e2e8f0",
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
          <div className="p-5 rounded-xl border bg-black/30 border-purple-900/20">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-purple-300">
              <Terminal size={14} />
              <span>CLIENT-SIDE ARCHITECTURE</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.architecture.client}
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-black/30 border-purple-900/20">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-cyan-300">
              <Server size={14} />
              <span>BACKEND &amp; API PIPELINE</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.architecture.backend}
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-black/30 border-purple-900/20">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-emerald-300">
              <Database size={14} />
              <span>DATA STORAGE &amp; AI INTEGRATION</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {project.architecture.dataAndAi}
            </p>
          </div>

          <div className="p-5 rounded-xl border bg-black/30 border-purple-900/20">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-amber-300">
              <ShieldCheck size={14} />
              <span>SECURITY &amp; REAL-TIME TRANSPORT</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
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
                background: "rgba(59, 53, 60, 0.12)",
                borderColor: "rgba(130, 84, 238, 0.15)",
              }}
            >
              <h5 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
                {item.title}
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-900/30">
                  <span className="block text-[11px] font-mono font-bold text-red-400 mb-1 uppercase tracking-wider">
                    Technical Challenge
                  </span>
                  <p className="text-gray-300 leading-relaxed">{item.challenge}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-900/30">
                  <span className="block text-[11px] font-mono font-bold text-emerald-400 mb-1 uppercase tracking-wider">
                    Engineered Solution
                  </span>
                  <p className="text-gray-300 leading-relaxed">{item.solution}</p>
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
              className="p-4 rounded-xl border flex items-center gap-3 bg-black/40 border-purple-900/20"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `${project.accent}20`, color: project.accent }}
              >
                <CheckCircle2 size={16} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-200">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. PROJECT LINKS (FOOTER ACTIONS) ── */}
      <div
        className="p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          background: "linear-gradient(135deg, rgba(130, 84, 238, 0.12), rgba(0, 194, 255, 0.08))",
          borderColor: "rgba(130, 84, 238, 0.25)",
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
