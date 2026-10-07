import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Impact from "../components/home/Impact";
import CTA from "../components/home/CTA";
import ProjectCard from "../components/projects/ProjectCard";
import StatusBadge from "../components/projects/StatusBadge";
import { projects } from "../data/site";
import { getProjectMedia } from "../data/projectMedia";

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p.slug !== featured.slug);
  const { cover } = getProjectMedia(featured.slug);

  return (
    <Page
      title="Projects & Impact"
      description="Education outreach, orphanage support and health education projects delivered by Let's Fly Initiative across Ondo State and beyond."
    >
      <PageHeader
        eyebrow="Our work"
        title="Projects & impact."
        subtitle="Real interventions, in real communities, for the young people who need them most."
      />

      {/* Featured */}
      <section className="pt-20 md:pt-28">
        <div className="container-x">
          <Reveal>
            <div className="grid overflow-hidden rounded-[2rem] bg-ink-dark text-cream lg:grid-cols-12">
              <Link
                to={`/projects/${featured.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[32rem]"
              >
                <img
                  src={cover}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-dark/60 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-ink-dark/40" />
                <span className="absolute left-6 top-6 rounded-full bg-sun px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink-dark">
                  Featured project
                </span>
              </Link>

              <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-5 lg:p-14">
                <div>
                  <StatusBadge status={featured.status} />
                </div>
                <h2 className="mt-6 text-4xl md:text-5xl">{featured.title}</h2>
                <p className="mt-6 leading-relaxed text-cream/70">
                  {featured.response}
                </p>

                <ul className="mt-8 space-y-3 text-sm text-cream/80">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-sun" />
                    {featured.location}
                  </li>
                  <li className="flex items-start gap-3">
                    <Users size={18} className="mt-0.5 shrink-0 text-sun" />
                    {featured.target}
                  </li>
                </ul>

                <Link
                  to={`/projects/${featured.slug}`}
                  className="btn-primary group mt-10 self-start"
                >
                  View project
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other projects */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">All projects</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-4xl md:text-5xl">
              More of what we've <em className="text-sun">been up to.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {others.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.12} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Impact />
      <div className="pt-20 md:pt-32">
        <CTA />
      </div>
    </Page>
  );
}