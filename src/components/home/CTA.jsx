import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { cta } from "../../data/site";
import { ctaImage } from "../../data/media";

export default function CTA() {
  return (
    <section className="px-4 pb-20 md:px-8 md:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-dark text-cream">
          <img
            src={ctaImage}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink-dark via-ink-dark/85 to-ink-dark/50" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-sun/20 blur-3xl" />

          <div className="relative grid items-center gap-14 p-8 sm:p-12 lg:grid-cols-12 lg:p-20">
            {/* Left: message + buttons */}
            <div className="lg:col-span-7">
              <span className="eyebrow">Be part of it</span>
              <h2 className="mt-6 text-5xl md:text-7xl">
                {cta.title} <em className="text-sun">{cta.accent}</em>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
                {cta.text}
              </p>
              <p className="mt-4 font-display text-2xl italic text-sun-light">
                {cta.closing}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to={cta.primary.to} className="btn-primary group">
                  {cta.primary.label}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link to={cta.secondary.to} className="btn-ghost text-cream">
                  {cta.secondary.label}
                </Link>
              </div>
            </div>

            {/* Right: pick your path */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <p className="px-5 pb-3 pt-4 text-xs font-semibold uppercase tracking-[0.22em] text-sun-light">
                  Which one are you?
                </p>
                {cta.paths.map((path) => (
                  <Link
                    key={path.label}
                    to={path.to}
                    className="group flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sun/15 text-sun transition-all duration-300 group-hover:bg-sun group-hover:text-ink-dark">
                      <Icon name={path.icon} size={22} strokeWidth={1.7} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-xl">
                        {path.label}
                      </span>
                      <span className="block text-sm text-cream/60">
                        {path.text}
                      </span>
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-cream/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sun"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}