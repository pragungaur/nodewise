"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import { BackgroundCircles } from "@/components/ui/background-circles";

const WORDS = [
  "Building the Future with AI.",
  "Automating Your Business.",
  "Delivering Smart Solutions.",
  "Powering Growth with AI.",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = WORDS[wordIndex];

    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, wordIndex]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Background circles animation */}
      <BackgroundCircles />

      {/* Gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "-10%",
          width: "50vw",
          height: "50vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "-10%",
          width: "40vw",
          height: "40vw",
          maxWidth: "600px",
          maxHeight: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "30vw",
          maxWidth: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 60%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{ maxWidth: "56rem", margin: "0 auto", width: "100%", padding: "0 1.5rem" }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            border: "1px solid rgba(96,165,250,0.3)",
            background: "rgba(96,165,250,0.07)",
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm text-[#9CA3AF] backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" />
          AI Solutions for the Modern World
        </motion.div>

        {/* Typewriter headline */}
        <motion.h1
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="text-white">{displayed}</span>
          <span
            className="animate-pulse"
            style={{
              background: "linear-gradient(90deg, #60A5FA, #38BDF8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            |
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl text-base sm:text-lg text-[#9CA3AF] leading-relaxed"
        >
          NodeWise crafts intelligent AI systems that help businesses grow faster,
          work smarter, and stay ahead of the curve.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, #3B82F6, #60A5FA)",
              boxShadow: "0 4px 24px rgba(59,130,246,0.45), 0 1px 0 rgba(255,255,255,0.12) inset",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.55), 0 1px 0 rgba(255,255,255,0.12) inset";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(59,130,246,0.45), 0 1px 0 rgba(255,255,255,0.12) inset";
            }}
          >
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 2rem",
              borderRadius: "0.75rem",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(96,165,250,0.35)",
              color: "#E2E8F0",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(96,165,250,0.1)";
              e.currentTarget.style.borderColor = "rgba(96,165,250,0.6)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              e.currentTarget.style.borderColor = "rgba(96,165,250,0.35)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Meet the Founder
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#9CA3AF] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#60A5FA] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
