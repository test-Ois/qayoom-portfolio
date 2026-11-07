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
    // LocalStorage fallback
  }
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const shouldUseDarkMode = getStoredTheme() !== "light";
    setIsDarkMode(shouldUseDarkMode);
    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
    if (shouldUseDarkMode) storeTheme("dark");
  }, []);

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
      className="fixed top-4 right-4 sm:top-4 sm:right-6 z-50 p-2.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        color: "var(--text-heading)",
        boxShadow: "var(--shadow-toggle)",
      }}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      title={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
};
