"use client";

import { useEffect, useRef } from "react";

/** The hero's still water bowl: gold rings expanding over a radial gradient, drawn on a canvas. */
export default function RippleBowl() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Read tokens live every frame so the bowl follows light/dark changes.
    const col = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    let raf = 0;

    const draw = (t: number) => {
      const r = c.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      if (c.width !== Math.round(r.width * dpr)) {
        c.width = Math.round(r.width * dpr);
        c.height = Math.round(r.height * dpr);
      }
      const w = c.width;
      const h = c.height;
      const cx = w / 2;
      const cy = h / 2;
      const R = (Math.min(w, h) / 2) * 0.96;
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R);
      g.addColorStop(0, col("--gold-soft"));
      g.addColorStop(1, col("--surface"));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = col("--gold");
      const n = 9;
      for (let i = 0; i < n; i++) {
        const p = (i / n + t / 9000) % 1;
        ctx.globalAlpha = (1 - p) * 0.55;
        ctx.lineWidth = dpr * (1.4 - p);
        ctx.beginPath();
        ctx.arc(cx, cy, R * (0.18 + p * 0.8), 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.globalAlpha = 0.35;
      ctx.lineWidth = dpr;
      ctx.strokeStyle = col("--line");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    const onResize = () => draw(0);
    if (reduce) window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="bowl" aria-hidden="true">
      <canvas id="ripple" ref={canvasRef} />
      <div className="mark">सत्त्व</div>
    </div>
  );
}
