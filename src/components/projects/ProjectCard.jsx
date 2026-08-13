// src/components/projects/ProjectCard.jsx
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { CollapsedCard } from "./CollapsedCard";
import { ExpandedCaseStudy } from "./ExpandedCaseStudy";

export const ProjectCard = ({
  project,
  isExpanded,
  onToggle,
  isMobile,
  isReduced,
}) => {
  return (
    <motion.div
      layout={!isReduced}
      transition={{
        duration: isReduced ? 0.1 : 0.4,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={`w-full transition-all duration-300 ${
        isExpanded ? "col-span-1 md:col-span-2 lg:col-span-2 my-2" : "h-full"
      }`}
      id={`project-${project.id}`}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: isReduced ? 0 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isReduced ? 0 : -15 }}
            transition={{
              duration: isReduced ? 0.15 : 0.35,
              ease: "easeInOut",
            }}
            className="w-full"
          >
            <ExpandedCaseStudy project={project} onCollapse={onToggle} />
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isReduced ? 0.1 : 0.25 }}
            className="h-full"
          >
            {isMobile || isReduced ? (
              <CollapsedCard project={project} onExpand={onToggle} />
            ) : (
              <Tilt options={{ max: 8, scale: 1.01, speed: 300 }} className="h-full">
                <CollapsedCard project={project} onExpand={onToggle} />
              </Tilt>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isReduced: PropTypes.bool,
};
