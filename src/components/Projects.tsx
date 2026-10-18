import { projects } from "../data";

export const Projects = () => (
  <section className="section">
    <h2 className="h2">Projects</h2>
    <div className="projects">
      {projects.map((p) => (
        <article key={p.name} className="project">
          <h3 className="project__name">{p.name}</h3>
          <p className="project__pitch">
            <span className="accent">*</span>&nbsp; {p.pitch}
          </p>
          <a href={p.url} className="project__link">
            {p.label} ↗
          </a>
        </article>
      ))}
    </div>
  </section>
);
