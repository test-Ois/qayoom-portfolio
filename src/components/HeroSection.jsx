import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import {
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const techStack = [
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: SiGithub },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express", Icon: SiExpress },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Next.js", Icon: SiNextdotjs },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center z-10 max-w-4xl space-y-12">
        {/* Centered Content */}
        <div className="flex flex-col items-center space-y-6 max-w-3xl">
          <h3 className="text-xl text-muted-foreground">
            Hello, I&apos;m
          </h3>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-primary">Qayoom</span>{" "}
            <span className="text-gradient">Akhtar</span>
          </h1>


          <h2 className="text-2xl md:text-4xl font-semibold ml-28">
            <span className="mr-2 text-white">I&apos;m a</span>

            <span className="inline-block min-w-[350px] md:min-w-[420px] text-left font-bold">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Building scalable web applications and AI-powered
            solutions with modern technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <a
              href="https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
              className="px-6 py-3 border border-primary rounded-full hover:bg-primary/10 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Infinite Horizontal Tech Marquee */}
        <div className="w-full relative overflow-hidden py-6 mt-6">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-8 whitespace-nowrap">
            {/* First Set */}
            <div className="flex shrink-0 gap-10 min-w-max items-center">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 text-foreground/75 hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] cursor-pointer"
                >
                  <tech.Icon size={24} className="shrink-0" />
                  <span className="font-semibold text-lg md:text-xl tracking-wide select-none">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Second Set (Duplicate) */}
            <div className="flex shrink-0 gap-10 min-w-max items-center">
              {techStack.map((tech, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="flex items-center gap-1 text-foreground/75 hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] cursor-pointer"
                >
                  <tech.Icon size={24} className="shrink-0" />
                  <span className="font-semibold text-lg md:text-xl tracking-wide select-none">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};