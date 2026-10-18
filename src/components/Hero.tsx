import { useState } from "react";
import { useGlitchClock } from "../hooks/useGlitchClock";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Brackets } from "./Brackets";
import { GlitchText } from "./GlitchText";
import { Portrait } from "./Portrait";

export const Hero = () => {
  const reduced = useReducedMotion();
  const [portraitTick, setPortraitTick] = useState(0);
  const [headlineTick, setHeadlineTick] = useState(0);

  // Most glitches tear the portrait; the rest scramble the headline.
  useGlitchClock(
    () => (Math.random() < 0.7 ? setPortraitTick((t) => t + 1) : setHeadlineTick((t) => t + 1)),
    { enabled: !reduced, everyMs: 4000 },
  );

  return (
    <section className="hero">
      <div className="hero__portrait">
        <Portrait glitchTick={portraitTick} />
      </div>
      <div className="hero__text">
        <span className="label">{"// Software engineer"}</span>
        <h1 className="hero__title" aria-label="Hi, I'm Marvin.">
          <GlitchText text="Hi, I'm Marvin." glitchTick={headlineTick} />
        </h1>
        <p className="hero__lede">
          I build software for the <span className="hl">web and mobile</span>. Currently a software engineer at{" "}
          <span className="hl">Easygo</span>.
        </p>
        <p className="mono hero__school">BSc Computer Science · University of Melbourne</p>
        <div className="hero__actions">
          <Brackets className="brackets--accent">
            <a href="mailto:marvin@marvincyk.com" className="button">
              Get in touch
            </a>
          </Brackets>
          <a href="#work" className="mono-link">
            See my work →
          </a>
        </div>
      </div>
    </section>
  );
};
