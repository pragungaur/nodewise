"use client";

import Logo from "./Logo";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 2rem 3rem",
      }}
    >
      <div
        style={{ maxWidth: "72rem", margin: "0 auto" }}
        className="grid-3col"
      >
        {/* Col 1 — Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Logo size={28} />
          <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6, maxWidth: "18rem" }}>
            Intelligent AI solutions for modern businesses.
          </p>
          <p style={{ fontSize: "0.75rem", color: "#4B5563", marginTop: "0.25rem" }}>
            © {new Date().getFullYear()} NodeWise. All rights reserved.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.25rem",
            }}
          >
            Quick Links
          </p>
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontSize: "0.875rem",
                color: "#6B7280",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F9FAFB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Col 3 — Social */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.25rem",
            }}
          >
            Follow Us
          </p>
          <a
            href="https://instagram.com/nodewise"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              color: "#6B7280",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#60A5FA")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            nodewise
          </a>
        </div>
      </div>
    </footer>
  );
}
