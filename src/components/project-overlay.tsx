"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ProjectCardContent, ProjectImage } from "@content/project";

function ImageSlot({ image, className }: { image: ProjectImage; className?: string }) {
  const classes = className ? `detail-slot ${className}` : "detail-slot";

  return (
    <div className={classes}>
      {image.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image.src} alt={image.alt} />
      ) : (
        <p>{image.label}</p>
      )}
    </div>
  );
}

export function ProjectOverlay({
  project,
  onClose,
}: {
  project: ProjectCardContent;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const detail = project.detail;
  const titleId = `${project.id}-detail-title`;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const root = rootRef.current;
    const blocked: Element[] = [];
    for (const child of Array.from(document.body.children)) {
      if (child === root || child.hasAttribute("inert")) continue;
      child.setAttribute("inert", "");
      blocked.push(child);
    }

    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      for (const child of blocked) child.removeAttribute("inert");
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div ref={rootRef} id="project-overlay" className="project-overlay" onClick={onClose}>
      <div
        className="project-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-sheet-bar">
          <button ref={closeRef} type="button" className="project-sheet-close" onClick={onClose}>
            <span className="sr-only">Close</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="detail-hero">
          {detail.hero.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={detail.hero.src} alt={detail.hero.alt} />
          ) : (
            <p>{detail.hero.label}</p>
          )}
        </div>

        <header className="detail-intro">
          <div className="detail-wrap">
            <p className="detail-role">{detail.role}</p>
            <h2 id={titleId} className="detail-headline">
              {detail.headline}
            </h2>
            <dl className="detail-facts">
              {detail.facts.map((fact) => (
                <div key={fact.label} className="detail-fact">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="detail-main">
          <section className="detail-section" aria-labelledby={`${project.id}-company`}>
            <h3 id={`${project.id}-company`}>{detail.company.title}</h3>
            <p>{detail.company.body}</p>
            <ImageSlot image={detail.company.image} className="detail-wide" />
          </section>

          <section className="detail-section" aria-labelledby={`${project.id}-problem`}>
            <h3 id={`${project.id}-problem`}>{detail.problem.title}</h3>
            <p>{detail.problem.body}</p>
          </section>

          <section className="detail-section" aria-labelledby={`${project.id}-goals`}>
            <h3 id={`${project.id}-goals`}>{detail.goals.title}</h3>
            <div className="detail-goals-layout">
              <ul className="detail-goals">
                {detail.goals.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <figure className="detail-chart">
                <ul className="detail-legend">
                  {detail.goals.chart.series.map((item) => (
                    <li key={item.label}>
                      <span className={`detail-swatch detail-swatch-${item.tone}`} aria-hidden="true" />
                      {item.label}
                    </li>
                  ))}
                </ul>
                <div className="detail-chart-months">
                  {detail.goals.chart.months.map((month) => (
                    <div key={month.label} className="detail-month">
                      <div className="detail-bars" aria-hidden="true">
                        <span className="detail-bar detail-bar-base" style={{ flexGrow: month.base }} />
                        <span className="detail-bar detail-bar-addon" style={{ flexGrow: month.addonSize }} />
                      </div>
                      <p className="detail-month-label">{month.label}</p>
                      <p className="detail-month-mrr">MRR {month.mrr}</p>
                      <p className="detail-month-addon">
                        {month.addon} / {month.share}
                      </p>
                    </div>
                  ))}
                </div>
              </figure>
            </div>
          </section>

          <section className="detail-section" aria-labelledby={`${project.id}-research`}>
            <h3 id={`${project.id}-research`}>{detail.research.title}</h3>
            <div className="detail-split">
              {detail.research.sections.map((section) => (
                <div key={section.title}>
                  {section.title ? <h4 className="detail-subhead">{section.title}</h4> : null}
                  <p>{section.body}</p>
                  <ImageSlot image={section.image} />
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section" aria-labelledby={`${project.id}-ideas`}>
            <h3 id={`${project.id}-ideas`}>{detail.ideas.title}</h3>
            <p className="detail-caption">{detail.ideas.sketchCaption}</p>
            <ImageSlot image={detail.ideas.sketch} className="detail-wide" />
            <h4 className="detail-subhead detail-subhead-strong">{detail.ideas.considerationsTitle}</h4>
            <p>{detail.ideas.considerations}</p>
          </section>

          <section className="detail-section" aria-labelledby={`${project.id}-solution`}>
            <h3 id={`${project.id}-solution`}>{detail.solution.title}</h3>
            <div className="detail-split">
              {detail.solution.approaches.map((approach) => (
                <p key={approach}>{approach}</p>
              ))}
            </div>
            <div className="detail-phones">
              {detail.solution.phones.map((phone, index) => (
                <ImageSlot key={`${phone.label}-${index}`} image={phone} className="detail-phone" />
              ))}
            </div>
            <ImageSlot image={detail.solution.desktop} className="detail-desktop" />
          </section>

          <section className="detail-section" aria-labelledby={`${project.id}-impact`}>
            <h3 id={`${project.id}-impact`}>{detail.impact.title}</h3>
            <ul className="detail-stats">
              {detail.impact.stats.map((stat) => (
                <li key={stat.value}>
                  <strong>{stat.value}</strong>
                  <p>{stat.body}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section" aria-labelledby={`${project.id}-conclusion`}>
            <h3 id={`${project.id}-conclusion`}>{detail.conclusion.title}</h3>
            {detail.conclusion.notes.map((note) => (
              <div key={note.label} className="detail-note">
                <h4 className="detail-subhead">{note.label}</h4>
                <p>{note.body}</p>
              </div>
            ))}
            <h4 className="detail-subhead">{detail.conclusion.goalsTitle}</h4>
            <ul className="detail-goals">
              {detail.conclusion.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>,
    document.body,
  );
}
