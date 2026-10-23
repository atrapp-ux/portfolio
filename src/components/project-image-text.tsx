import { publicAsset } from "@/lib/public-asset";

export type ProjectImageTextSection = {
  label: string;
  body?: string;
  items?: string[];
};

export type ProjectImageText = {
  showTitle: boolean;
  title: string;
  sections: ProjectImageTextSection[];
  image: { src: string; alt: string };
};

export function ProjectImageTextBlock({ block }: { block: ProjectImageText }) {
  const showTitle = block.showTitle && block.title.trim().length > 0;
  const titleId = `img-text-${(block.title || block.sections[0]?.label || "block")
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <section
      className="img-text"
      aria-labelledby={showTitle ? titleId : undefined}
      aria-label={showTitle ? undefined : block.sections[0]?.label}
    >
      <figure className="img-text-media">
        {block.image.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={publicAsset(block.image.src)} alt={block.image.alt} />
        ) : null}
      </figure>
      <div className="img-text-copy">
        {showTitle ? (
          <h2 id={titleId} className="img-text-title">
            {block.title}
          </h2>
        ) : null}
        {block.sections.map((section) => (
          <div className="img-text-section" key={section.label}>
            <p className="img-text-label">{section.label}</p>
            {section.body ? <p className="img-text-body">{section.body}</p> : null}
            {section.items && section.items.length > 0 ? (
              <ul className="img-text-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
