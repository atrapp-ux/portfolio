export type ProjectFullBleedImageContent = {
  src: string;
  alt: string;
};

export function ProjectFullBleedImage({ image }: { image: ProjectFullBleedImageContent }) {
  return (
    <figure className="full-bleed-image">
      {image.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image.src} alt={image.alt} />
      ) : null}
    </figure>
  );
}
