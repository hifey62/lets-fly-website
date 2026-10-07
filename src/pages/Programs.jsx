import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTA from "../components/home/CTA";
import { programs } from "../data/site";
import { programImages } from "../data/media";

export default function Programs() {
  return (
    <Page
      title="Our Programs"
      description="Educational support, career mentorship, global opportunities, health education and community outreach from Let's Fly Initiative."
    >
      <PageHeader
        eyebrow="What we do"
        title="Our programs."
        subtitle="Five ways we help young people access information, support and opportunity."
      />

      {/* Intro + quick-jump chips */}
      <section className="pt-20 md:pt-28">
        <div className="container-x">
          <Reveal>
            <h2 className="max-w-3xl text-4xl md:text-5xl">
              Everything we do points toward one thing:{" "}
              <em className="text-sun">a young person's next step.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              {programs.map((p, i) => (
                <a
                  key={p.title}
                  href={`#program-${i}`}
                  className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-sun hover:bg-sun/10"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Program rows */}
      <section className="section-y overflow-hidden">
        <div className="container-x space-y-28 md:space-y-40">
          {programs.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={p.title}
                id={`program-${i}`}
                className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  x={flip ? 40 : -40}
                  y={0}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink">
                    <img
                      src={programImages[i]}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink-dark/80 via-transparent to-ink-dark/20" />
                    <span className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-ink-dark">
                      <Icon name={p.icon} size={26} strokeWidth={1.7} />
                    </span>
                    <span className="absolute bottom-4 left-6 font-display text-8xl leading-none text-cream/90">
                      0{i + 1}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={0.15} x={flip ? -40 : 40} y={0}>
                  <span className="eyebrow">Program 0{i + 1}</span>
                  <h2 className="mt-6 text-4xl md:text-5xl">{p.title}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-stone">
                    {p.text}
                  </p>
                  <Link
                    to="/projects"
                    className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink"
                  >
                    See it in action
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1.5"
                    />
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </Page>
  );
}