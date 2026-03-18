export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        {/* Node graph: 3 nodes connected */}
        <circle cx="6" cy="16" r="3.5" fill="url(#logoGrad)" />
        <circle cx="26" cy="6" r="3.5" fill="url(#logoGrad)" />
        <circle cx="26" cy="26" r="3.5" fill="url(#logoGrad)" />
        {/* Connecting lines */}
        <line x1="9" y1="15" x2="23" y2="7.5" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="17" x2="23" y2="24.5" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="9.5" x2="26" y2="22.5" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span
        style={{ fontFamily: "var(--font-space-grotesk)" }}
        className="text-xl font-bold tracking-tight"
      >
        <span className="text-white">Node</span>
        <span
          style={{
            background: "linear-gradient(90deg, #60A5FA, #38BDF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Wise
        </span>
      </span>
    </div>
  );
}
