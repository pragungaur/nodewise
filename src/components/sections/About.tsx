"use client";

import { motion } from "framer-motion";
import { ElegantShape } from "@/components/ui/ElegantShape";

export default function About() {
  return (
    <section id="about" className="section-pad">
      {/* Section background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.2}
          width={420}
          height={95}
          rotate={10}
          gradient="from-blue-500/[0.09]"
          className="right-[-5%] top-[10%]"
        />
        <ElegantShape
          delay={0.4}
          width={260}
          height={62}
          rotate={-12}
          gradient="from-blue-500/[0.08]"
          className="left-[2%] bottom-[8%]"
        />
      </div>
      <div
        className="grid-about"
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >

        {/* Photo card — editorial portrait */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ position: "relative", width: "17rem" }}
          >
            {/* Ambient glow behind card */}
            <div
              style={{
                position: "absolute",
                inset: "-12px",
                borderRadius: "1.75rem",
                background: "radial-gradient(ellipse at 50% 80%, rgba(37,99,235,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 75%)",
                filter: "blur(24px)",
                pointerEvents: "none",
              }}
            />

            {/* Card */}
            <div
              style={{
                position: "relative",
                width: "17rem",
                height: "24rem",
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid rgba(37,99,235,0.25)",
                boxShadow: "0 0 0 1px rgba(59,130,246,0.08), 0 24px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Full-bleed photo */}
              <img
                src="/650922573_18102662221902112_610984739140199854_n.jpg"
                alt="Pragun Gaur"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "60% 15%",
                }}
              />

              {/* Gradient overlay — dark at bottom, transparent at top */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,10,15,0.97) 0%, rgba(10,10,15,0.6) 40%, rgba(10,10,15,0.1) 70%, transparent 100%)",
                }}
              />

              {/* Top-right: vertical label */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "1px",
                    height: "2.5rem",
                    background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.7))",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(37,99,235,0.8)",
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  NodeWise
                </span>
              </div>

              {/* Bottom: name + title */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem 1.25rem 1.25rem",
                }}
              >
                {/* Thin accent line above name */}
                <div
                  style={{
                    width: "2rem",
                    height: "2px",
                    background: "linear-gradient(90deg, #3B82F6, #2563EB)",
                    marginBottom: "0.625rem",
                    borderRadius: "9999px",
                  }}
                />
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#E2E8F0",
                    fontFamily: "var(--font-space-grotesk)",
                    lineHeight: 1.15,
                    marginBottom: "0.3rem",
                  }}
                >
                  Pragun Gaur
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#94A3B8",
                    letterSpacing: "0.04em",
                  }}
                >
                  Founder & CEO, NodeWise
                </p>
              </div>
            </div>

            {/* Offset badge — bottom-left, outside card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "-1rem",
                left: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 0.875rem",
                borderRadius: "9999px",
                background: "rgba(10,10,15,0.9)",
                border: "1px solid rgba(37,99,235,0.45)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(37,99,235,0.2)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "#CBD5E1",
                  whiteSpace: "nowrap",
                }}
              >
                13-Year-Old Founder
              </span>
            </motion.div>
          </motion.div>
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
                background: "linear-gradient(90deg, #3B82F6, #2563EB)",
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
                color: "#CBD5E1",
                marginTop: "0.75rem",
                fontFamily: "var(--font-space-grotesk)",
                lineHeight: 1.2,
              }}
            >
              Young Vision,{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real Impact
              </span>
            </h2>
          </div>

          {[
            "Hi, I'm Pragun Gaur — a 13-year-old entrepreneur and the founder of NodeWise. I started this company at 12 with one clear goal: to make AI accessible and useful for businesses of all sizes.",
            "I believe that age is just a number when it comes to building great things. At NodeWise, we combine youthful creativity with deep technical expertise to deliver AI solutions that genuinely move the needle for our clients.",
            "NodeWise isn't just a company — it's a statement that the future belongs to those bold enough to build it.",
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{ color: "#94A3B8", lineHeight: 1.75, fontSize: "0.95rem" }}
            >
              {text}
            </motion.p>
          ))}

          {/* Info grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.5rem" }}>
            {[
              { label: "Founded", value: "2025" },
              { label: "Age at founding", value: "12" },
              { label: "Focus", value: "AI Solutions" },
              { label: "HQ", value: "India" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                style={{
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(37,99,235,0.18)",
                  background: "#111827",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(37,99,235,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(37,99,235,0.18)";
                }}
              >
                <p style={{ fontSize: "0.7rem", color: "#94A3B8", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {item.label}
                </p>
                <p style={{ color: "#CBD5E1", fontWeight: 600, fontFamily: "var(--font-space-grotesk)" }}>
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
