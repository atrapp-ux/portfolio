"use client";

import { useEffect, useId, useRef, useState } from "react";
import { publicAsset } from "@/lib/public-asset";

export type ProjectImageRowItem = {
  src: string;
  alt: string;
};

export function ProjectImageRow({ images }: { images: ProjectImageRowItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const selected = open !== null ? images[open] : null;

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <section className="image-row" aria-label="Product screens">
      <div className="image-row-scale">
        <div className="image-row-track">
          {images.map((image, index) => (
            <div className="image-row-slide" key={index}>
              <button
                type="button"
                className="image-row-slot"
                aria-label={image.alt || `Enlarge image ${index + 1}`}
                onClick={() => setOpen(index)}
              >
                {image.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={publicAsset(image.src)} alt="" />
                ) : null}
              </button>
            </div>
          ))}
        </div>
      </div>
      {selected ? (
        <div className="image-row-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <button
            ref={closeRef}
            type="button"
            className="project-home image-row-close"
            aria-label="Close"
            onClick={() => setOpen(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={publicAsset("/image-row/close.svg")} alt="" width={24} height={24} />
          </button>
          <p id={titleId} className="image-row-modal-title">
            {selected.alt || "Enlarged image"}
          </p>
          <div className="image-row-modal-frame">
            {selected.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={publicAsset(selected.src)} alt={selected.alt} />
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
