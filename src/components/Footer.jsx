// src/components/Footer.jsx
import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Reveal } from "./Reveal";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative mt-20 py-14 px-6 border-t"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border-card)",
      }}
    >
      <Reveal className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 text-left">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-5 space-y-3">
            <h3
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--text-heading)" }}
            >
              Qayoom Akhtar
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm" style={{ color: "var(--text-muted)" }}>
              Full Stack Engineer specializing in TypeScript, Next.js, Node.js, and LLM retrieval pipelines.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono select-none"
              style={{
                background: "var(--bg-pill)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-card)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Available for full-time roles</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors font-medium"
                    style={{ color: "var(--text-body)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-purple)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-body)";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-4 space-y-3">
            <h4 className="font-semibold text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { name: "GitHub", icon: Github, href: "https://github.com/test-Ois" },
                { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/qayoom-akhtar" },
                { name: "Email", icon: Mail, href: "mailto:qayoomakhtar72@gmail.com" },
                { name: "Resume", icon: FileText, href: "https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL" },
              ].map(({ name, icon: IconComponent, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                  style={{
                    background: "var(--bg-pill)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-body)",
                  }}
                  aria-label={name}
                >
                  <IconComponent size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderColor: "var(--border-section)",
            color: "var(--text-muted)",
          }}
        >
          <p>© {new Date().getFullYear()} Qayoom Akhtar. Built with React &amp; Tailwind CSS.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-medium transition-colors cursor-pointer hover:underline"
            style={{ color: "var(--text-body)" }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </Reveal>
    </footer>
  );
};
