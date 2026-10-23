import { homeContent } from "@content/home";
import { publicAsset } from "@/lib/public-asset";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-heading">
      <div className="hero-fit">
        <div className="hero-stage">
          <div className="hero-cards">
            {/* SVG illustration. next/image rejects or rasterizes SVG, so this stays an img. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={publicAsset("/hero-cards.svg")}
              alt=""
              width={738}
              height={386}
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <article className="intro-card">
            <h1 id="intro-heading">
              {homeContent.greetingLead}{" "}
              <span className="intro-name">{homeContent.greetingName}</span>
            </h1>
            <p>{homeContent.intro}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
