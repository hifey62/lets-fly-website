import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { nav, site } from "../data/site";
import Logo from "./Logo";

export default function Footer() {
  const socials = Object.entries(site.socials).filter(([, url]) => url);

  return (
    <footer className="relative overflow-hidden bg-ink-dark text-cream">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />

      <div className="container-x relative py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="group inline-block text-cream">
              <Logo size="lg" />
            </Link>
            <p className="mt-8 max-w-sm font-display text-3xl italic leading-snug text-cream/90">
              {site.motto}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-sun">
              Explore
            </h4>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-sun">
              Get in touch
            </h4>
            <ul className="mt-6 space-y-4 text-cream/70">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-sky" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-cream"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-sky" />
                <span>{site.location}</span>
              </li>
            </ul>

            {socials.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium capitalize tracking-wide text-cream/80 transition-colors hover:border-sun hover:text-sun"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-cream/50 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
