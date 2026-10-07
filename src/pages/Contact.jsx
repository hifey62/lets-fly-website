import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Form from "../components/Form";
import { site } from "../data/site";
import { forms } from "../data/forms";

// accepts either a full link or a plain number written like 2348012345678
const waLink = (v) =>
  v.startsWith("http") ? v : `https://wa.me/${v.replace(/\D/g, "")}`;

function DetailRow({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sun/15 text-sun transition-all duration-300 group-hover:bg-sun group-hover:text-ink-dark">
        <Icon size={22} strokeWidth={1.7} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs uppercase tracking-[0.18em] text-cream/50">
          {label}
        </span>
       <span className="mt-1 block text-base text-cream [overflow-wrap:anywhere] sm:text-lg">
          {value}
        </span>
      </span>
      {href && (
        <ArrowUpRight
          size={18}
          className="shrink-0 text-cream/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sun"
        />
      )}
    </>
  );

  const cls = "group flex items-center gap-4 rounded-2xl p-4";

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${cls} transition-colors duration-300 hover:bg-white/10`}
    >
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
}

export default function Contact() {
  const socials = Object.entries(site.socials).filter(
    ([name, url]) => url && name !== "whatsapp"
  );
  const whatsapp = site.socials.whatsapp;

  return (
    <Page
      title="Contact"
      description="Get in touch with Let's Fly Initiative. Ask a question, share an idea or find out how to get involved."
    >
      <PageHeader
        eyebrow="Reach out"
        title="Let's talk."
        subtitle="Whether you're a student, a parent, a school or a potential partner, we'd love to hear from you."
      />

      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Details panel */}
          <Reveal className="min-w-0 lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-ink-dark p-8 text-cream md:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sun/15 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <span className="eyebrow">Contact details</span>
                <h2 className="mt-6 text-3xl md:text-4xl">
                  Find us, <em className="text-sun">or say hi.</em>
                </h2>

                <div className="mt-8 space-y-1">
                  <DetailRow
                    icon={Mail}
                    label="Email"
                    value={site.email}
                    href={`mailto:${site.email}`}
                  />
                  <DetailRow
                    icon={MapPin}
                    label="Based in"
                    value={site.location}
                  />
                  {whatsapp && (
                    <DetailRow
                      icon={MessageCircle}
                      label="WhatsApp"
                      value="Chat with us"
                      href={waLink(whatsapp)}
                    />
                  )}
                </div>

                {socials.length > 0 && (
                  <div className="mt-8 border-t border-white/10 pt-8">
                    <p className="text-xs uppercase tracking-[0.18em] text-cream/50">
                      Follow along
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {socials.map(([name, url]) => (
                        <a
                          key={name}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium capitalize text-cream/80 transition-colors duration-300 hover:border-sun hover:text-sun"
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <p className="mt-auto pt-10 font-display text-xl italic leading-snug text-cream/80">
                  {site.motto}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15} className="min-w-0 lg:col-span-7">
            <div className="h-full rounded-[2rem] border border-line bg-white p-8 shadow-xl shadow-ink/5 md:p-12">
              <span className="eyebrow">Message us</span>
              <h2 className="mb-10 mt-6 text-3xl md:text-4xl">
                {forms.contact.title}
              </h2>
              <Form formKey="contact" config={forms.contact} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 md:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-sky-soft">
              <iframe
                title={`Map of ${site.location}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.mapQuery
                )}&z=9&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full grayscale transition duration-700 hover:grayscale-0 md:h-[30rem]"
              />
              <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl md:left-8 md:top-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-ink-dark">
                  <MapPin size={18} />
                </span>
                <span className="text-sm font-semibold text-ink">
                  {site.location}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}