// src/pages/Home.jsx
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AIChat } from "@/components/AIChat";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--bg-page)", color: "var(--text-body)" }}>
      <ThemeToggle />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};
