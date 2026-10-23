import { publicAsset } from "@/lib/public-asset";

export type ProjectThreeImage = {
  src: string;
  alt: string;
};

export function ProjectThreeImages({ images }: { images: ProjectThreeImage[] }) {
  return (
    <section className="three-images" aria-label="Project images">
      <div className="three-images-row">
        {images.map((image, index) => (
          <figure className="three-images-slot" key={index}>
            {image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={publicAsset(image.src)} alt={image.alt} />
            ) : null}
          </figure>
        ))}
      </div>
    </section>
  );
}
