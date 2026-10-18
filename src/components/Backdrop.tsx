import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const FONT_SIZE = 16;
const FRAME_MS = 66;
const RAIN_COLOR = "#A6E3A1"; // Catppuccin Mocha green
const TRAIL_FADE = "rgba(30, 30, 46, 0.09)"; // Mocha base, so trails fade into the page
const GLYPHS =
  "ｦｧｨｩｪｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊ0123456789{}<>/=*+";

// Faint Matrix-style code rain behind the page, plus a soft glow that follows
// the pointer and brightens the rain beneath it. Purely decorative.
export const Backdrop = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const { clientX, clientY } = e;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${clientX}px`);
        root.style.setProperty("--my", `${clientY}px`);
      });
    };
    const onLeave = () => {
      root.style.setProperty("--mx", "-9999px");
      root.style.setProperty("--my", "-9999px");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let cols: number[] = [];
    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        cols = [];
      }
      const n = Math.ceil(w / FONT_SIZE);
      if (cols.length !== n) {
        cols = Array.from({ length: n }, () => Math.floor((Math.random() * -h) / FONT_SIZE));
      }
      ctx.fillStyle = TRAIL_FADE;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = RAIN_COLOR;
      ctx.font = `${FONT_SIZE}px "Geist Mono", ui-monospace, monospace`;
      for (let i = 0; i < n; i++) {
        const y = cols[i];
        if (y >= 0) ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], i * FONT_SIZE, y * FONT_SIZE);
        cols[i] = y * FONT_SIZE > h && Math.random() > 0.975 ? 0 : y + 1;
      }
    };

    if (reduced) {
      // One settled still frame instead of animation.
      for (let i = 0; i < 80; i++) draw();
      return;
    }

    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (t - last < FRAME_MS) return;
      last = t;
      draw();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__glow" />
      <canvas ref={canvasRef} className="backdrop__rain" />
    </div>
  );
};
