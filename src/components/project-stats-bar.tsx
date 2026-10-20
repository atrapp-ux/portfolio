export type ProjectStat = {
  label: string;
  value: string;
};

export function ProjectStatsBar({ stats }: { stats: ProjectStat[] }) {
  return (
    <section className="project-stats" aria-label="Project facts">
      <dl className="project-stats-list">
        {stats.map((stat, index) => (
          <div className="project-stats-item" key={stat.label}>
            {index > 0 ? (
              <span className="project-stats-divider" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/project-stats-divider.svg" alt="" width={91} height={1} />
              </span>
            ) : null}
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
