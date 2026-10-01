import { quoteContent } from "@content/quotes";

export function Quotes() {
  return (
    <section className="quotes-section" aria-labelledby="designer-goal">
      <div className="quotes-inner">
        <p id="designer-goal" className="quotes-label">
          {quoteContent.label}
        </p>
        <p className="quotes-text">
          {quoteContent.before}
          <span className="quotes-accent">{quoteContent.accent}</span>
          {quoteContent.after}
        </p>
      </div>
    </section>
  );
}
