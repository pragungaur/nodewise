"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ElegantShape } from "@/components/ui/ElegantShape";

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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="section-pad">
      {/* Section background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.1}
          width={500}
          height={110}
          rotate={-6}
          gradient="from-blue-500/[0.09]"
          className="left-[-6%] top-[8%]"
        />
        <ElegantShape
          delay={0.3}
          width={360}
          height={80}
          rotate={14}
          gradient="from-blue-500/[0.08]"
          className="right-[-4%] bottom-[12%]"
        />
        <ElegantShape
          delay={0.5}
          width={180}
          height={46}
          rotate={-20}
          gradient="from-blue-400/[0.07]"
          className="right-[25%] top-[5%]"
        />
      </div>

      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
              background: "linear-gradient(90deg, #3B82F6, #2563EB)",
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
              color: "#CBD5E1",
              fontFamily: "var(--font-space-grotesk)",
              lineHeight: 1.1,
            }}
          >
            Our Services
          </h2>
          <p style={{ marginTop: "1rem", color: "#94A3B8", maxWidth: "36rem", margin: "1rem auto 0" }}>
            From concept to deployment — we build AI solutions that actually work for your business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid-2col">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(37,99,235,0.15)",
                background: "#111827",
                overflow: "hidden",
                cursor: "default",
                transition: "box-shadow 0.25s",
              }}
            >
              {/* Top border glow on hover */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, #3B82F6, #2563EB, transparent)",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15))",
                  border: `1px solid ${hovered === i ? "rgba(37,99,235,0.45)" : "rgba(37,99,235,0.2)"}`,
                  color: "#2563EB",
                  transition: "border-color 0.2s",
                }}
              >
                {service.icon}
              </motion.div>

              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#CBD5E1",
                  marginBottom: "0.75rem",
                  fontFamily: "var(--font-space-grotesk)",
                }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.65 }}>
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
                  background: "linear-gradient(90deg, transparent, #3B82F6, #2563EB, transparent)",
                  opacity: 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
