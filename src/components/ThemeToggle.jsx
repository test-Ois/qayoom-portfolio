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
        background: "var(--bg-card)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid var(--border-card)",
        boxShadow: "var(--shadow-toggle)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 16px rgba(var(--purple-rgb), 0.4)";
        e.currentTarget.style.borderColor = "rgba(var(--purple-rgb), 0.5)";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-toggle)";
        e.currentTarget.style.borderColor = "var(--border-card)";
        e.currentTarget.style.transform = "scale(1)";
      }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5" style={{ color: "var(--color-blue)" }} />
      ) : (
        <Sun className="h-5 w-5" style={{ color: "var(--color-purple)" }} />
      )}
    </button>
  );
};
