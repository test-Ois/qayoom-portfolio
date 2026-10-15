// src/components/CustomCursor.jsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A single lightweight desktop-only cursor accent; touch devices keep the native UI.
export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-20);
  const mouseY = useMotionValue(-20);
  const x = useSpring(mouseX, { stiffness: 320, damping: 32, mass: 0.18 });
  const y = useSpring(mouseY, { stiffness: 320, damping: 32, mass: 0.18 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener?.("change", update);

    if (!media.matches) {
      return () => media.removeEventListener?.("change", update);
    }

    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      media.removeEventListener?.("change", update);
      window.removeEventListener("pointermove", move);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#b7f36b] pointer-events-none z-[9999] mix-blend-screen"
    />
  );
};
