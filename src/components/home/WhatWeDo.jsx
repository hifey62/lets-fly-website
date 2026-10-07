import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import Icon from "../Icon";
import { whatWeDo } from "../../data/site";

export default function WhatWeDo() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <span className="eyebrow">What we do</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl md:text-6xl">{whatWeDo.intro}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="md:col-span-4 md:text-right">
            <Link
              to="/programs"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink"
            >
              All programs
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {whatWeDo.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-ink/15">
                {/* navy fill that sweeps up on hover */}
                <div className="absolute inset-x-0 bottom-0 h-0 bg-ink transition-all duration-500 ease-out group-hover:h-full" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-soft text-ink transition-all duration-500 group-hover:rotate-6 group-hover:bg-sun group-hover:text-ink-dark">
                      <Icon name={item.icon} size={26} strokeWidth={1.6} />
                    </span>
                    <span className="font-display text-sm text-stone transition-colors duration-500 group-hover:text-sun-light">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-10 text-2xl transition-colors duration-500 group-hover:text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-stone transition-colors duration-500 group-hover:text-cream/75">
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}