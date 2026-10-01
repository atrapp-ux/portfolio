import { tools } from "@content/tools";

export function Tools() {
  return (
    <section className="tools-section" aria-label="Tools">
      <ul className="tools-bar">
        {tools.map((tool, index) => (
          <li className="tool" key={tool.label}>
            {index > 0 ? (
              <span className="tools-rule" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/tools/divider.svg" alt="" width={217.09} height={1.19492} />
              </span>
            ) : null}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tool.icon} alt="" width={tool.iconWidth} height={tool.iconHeight} />
            <p>{tool.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
