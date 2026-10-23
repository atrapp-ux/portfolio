import { publicAsset } from "@/lib/public-asset";

export type QuoteItem = {
  quote: string;
  attribution: string;
};

export type ProjectQuoteContent =
  | {
      variant: "photo_quote";
      quote: string;
      attribution: string;
      image: { src: string; alt: string };
    }
  | {
      variant: "single";
      quote: string;
      attribution: string;
    }
  | {
      variant: "multi";
      items: QuoteItem[];
    };

function QuoteCopy({ item }: { item: QuoteItem }) {
  return (
    <>
      <blockquote>
        <p>{item.quote}</p>
      </blockquote>
      <p className="project-quote-by">{item.attribution}</p>
    </>
  );
}

export function ProjectQuote({ quote }: { quote: ProjectQuoteContent }) {
  const body =
    quote.variant === "multi" ? (
      quote.items.map((item, index) => (
        <figure className="project-quote-item" key={index}>
          <blockquote>
            <p>{item.quote}</p>
          </blockquote>
          <figcaption>{item.attribution}</figcaption>
        </figure>
      ))
    ) : (
      <>
        {quote.variant === "photo_quote" ? (
          <div className="project-quote-photo">
            {quote.image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={publicAsset(quote.image.src)} alt={quote.image.alt} />
            ) : null}
          </div>
        ) : null}
        <QuoteCopy item={quote} />
      </>
    );

  return (
    <section className="project-quote" data-variant={quote.variant}>
      <div className="project-quote-inner">{body}</div>
    </section>
  );
}
