// src/components/StarBackground.jsx
import { useEffect, useState } from "react";

const getStarCount = () => {
  const area = window.innerWidth * window.innerHeight;
  // Keep the ambience subtle on mobile and avoid hundreds of animated nodes on large screens.
  return Math.min(36, Math.max(14, Math.floor(area / 30000)));
};

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const count = getStarCount();
      const nextStars = Array.from({ length: count }, (_, id) => ({
        id,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.45 + 0.25,
        animationDuration: Math.random() * 4 + 3,
      }));
      setStars(nextStars);
    };

    generateStars();

    let timeoutId;
    const handleResize = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(generateStars, 180);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
