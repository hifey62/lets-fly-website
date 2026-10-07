import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Bird } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-dark text-cream">
      <Helmet>
        <title>Page not found | Let's Fly Initiative</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 left-1/4 h-[30rem] w-[30rem] rounded-full bg-sun/10 blur-3xl" />

      <motion.div
        initial={{ x: -120, y: 80, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[8%] top-[22%] hidden text-sun/80 md:block"
      >
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bird size={120} strokeWidth={1.2} />
        </motion.div>
      </motion.div>

      <div className="container-x relative py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          Error 404
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-6xl sm:text-7xl md:text-8xl"
        >
          This page{" "}
          <em className="text-sun">flew away.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 max-w-lg text-lg leading-relaxed text-cream/70"
        >
          The page you're looking for doesn't exist or has moved. Let's get you
          back on course.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link to="/" className="btn-primary group">
            Back to home
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link to="/opportunities" className="btn-ghost text-cream">
            Explore opportunities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}