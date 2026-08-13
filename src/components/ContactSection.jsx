// src/components/ContactSection.jsx
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Github, CheckCircle2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm font-sans tracking-wide transition-all duration-200 resize-none outline-none border focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  const handleTextareaChange = (e) => {
    setFormValues({ ...formValues, message: e.target.value });
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = `${Math.max(ta.scrollHeight, 120)}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formValues;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      toast({
        title: "Validation Error",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      setFormValues({ name: "", email: "", message: "" });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      toast({
        title: "Failed to send message",
        description: error?.text || error?.message || "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    {
      href: "https://www.linkedin.com/in/qayoom-akhtar",
      Icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/test-Ois",
      Icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/qayoom.akhtar",
      Icon: Instagram,
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(130,84,238,0.08), transparent)",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <Reveal>
          {/* Section badge */}
          <div className="flex justify-center mb-4">
            <span className="section-label">Contact</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight">
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8254EE, #00C2FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-center mb-14 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base" style={{ color: "#82717B" }}>
            Full Stack Engineer passionate about scalable applications, AI solutions, and modern web development.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ── Left Column: Contact Information ── */}
          <Reveal className="md:col-span-5 space-y-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-left tracking-tight">
                Contact Information
              </h3>
              <p className="text-sm leading-relaxed mb-8 text-left" style={{ color: "#82717B" }}>
                Whether you have a question about a project, a full-time engineering opportunity, or just want to connect, feel free to reach out.
              </p>

              <div className="space-y-5">
                {[
                  {
                    Icon: Mail,
                    label: "Email",
                    value: "qayoomakhtar72@gmail.com",
                    href: "mailto:qayoomakhtar72@gmail.com",
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    value: "+91 9798413263",
                    href: "tel:+919798413263",
                  },
                  {
                    Icon: MapPin,
                    label: "Location",
                    value: "Mohali, Punjab, India",
                    href: null,
                  },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start space-x-4">
                    <div
                      className="p-3 rounded-xl shrink-0"
                      style={{
                        background: "rgba(130,84,238,0.1)",
                        border: "1px solid rgba(130,84,238,0.2)",
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#8254EE" }} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xs tracking-wider uppercase mb-0.5" style={{ color: "#82717B" }}>
                        {label}
                      </h4>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm font-medium transition-colors duration-200 hover:text-purple-400 break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 text-left border-t border-purple-900/15">
              <h4 className="font-semibold text-xs uppercase tracking-wider mb-4" style={{ color: "#82717B" }}>
                Connect With Me
              </h4>
              <div className="flex space-x-3">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"
                    style={{
                      background: "rgba(59,53,60,0.25)",
                      border: "1px solid rgba(130,84,238,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(130,84,238,0.6)";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(130,84,238,0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(130,84,238,0.2)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={18} style={{ color: "#8254EE" }} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Right Column: Clean Professional Contact Form Card ── */}
          <Reveal delay={0.1} className="md:col-span-7">
            <motion.div
              animate={
                isShaking ? { x: [-5, 5, -5, 5, -2, 2, 0] } : {}
              }
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl p-6 sm:p-8 text-left transition-all duration-300"
              style={{
                background: "rgba(59, 53, 60, 0.16)",
                border: "1px solid rgba(130, 84, 238, 0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
              }}
            >
              {/* Form Card Header */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1.5">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#82717B" }}>
                  Have a project, opportunity, or question? I&apos;d love to hear from you.
                </p>
              </div>

              {/* Form Fields */}
              <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#82717B" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formValues.name}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                    style={{
                      background: "rgba(59,53,60,0.22)",
                      borderColor: "rgba(130,84,238,0.18)",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#82717B" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formValues.email}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    className={inputClass}
                    placeholder="your@email.com"
                    style={{
                      background: "rgba(59,53,60,0.22)",
                      borderColor: "rgba(130,84,238,0.18)",
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "#82717B" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formValues.message}
                    onChange={handleTextareaChange}
                    className={inputClass}
                    placeholder="Tell me about your project..."
                    style={{
                      background: "rgba(59,53,60,0.22)",
                      borderColor: "rgba(130,84,238,0.18)",
                    }}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-purple-500/20 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #8254EE, #6d3fd4)",
                    }}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={15} />
                    )}
                  </button>
                </div>
              </form>

              {/* Success Confirmation Modal/Overlay */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20 text-center rounded-2xl"
                  style={{
                    background: "rgba(9, 9, 9, 0.95)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-purple-500/10 border border-purple-500/30 text-purple-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm max-w-xs mb-6 leading-relaxed" style={{ color: "#82717B" }}>
                    Thank you for reaching out. Your message has been delivered, and I will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-all duration-200 cursor-pointer"
                  >
                    <span>Send Another Message</span>
                    <ArrowRight size={13} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};