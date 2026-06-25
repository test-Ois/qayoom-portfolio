// src/components/AboutSection.jsx
import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <Reveal className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-left tracking-tight">
              Passionate Web Developer & AI Enthusiast
            </h3>

            <p className="text-muted-foreground text-left font-sans leading-relaxed">
              Full Stack Engineer with 1+ years of experience building scalable
              applications using Next.js, React, Node.js, and the MERN stack.
              Focused on performance, clean architecture, and real-world
              solutions.
            </p>

            <p className="text-muted-foreground text-left font-sans leading-relaxed">
              Currently developing AI-powered applications and production-ready
              systems while expanding my expertise in system design, cloud
              technologies, and software engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="cosmic-button text-center font-sans">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center font-sans font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Card 1: Full Stack Development */}
            <div className="bg-[#0f1219]/40 border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#8b5cf6]/30 hover:shadow-[0_4px_24px_rgba(139,92,246,0.1)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg tracking-tight"> Full Stack Development</h4>
                  <p className="text-muted-foreground font-sans text-sm mt-1 leading-relaxed">
                    Building scalable web applications with Next.js, React, Node.js, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: AI-Powered Solutions */}
            <div className="bg-[#0f1219]/40 border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#8b5cf6]/30 hover:shadow-[0_4px_24px_rgba(139,92,246,0.1)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg tracking-tight">AI-Powered Solutions</h4>
                  <p className="text-muted-foreground font-sans text-sm mt-1 leading-relaxed">
                    Developing intelligent applications using OpenAI, Gemini, and modern ML/LLM integrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: System Design */}
            <div className="bg-[#0f1219]/40 border border-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#8b5cf6]/30 hover:shadow-[0_4px_24px_rgba(139,92,246,0.1)]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-lg tracking-tight">System Design</h4>
                  <p className="text-muted-foreground font-sans text-sm mt-1 leading-relaxed">
                    Designing clean architectures, REST APIs, and production-ready systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
