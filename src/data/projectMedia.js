// REAL PHOTOS: drop images into a folder named after the project slug:
//   src/assets/projects/eagles-guide/
//   src/assets/projects/orphanage-outreach/
//   src/assets/projects/health-education-access/
// Name one file "cover.jpg" (or .png/.webp) to choose the cover image,
// otherwise the first file alphabetically is used. Every file in the
// folder appears in that project's gallery (01.jpg, 02.jpg... keeps order).
// Until a folder has photos, that project shows the demo photos below.

const files = import.meta.glob(
  "../assets/projects/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const grouped = {};
Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach(([path, src]) => {
    const parts = path.split("/");
    const file = parts.pop();
    const slug = parts.pop();
    (grouped[slug] ||= []).push({ file, src });
  });

const demo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=75`;

const A = demo("photo-1509062522246-3755977927d7");
const B = demo("photo-1522202176988-66273c2fd55f");
const C = demo("photo-1509062522246-3755977927d7");
const D = demo("photo-1529156069898-49953e39b3ac");
const E = demo("photo-1503676260728-1c00da094a0b");

const DEMO = {
  "eagles-guide": [B, B, D, C, E],
  "orphanage-outreach": [D, E, B, A, C],
  "health-education-access": [E, A, C, B, D],
};
const DEFAULT_DEMO = [A, B, C, D, E];

export function getProjectMedia(slug) {
  const real = grouped[slug];
  if (real?.length) {
    const cover = real.find((f) => /^cover\./i.test(f.file)) ?? real[0];
    return { cover: cover.src, photos: real.map((f) => f.src), isDemo: false };
  }
  const photos = DEMO[slug] ?? DEFAULT_DEMO;
  return { cover: photos[0], photos, isDemo: true };
}