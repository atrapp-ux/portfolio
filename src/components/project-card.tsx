import Link from "next/link";
import { projectArrows, projects, type ProjectArrow, type ProjectCardContent } from "@content/project";

function Rule({ placement = "section" }: { placement?: "section" | "split" }) {
  const slim = placement === "split";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={slim ? "project-rule project-rule-split" : "project-rule"}
      src={slim ? "/project-card/rule-horizontal-slim.svg" : "/project-card/rule-horizontal.svg"}
      alt=""
      width={slim ? 645 : 734}
      height={1}
    />
  );
}

function VerticalRule({ kind }: { kind: "pair" | "split" }) {
  return (
    <span className={`project-rule-v project-rule-v-${kind}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="project-rule-v-long" src="/project-card/rule-vertical.svg" alt="" width={148} height={1} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="project-rule-v-short"
        src="/project-card/rule-vertical-short.svg"
        alt=""
        width={68}
        height={1}
      />
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

function ProjectCardArticle({ card }: { card: ProjectCardContent }) {
  const titleId = `${card.id}-title`;

  return (
    <div className="project-fit" id={card.id}>
      <article
        className={card.layout === "imageLeft" ? "project-frame project-frame-left" : "project-frame"}
        aria-labelledby={titleId}
      >
        <div className="project-art">
          <div className="project-stage" aria-hidden="true" />
          <div className="project-slot">
            {card.image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={card.image.src} alt={card.image.alt} />
            ) : (
              <p>{card.image.label}</p>
            )}
          </div>
        </div>
        <div className="project-panel">
          <h2 id={titleId} className="project-title">
            {card.title}
          </h2>
          <p className="project-summary">{card.summary}</p>
          <Rule />
          <div className="project-meta">
            <div className="project-problem">
              <p className="project-kicker">{card.problem.label}</p>
              <p className="project-meta-body">{card.problem.body}</p>
            </div>
            <VerticalRule kind="pair" />
            <div className="project-timeline">
              <p className="project-kicker">{card.timeline.label}</p>
              <p className="project-meta-body project-meta-plain">{card.timeline.body}</p>
            </div>
            <VerticalRule kind="split" />
            <div className="project-platform">
              <p className="project-kicker">{card.platform.label}</p>
              <p className="project-meta-body project-meta-plain">{card.platform.body}</p>
            </div>
            <Rule placement="split" />
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
          <div className="project-cta-row">
            <Link className="project-cta" href={`/projects/${card.id}`}>
              <span>{card.cta.label}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/project-card/cta-arrow.svg" alt="" width={25.8583} height={28.4193} />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export function ProjectCard() {
  return (
    <section className="project-section" aria-label="Projects">
      {projects.map((card) => (
        <ProjectCardArticle key={card.id} card={card} />
      ))}
    </section>
  );
}
