import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Logo size={28} />
          <p style={{ fontSize: "0.875rem", color: "#4B5563" }}>
            Intelligent AI solutions for modern businesses.
          </p>
        </div>
        <p style={{ fontSize: "0.75rem", color: "#4B5563" }}>
          © {new Date().getFullYear()} NodeWise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
