// src/components/Reveal.jsx
import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Reusable helper variants for child items to participate in staggered layouts.
 * If the user prefers reduced motion, transitions are simplified to simple fades.
 */
export const revealItemVariants = (isReduced) => ({
  hidden: {
    opacity: 0,
    y: isReduced ? 0 : 40,
    filter: isReduced ? "none" : "blur(8px)",
    scale: isReduced ? 1 : 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

/**
 * A premium, highly optimized scroll-reveal component.
 * Animates opacity, y-translation, blur, and scale when entering the viewport.
 * Automatically simplifies all motions if prefers-reduced-motion is active.
 */
export const Reveal = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  blur = 8,
  scale = 0.98,
  staggerChildren = 0,
  triggerOnLoad = false,
  className,
}) => {
  const isReduced = useReducedMotion();

  const variants = {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : y,
      filter: isReduced ? "none" : `blur(${blur}px)`,
      scale: isReduced ? 1 : scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        staggerChildren: isReduced ? 0 : staggerChildren,
      },
    },
  };

  const viewportSettings = {
    once: true,
    amount: 0.1,
  };

  if (triggerOnLoad) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  y: PropTypes.number,
  blur: PropTypes.number,
  scale: PropTypes.number,
  staggerChildren: PropTypes.number,
  triggerOnLoad: PropTypes.bool,
  className: PropTypes.string,
};
