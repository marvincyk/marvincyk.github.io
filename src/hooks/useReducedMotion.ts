import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const matches = () =>
  typeof window !== "undefined" && !!window.matchMedia && window.matchMedia(QUERY).matches;

// True when the visitor has asked the OS to minimise motion.
export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(matches);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mql = window.matchMedia(QUERY);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
};
