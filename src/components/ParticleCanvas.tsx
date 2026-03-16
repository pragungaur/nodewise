"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: Node[] = [];
    const COUNT = 80;
    const CONNECT_DIST = 150;
    const CURSOR_DIST = 180;
    const REPEL_STRENGTH = 0.3;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = null;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // Update + draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        // Cursor repulsion
        if (mouse) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CURSOR_DIST && dist > 0) {
            const force = (1 - dist / CURSOR_DIST) * REPEL_STRENGTH;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }

        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 2);
        grad.addColorStop(0, "rgba(109, 92, 246, 0.9)");
        grad.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.45;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(59, 130, 246, ${alpha})`);
            grad.addColorStop(1, `rgba(109, 92, 246, ${alpha})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw cursor node + connections
      if (mouse) {
        // Connection lines from cursor to nearby nodes
        for (const n of nodes) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CURSOR_DIST) {
            const alpha = (1 - dist / CURSOR_DIST) * 0.55;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.strokeStyle = `rgba(99, 160, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Outer glow ring
        const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 40);
        glowGrad.addColorStop(0, "rgba(59, 130, 246, 0.18)");
        glowGrad.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Core dot
        const coreGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 5);
        coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        coreGrad.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = coreGrad;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.75 }}
    />
  );
}
