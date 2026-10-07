import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Reveal from "../Reveal";
import { outreachVideos } from "../../data/media";

const thumbOf = (v) =>
  v.thumb ||
  (v.type === "youtube"
    ? `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`
    : "");

function VideoCard({ video, featured, onOpen }) {
  return (
    <button
      onClick={() => onOpen(video)}
      className={`group relative block w-full overflow-hidden rounded-3xl bg-ink text-left ${
        featured
          ? "aspect-video lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[30rem]"
          : "aspect-video"
      }`}
    >
      <img
        src={thumbOf(video)}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink-dark/90 via-ink-dark/20 to-ink-dark/30 transition-colors duration-500 group-hover:from-ink-dark/95" />

      {/* play button with a pulsing ring */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 animate-ping rounded-full bg-sun/40" />
        <span
          className={`relative flex items-center justify-center rounded-full bg-sun text-ink-dark transition-transform duration-500 group-hover:scale-110 ${
            featured ? "h-24 w-24" : "h-16 w-16"
          }`}
        >
          <Play
            size={featured ? 34 : 24}
            fill="currentColor"
            className="ml-1"
          />
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-light">
          {video.tag}
        </span>
        <h3
          className={`mt-2 text-cream ${
            featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          }`}
        >
          {video.title}
        </h3>
      </div>
    </button>
  );
}

function Lightbox({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-dark/95 p-4 backdrop-blur-sm"
    >
      <button
        onClick={onClose}
        aria-label="Close video"
        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10"
      >
        <X size={22} />
      </button>

      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
      >
        {video.type === "youtube" ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <video src={video.src} controls autoPlay className="h-full w-full" />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Videos() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  const [featured, ...rest] = outreachVideos;

  return (
    <section className="section-y relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-sky/10 blur-3xl" />

      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow">Outreach in action</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl">
            See the work, <em className="text-sun">in motion.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
            Moments from our recent outreaches, straight from the communities
            and classrooms we serve.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <VideoCard video={featured} featured onOpen={setActive} />
            {rest.map((video) => (
              <VideoCard key={video.title} video={video} onOpen={setActive} />
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active && <Lightbox video={active} onClose={close} />}
      </AnimatePresence>
    </section>
  );
}