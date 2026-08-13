// src/components/HeroSection.jsx
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
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
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#C1CFC1" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68A063" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Express", Icon: SiExpress, color: "#C1CFC1" },
  { name: "Vercel", Icon: SiVercel, color: "#C1CFC1" },
  { name: "GitHub", Icon: SiGithub, color: "#C1CFC1" },
];

const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "5+", label: "AI Integrations" },
  { value: "Full Stack", label: "Development" },
];

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const move = (e) => {
    if (window.innerWidth < 768) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (left + width / 2)) * 0.3,
      y: (e.clientY - (top + height / 2)) * 0.3,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

MagneticButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export const HeroSection = () => {
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 pt-28 pb-10 overflow-hidden"
    >
      {/* ── Ambient Orbs ── */}
      <motion.div
        className="absolute top-[5%] left-[3%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(130,84,238,0.18) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
        animate={{ x: [0, 50, -30, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[3%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,194,255,0.09) 0%, transparent 70%)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
        animate={{ x: [0, -40, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full flex-1 flex flex-col items-center justify-center">
        <Reveal
          triggerOnLoad
          staggerChildren={0.1}
          className="container mx-auto flex flex-col items-center justify-center text-center z-10 max-w-5xl space-y-8 sm:space-y-9"
        >
          {/* ── Status Indicator: LOOKING FOR OPPORTUNITIES ── */}
          <motion.div variants={itemVariants}>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{
                border: "1px solid rgba(130,84,238,0.35)",
                background: "rgba(130,84,238,0.08)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 16px rgba(130,84,238,0.15)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ background: "#00C2FF" }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ background: "#00C2FF" }}
                />
              </span>
              <span
                className="text-xs font-mono font-bold tracking-wider uppercase"
                style={{ color: "#c4a3ff" }}
              >
                Looking for opportunities
              </span>
            </div>
          </motion.div>

          {/* ── Greeting + Name + Animated Role + Description ── */}
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 max-w-4xl">
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm tracking-[0.25em] uppercase font-mono font-medium"
              style={{ color: "#82717B" }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none"
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #c4a3ff 0%, #8254EE 40%, #00C2FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Qayoom Akhtar
              </span>
            </motion.h1>

            {/* ── Smooth Rotating Role ── */}
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-2xl md:text-3xl font-semibold flex items-center justify-center flex-wrap gap-1.5 sm:gap-3 pt-1"
            >
              <span style={{ color: "#82717B", fontWeight: 300 }}>I&apos;m a</span>
              <span
                className="font-bold min-w-[210px] sm:min-w-[340px] md:min-w-[390px] text-left"
                style={{
                  background: "linear-gradient(90deg, #8254EE, #00C2FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Full Stack Engineer",
                    2400,
                    "AI Application Engineer",
                    2400,
                    "React & Next.js Engineer",
                    2400,
                    "MERN Stack Developer",
                    2400,
                  ]}
                  speed={52}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* ── Focused Professional Description ── */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed pt-2"
              style={{ color: "#82717B" }}
            >
              Building production-grade full-stack applications with{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Next.js</span>,{" "}
              <span className="text-white font-medium">Node.js</span>, and{" "}
              <span style={{ color: "#00C2FF", fontWeight: 500 }}>AI/LLM systems</span>.
              Focused on scalable architecture, intelligent products, and polished user experiences.
            </motion.p>

            {/* ── Main Hero CTAs ── */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3.5 pt-3"
            >
              <MagneticButton>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full font-semibold text-white text-xs sm:text-sm transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #8254EE, #6d3fd4)",
                    boxShadow: "0 0 24px rgba(130,84,238,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(130,84,238,0.6)";
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(130,84,238,0.35)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Explore My Work <ArrowRight size={15} />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300"
                  style={{
                    border: "1px solid rgba(0,194,255,0.35)",
                    background: "rgba(0,194,255,0.07)",
                    color: "#00C2FF",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,194,255,0.15)";
                    e.currentTarget.style.boxShadow = "0 0 24px rgba(0,194,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,194,255,0.07)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Download Resume <ExternalLink size={13} className="opacity-80" />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* ── Defensible Portfolio Stats ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-7 sm:gap-12 pt-2"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-mono"
                  style={{
                    background: "linear-gradient(135deg, #8254EE, #00C2FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </span>
                <span className="text-xs tracking-wide" style={{ color: "#82717B" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ── Bottom Tech Pills Marquee ── */}
          <motion.div variants={itemVariants} className="w-full relative overflow-hidden py-3">
            <div
              className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #090909, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #090909, transparent)" }}
            />
            <div className="marquee-track flex gap-3 sm:gap-4 whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shrink-0 transition-all duration-300"
                  style={{
                    background: "rgba(59,53,60,0.22)",
                    border: "1px solid rgba(130,84,238,0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(130,84,238,0.4)";
                    e.currentTarget.style.boxShadow = "0 0 14px rgba(130,84,238,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(130,84,238,0.12)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <tech.Icon size={15} style={{ color: tech.color, opacity: 0.9 }} />
                  <span className="text-xs sm:text-sm font-medium" style={{ color: "#C1CFC1" }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* ── Scroll Indicator (Safely Positioned Below Tech Row with Zero Overlap) ── */}
      <div className="mt-8 sm:mt-12 flex flex-col items-center gap-1.5 z-10 select-none">
        <span
          className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-mono font-semibold"
          style={{ color: "#82717B" }}
        >
          Scroll
        </span>
        <div className="relative flex items-center justify-center">
          <motion.div
            className="flex items-center justify-center w-8 h-8 rounded-full"
            style={{
              border: "1px solid rgba(130,84,238,0.3)",
              background: "rgba(130,84,238,0.06)",
            }}
            animate={isReduced ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-3.5 w-3.5" style={{ color: "#8254EE" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};