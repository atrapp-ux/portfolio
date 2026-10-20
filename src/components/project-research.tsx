"use client";

import { Fragment, useId, useState, type KeyboardEvent } from "react";

export type ResearchParagraph = {
  lead?: string;
  text: string;
};

export type ResearchListItem = {
  lead: string;
  text: string;
};

export type ResearchColumn = {
  image: { src: string; alt: string };
  heading: string;
  items: ResearchListItem[];
};

export type ResearchTab = {
  id: string;
  label: string;
  paragraphs?: ResearchParagraph[];
  aside?: { src: string; alt: string };
  columns?: ResearchColumn[];
};

export type ProjectResearchContent = {
  title: string;
  tabs: ResearchTab[];
};

export function ProjectResearch({ research }: { research: ProjectResearchContent }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabs = research.tabs;
  const selected = Math.min(active, Math.max(tabs.length - 1, 0));
  const tab = tabs[selected];

  if (!tab) return null;

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (selected + 1) % tabs.length
        : (selected - 1 + tabs.length) % tabs.length;
    setActive(next);
    const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("[role='tab']");
    buttons[next]?.focus();
  }

  return (
    <section className="research" aria-labelledby={`${baseId}-title`}>
      <h2 id={`${baseId}-title`} className="research-title">
        {research.title}
      </h2>
      <div className="research-tabs" role="tablist" aria-label={research.title} onKeyDown={onKeyDown}>
        {tabs.map((item, index) => {
          const isSelected = index === selected;
          return (
            <button
              key={item.id}
              type="button"
              className="research-tab"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActive(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        className="research-card"
        role="tabpanel"
        id={`${baseId}-panel-${tab.id}`}
        aria-labelledby={`${baseId}-tab-${tab.id}`}
      >
        {tab.paragraphs ? (
          <div className="research-prose">
            <div className="research-copy">
              {tab.paragraphs.map((paragraph) => (
                <p className="research-paragraph" key={`${paragraph.lead ?? ""}${paragraph.text}`}>
                  {paragraph.lead ? <strong>{paragraph.lead}</strong> : null}
                  {paragraph.text}
                </p>
              ))}
            </div>
            {tab.aside ? (
              <figure className="research-aside">
                {tab.aside.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={tab.aside.src} alt={tab.aside.alt} />
                ) : null}
              </figure>
            ) : null}
          </div>
        ) : null}
        {tab.columns ? (
          <div className="research-columns">
            {tab.columns.map((column, index) => (
              <Fragment key={column.heading}>
                {index > 0 ? (
                  <div className="research-rule" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/research/column-divider.svg" alt="" width={311} height={1} />
                  </div>
                ) : null}
                <article className="research-column">
                  {column.image.src ? (
                    <figure className="research-portrait">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={column.image.src} alt={column.image.alt} width={83} height={83} />
                    </figure>
                  ) : null}
                  <h3 className="research-heading">{column.heading}</h3>
                  <ul className="research-list">
                    {column.items.map((item) => (
                      <li key={`${item.lead}${item.text}`}>
                        <span className="research-lead">{item.lead}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </article>
              </Fragment>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
