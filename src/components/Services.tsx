"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    title: "AI Chatbots & Assistants",
    description: "Custom intelligent chatbots that handle customer queries, bookings, and support — 24/7, without missing a beat.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Automation & Workflows",
    description: "Eliminate repetitive work. We build AI-powered workflows that save hours every day and scale with your team.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "AI Consulting",
    description: "Not sure where to start with AI? We map your business needs to the right strategy and guide you every step of the way.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="28" height="28" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Custom AI Development",
    description: "Need something unique? We design and build tailor-made AI tools, APIs, and products specifically for your business.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
              background: "linear-gradient(90deg, #3B82F6, #6D5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What We Do
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
            Our Services
          </h2>
          <p style={{ marginTop: "1rem", color: "#9CA3AF", maxWidth: "36rem", margin: "1rem auto 0" }}>
            From concept to deployment — we build AI solutions that actually work for your business.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{
                position: "relative",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(59,130,246,0.18)",
                background: "#111827",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(109,92,246,0.15))",
                  border: "1px solid rgba(109,92,246,0.25)",
                  color: "#6D5CF6",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#F9FAFB",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#9CA3AF", lineHeight: 1.65 }}>
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, #3B82F6, #6D5CF6, transparent)",
                  opacity: 0.6,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
