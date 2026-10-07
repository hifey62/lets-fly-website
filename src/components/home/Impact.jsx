import Reveal from "../Reveal";
import Counter from "../Counter";
import { impact } from "../../data/site";

export default function Impact() {
  return (
    <section className="section-y bg-sky-soft">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">Our impact</span>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-y-16 lg:grid-cols-4">
          {impact.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.12}
              className={`px-2 lg:px-8 lg:first:pl-0 ${
                i > 0 ? "lg:border-l lg:border-ink/15" : ""
              }`}
            >
              <div className="font-display text-6xl text-ink md:text-7xl xl:text-8xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className="mt-6 block h-px w-10 bg-sun" />
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}