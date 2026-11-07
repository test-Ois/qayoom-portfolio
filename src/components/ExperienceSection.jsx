// src/components/ExperienceSection.jsx
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const workExperience = [
  {
    role: "Full Stack Development Intern",
    company: "Infotech Service",
    type: "Internship",
    location: "India",
    summary:
      "Engineered frontend components and connected end-to-end RESTful APIs for production features.",
    bulletPoints: [
      "Built reusable React UI components across core features, standardizing styling and component contracts.",
      "Integrated client interfaces with backend REST APIs, reducing server roundtrip latency by 15–20% through payload pruning.",
      "Improved client rendering performance using route-level lazy loading and component memoization.",
      "Maintained clean API integration layers with structured error handling and loading fallbacks.",
    ],
    tech: ["React.js", "JavaScript", "Node.js", "REST APIs", "Tailwind CSS"],
  },
  {
    role: "AI & ML Trainee",
    company: "Chandigarh University",
    type: "Academic Training",
    location: "Mohali, Punjab",
    summary:
      "Trained classical machine learning models and implemented data preprocessing pipelines.",
    bulletPoints: [
      "Built supervised learning pipelines with Python and Scikit-learn for classification and regression tasks.",
      "Handled dataset cleaning, exploratory data analysis (EDA), and feature normalization.",
      "Evaluated model performance using precision, recall, F1 score, and ROC-AUC curves.",
    ],
    tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Data Preprocessing"],
  },
];

const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "Chandigarh University",
  location: "Mohali, Punjab, India",
  period: "2022 – 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <Reveal className="container mx-auto max-w-5xl">
        <div className="flex justify-center mb-3">
          <span className="section-label">Trajectory</span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center tracking-tight"
          style={{ color: "var(--text-heading)" }}
        >
          Experience &amp; Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Work Experience Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={18} style={{ color: "var(--color-purple)" }} />
              <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--text-heading)" }}>
                Work History
              </h3>
            </div>

            <div className="space-y-4">
              {workExperience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                  }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-bold text-base sm:text-lg" style={{ color: "var(--text-heading)" }}>
                      {item.role}
                    </h4>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        background: "var(--bg-pill)",
                        color: "var(--color-purple)",
                        border: "1px solid var(--border-tag)",
                      }}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                    <span className="font-medium" style={{ color: "var(--text-body)" }}>
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: "var(--text-body)" }}>
                    {item.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs sm:text-sm list-disc pl-4 mb-4" style={{ color: "var(--text-muted)" }}>
                    {item.bulletPoints.map((bp, i) => (
                      <li key={i} className="leading-relaxed">
                        {bp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono"
                        style={{
                          background: "var(--bg-tag)",
                          color: "var(--text-body)",
                          border: "1px solid var(--border-tag)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={18} style={{ color: "var(--color-purple)" }} />
              <h3 className="text-lg font-bold tracking-tight" style={{ color: "var(--text-heading)" }}>
                Education
              </h3>
            </div>

            <div
              className="p-5 sm:p-6 rounded-xl text-left"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
              }}
            >
              <span
                className="text-xs font-mono px-2 py-0.5 rounded inline-block mb-3"
                style={{
                  background: "var(--bg-pill)",
                  color: "var(--color-purple)",
                  border: "1px solid var(--border-tag)",
                }}
              >
                {education.period}
              </span>

              <h4 className="font-bold text-base sm:text-lg mb-1" style={{ color: "var(--text-heading)" }}>
                {education.degree}
              </h4>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--text-body)" }}>
                {education.institution}
              </p>
              <p className="text-xs flex items-center gap-1 mb-4" style={{ color: "var(--text-muted)" }}>
                <MapPin size={12} /> {education.location}
              </p>

              <div className="pt-3 border-t" style={{ borderColor: "var(--border-section)" }}>
                <h5 className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "var(--text-muted)" }}>
                  Core Curriculum
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        background: "var(--bg-tag)",
                        color: "var(--text-body)",
                        border: "1px solid var(--border-tag)",
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
