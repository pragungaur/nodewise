"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem" }}>
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ position: "relative" }}>
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "1.5rem",
                background: "linear-gradient(135deg, #3B82F6, #6D5CF6)",
                filter: "blur(20px)",
                opacity: 0.45,
              }}
            />
            {/* Card */}
            <div
              style={{
                position: "relative",
                width: "18rem",
                height: "22rem",
                borderRadius: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.2))",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "7rem",
                  height: "7rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#fff",
                  background: "linear-gradient(135deg, #3B82F6, #6D5CF6)",
                  fontFamily: "var(--font-space-grotesk)",
                  boxShadow: "0 0 30px rgba(59,130,246,0.4)",
                }}
              >
                PG
              </div>
              <div style={{ textAlign: "center", padding: "0 1rem" }}>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "1.125rem", fontFamily: "var(--font-space-grotesk)" }}>
                  Pragun Gaur
                </p>
                <p style={{ color: "#9CA3AF", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                  Founder & CEO, NodeWise
                </p>
              </div>
              <div
                style={{
                  padding: "0.375rem 1rem",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#fff",
                  background: "linear-gradient(90deg, #3B82F6, #6D5CF6)",
                }}
              >
                13-Year-Old Founder
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, #3B82F6, #6D5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About the Founder
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#F9FAFB",
                marginTop: "0.75rem",
                fontFamily: "var(--font-space-grotesk)",
                lineHeight: 1.2,
              }}
            >
              Young Vision,{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #6D5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real Impact
              </span>
            </h2>
          </div>

          {[
            "Hi, I'm Pragun Gaur — a 13-year-old entrepreneur and the founder of NodeWise. I started this company with one clear goal: to make AI accessible and useful for businesses of all sizes.",
            "I believe that age is just a number when it comes to building great things. At NodeWise, we combine youthful creativity with deep technical expertise to deliver AI solutions that genuinely move the needle for our clients.",
            "NodeWise isn't just a company — it's a statement that the future belongs to those bold enough to build it.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{ color: "#9CA3AF", lineHeight: 1.75, fontSize: "0.95rem" }}
            >
              {text}
            </motion.p>
          ))}

          {/* Info grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.5rem" }}>
            {[
              { label: "Founded", value: "2024" },
              { label: "Age at founding", value: "13" },
              { label: "Focus", value: "AI Solutions" },
              { label: "HQ", value: "India" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                style={{
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(59,130,246,0.2)",
                  background: "#111827",
                }}
              >
                <p style={{ fontSize: "0.7rem", color: "#9CA3AF", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {item.label}
                </p>
                <p style={{ color: "#F9FAFB", fontWeight: 600, fontFamily: "var(--font-space-grotesk)" }}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
