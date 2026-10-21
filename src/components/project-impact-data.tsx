export type ImpactStat = {
  value: string;
  label: string;
};

export type ProjectImpactData = {
  quote: string;
  stats: ImpactStat[];
};

export function ProjectImpactData({ impact }: { impact: ProjectImpactData }) {
  const quoteId = "impact-data-quote";

  return (
    <section className="impact-data" aria-labelledby={quoteId}>
      <div className="impact-data-quote">
        <p id={quoteId}>{impact.quote}</p>
      </div>
      <dl className="impact-data-stats">
        {impact.stats.map((stat, index) => (
          <div className="impact-data-stat" key={stat.value}>
            {index > 0 ? <span className="impact-data-divider" aria-hidden="true" /> : null}
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
