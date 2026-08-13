// src/components/ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
      style={{
        background: "rgba(59,53,60,0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(130,84,238,0.25)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 16px rgba(130,84,238,0.4)";
        e.currentTarget.style.borderColor = "rgba(130,84,238,0.5)";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.4)";
        e.currentTarget.style.borderColor = "rgba(130,84,238,0.25)";
        e.currentTarget.style.transform = "scale(1)";
      }}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" style={{ color: "#00C2FF" }} />
      ) : (
        <Moon className="h-5 w-5" style={{ color: "#8254EE" }} />
      )}
    </button>
  );
};
