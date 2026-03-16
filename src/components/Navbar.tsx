"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition: "background 0.3s, box-shadow 0.3s",
        ...(scrolled
          ? {
              background: "rgba(10,10,15,0.88)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
            }
          : { background: "transparent" }),
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0.875rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* Left: Logo */}
        <div>
          <Logo />
        </div>

        {/* Center: Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#9CA3AF",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href="#contact"
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #60A5FA, #38BDF8)",
              color: "#fff",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
