import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { getProjectMedia } from "../../data/projectMedia";

export default function ProjectCard({ project }) {
  const { cover } = getProjectMedia(project.slug);

  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl hover:shadow-ink/15">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink">
          <img
            src={cover}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink-dark/50 via-transparent to-transparent" />
          <div className="absolute left-5 top-5">
            <StatusBadge status={project.status} />
          </div>
          <span className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-sun text-ink-dark opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={20} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7 md:p-8">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-sky">
            <MapPin size={14} className="shrink-0" />
            <span className="line-clamp-1">{project.location}</span>
          </p>
          <h3 className="mt-4 text-2xl md:text-3xl">{project.title}</h3>
          <p className="mt-4 line-clamp-3 leading-relaxed text-stone">
            {project.response}
          </p>
          <span className="mt-auto pt-6 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            View project
          </span>
        </div>
      </article>
    </Link>
  );
}