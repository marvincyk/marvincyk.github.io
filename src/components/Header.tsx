const EMAIL = "mailto:marvin@marvincyk.com";

export const Header = () => (
  <header>
    <div className="ticker">
      Now shipping at Easygo <span className="ticker__dot">·</span> Software Engineer{" "}
      <span className="ticker__dot">·</span> since Feb 2024
    </div>
    <nav className="nav container">
      <a href="#top" className="nav__logo">
        MARVIN<span className="accent">*</span>
      </a>
      <div className="nav__links">
        <a href="#work">Work</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
        <a href={EMAIL} className="nav__cta">
          Get in touch
        </a>
      </div>
    </nav>
  </header>
);
