import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Reveal from "../Reveal";
import { outreachVideos } from "../../data/media";

// accepts a full link (shorts / youtu.be / watch?v= / embed) or a bare 11-character ID
const getId = (video) => {
  const input = video.url ?? video.id ?? "";
  const match = input.match(/(?:shorts\/|youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return match ? match[1] : input.trim();
};

function Thumb({ video }) {
  const id = getId(video);
  const hq = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const [src, setSrc] = useState(
    video.thumb || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  );

  // YouTube serves a tiny grey placeholder when the HD thumbnail doesn't exist
  const fallback = () => {
    if (!video.thumb) setSrc(hq);
  };

  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={fallback}
      onLoad={(e) => {
        if (e.currentTarget.naturalWidth < 200) fallback();
      }}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}

function VideoCard({ video, onOpen }) {
  return (
    <button
      onClick={() => onOpen(video)}
      className="group relative aspect-[9/16] w-[68%] shrink-0 snap-center overflow-hidden rounded-3xl bg-ink-dark text-left sm:w-[44%] md:w-72 lg:w-80"
    >
      <Thumb video={video} />
      <div className="absolute inset-0 bg-linear-to-t from-ink-dark/90 via-ink-dark/10 to-ink-dark/30" />

      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
        Short
      </span>

      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-0 animate-ping rounded-full bg-sun/40" />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-sun text-ink-dark transition-transform duration-500 group-hover:scale-110">
          <Play size={24} fill="currentColor" className="ml-1" />
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sun-light">
          {video.tag}
        </span>
        <h3 className="mt-2 text-xl text-cream">{video.title}</h3>
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
        className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10"
      >
        <X size={22} />
      </button>

      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="aspect-[9/16] w-full max-w-[min(92vw,calc(85vh*9/16))] overflow-hidden rounded-2xl bg-black shadow-2xl"
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${getId(
            video
          )}?autoplay=1&rel=0&playsinline=1`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="h-full w-full"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Videos() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

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
          <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:mx-0 md:flex-wrap md:justify-center md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {outreachVideos.map((video) => (
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