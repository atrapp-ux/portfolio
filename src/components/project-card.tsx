import { projectArrows, projectCard, type ProjectArrow } from "@content/project";

function Rule() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="project-rule"
      src="/project-card/rule-horizontal.svg"
      alt=""
      width={734}
      height={1}
    />
  );
}

function VerticalRule() {
  return (
    <span className="project-rule-v" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/project-card/rule-vertical.svg" alt="" width={148} height={1} />
    </span>
  );
}

function ImpactArrow({ name }: { name: ProjectArrow }) {
  const arrow = projectArrows[name];

  return (
    <span
      className="project-arrow"
      style={{ ["--arrow-rotation" as string]: `${arrow.rotation}deg` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={arrow.src} alt="" width={21} height={16} />
    </span>
  );
}

export function ProjectCard() {
  const card = projectCard;

  return (
    <section className="project-section" aria-labelledby="project-card-title">
      <div className="project-fit">
        <article className="project-frame">
          <div className="project-panel">
            <h2 id="project-card-title" className="project-title">
              {card.title}
            </h2>
            <p className="project-summary">{card.summary}</p>
            <Rule />
            <div className="project-meta">
              <div>
                <p className="project-kicker">{card.problem.label}</p>
                <p className="project-meta-body">{card.problem.body}</p>
              </div>
              <VerticalRule />
              <div>
                <p className="project-kicker">{card.timeline.label}</p>
                <p className="project-meta-body project-meta-plain">{card.timeline.body}</p>
              </div>
              <VerticalRule />
              <div>
                <p className="project-kicker">{card.platform.label}</p>
                <p className="project-meta-body project-meta-plain">{card.platform.body}</p>
              </div>
            </div>
            <Rule />
            <p className="project-kicker project-impact-label">{card.impactLabel}</p>
            <ul className="project-impacts">
              {card.impacts.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="project-impact-copy">
                    <ImpactArrow name={item.arrow} />
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="project-slot">
            {card.image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={card.image.src} alt={card.image.alt} />
            ) : (
              <p>{card.image.label}</p>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
