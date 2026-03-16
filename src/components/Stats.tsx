"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "", label: "AI Products Built" },
  { value: 1, suffix: "", label: "Young Founder" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (1500 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section style={{ padding: "5rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Single background orb */}
      <div style={{ position: "absolute", top: "-2rem", right: "5%", width: "28rem", height: "28rem", borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.22) 0%, transparent 65%)", filter: "blur(20px)", animation: "floatDrift 14s ease-in-out infinite", pointerEvents: "none" }} />
      <div
        style={{ maxWidth: "72rem", margin: "0 auto" }}
        className="grid-4col"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "0.5rem",
              padding: "2rem 1.5rem",
              borderRadius: "1rem",
              border: "1px solid rgba(59,130,246,0.2)",
              background: "#111827",
              overflow: "hidden",
            }}
          >
            {/* Shimmer top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "20%",
                right: "20%",
                height: "2px",
                borderRadius: "0 0 2px 2px",
                background: "linear-gradient(90deg, transparent, #60A5FA, #38BDF8, transparent)",
                animation: "shimmer 3s ease-in-out infinite",
                animationDelay: `${i * 0.4}s`,
              }}
            />
            <span
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                fontFamily: "var(--font-space-grotesk)",
                background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
            </span>
            <span style={{ fontSize: "0.875rem", color: "#9CA3AF", fontWeight: 500 }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
