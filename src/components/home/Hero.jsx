import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero } from "../../data/site";
import { heroSlides } from "../../data/media";
import useTypewriter from "../../hooks/useTypewriter";

const SLIDE_MS = 7000;
const FADE_S = 1.4;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const pad = (n) => String(n).padStart(2, "0");

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const typed = useTypewriter(hero.words);

  // preload every slide so crossfades never flash empty
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // auto-advance; resets whenever `current` changes (including manual clicks)
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent((c) => (c + 1) % heroSlides.length),
      SLIDE_MS
    );
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-dark text-cream">
      {/* Background slider */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_S, ease: "easeInOut" }}
          >
            <motion.img
              src={heroSlides[current].src}
              alt=""
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: SLIDE_MS / 1000 + FADE_S, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlays: keep text readable and tie the photos to the brand */}
      <div className="absolute inset-0 bg-linear-to-r from-ink-dark/90 via-ink-dark/60 to-ink-dark/25" />
      <div className="absolute inset-0 bg-linear-to-t from-ink-dark/85 via-transparent to-ink-dark/50" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-sun/15 blur-3xl" />

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-screen items-center pb-44 pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.span variants={item} className="eyebrow !text-sun-light">
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-8 text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {hero.prefix}
            <span className="block min-h-[1.15em] italic text-sun">
              {typed}
              <span className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.08em] animate-blink bg-sun" />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75 md:text-xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link to={hero.ctaPrimary.to} className="btn-primary group">
              {hero.ctaPrimary.label}
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link to={hero.ctaSecondary.to} className="btn-ghost text-cream">
              {hero.ctaSecondary.label}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar: scroll cue + slide indicators */}
      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="container-x flex items-end justify-between">
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-cream md:flex"
          >
            <span className="relative block h-12 w-px overflow-hidden bg-white/25">
              <motion.span
                className="absolute inset-x-0 top-0 h-5 bg-sun"
                animate={{ y: [-20, 48] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            Scroll
          </button>

          <div className="ml-auto">
            <div className="mb-2 flex items-center justify-end gap-4 text-xs uppercase tracking-[0.2em] text-cream/70">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {heroSlides[current].label}
                </motion.span>
              </AnimatePresence>
              <span className="font-display text-sm tracking-normal">
                <span className="text-cream">{pad(current + 1)}</span> /{" "}
                {pad(heroSlides.length)}
              </span>
            </div>

            <div className="flex justify-end gap-2">
              {heroSlides.map((slide, i) => (
                <button
                  key={slide.label}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}: ${slide.label}`}
                  className="py-3"
                >
                  <span className="relative block h-[3px] w-10 overflow-hidden rounded-full bg-white/25 transition-colors hover:bg-white/40 sm:w-16">
                    {i === current && (
                      <motion.span
                        key={current}
                        className="absolute inset-y-0 left-0 bg-sun"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}