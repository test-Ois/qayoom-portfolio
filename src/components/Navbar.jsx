// src/components/Navbar.jsx
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3.5 border-b backdrop-blur-md"
          : "py-5 bg-transparent"
      )}
      style={
        isScrolled
          ? {
              background: "var(--bg-nav)",
              borderBottomColor: "var(--border-card)",
            }
          : {}
      }
    >
      <div className="container flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-1.5 group">
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span style={{ color: "var(--color-purple)" }}>Qayoom</span>
            <span style={{ color: "var(--text-heading)" }}> Akhtar</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-md"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-heading)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 z-50 transition-colors duration-200 cursor-pointer"
          style={{ color: "var(--text-heading)" }}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Drawer */}
        <div
          className={cn(
            "fixed inset-0 top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-6 md:hidden transition-all duration-300 z-40",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          style={{
            background: "var(--bg-overlay)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold tracking-tight transition-colors"
              style={{ color: "var(--text-heading)" }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
