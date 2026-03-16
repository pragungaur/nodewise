"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

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
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(109,92,246,0.15) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)",
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
            border: "1px solid rgba(59,130,246,0.3)",
            background: "rgba(59,130,246,0.07)",
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm text-[#9CA3AF] backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
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
              background: "linear-gradient(90deg, #3B82F6, #6D5CF6)",
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
            className="px-8 py-3.5 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #6D5CF6)",
              boxShadow: "0 0 40px rgba(59,130,246,0.35), 0 0 80px rgba(109,92,246,0.15)",
            }}
          >
            Explore Services
          </a>
          <a
            href="#about"
            style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)" }}
            className="px-8 py-3.5 rounded-full text-white font-semibold text-sm backdrop-blur-sm hover:opacity-80 transition-all"
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
        <div className="w-px h-10 bg-gradient-to-b from-[#3B82F6] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
