import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { why, site } from "../../data/site";
import { whyImage } from "../../data/media";

export default function Why() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="section-y overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Image with parallax, gold offset frame and floating motto card */}
        <Reveal x={-40} y={0} className="relative">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl border border-sun/60" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink">
            <motion.img
              src={whyImage}
              alt=""
              style={{ y, scale: 1.2 }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ink-dark/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -left-4 bottom-10 max-w-[16rem] rounded-2xl bg-ink p-6 text-cream shadow-2xl md:-left-10">
            <p className="font-display text-xl italic leading-snug">
              {site.motto}
            </p>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <span className="eyebrow">{why.title}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl md:text-6xl">{why.paragraphs[1]}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-stone">
              {why.paragraphs[0]}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              {why.paragraphs[2]}
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link to="/about" className="btn-dark group mt-10">
              Our mission
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}