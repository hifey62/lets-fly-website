import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { approach } from "../../data/site";

export default function Approach() {
  return (
    <section className="section-y relative overflow-hidden bg-ink-dark text-cream">
      <div className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sun/10 blur-3xl" />

      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow">Our approach</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl">
            How we help you <em className="text-sun">get there.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/70">
            {approach.text}
          </p>
        </Reveal>

        <div className="relative mt-24">
          {/* line that draws itself across the steps */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-linear-to-r from-sun via-sky to-transparent md:block"
          />

          <div className="grid gap-14 md:grid-cols-4 md:gap-8">
            {approach.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.18}>
                <div>
                  <span className="relative z-10 block h-[15px] w-[15px] rounded-full bg-sun ring-8 ring-ink-dark" />
                  <span className="mt-8 block font-display text-7xl text-white/10">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-3xl">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-cream/65">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}