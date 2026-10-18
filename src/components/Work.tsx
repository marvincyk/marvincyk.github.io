import { jobs } from "../data";

export const Work = () => (
  <section id="work" className="section work">
    <div>
      <h2 className="h2">Work</h2>
      <span className="work__span">2018 – now</span>
    </div>
    <div className="panel">
      {jobs.map((job) => (
        <div key={job.company} className="job">
          <span className="job__dates">{job.dates}</span>
          <div className="job__body">
            <div className="job__company">
              {job.url ? (
                <a href={job.url}>
                  {job.company} <span aria-hidden="true" className="job__arrow">↗</span>
                </a>
              ) : (
                job.company
              )}
            </div>
            <div>
              {job.role}
              {job.note && <span className="muted"> · {job.note}</span>}
            </div>
          </div>
          {job.current && (
            <span className="badge">
              Current <span className="accent">*</span>
            </span>
          )}
        </div>
      ))}
    </div>
  </section>
);
