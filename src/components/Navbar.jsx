import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const desktopLinks = nav.filter((item) => item.to !== "/get-involved");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-ink-dark/85 py-3 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          {/* <Link to="/" className="group flex items-center gap-3 text-cream">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sun text-ink-dark transition-transform duration-500 group-hover:-rotate-12">
              <Bird size={22} strokeWidth={2} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-xl">Let's Fly</span>
              <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-cream/60">
                Initiative
              </span>
            </span>
          </Link> */}
          <Link to="/" className="group text-cream" aria-label={site.name}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {desktopLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="relative py-2 text-sm font-medium tracking-wide text-cream/70 transition-colors hover:text-cream"
              >
                {({ isActive }) => (
                  <>
                    <span className={isActive ? "text-cream" : ""}>
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-sun"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/get-involved" className="btn-primary !px-6 !py-3">
              Get Involved
            </Link>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-cream transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink-dark pt-28 lg:hidden"
          >
            <nav className="container-x flex h-full flex-col pb-10">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `block border-b border-white/10 py-4 font-display text-3xl ${
                          isActive ? "text-sun" : "text-cream"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <a
                href={`mailto:${site.email}`}
                className="mt-auto text-sm text-cream/60"
              >
                {site.email}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
