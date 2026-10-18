import { education } from "../data";

export const Education = () => (
  <section id="education" className="section education">
    <h2 className="h2 education__title">Education</h2>
    <dl className="education__list">
      {education.map(({ label, value }) => (
        <div key={label} className="education__row">
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  </section>
);
