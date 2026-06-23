import { ArrowUp, Github, Linkedin, Mail, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border mt-24 py-12 px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 mb-8 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-primary tracking-wide mb-3">
              Qayoom Akhtar
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Engineer specializing in scaling Next.js, React, Node.js applications and integrating AI solutions. Delivering reliable systems with high-performance metrics.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-foreground text-sm uppercase tracking-wider">Navigation</span>
              <a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <span className="font-semibold text-foreground text-sm uppercase tracking-wider">Connect</span>
            <div className="flex space-x-4">
              <a
                href="https://github.com/test-Ois"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/qayoom-akhtar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:qayoomakhtar72@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
              <a
                href="#hero"
                aria-label="Portfolio"
                className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/60 my-6" />

        {/* Bottom copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Qayoom Akhtar. All Rights Reserved.</p>
          <a
            href="#hero"
            aria-label="Scroll to top"
            className="p-2.5 rounded-full bg-secondary/80 hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300 shadow-sm hover:scale-110 hover:-translate-y-1"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
