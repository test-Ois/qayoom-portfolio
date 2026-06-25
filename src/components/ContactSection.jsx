// src/components/ContactSection.jsx
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const LeetCodeIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

LeetCodeIcon.propTypes = {
  className: PropTypes.string,
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();

  // Local card reference for subtle 3D tilt calculations
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleCardMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Bypassed on mobile screens
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Minimal, organic 3D tilt pitch/roll (capped at 2.2 degrees for premium subtlety)
    const angleX = -((y - centerY) / centerY) * 2.2;
    const angleY = ((x - centerX) / centerX) * 2.2;
    setRotateX(angleX);
    setRotateY(angleY);
  };

  const handleCardMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleTextareaChange = (e) => {
    setFormValues({ ...formValues, message: e.target.value });
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.max(textarea.scrollHeight, 120)}px`; // Auto-grow dynamically
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom Validation UX
    const { name, email, message } = formValues;
    if (!name || !email || !message) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Shakes card horizontally
      toast({
        title: "Validation Error",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form values
      setFormValues({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send message via EmailJS:", error);

      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);

      toast({
        title: "Failed to send message",
        description: error?.text || error?.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <Reveal className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Full Stack Engineer passionate about scalable applications, AI solutions, and modern web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Contact Information Panel (COMPLETELY UNTOUCHED) */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-left">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:qayoomakhtar72@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      qayoomakhtar72@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+919798413263"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9798413263
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Mohali, Punjab, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 text-left">
              <h4 className="font-medium mb-4">Connect With Me</h4>

              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/qayoom-akhtar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://github.com/test-Ois"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/80 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <LeetCodeIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Redesigned Premium Glassmorphism Terminal Card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            animate={
              isShaking
                ? { x: [-5, 5, -5, 5, -2, 2, 0], y: 0, rotateX: 0, rotateY: 0 }
                : {
                  rotateX,
                  rotateY,
                  y: rotateX || rotateY ? -4 : 0,
                }
            }
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 25,
              mass: 0.4,
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            className="rounded-[20px] border border-white/10 bg-[#0f1219]/75 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col text-left font-sans"
          >
            {/* Confined Ambient Glowing Orbs Inside Card (Faint and Atmospheric) */}
            <motion.div
              className="absolute top-[-25%] left-[-25%] w-64 h-64 rounded-full bg-[#8b5cf6]/3 blur-[80px] pointer-events-none -z-10"
              animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-25%] right-[-25%] w-64 h-64 rounded-full bg-[#6366f1]/2 blur-[90px] pointer-events-none -z-10"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Subtle Faint Noise overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,#000000_1px)] bg-[size:4px_4px] opacity-[0.08] pointer-events-none -z-10" />

            {/* Refined Terminal Header */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-white/[0.01] border-b border-white/5 select-none">
              {/* macOS Traffic Lights */}
              <div className="flex space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/85 cursor-pointer"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/85 cursor-pointer"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/85 cursor-pointer"></span>
              </div>

              {/* Terminal Title */}
              <div className="flex items-center gap-1.5">
                <span className="text-zinc-500 text-xs font-mono select-none font-bold">Contact Me</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "steps(2)" }}
                  className="w-1 h-3 bg-[#8b5cf6]/60"
                />
              </div>

              {/* Minimal Status Badge */}
              <div className="flex items-center gap-1.5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-zinc-500 text-[10px] font-mono">online</span>
              </div>
            </div>

            {/* Form Container (Clean Spacing and Breathing Room) */}
            <div className="p-8 flex-1 flex flex-col justify-center">
              <form
                ref={formRef}
                className="space-y-6"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formValues.name}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-zinc-100 placeholder-transparent focus:outline-none focus:border-[#8b5cf6]/50 focus:shadow-[0_0_12px_rgba(139,92,246,0.1)] font-sans text-sm tracking-wide transition-all duration-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] caret-[#8b5cf6]"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className={cn(
                      "absolute left-4 pointer-events-none transition-all duration-250 font-mono select-none text-xs",
                      focusedField === "name" || formValues.name.length > 0
                        ? "-top-2 left-3 text-[#8b5cf6] bg-[#0f1219] px-1.5 border border-white/5 rounded"
                        : "text-zinc-500 top-3.5"
                    )}
                  >
                    name...
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formValues.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-zinc-100 placeholder-transparent focus:outline-none focus:border-[#8b5cf6]/50 focus:shadow-[0_0_12px_rgba(139,92,246,0.1)] font-sans text-sm tracking-wide transition-all duration-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] caret-[#8b5cf6]"
                    placeholder="Your Email"
                  />
                  <label
                    htmlFor="email"
                    className={cn(
                      "absolute left-4 pointer-events-none transition-all duration-250 font-mono select-none text-xs",
                      focusedField === "email" || formValues.email.length > 0
                        ? "-top-2 left-3 text-[#8b5cf6] bg-[#0f1219] px-1.5 border border-white/5 rounded"
                        : "text-zinc-500 top-3.5"
                    )}
                  >
                    email address...
                  </label>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formValues.message}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleTextareaChange}
                    className="w-full px-4 py-3.5 bg-white/[0.02] border border-white/5 rounded-xl text-zinc-100 placeholder-transparent focus:outline-none focus:border-[#8b5cf6]/50 focus:shadow-[0_0_12px_rgba(139,92,246,0.1)] font-sans text-sm tracking-wide transition-all duration-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] caret-[#8b5cf6] resize-none scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent min-h-[120px]"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="message"
                    className={cn(
                      "absolute left-4 pointer-events-none transition-all duration-250 font-mono select-none text-xs",
                      focusedField === "message" || formValues.message.length > 0
                        ? "-top-2 left-3 text-[#8b5cf6] bg-[#0f1219] px-1.5 border border-white/5 rounded"
                        : "text-zinc-500 top-3.5"
                    )}
                  >
                    Write message...
                  </label>
                </div>

                {/* Premium Subtle CTA Send Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-semibold font-sans text-sm tracking-wide shadow-[0_2px_8px_rgba(139,92,246,0.2)] hover:shadow-[0_4px_16px_rgba(139,92,246,0.3)] transition-all duration-300 overflow-hidden cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? " Sending..." : " Send message"}</span>
                  <motion.span
                    className="inline-block"
                    animate={isSubmitting ? { rotate: 360 } : {}}
                    transition={isSubmitting ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                  >
                    <Send size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.span>
                </motion.button>
              </form>
            </div>

            {/* Premium Drawing Success Screen Overlay */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-[#0f1219]/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 z-20 text-center rounded-[19px]"
              >
                {/* Self-drawing Green Checkmark */}
                <div className="w-16 h-16 flex items-center justify-center mb-5 text-emerald-500">
                  <svg className="w-full h-full" viewBox="0 0 52 52">
                    <motion.circle
                      cx="26"
                      cy="26"
                      r="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 27l7 7 14-14"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-zinc-100 mb-2 font-sans">
                  Message Sent
                </h3>
                <p className="text-zinc-400 text-xs max-w-xs mb-8 leading-relaxed font-sans">
                  Thank you for reaching out. Your message was delivered successfully, and I will get back to you shortly.
                </p>

                {/* Reset Terminal Button */}
                <motion.button
                  onClick={() => setIsSuccess(false)}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 rounded-xl border border-emerald-500/20 bg-emerald-950/15 text-emerald-400 hover:bg-emerald-500 hover:text-black font-sans text-xs transition-all duration-300 shadow-[0_2px_10px_rgba(16,185,129,0.05)] cursor-pointer font-semibold"
                >
                  $ write new_message
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};