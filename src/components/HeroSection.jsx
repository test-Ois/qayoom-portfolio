// src/components/HeroSection.jsx
import { useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, revealItemVariants } from "./Reveal";
import {
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const techStack = [
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: SiGithub },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express", Icon: SiExpress },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Next.js", Icon: SiNextdotjs },
];

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Disable effect on mobile/touch screens
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Shift 30% towards the cursor
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export const HeroSection = () => {
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Background Floating Orbs */}
      <motion.div
        className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15),transparent_70%)] blur-[40px] -z-10 pointer-events-none md:block hidden"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15),transparent_70%)] blur-[50px] -z-10 pointer-events-none md:block hidden"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Reveal
        triggerOnLoad={true}
        staggerChildren={0.15}
        className="container mx-auto flex flex-col items-center justify-center text-center z-10 max-w-4xl space-y-12"
      >
        {/* Centered Content */}
        <div className="flex flex-col items-center space-y-6 max-w-3xl">
          <motion.h3
            variants={itemVariants}
            className="text-xl text-muted-foreground tracking-wide font-sans"
          >
            Hello, I&apos;m
          </motion.h3>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight md:tracking-tighter"
          >
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
              Qayoom Akhtar
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold flex items-center justify-center flex-wrap gap-2 tracking-tight"
          >
            <span className="text-white">I&apos;m a</span>
            <span className="inline-block text-left font-bold min-w-[280px] sm:min-w-[350px] md:min-w-[420px]">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans"
          >
            Building scalable web applications and AI-powered solutions with
            modern technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 pt-4"
          >
            <MagneticButton>
              <a href="#projects" className="cosmic-button font-sans">
                View My Work
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary rounded-full hover:bg-primary/10 transition inline-block text-foreground font-sans font-medium"
              >
                Download CV
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Infinite Horizontal Tech Marquee */}
        <motion.div
          variants={itemVariants}
          className="w-full relative overflow-hidden py-6 mt-6"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-6 whitespace-nowrap">
            {/* First Set */}
            <div className="flex shrink-0 gap-6 min-w-max items-center">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-full text-foreground/80 hover:text-primary transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 hover:shadow-[0_0_12px_rgba(139,92,246,0.15)] cursor-pointer select-none"
                >
                  <tech.Icon size={18} className="shrink-0" />
                  <span className="font-semibold text-sm tracking-wide">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate) */}
            <div className="flex shrink-0 gap-6 min-w-max items-center">
              {techStack.map((tech, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/[0.02] border border-white/5 rounded-full text-foreground/80 hover:text-primary transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/5 hover:shadow-[0_0_12px_rgba(139,92,246,0.15)] cursor-pointer select-none"
                >
                  <tech.Icon size={18} className="shrink-0" />
                  <span className="font-semibold text-sm tracking-wide">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Reveal>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};