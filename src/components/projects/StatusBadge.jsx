export default function StatusBadge({ status }) {
  const ongoing = status === "Ongoing";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] ${
        ongoing ? "bg-sun text-ink-dark" : "bg-white/90 text-ink"
      }`}
    >
      {ongoing && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-dark/50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-dark" />
        </span>
      )}
      {status}
    </span>
  );
}