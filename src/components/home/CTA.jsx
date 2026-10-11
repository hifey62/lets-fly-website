import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { cta } from "../../data/site";

export default function CTA() {
  return (
    <section className="section-y border-t border-line">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Message */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="eyebrow">Be part of it</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-6xl">
              {cta.title} <span className="text-sun-deep">{cta.accent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-stone">
              {cta.text}
            </p>
            <p className="mt-5 font-display text-2xl italic text-ink">
              {cta.closing}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to={cta.primary.to} className="btn-dark group">
                {cta.primary.label}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to={cta.secondary.to}
                className="btn border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream"
              >
                {cta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Paths */}
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone">
              Which one are you?
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {cta.paths.map((path) => (
                <li key={path.label}>
                  <Link
                    to={path.to}
                    className="group flex items-center gap-5 py-6 transition-all duration-300 hover:pl-3"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-sun group-hover:bg-sun">
                      <Icon name={path.icon} size={20} strokeWidth={1.7} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-2xl">
                        {path.label}
                      </span>
                      <span className="block text-sm text-stone">
                        {path.text}
                      </span>
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-stone/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}