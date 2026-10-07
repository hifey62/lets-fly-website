import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, MapPin, Users } from "lucide-react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import CTA from "../components/home/CTA";
import ProjectCard from "../components/projects/ProjectCard";
import StatusBadge from "../components/projects/StatusBadge";
import Gallery from "../components/projects/Gallery";
import { projects } from "../data/site";
import { getProjectMedia } from "../data/projectMedia";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Page title="Project not found">
        <PageHeader
          eyebrow="404"
          title="Project not found"
          subtitle="We couldn't find that project. It may have moved."
        />
        <div className="container-x py-20">
          <Link to="/projects" className="btn-dark">
            Back to all projects
          </Link>
        </div>
      </Page>
    );
  }

  const { cover, photos } = getProjectMedia(project.slug);
  const more = projects.filter((p) => p.slug !== project.slug);

  return (
    <Page title={project.title} description={project.response}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-dark pb-20 pt-40 text-cream md:pb-28 md:pt-52">
        <img
          src={cover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-dark via-ink-dark/60 to-ink-dark/40" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sun/15 blur-3xl" />

        <div className="container-x relative">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition-colors hover:text-cream"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All projects
          </Link>

          <div className="mt-8">
            <StatusBadge status={project.status} />
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-7xl">
            {project.title}
          </h1>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-cream/80">
            <span className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-sun" />
              <span className="max-w-md">{project.location}</span>
            </span>
            <span className="flex items-center gap-3">
              <Users size={18} className="shrink-0 text-sun" />
              {project.target}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-y">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="space-y-20 lg:col-span-8">
            <Reveal>
              <span className="eyebrow">The challenge</span>
              <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
                {project.problem}
              </p>
            </Reveal>

            <Reveal>
              <span className="eyebrow">Our response</span>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                {project.response}
              </p>
            </Reveal>

            {project.provided.length > 0 && (
              <div>
                <Reveal>
                  <span className="eyebrow">What we provided</span>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.provided.map((item, i) => (
                    <Reveal key={item} delay={i * 0.08}>
                      <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun/20 text-ink">
                          <Check size={18} strokeWidth={2.5} />
                        </span>
                        <span className="font-medium">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky details card */}
          <aside className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28">
              <div className="rounded-3xl bg-ink-dark p-8 text-cream md:p-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sun-light">
                  Project details
                </h3>
                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/50">
                      Status
                    </dt>
                    <dd className="mt-1 font-display text-xl">
                      {project.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/50">
                      Location
                    </dt>
                    <dd className="mt-1 text-cream/90">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-cream/50">
                      Who it's for
                    </dt>
                    <dd className="mt-1 text-cream/90">{project.target}</dd>
                  </div>
                </dl>
                <div className="mt-10 space-y-3">
                  <Link to="/get-involved" className="btn-primary w-full">
                    Support this project
                  </Link>
                  <Link to="/contact" className="btn-ghost w-full text-cream">
                    Partner with us
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sky-soft section-y">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Gallery</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-2xl text-4xl md:text-5xl">
              Moments from the <em className="text-sun">field.</em>
            </h2>
          </Reveal>
          <div className="mt-12">
            <Gallery photos={photos} title={project.title} />
          </div>
        </div>
      </section>

      {/* More projects */}
      {more.length > 0 && (
        <section className="section-y">
          <div className="container-x">
            <Reveal>
              <span className="eyebrow">More projects</span>
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {more.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.12} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </Page>
  );
}