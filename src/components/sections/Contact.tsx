"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ElegantShape } from "@/components/ui/ElegantShape";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Phone must be exactly 10 digits
    if (!/^\d{10}$/.test(form.phone.replace(/\s+/g, ""))) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    // Client-side rate limit: 2 submissions per hour per browser
    const sentRaw = localStorage.getItem("nw_contact_sent");
    const sentTimes: number[] = sentRaw ? JSON.parse(sentRaw) : [];
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    const recent = sentTimes.filter((t) => t > oneHourAgo);
    if (recent.length >= 2) {
      setError("You've reached the submission limit. Please try again later.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://formspree.io/f/xlgpalwy", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      recent.push(Date.now());
      localStorage.setItem("nw_contact_sent", JSON.stringify(recent));
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-pad">
      {/* Section background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.2}
          width={380}
          height={85}
          rotate={8}
          gradient="from-blue-500/[0.08]"
          className="left-[-4%] bottom-[25%]"
        />
        <ElegantShape
          delay={0.4}
          width={240}
          height={58}
          rotate={-16}
          gradient="from-blue-400/[0.07]"
          className="right-[5%] bottom-[20%]"
        />
      </div>
      <div style={{ maxWidth: "42rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
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
            Get in Touch
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#CBD5E1",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Let&apos;s Build Something
          </h2>
          <p style={{ marginTop: "1rem", color: "#94A3B8" }}>
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="contact-card"
          style={{
            position: "relative",
            borderRadius: "1.5rem",
            border: "1px solid rgba(37,99,235,0.2)",
            background: "#111827",
            overflow: "hidden",
          }}
        >
          {/* Top border accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #3B82F6, #2563EB, transparent)",
              opacity: 0.6,
            }}
          />

          {/* Glow blob */}
          <div
            style={{
              position: "absolute",
              top: "-5rem",
              right: "-5rem",
              width: "15rem",
              height: "15rem",
              borderRadius: "50%",
              background: "#2563EB",
              filter: "blur(80px)",
              opacity: 0.07,
              pointerEvents: "none",
            }}
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "2rem 0", textAlign: "center" }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#E2E8F0" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#CBD5E1", fontFamily: "var(--font-space-grotesk)" }}>
                Message Sent!
              </h3>
              <p style={{ color: "#94A3B8" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="grid-2col">
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.7rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="input-field"
                      style={{
                        width: "100%",
                        background: "#0A0A0F",
                        border: "1px solid rgba(37,99,235,0.2)",
                        borderRadius: "0.75rem",
                        padding: "0.75rem 1rem",
                        fontSize: "0.875rem",
                        color: "#CBD5E1",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.7rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="input-field"
                  style={{
                    width: "100%",
                    background: "#0A0A0F",
                    border: "1px solid rgba(37,99,235,0.2)",
                    borderRadius: "0.75rem",
                    padding: "0.75rem 1rem",
                    fontSize: "0.875rem",
                    color: "#CBD5E1",
                    outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.7rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="input-field"
                  style={{
                    width: "100%",
                    background: "#0A0A0F",
                    border: "1px solid rgba(37,99,235,0.2)",
                    borderRadius: "0.75rem",
                    padding: "0.75rem 1rem",
                    fontSize: "0.875rem",
                    color: "#CBD5E1",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                />
              </div>

              {error && (
                <p style={{ color: "#F87171", fontSize: "0.85rem", textAlign: "center", marginTop: "0.25rem" }}>
                  {error}
                </p>
              )}

              <div className="send-btn-wrap" style={{ display: "flex", justifyContent: "flex-end", marginTop: "0.25rem" }}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(37,99,235,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.8rem 2rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(37,99,235,0.4)",
                    color: "#E2E8F0",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                    boxShadow: "0 0 24px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.12)",
                    overflow: "hidden",
                  }}
                >
                  {/* Shimmer overlay */}
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer-sweep 2.5s linear infinite",
                    }}
                  />
                  {loading ? "Sending…" : "Send Message"}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
