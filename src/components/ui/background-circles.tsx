"use client";

import { motion } from "framer-motion";

// All border/gradient colors use inline rgba() — Tailwind v4 does not support
// opacity modifiers like border-blue-500/60 so we avoid them entirely here.

const CIRCLES = [
  {
    border: "rgba(59,130,246,0.55)",    // blue-500 ~60%
    gradient: "rgba(59,130,246,0.22)",  // blue-500 ~30%
    rotateDuration: 8,
  },
  {
    border: "rgba(96,165,250,0.42)",    // sky-400 ~50%
    gradient: "rgba(96,165,250,0.12)",
    rotateDuration: 11,
  },
  {
    border: "rgba(71,85,105,0.22)",     // slate-600 ~30%
    gradient: "rgba(56,189,248,0.07)",
    rotateDuration: 15,
  },
];

function AnimatedGrid() {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        WebkitMaskImage:
          "radial-gradient(ellipse at center, transparent 30%, black)",
        maskImage:
          "radial-gradient(ellipse at center, transparent 30%, black)",
        pointerEvents: "none",
      }}
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage:
            "repeating-linear-gradient(100deg, rgba(100,116,139,0.7) 0%, rgba(100,116,139,0.7) 1px, transparent 1px, transparent 4%)",
          opacity: 0.13,
        }}
      />
    </motion.div>
  );
}

export function BackgroundCircles() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <AnimatedGrid />

      {/* Spinning rings */}
      <div style={{ position: "absolute", width: "540px", height: "540px" }}>
        {CIRCLES.map((circle, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              inset: `${i * 20}px`,
              borderRadius: "50%",
              border: `1.5px solid ${circle.border}`,
              background: `linear-gradient(135deg, ${circle.gradient}, transparent 70%)`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.04 + i * 0.03, 1],
              opacity: [0.65, 0.95, 0.65],
            }}
            transition={{
              rotate: {
                duration: circle.rotateDuration,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Central ambient glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
