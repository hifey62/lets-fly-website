import { Eye, MapPin, Target } from "lucide-react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Impact from "../components/home/Impact";
import CTA from "../components/home/CTA";
import { about, site } from "../data/site";
import { aboutImage } from "../data/media";

export default function About() {
  const [lead, ...rest] = about.who;

  return (
    <Page
      title="About Us"
      description="Let's Fly Initiative is a youth-focused initiative helping young people access education, mentorship, career guidance and opportunities."
    >
      <PageHeader
        eyebrow="Who we are"
        title="Helping young people see further."
        subtitle="A youth-focused initiative expanding what's possible for the students and young people we work with."
      />

      {/* Story */}
      <section className="section-y overflow-hidden">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal x={-40} y={0} className="relative">
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl border border-sun/60" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink">
              <img
                src={aboutImage}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-dark/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -right-3 bottom-10 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl md:-right-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-soft text-ink">
                <MapPin size={20} />
              </span>
              <span className="text-sm font-semibold text-ink">
                {site.location}
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">Our story</span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
                {lead}
              </p>
            </Reveal>
            {rest.map((text, i) => (
              <Reveal key={i} delay={0.2 + i * 0.1}>
                <p className="mt-6 text-lg leading-relaxed text-stone">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-y relative overflow-hidden bg-ink-dark text-cream">
        <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-sky/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sun/10 blur-3xl" />

        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow">Mission & Vision</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl">
              What drives us, and where we're{" "}
              <em className="text-sun">headed.</em>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-10 transition-colors duration-500 hover:bg-white/10 md:p-14">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun/15 text-sun">
                  <Target size={28} strokeWidth={1.6} />
                </span>
                <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-sun-light">
                  Our Mission
                </h3>
                <p className="mt-5 font-display text-2xl leading-snug md:text-3xl">
                  {about.mission}
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.15} className="h-full">
              <article className="h-full rounded-3xl bg-sun p-10 text-ink-dark md:p-14">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-dark/10">
                  <Eye size={28} strokeWidth={1.6} />
                </span>
                <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-ink-dark/70">
                  Our Vision
                </h3>
                <p className="mt-5 font-display text-2xl leading-snug md:text-3xl">
                  {about.vision}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <Impact />

        <CTA />
      
    </Page>
  );
}