import { useEffect, useState } from "react";

const GLYPHS = "#%&*+=<>/\\[]{}01_";

const scramble = (text: string) => {
  const chars = text.split("");
  const n = 1 + Math.floor(Math.random() * 3);
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * chars.length);
    if (chars[j] !== " ") chars[j] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
  }
  return chars.join("");
};

interface GlitchTextProps {
  text: string;
  // Each change of this value plays one glitch.
  glitchTick: number;
}

// Text that briefly scrambles a few characters. The real text always holds its
// place in the layout (just hidden while glitching) so nothing around it moves.
export const GlitchText = ({ text, glitchTick }: GlitchTextProps) => {
  const [frame, setFrame] = useState<{ text: string; dx: number } | null>(null);

  useEffect(() => {
    if (!glitchTick) return;
    const next = () => setFrame({ text: scramble(text), dx: Math.round((Math.random() - 0.5) * 8) });
    next();
    const timers = [
      window.setTimeout(next, 60),
      window.setTimeout(next, 120),
      window.setTimeout(() => setFrame(null), 190),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [glitchTick, text]);

  return (
    <span className="glitch-text">
      <span aria-hidden={frame ? "true" : undefined} style={{ visibility: frame ? "hidden" : "visible" }}>
        {text}
      </span>
      {frame && (
        <span className="glitch-text__overlay" aria-hidden="true" style={{ transform: `translateX(${frame.dx}px)` }}>
          {frame.text}
        </span>
      )}
    </span>
  );
};
