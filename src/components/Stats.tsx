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
    <section style={{ padding: "5rem 2rem", position: "relative" }}>
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "0.5rem",
              padding: "2rem 1.5rem",
              borderRadius: "1rem",
              border: "1px solid rgba(59,130,246,0.2)",
              background: "#111827",
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                fontWeight: 700,
                fontFamily: "var(--font-space-grotesk)",
                background: "linear-gradient(135deg, #3B82F6, #6D5CF6)",
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
