// src/components/ThemeToggle.jsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const getStoredTheme = () => {
  try {
    return window.localStorage.getItem("theme");
  } catch {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // The theme still works for this session when storage is unavailable.
  }
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => getStoredTheme() !== "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    if (getStoredTheme() === null) storeTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    const nextIsDarkMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", nextIsDarkMode);
    storeTheme(nextIsDarkMode ? "dark" : "light");
    setIsDarkMode(nextIsDarkMode);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed top-20 right-4 sm:top-5 sm:right-5 z-30 p-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
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
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-toggle)";
        e.currentTarget.style.borderColor = "var(--border-card)";
      }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5" aria-hidden="true" style={{ color: "var(--color-blue)" }} />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" style={{ color: "var(--color-purple)" }} />
      )}
    </button>
  );
};
