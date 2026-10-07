import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery({ photos, title }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d) => setOpen((i) => (i + d + photos.length) % photos.length),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="columns-2 gap-4 md:columns-3">
        {photos.map((src, i) => (
          <motion.button
            key={src + i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
            onClick={() => setOpen(i)}
            aria-label={`Open photo ${i + 1}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-ink"
          >
            <img
              src={src}
              alt={`${title} photo ${i + 1}`}
              loading="lazy"
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink-dark/0 transition-colors duration-500 group-hover:bg-ink-dark/30" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-dark/95 p-4 backdrop-blur-sm"
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10"
            >
              <X size={22} />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(-1);
                  }}
                  aria-label="Previous photo"
                  className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10 md:left-8"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    step(1);
                  }}
                  aria-label="Next photo"
                  className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10 md:right-8"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              src={photos[open]}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-xl object-contain md:max-w-[80vw]"
            />

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-sm text-cream/70">
              {open + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}