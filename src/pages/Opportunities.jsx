import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import CTA from "../components/home/CTA";
import { opportunities, opportunityList } from "../data/site";

export default function Opportunities() {
  const [filter, setFilter] = useState("All");

  const lines = opportunities.tagline.split(/(?<=\.)\s+/);
  const labels = opportunities.categories.map((c) => c.label);
  const visible =
    filter === "All"
      ? opportunityList
      : opportunityList.filter((o) => o.category === filter);
  const count = (label) =>
    opportunityList.filter((o) => o.category === label).length;

  const jump = (label) => {
    setFilter(label);
    document
      .getElementById("listings")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Page
      title="Opportunities"
      description="Scholarships, internships, fellowships, competitions, courses and remote opportunities curated for students and young people."
    >
      <PageHeader
        eyebrow="Grow"
        title="Opportunities."
        subtitle="Scholarships, fellowships, internships and more, gathered in one place so you don't have to hunt for them."
      />

      {/* Tagline + intro */}
   {/* Tagline + intro */}
<section className="relative overflow-hidden pt-20 md:pt-28">
  {/* soft glows */}
  <div className="pointer-events-none absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-sky/15 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-sun/20 blur-3xl" />

  {/* dotted grid that fades out toward the bottom */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(var(--color-ink)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

  {/* flight path that draws itself */}
  <svg
    className="pointer-events-none absolute right-0 top-8 hidden h-60 w-[36rem] lg:block"
    viewBox="0 0 576 240"
    fill="none"
  >
    <motion.path
      d="M0 220 C 140 220, 180 40, 330 80 S 500 30, 576 10"
      stroke="var(--color-sun)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeOpacity="0.7"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.4, ease: "easeInOut" }}
    />
    <motion.circle
      cx="576"
      cy="10"
      r="6"
      fill="var(--color-sun)"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 2.2, type: "spring", stiffness: 260, damping: 12 }}
    />
  </svg>

  <div className="container-x relative z-10 grid items-end gap-12 lg:grid-cols-12">
    <div className="lg:col-span-7">
      {lines.map((line, i) => (
        <Reveal key={line} delay={i * 0.12}>
          <p
            className={`font-display text-5xl leading-[1.1] md:text-7xl ${
              i === lines.length - 1 ? "italic text-sun" : "text-ink"
            }`}
          >
            {line}
          </p>
        </Reveal>
      ))}
    </div>
    <Reveal delay={0.3} className="lg:col-span-5">
      <p className="text-lg leading-relaxed text-stone">
        {opportunities.intro}
      </p>
    </Reveal>
  </div>
</section>
      {/* Category tiles */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.categories.map((c, i) => (
              <Reveal key={c.label} delay={(i % 3) * 0.1} className="h-full">
                <button
                  onClick={() => jump(c.label)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-sun hover:shadow-2xl hover:shadow-ink/10"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-soft text-ink transition-all duration-500 group-hover:bg-sun group-hover:text-ink-dark">
                      <Icon name={c.icon} size={26} strokeWidth={1.6} />
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-stone/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    />
                  </div>
                  <h3 className="mt-8 text-2xl">{c.label}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{c.text}</p>
                  {count(c.label) > 0 && (
                    <span className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky">
                      {count(c.label)} listed
                    </span>
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="section-y scroll-mt-20 bg-sky-soft">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Latest opportunities</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-4xl md:text-5xl">
              Find your next <em className="text-sun">step.</em>
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {["All", ...labels].map((l) => (
              <button
                key={l}
                onClick={() => setFilter(l)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  filter === l
                    ? "border-ink bg-ink text-cream"
                    : "border-ink/15 bg-white text-ink hover:border-sun"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <ul className="mt-12 space-y-4">
            <AnimatePresence mode="popLayout">
              {visible.map((o) => (
                <motion.li
                  key={o.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-5 rounded-3xl border border-line bg-white p-6 md:flex-row md:items-center md:justify-between md:p-8"
                >
                  <div>
                    <span className="inline-block rounded-full bg-sky-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-ink">
                      {o.category}
                    </span>
                    <h3 className="mt-4 text-2xl">{o.title}</h3>
                    <p className="mt-2 text-stone">
                      {o.org} · Deadline: {o.deadline}
                    </p>
                  </div>

                  {o.link ? (
                    <a
                      href={o.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-dark group shrink-0"
                    >
                      View details
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  ) : (
                    <span className="shrink-0 text-sm font-medium text-stone">
                      Link coming soon
                    </span>
                  )}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {visible.length === 0 && (
            <p className="mt-12 rounded-3xl border border-dashed border-ink/20 p-10 text-center text-stone">
              Nothing listed in this category yet. Check back soon.
            </p>
          )}

          {/* Verification notice */}
          <Reveal delay={0.1}>
            <div className="mt-14 flex gap-5 rounded-3xl bg-ink-dark p-7 text-cream md:items-center md:p-9">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sun/15 text-sun">
                <ShieldCheck size={24} strokeWidth={1.6} />
              </span>
              <p className="leading-relaxed text-cream/80">
                {opportunities.notice}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-20 md:pt-32">
        <CTA />
      </div>
    </Page>
  );
}