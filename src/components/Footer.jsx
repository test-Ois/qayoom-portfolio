// src/components/Footer.jsx
import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#07090e] mt-24 py-16 px-6 overflow-hidden border-t border-white/5 transition-colors duration-300">
      {/* Top Animating Gradient Border (Purple → Cyan → Purple) */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1.5px] z-20"
        style={{
          background: "linear-gradient(to right, #8b5cf6, #06b6d4, #8b5cf6)",
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Extremely Faint, Handcrafted Cosmic Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.025),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.015),transparent_50%)] pointer-events-none z-0" />

      {/* Main Content Wrap - Animate once upon viewport entry */}
      <Reveal duration={0.8} y={30} blur={8} className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 text-center sm:text-left">

          {/* Left Column: Branding, Bio & Availability (Spans 5) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-5 space-y-5 flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Qayoom Akhtar
            </h3>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed max-w-md">
              Full Stack Developer specializing in AI-powered web applications. Passionate about engineering high-performance interfaces, clean architectures, and scalable backends.
            </p>

            {/* Elegant Pulsing Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-xs text-zinc-400 font-mono font-medium select-none shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Full-Time Opportunities
            </div>
          </div>

          {/* Center Column: Navigation (Spans 3) */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 space-y-4 lg:pl-8">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              {[
                { name: "Home", href: "#hero" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-[#8b5cf6] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Connect & Glassmorphic Socials (Spans 4) */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-4 space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-widest font-sans">
              Connect
            </h4>
            <p className="text-zinc-400 text-sm font-sans leading-relaxed max-w-sm">
              Let&apos;s build something together. Reach out on social channels or download my professional resume.
            </p>

            {/* Social Icons inside circular glassmorphism buttons */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start pt-2">
              {[
                {
                  name: "GitHub",
                  icon: Github,
                  href: "https://github.com/test-Ois",
                  title: "Visit GitHub Profile",
                },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/qayoom-akhtar",
                  title: "Connect on LinkedIn",
                },
                {
                  name: "Email",
                  icon: Mail,
                  href: "mailto:qayoomakhtar72@gmail.com",
                  title: "Send an Email",
                },
                {
                  name: "Resume",
                  icon: FileText,
                  href: "https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL",
                  title: "Download Resume",
                },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="p-3 rounded-full bg-white/[0.02] border border-white/5 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-115 hover:text-white hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Clean Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-sans text-zinc-500 text-center sm:text-left">
          <p>© 2026 Qayoom Akhtar. All Rights Reserved.</p>

          <p className="hidden md:block select-none">
            Built with React • JavaScript • Tailwind CSS • Framer Motion
          </p>

          {/* Circular Scroll To Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.1, boxShadow: "0 0 15px rgba(139,92,246,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-white/[0.02] border border-white/5 text-zinc-400 hover:text-[#8b5cf6] hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 transition-all duration-300 cursor-pointer shadow-sm"
            title="Back to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </Reveal>
    </footer>
  );
};
