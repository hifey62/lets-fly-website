import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Page from "../components/Page";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import Form from "../components/Form";
import { getInvolved, donation, site } from "../data/site";
import { forms, formOrder } from "../data/forms";

const steps = [
  "We review your details",
  "We reach out by email",
  "We work out how best to involve you",
];

const scrollToForm = () =>
  document
    .getElementById("apply")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function GetInvolved() {
  const [params, setParams] = useSearchParams();
  const requested = params.get("type");
  const active = formOrder.includes(requested) ? requested : "volunteer";
  const config = forms[active];
  const hasBank = donation.bankName && donation.accountNumber;

  // arriving from a deep link like /get-involved?type=mentor
  useEffect(() => {
    if (requested) {
      const t = setTimeout(scrollToForm, 500);
      return () => clearTimeout(t);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const select = (key) => {
    setParams({ type: key }, { replace: true });
    scrollToForm();
  };

  return (
    <Page
      title="Get Involved"
      description="Volunteer, mentor, partner with or support Let's Fly Initiative and help young people discover and pursue opportunities."
    >
      <PageHeader
        eyebrow="Join us"
        title="Get involved."
        subtitle="There are many ways to help a young person take their next step. Pick the one that fits you."
      />

      {/* Option cards */}
      <section className="pt-20 md:pt-28">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {formOrder.map((key, i) => {
              const card = getInvolved[i];
              const isActive = key === active;
              return (
                <Reveal key={key} delay={i * 0.1} className="h-full">
                  <button
                    onClick={() => select(key)}
                    aria-pressed={isActive}
                    className={`group flex h-full w-full flex-col rounded-3xl border p-8 text-left transition-all duration-500 hover:-translate-y-1.5 ${
                      isActive
                        ? "border-transparent bg-ink text-cream shadow-2xl shadow-ink/25"
                        : "border-line bg-white hover:border-sun"
                    }`}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500 ${
                        isActive
                          ? "bg-sun text-ink-dark"
                          : "bg-sky-soft text-ink group-hover:bg-sun"
                      }`}
                    >
                      <Icon name={card.icon} size={26} strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-8 text-2xl">{card.title}</h3>
                    <p
                      className={`mt-3 leading-relaxed ${
                        isActive ? "text-cream/70" : "text-stone"
                      }`}
                    >
                      {card.text}
                    </p>
                    <span
                      className={`mt-auto flex items-center gap-2 pt-8 text-xs font-semibold uppercase tracking-[0.18em] ${
                        isActive ? "text-sun-light" : "text-ink"
                      }`}
                    >
                      {card.cta}
                      <ArrowDown size={14} />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form area */}
      <section id="apply" className="section-y scroll-mt-20">
        <div className="container-x grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2rem] bg-ink-dark p-9 text-cream md:p-12 lg:col-span-5"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky/15 blur-3xl" />
            <div className="relative">
              <span className="eyebrow">{config.label}</span>
              <h2 className="mt-6 text-4xl md:text-5xl">{config.title}</h2>
              <p className="mt-6 leading-relaxed text-cream/70">
                {config.intro}
              </p>

              {active === "support" && (
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-light">
                    Bank transfer
                  </h4>
                  {hasBank ? (
                    <dl className="mt-4 space-y-3 text-sm">
                      <div>
                        <dt className="text-cream/50">Bank</dt>
                        <dd>{donation.bankName}</dd>
                      </div>
                      <div>
                        <dt className="text-cream/50">Account name</dt>
                        <dd>{donation.accountName}</dd>
                      </div>
                      <div>
                        <dt className="text-cream/50">Account number</dt>
                        <dd className="font-display text-2xl">
                          {donation.accountNumber}
                        </dd>
                      </div>
                    </dl>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-cream/70">
                      Send us a message and we'll share payment details directly.
                    </p>
                  )}
                </div>
              )}

              <h4 className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-sun-light">
                What happens next
              </h4>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sun/50 font-display text-sm text-sun">
                      {i + 1}
                    </span>
                    <span className="text-cream/80">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-[2rem] border border-line bg-white p-8 shadow-xl shadow-ink/5 md:p-12">
              <Form key={active} formKey={active} config={config} />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="container-x mt-10 text-center text-stone">
            Not sure where you fit? Email us at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-ink underline underline-offset-4"
            >
              {site.email}
            </a>{" "}
            or{" "}
            <Link
              to="/contact"
              className="font-semibold text-ink underline underline-offset-4"
            >
              use the contact page
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </Page>
  );
}