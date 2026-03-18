"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ElegantShape } from "@/components/ui/ElegantShape";

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
      transition: { type: "spring", stiffness: 80, damping: 20, delay },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Subtle bg gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating elegant shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large shape — top left */}
        <ElegantShape
          delay={0.3}
          width={580}
          height={130}
          rotate={12}
          gradient="from-blue-500/[0.12]"
          className="left-[-8%] top-[18%]"
        />
        {/* Large shape — bottom right */}
        <ElegantShape
          delay={0.5}
          width={480}
          height={110}
          rotate={-15}
          gradient="from-blue-500/[0.12]"
          className="right-[-4%] top-[68%]"
        />
        {/* Medium shape — bottom left */}
        <ElegantShape
          delay={0.4}
          width={280}
          height={72}
          rotate={-8}
          gradient="from-blue-400/[0.10]"
          className="left-[8%] bottom-[12%]"
        />
        {/* Small shape — top right */}
        <ElegantShape
          delay={0.6}
          width={190}
          height={52}
          rotate={20}
          gradient="from-blue-400/[0.10]"
          className="right-[18%] top-[12%]"
        />
        {/* Tiny shape — top center-left */}
        <ElegantShape
          delay={0.7}
          width={140}
          height={38}
          rotate={-25}
          gradient="from-blue-300/[0.08]"
          className="left-[22%] top-[8%]"
        />
      </div>

      {/* Hero content */}
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
            border: "1px solid rgba(37,99,235,0.3)",
            background: "rgba(37,99,235,0.07)",
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm backdrop-blur-sm"
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#2563EB" }}
          />
          <span style={{ color: "#94A3B8" }}>AI Solutions for the Modern World</span>
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
          <span style={{ color: "#E2E8F0" }}>{displayed}</span>
          <span
            className="animate-pulse"
            style={{
              background: "linear-gradient(90deg, #3B82F6, #2563EB)",
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
          className="max-w-xl text-base sm:text-lg leading-relaxed"
          style={{ color: "#94A3B8" }}
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
              background: "linear-gradient(135deg, #3B82F6, #2563EB)",
              boxShadow: "0 4px 24px rgba(59,130,246,0.4)",
              color: "#E2E8F0",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(59,130,246,0.4)";
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
              background: "rgba(37,99,235,0.06)",
              border: "1px solid rgba(37,99,235,0.3)",
              color: "#CBD5E1",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s, border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(37,99,235,0.12)";
              e.currentTarget.style.borderColor = "rgba(37,99,235,0.55)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(37,99,235,0.06)";
              e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)";
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
        <span className="text-xs tracking-widest uppercase" style={{ color: "#94A3B8" }}>Scroll</span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: "linear-gradient(to bottom, #3B82F6, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
