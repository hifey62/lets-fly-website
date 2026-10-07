import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Check, Send } from "lucide-react";
import { site } from "../data/site";

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SHEETS_URL = import.meta.env.VITE_SHEETS_URL;

const inputCls =
  "min-w-0 w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink placeholder:text-stone/60 transition focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15";

async function send(payload, raw) {
  // optional: also log every submission into a Google Sheet
  if (SHEETS_URL) {
    fetch(SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        type: payload.form_type,
        ...raw,
        submittedAt: new Date().toISOString(),
      }),
    }).catch(() => {});
  }

  if (SERVICE && TEMPLATE && KEY) {
    await emailjs.send(SERVICE, TEMPLATE, payload, { publicKey: KEY });
    return;
  }

  // demo mode: no keys set yet
  console.info("[demo mode] form submission:", payload);
  await new Promise((r) => setTimeout(r, 900));
}

export default function Form({ config, formKey }) {
  const [values, setValues] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const set = (name) => (e) =>
    setValues((v) => ({ ...v, [name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();

    // honeypot: real people never see or fill this field
    if (e.currentTarget.elements.website?.value) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    const details = config.fields
      .map((f) => `${f.label}: ${values[f.name] || "-"}`)
      .join("\n");

    const payload = {
      form_type: config.label,
      from_name: values.name || "Website visitor",
      reply_to: values.email || "",
      details,
    };

    try {
      await send(payload, values);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const reset = () => {
    setValues({});
    setStatus("idle");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex min-h-[26rem] flex-col items-center justify-center text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-sun text-ink-dark"
          >
            <Check size={38} strokeWidth={2.5} />
          </motion.span>
          <h3 className="mt-8 text-3xl md:text-4xl">
            Thank you{values.name ? `, ${values.name.split(" ")[0]}` : ""}.
          </h3>
          <p className="mt-4 max-w-sm leading-relaxed text-stone">
            We've received your message and will get back to you by email soon.
          </p>
          <button
            onClick={reset}
            className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-ink underline-offset-8 hover:underline"
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {config.fields.map((f) => {
            const id = `${formKey}-${f.name}`;
            return (
             <div key={f.name} className={`min-w-0 ${f.full ? "sm:col-span-2" : ""}`}>
                <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
                  {f.label}
                  {f.required && <span className="text-sun"> *</span>}
                </label>

                {f.type === "textarea" ? (
                  <textarea
                    id={id}
                    rows={5}
                    required={f.required}
                    value={values[f.name] ?? ""}
                    onChange={set(f.name)}
                    className={`${inputCls} resize-y`}
                  />
                ) : f.type === "select" ? (
                  <select
                    id={id}
                    required={f.required}
                    value={values[f.name] ?? ""}
                    onChange={set(f.name)}
                    className={inputCls}
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    {f.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={id}
                    type={f.type}
                    required={f.required}
                    value={values[f.name] ?? ""}
                    onChange={set(f.name)}
                    className={inputCls}
                  />
                )}
              </div>
            );
          })}

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-dark group w-full disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
                  Sending...
                </>
              ) : (
                <>
                  {config.submit}
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Something went wrong. Please try again, or email us at{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
                .
              </p>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}