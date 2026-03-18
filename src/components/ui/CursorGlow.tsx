"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!el) return;
        el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(99,102,241,0.05) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        mixBlendMode: "normal",
        transform: "translate(-9999px, -9999px)",
      }}
    />
  );
}
