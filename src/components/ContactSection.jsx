// src/components/ContactSection.jsx
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const inputClass =
  "w-full px-3.5 py-2.5 rounded-lg text-sm font-sans transition-all duration-200 outline-none border focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500";

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
    ta.style.height = `${Math.max(ta.scrollHeight, 110)}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formValues;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      toast({
        title: "Missing Fields",
        description: "Please complete all fields before sending.",
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
        title: "Message delivered",
        description: "Thanks for reaching out. I will reply shortly.",
      });
      setFormValues({ name: "", email: "", message: "" });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      toast({
        title: "Delivery error",
        description: error?.text || error?.message || "Please email directly at qayoomakhtar72@gmail.com.",
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
      href: "mailto:qayoomakhtar72@gmail.com",
      Icon: Mail,
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <div className="flex justify-center mb-3">
            <span className="section-label">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight" style={{ color: "var(--text-heading)" }}>
            Get In Touch
          </h2>
          <p className="text-center mb-10 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Available for full-time software engineering roles, internships, and technical discussions.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <Reveal className="md:col-span-5 space-y-6 text-left">
            <div>
              <h3 className="text-xl font-bold mb-3 tracking-tight" style={{ color: "var(--text-heading)" }}>
                Contact Details
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                Feel free to email me directly or send a message through the form. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
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
                  <div
                    key={label}
                    className="flex items-center gap-3.5 p-3 rounded-lg"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                    }}
                  >
                    <div
                      className="p-2 rounded-md shrink-0"
                      style={{
                        background: "var(--bg-pill)",
                        color: "var(--color-purple)",
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-xs sm:text-sm font-medium transition-colors hover:underline truncate block"
                          style={{ color: "var(--text-heading)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-xs sm:text-sm font-medium" style={{ color: "var(--text-heading)" }}>
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
                Profiles
              </h4>
              <div className="flex gap-2.5">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal delay={0.08} className="md:col-span-7">
            <motion.div
              animate={isShaking ? { x: [-4, 4, -4, 4, 0] } : {}}
              transition={{ duration: 0.35 }}
              className="relative rounded-xl p-6 sm:p-7 text-left"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
              }}
            >
              <h3 className="text-lg font-bold tracking-tight mb-1" style={{ color: "var(--text-heading)" }}>
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm mb-5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I will get back to you directly via email.
              </p>

              <form ref={formRef} className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-body)" }}
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
                      background: "var(--bg-input)",
                      borderColor: "var(--border-input)",
                      color: "var(--text-heading)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-body)" }}
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
                    placeholder="you@domain.com"
                    style={{
                      background: "var(--bg-input)",
                      borderColor: "var(--border-input)",
                      color: "var(--text-heading)",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: "var(--text-body)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formValues.message}
                    onChange={handleTextareaChange}
                    className={inputClass}
                    placeholder="Your message..."
                    style={{
                      background: "var(--bg-input)",
                      borderColor: "var(--border-input)",
                      color: "var(--text-heading)",
                    }}
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-lg font-medium text-sm text-white transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    style={{ background: "var(--color-purple)" }}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {isSubmitting ? (
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                  </button>
                </div>
              </form>

              {isSuccess && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center rounded-xl z-20"
                  style={{
                    background: "var(--bg-card)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{
                      background: "var(--bg-pill)",
                      color: "var(--color-green)",
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold mb-1" style={{ color: "var(--text-heading)" }}>
                    Message Sent
                  </h4>
                  <p className="text-xs max-w-xs mb-5" style={{ color: "var(--text-muted)" }}>
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-white transition-opacity cursor-pointer"
                    style={{ background: "var(--color-purple)" }}
                  >
                    <span>Send Another</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
