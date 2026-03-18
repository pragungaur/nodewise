"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "NodeWise built us a custom AI chatbot in record time. Our support load dropped 40% in the first month.",
    name: "Arjun Mehta",
    role: "Founder, RetailEdge",
  },
  {
    quote: "Working with Pragun felt like working with a seasoned professional. The AI workflow he designed saves our team 3 hours daily.",
    name: "Priya Sharma",
    role: "Operations Manager, SwiftLogix",
  },
  {
    quote: "I was skeptical at first, but NodeWise showed me exactly where AI could help. The ROI was clear within weeks.",
    name: "Rohan Kapoor",
    role: "Director, FinServe Consultants",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad">
      {/* Single subtle orb */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "5%",
          width: "22rem",
          height: "22rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 65%)",
          filter: "blur(22px)",
          animation: "floatY 14s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="testimonials-header"
          style={{ textAlign: "center" }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
              background: "linear-gradient(90deg, #60A5FA, #38BDF8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Client Stories
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#F9FAFB",
              fontFamily: "var(--font-space-grotesk)",
              lineHeight: 1.1,
            }}
          >
            What Our Clients Say
          </h2>
          <p style={{ marginTop: "1rem", color: "#9CA3AF", maxWidth: "36rem", margin: "1rem auto 0" }}>
            Real results from real businesses. Here&apos;s what people say about working with NodeWise.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid-3col">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                position: "relative",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(96,165,250,0.15)",
                background: "#111827",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.25rem" }}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} style={{ color: "#60A5FA", fontSize: "1rem" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: "0.925rem",
                  color: "#D1D5DB",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Separator */}
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    fontFamily: "var(--font-space-grotesk)",
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ color: "#F9FAFB", fontWeight: 600, fontSize: "0.875rem", fontFamily: "var(--font-space-grotesk)" }}>
                    {t.name}
                  </p>
                  <p style={{ color: "#9CA3AF", fontSize: "0.75rem", marginTop: "0.1rem" }}>
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #60A5FA, #38BDF8, transparent)",
                  opacity: 0.35,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
