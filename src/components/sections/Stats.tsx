"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ElegantShape } from "@/components/ui/ElegantShape";

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

  return (
    <span
      ref={ref}
      style={{
        fontSize: "3rem",
        fontWeight: 700,
        fontFamily: "var(--font-space-grotesk)",
        background: "linear-gradient(135deg, #3B82F6, #2563EB)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        lineHeight: 1,
      }}
    >
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-pad-sm">
      {/* Section background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0}
          width={320}
          height={72}
          rotate={-10}
          gradient="from-blue-500/[0.08]"
          className="right-[2%] top-[10%]"
        />
        <ElegantShape
          delay={0.2}
          width={200}
          height={50}
          rotate={8}
          gradient="from-blue-500/[0.07]"
          className="left-[1%] bottom-[15%]"
        />
      </div>

      <div
        style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}
        className="grid-4col"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            className="stats-card"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "0.5rem",
              borderRadius: "1rem",
              border: "1px solid rgba(37,99,235,0.15)",
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
                background: "linear-gradient(90deg, transparent, #3B82F6, #2563EB, transparent)",
                animation: "shimmer 3s ease-in-out infinite",
                animationDelay: `${i * 0.4}s`,
              }}
            />
            <Counter target={stat.value} suffix={stat.suffix} />
            <span style={{ fontSize: "0.875rem", color: "#94A3B8", fontWeight: 500 }}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
