import Reveal from "../Reveal";
import { partners } from "../../data/site";

// Drop partner logos (svg, png, webp, jpg) into src/assets/partners/
// Name files after the organization, e.g. "ondo-youth-forum.png" (used as alt text)
const files = import.meta.glob(
  "../../assets/partners/*.{svg,png,webp,jpg,jpeg}",
  { eager: true, import: "default" }
);

const logos = Object.entries(files).map(([path, src]) => ({
  src,
  name: path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " "),
}));

const items = logos.length ? logos : partners;

// make sure the strip is always long enough to fill wide screens
const base =
  items.length < 6
    ? Array.from({ length: Math.ceil(6 / items.length) }).flatMap(() => items)
    : items;
const loop = [...base, ...base];

export default function Partners() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-x text-center">
        <Reveal>
          <span className="eyebrow">Our partners</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-2xl text-4xl md:text-5xl">
            Organizations that help us <em className="text-sun">fly.</em>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((partner, i) => (
            <div
              key={i}
              aria-hidden={i >= base.length}
              className="flex h-20 items-center px-10 md:px-14"
            >
              {partner.src ? (
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-12 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-14"
                />
              ) : (
                <span className="whitespace-nowrap font-display text-3xl text-ink/35 transition-colors duration-300 hover:text-ink md:text-4xl">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 