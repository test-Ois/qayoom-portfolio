// src/components/CustomCursor.jsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(true);

  // Raw mouse coordinates tracked as motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 1. Inner Dot Spring (Tighter, faster tracking for organic precision)
  const innerX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.2 });
  const innerY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.2 });

  // 2. Outer Ambient Spotlight Spring (Slower, higher inertia and elegant lag)
  const outerX = useSpring(mouseX, { stiffness: 45, damping: 18, mass: 0.8 });
  const outerY = useSpring(mouseY, { stiffness: 45, damping: 18, mass: 0.8 });

  // Spring physics for scale and opacity to avoid React re-renders on transitions
  const scale = useSpring(1, { stiffness: 100, damping: 15 });
  const opacity = useSpring(0, { stiffness: 80, damping: 15 });

  useEffect(() => {
    // 1. Mobile responsive check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (window.innerWidth < 768) {
      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }

    // 2. High-performance event tracking (updates motion values directly to bypass React render cycles)
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (opacity.get() === 0) {
        opacity.set(1);
      }
    };

    const handleMouseLeave = () => {
      opacity.set(0);
    };

    const handleMouseEnter = () => {
      opacity.set(1);
    };

    // Global delegation for hover scaling on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isHoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isHoverable) {
        scale.set(1.4);
      } else {
        scale.set(1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Soft Glowing Ambient Spotlight (Lags behind with high inertia, creating luxurious depth) */}
      <motion.div
        style={{
          x: outerX,
          y: outerY,
          scale,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06),transparent_70%)] pointer-events-none z-[9999] mix-blend-screen blur-[2px]"
      />

      {/* Inner Tiny Precision Dot (Tracks tighter, highly elegant and minimal) */}
      <motion.div
        style={{
          x: innerX,
          y: innerY,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#8b5cf6] pointer-events-none z-[9999] mix-blend-screen"
      />
    </>
  );
};
