import { useEffect, useState } from "react";
import { Brackets } from "./Brackets";

interface Slice {
  clip: string;
  transform: string;
  brightness: string;
}

interface Block {
  x: number;
  y: number;
  w: number;
  h: number;
}

const randomSlices = (): Slice[] => {
  const count = 1 + Math.floor(Math.random() * 4);
  return Array.from({ length: count }, () => {
    const top = Math.random() * 85;
    const height = 2 + Math.random() * 10;
    const dx = (Math.random() < 0.5 ? -1 : 1) * (12 + Math.random() * 60);
    const stretch = Math.random() < 0.3 ? ` scaleX(${(1.1 + Math.random() * 0.5).toFixed(2)})` : "";
    return {
      clip: `inset(${top.toFixed(1)}% 0 ${Math.max(0, 100 - top - height).toFixed(1)}% 0)`,
      transform: `translateX(${dx.toFixed(0)}px)${stretch}`,
      brightness: (1.15 + Math.random() * 0.5).toFixed(2),
    };
  });
};

const randomBlocks = (): Block[] =>
  Math.random() < 0.35
    ? [
        {
          x: Math.round(-60 + Math.random() * 240),
          y: Math.round(Math.random() * 330),
          w: Math.round(60 + Math.random() * 180),
          h: Math.round(10 + Math.random() * 30),
        },
      ]
    : [];

interface PortraitProps {
  // Each change of this value plays one glitch.
  glitchTick: number;
}

// Halftone portrait that occasionally tears into shifted horizontal bands.
export const Portrait = ({ glitchTick }: PortraitProps) => {
  const [slices, setSlices] = useState<Slice[]>([]);
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    if (!glitchTick) return;
    setSlices(randomSlices());
    setBlocks(randomBlocks());
    const timers = [
      window.setTimeout(() => setSlices(randomSlices()), 80),
      window.setTimeout(() => {
        setSlices([]);
        setBlocks([]);
      }, 140 + Math.random() * 120),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [glitchTick]);

  return (
    <Brackets className="portrait dot-grid">
      <div className="portrait__frame">
        <img className="portrait__img" src="/portrait.jpg" alt="Portrait of Marvin Chew" />
        {slices.map((s, i) => (
          <img
            key={i}
            className="portrait__img portrait__slice"
            src="/portrait.jpg"
            alt=""
            aria-hidden="true"
            style={{ clipPath: s.clip, transform: s.transform, filter: `grayscale(1) contrast(1.5) brightness(${s.brightness})` }}
          />
        ))}
        {blocks.map((b, i) => (
          <div
            key={i}
            className="portrait__block"
            aria-hidden="true"
            style={{ left: b.x, top: b.y, width: b.w, height: b.h }}
          />
        ))}
      </div>
    </Brackets>
  );
};
