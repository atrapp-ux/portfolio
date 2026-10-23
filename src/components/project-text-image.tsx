import { publicAsset } from "@/lib/public-asset";

export type ProjectTextImageSection = {
  label: string;
  body: string;
};

export type ProjectTextImage = {
  title: string;
  sections: ProjectTextImageSection[];
  image: { src: string; alt: string };
};

export function ProjectTextImageBlock({ block }: { block: ProjectTextImage }) {
  const titleId = `text-img-${block.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section className="text-img" aria-labelledby={titleId}>
      <div className="text-img-copy">
        <h2 id={titleId} className="text-img-title">
          {block.title}
        </h2>
        {block.sections.map((section) => (
          <div className="text-img-section" key={section.label}>
            <p className="text-img-label">{section.label}</p>
            <p className="text-img-body">{section.body}</p>
          </div>
        ))}
      </div>
      <figure className="text-img-media">
        {block.image.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={publicAsset(block.image.src)} alt={block.image.alt} />
        ) : null}
      </figure>
    </section>
  );
}
