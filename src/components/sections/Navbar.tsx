"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
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
          ...(scrolled || mobileOpen
            ? {
                background: "rgba(10,10,15,0.95)",
                borderBottom: "1px solid rgba(37,99,235,0.15)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
              }
            : { background: "transparent" }),
        }}
      >
        <div
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            padding: "0.875rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop nav links */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#94A3B8",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E2E8F0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="nav-desktop">
            <a
              href="#contact"
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                color: "#E2E8F0",
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

          {/* Hamburger — mobile only */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.4rem",
              color: "#CBD5E1",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px" }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.22 }}
              style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px" }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              style={{ display: "block", width: "22px", height: "2px", background: "currentColor", borderRadius: "2px" }}
            />
          </button>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #3B82F6, #2563EB)",
            scaleX,
            transformOrigin: "left",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      </motion.nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 48,
                background: "rgba(0,0,0,0.5)",
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed",
                top: "57px",
                left: 0,
                right: 0,
                zIndex: 49,
                background: "rgba(10,10,15,0.98)",
                borderBottom: "1px solid rgba(37,99,235,0.2)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                padding: "1rem 1.5rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.125rem",
              }}
            >
              {NAV_LINKS.map((label, i) => (
                <motion.a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.18 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#94A3B8",
                    textDecoration: "none",
                    padding: "0.875rem 0.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    transition: "color 0.2s",
                    display: "block",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E2E8F0")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.18 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  marginTop: "1.25rem",
                  textAlign: "center",
                  padding: "0.875rem",
                  borderRadius: "0.75rem",
                  background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                  color: "#E2E8F0",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
                }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
