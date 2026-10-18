import { useEffect, useRef } from "react";

// Calls `onGlitch` at random intervals averaging `everyMs`, so the glitches
// never settle into a visible rhythm. Does nothing while `enabled` is false.
export const useGlitchClock = (
  onGlitch: () => void,
  { enabled, everyMs, firstMs = 1200 }: { enabled: boolean; everyMs: number; firstMs?: number },
) => {
  const callback = useRef(onGlitch);
  callback.current = onGlitch;

  useEffect(() => {
    if (!enabled) return;
    let timer: number;
    const schedule = (wait: number) => {
      timer = window.setTimeout(() => {
        callback.current();
        schedule(everyMs * (0.5 + Math.random()));
      }, wait);
    };
    schedule(firstMs);
    return () => window.clearTimeout(timer);
  }, [enabled, everyMs, firstMs]);
};
