"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
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
              background: "linear-gradient(90deg, #3B82F6, #6D5CF6)",
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
              color: "#F9FAFB",
              fontFamily: "var(--font-space-grotesk)",
            }}
          >
            Let&apos;s Build Something
          </h2>
          <p style={{ marginTop: "1rem", color: "#9CA3AF" }}>
            Have a project in mind? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            position: "relative",
            borderRadius: "1.5rem",
            border: "1px solid rgba(59,130,246,0.2)",
            background: "#111827",
            padding: "2.5rem",
            overflow: "hidden",
          }}
        >
          {/* Glow blob */}
          <div
            style={{
              position: "absolute",
              top: "-5rem",
              right: "-5rem",
              width: "15rem",
              height: "15rem",
              borderRadius: "50%",
              background: "#6D5CF6",
              filter: "blur(80px)",
              opacity: 0.08,
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
                  background: "linear-gradient(135deg, #3B82F6, #6D5CF6)",
                }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#F9FAFB", fontFamily: "var(--font-space-grotesk)" }}>
                Message Sent!
              </h3>
              <p style={{ color: "#9CA3AF" }}>Thanks for reaching out. I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.7rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        background: "#0A0A0F",
                        border: "1px solid rgba(59,130,246,0.25)",
                        borderRadius: "0.75rem",
                        padding: "0.75rem 1rem",
                        fontSize: "0.875rem",
                        color: "#F9FAFB",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <label style={{ fontSize: "0.7rem", fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  style={{
                    width: "100%",
                    background: "#0A0A0F",
                    border: "1px solid rgba(59,130,246,0.25)",
                    borderRadius: "0.75rem",
                    padding: "0.75rem 1rem",
                    fontSize: "0.875rem",
                    color: "#F9FAFB",
                    outline: "none",
                    resize: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "none",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  background: "linear-gradient(135deg, #3B82F6, #6D5CF6)",
                  boxShadow: "0 0 30px rgba(59,130,246,0.3)",
                }}
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
