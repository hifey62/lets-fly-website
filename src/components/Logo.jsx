import { Bird } from "lucide-react";
import { site } from "../data/site";

// Drop a file named logo.svg, logo.png or logo.webp into src/assets/
const found = import.meta.glob("../assets/logo.{svg,png,webp}", {
  eager: true,
  import: "default",
});
const logoSrc = Object.values(found)[0];

// true  = show the name beside the logo image
// false = show only the image (use this if your logo already contains the name)
const SHOW_TEXT_WITH_LOGO = true;

export default function Logo({ size = "md" }) {
  const box = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const img = size === "lg" ? "h-14" : "h-11";

  return (
    <span className="flex items-center gap-3">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt={site.name}
          className={`${img} w-auto object-contain transition-transform duration-500 group-hover:-rotate-6`}
        />
      ) : (
        <span
          className={`flex ${box} items-center justify-center rounded-full bg-sun text-ink-dark transition-transform duration-500 group-hover:-rotate-12`}
        >
          <Bird size={size === "lg" ? 26 : 22} strokeWidth={2} />
        </span>
      )}

      {(!logoSrc || SHOW_TEXT_WITH_LOGO) && (
        <span className="leading-none">
          <span className="block font-display text-xl">Let's Fly</span>
          <span className="mt-1 block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-cream/60">
            Initiative
          </span>
        </span>
      )}
    </span>
  );
}