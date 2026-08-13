// src/components/Navbar.jsx
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled
          ? "py-3 border-b"
          : "py-5 bg-transparent"
      )}
      style={
        isScrolled
          ? {
              background: "rgba(9,9,9,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottomColor: "rgba(130,84,238,0.18)",
            }
          : {}
      }
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space)" }}
          >
            <span
              className="text-glow"
              style={{
                background: "linear-gradient(135deg, #8254EE, #b08af5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Qayoom
            </span>
            <span className="text-white"> Akhtar</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group"
              style={{ color: "#C1CFC1" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#8254EE";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#C1CFC1";
              }}
            >
              {item.name}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg, #8254EE, #00C2FF)" }}
              />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 z-50 transition-colors duration-300 cursor-pointer"
          style={{ color: isMenuOpen ? "#8254EE" : "#C1CFC1" }}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer */}
        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden transition-all duration-400",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{
            background: "rgba(9,9,9,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Ambient purple glow */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(130,84,238,0.15), transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div className="flex flex-col space-y-8 text-center relative z-10">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-2xl font-bold transition-all duration-300"
                style={{ color: "#C1CFC1", fontFamily: "var(--font-space)" }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#8254EE";
                  e.currentTarget.style.textShadow = "0 0 20px rgba(130,84,238,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#C1CFC1";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
