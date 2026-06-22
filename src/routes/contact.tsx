import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem, RevealWords } from "../components/Reveal";

// 🔑 Replace with your own EmailJS values
const EMAILJS_SERVICE_ID = "service_ejbuir2";
const EMAILJS_TEMPLATE_ID = "template_badvnam";
const EMAILJS_PUBLIC_KEY = "6I3nmLkqaxo-PzWvt";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SPARKS Lab" },
      {
        name: "description",
        content:
          "Contact SPARKS Lab at NIT Tiruchirappalli — for research collaborations, doctoral admissions, industry partnerships and press.",
      },
      { property: "og:title", content: "Contact · SPARKS Lab" },
      { property: "og:description", content: "Get in touch with the lab." },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How can I apply for a Ph.D. at SPARKS Lab?",
    a: "Doctoral admissions are processed through NIT Trichy's institutional Ph.D. portal each semester. Strong candidates are encouraged to email the lab in advance to discuss research fit.",
  },
  {
    q: "Do you accept internships or visiting scholars?",
    a: "Yes — we host 6–12 month visiting research positions for advanced master's and doctoral students. Applications are reviewed twice per year.",
  },
  {
    q: "Can industry partners collaborate with the lab?",
    a: "We run several active industry consortia. Reach out via the partnerships address with a one-page brief on your problem area.",
  },
  {
    q: "Are datasets and code available?",
    a: "All non-sensitive datasets and code from our publications are released openly. See the Research page for repositories.",
  },
];

const contactDetails: [string, string][] = [
  ["Research inquiries", "research@sparks.nitt.edu"],
  // ["Partnerships", "partnerships@sparks.nitt.edu"],
  // ["Press", "press@sparks.nitt.edu"],
  ["Office hours", "Mon–Fri · 10:00–17:00 IST"],
];

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    affiliation: "",
    subject: "Research collaboration",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          affiliation: form.affiliation,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        affiliation: "",
        subject: "Research collaboration",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's <span className="italic font-light text-ink/50">talk.</span>
          </>
        }
        description="Whether you're a prospective scholar, industry partner, or fellow researcher — we'd love to hear from you."
      />

      {/* Form + contact details */}
      <section className="container-page grid lg:grid-cols-[1.2fr_1fr] gap-16 pb-32">
        <Reveal>
          <motion.form
            whileHover={{ y: -2 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSend}
            className="space-y-6 rounded-3xl bg-surface ring-1 ring-border p-8 lg:p-10 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] hover:ring-ink/20 transition-all"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field
                label="Full name"
                placeholder="Your name"
                value={form.name}
                onChange={update("name")}
                required
              />
              <Field
                label="Email"
                type="email"
                placeholder="you@institute.edu"
                value={form.email}
                onChange={update("email")}
                required
              />
            </div>

            <Field
              label="Affiliation"
              placeholder="University, company or organization"
              value={form.affiliation}
              onChange={update("affiliation")}
            />

            <FloatingField label="Subject">
              <select
                value={form.subject}
                onChange={update("subject")}
                className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-ink transition-all"
              >
                <option>Research collaboration</option>
                <option>Doctoral admission inquiry</option>
                <option>Industry partnership</option>
                <option>Press / media</option>
                <option>Other</option>
              </select>
            </FloatingField>

            <FloatingField label="Message">
              <textarea
                rows={6}
                placeholder="Tell us briefly about your interest..."
                value={form.message}
                onChange={update("message")}
                required
                className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-ink focus:ring-2 resize-none transition-all"
              />
            </FloatingField>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ y: -2, boxShadow: "0 12px 30px -10px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-6 py-3 text-sm font-medium disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message →"}
              </motion.button>
              {status === "sent" && (
                <span className="text-sm text-accent">Message sent — thank you!</span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-500">Something went wrong. Try again.</span>
              )}
            </div>
          </motion.form>
        </Reveal>

        <Stagger className="space-y-8" stagger={0.08}>
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-ink text-canvas p-8 relative overflow-hidden"
            >
              <motion.div
                className="absolute -bottom-16 -right-16 size-48 rounded-full bg-accent/30 blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <p className="eyebrow text-accent mb-3 relative">Visit</p>
              <p className="font-display text-xl font-semibold leading-tight relative">
                SPARKS Lab
                <br />
                Department of CSE
                <br />
                NIT Tiruchirappalli
              </p>
              <p className="mt-4 text-sm text-canvas/70 leading-relaxed relative">
                Tanjore Main Road, NH-67
                <br />
                Tiruchirappalli — 620015
                <br />
                Tamil Nadu, India
              </p>
            </motion.div>
          </StaggerItem>

          {contactDetails.map(([label, value]) => (
            <StaggerItem key={label}>
              <Contact label={label} value={value} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="container-page pb-32">
        <Reveal>
          <p className="eyebrow text-accent mb-4">FAQ</p>
          <h2 className="font-display text-4xl font-semibold mb-10">
            <RevealWords text="Frequently asked" />
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-hairline ring-1 ring-hairline rounded-2xl bg-surface overflow-hidden">
            {faqs.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-6 lg:p-8 hover:bg-canvas transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold">{f.q}</h3>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-accent font-mono text-xl"
                    >
                      +
                    </motion.span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 lg:px-8 pb-6 lg:pb-8 text-sm text-ink-soft leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

function FloatingField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="eyebrow text-[9px] mb-2 block">{label}</label>
      {children}
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow text-[9px] mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all"
      />
    </div>
  );
}

function Contact({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, borderColor: "oklch(0.68 0.165 55 / 0.4)" }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-surface ring-1 ring-border p-6 hover:ring-accent/40 transition-all"
    >
      <p className="eyebrow text-[9px] mb-2">{label}</p>
      <p className="font-mono text-sm text-ink">{value}</p>
    </motion.div>
  );
}