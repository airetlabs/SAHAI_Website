import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SPARKS Lab" },
      { name: "description", content: "Contact SPARKS Lab at NIT Tiruchirappalli — for research collaborations, doctoral admissions, industry partnerships and press." },
      { property: "og:title", content: "Contact · SPARKS Lab" },
      { property: "og:description", content: "Get in touch with the lab." },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How can I apply for a Ph.D. at SPARKS Lab?", a: "Doctoral admissions are processed through NIT Trichy's institutional Ph.D. portal each semester. Strong candidates are encouraged to email the lab in advance to discuss research fit." },
  { q: "Do you accept internships or visiting scholars?", a: "Yes — we host 6–12 month visiting research positions for advanced master's and doctoral students. Applications are reviewed twice per year." },
  { q: "Can industry partners collaborate with the lab?", a: "We run several active industry consortia. Reach out via the partnerships address with a one-page brief on your problem area." },
  { q: "Are datasets and code available?", a: "All non-sensitive datasets and code from our publications are released openly. See the Research page for repositories." },
];

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="italic font-light text-ink/50">talk.</span></>}
        description="Whether you're a prospective scholar, industry partner, or fellow researcher — we'd love to hear from you."
      />

      <section className="container-page grid lg:grid-cols-[1.2fr_1fr] gap-16 pb-32">
        <div>
          <form className="space-y-6 rounded-3xl bg-surface ring-1 ring-border p-8 lg:p-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@institute.edu" />
            </div>
            <Field label="Affiliation" placeholder="University, company or organization" />
            <div>
              <label className="eyebrow text-[9px] mb-2 block">Subject</label>
              <select className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-ink">
                <option>Research collaboration</option>
                <option>Doctoral admission inquiry</option>
                <option>Industry partnership</option>
                <option>Press / media</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="eyebrow text-[9px] mb-2 block">Message</label>
              <textarea rows={6} placeholder="Tell us briefly about your interest..." className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-ink resize-none" />
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-6 py-3 text-sm font-medium hover:bg-ink-dark">
              Send message →
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl bg-ink text-canvas p-8">
            <p className="eyebrow text-accent mb-3">Visit</p>
            <p className="font-display text-xl font-semibold leading-tight">
              SPARKS Lab<br />
              Department of CSE<br />
              NIT Tiruchirappalli
            </p>
            <p className="mt-4 text-sm text-canvas/70 leading-relaxed">
              Tanjore Main Road, NH-67<br />
              Tiruchirappalli — 620015<br />
              Tamil Nadu, India
            </p>
          </div>
          <Contact label="Research inquiries" value="research@sparks.nitt.edu" />
          <Contact label="Partnerships" value="partnerships@sparks.nitt.edu" />
          <Contact label="Press" value="press@sparks.nitt.edu" />
          <Contact label="Office hours" value="Mon–Fri · 10:00–17:00 IST" />
        </div>
      </section>

      <section className="container-page pb-32">
        <p className="eyebrow text-accent mb-4">FAQ</p>
        <h2 className="font-display text-4xl font-semibold mb-10">Frequently asked</h2>
        <div className="divide-y divide-hairline ring-1 ring-hairline rounded-2xl bg-surface">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-6 lg:p-8 hover:bg-canvas transition-colors">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-lg font-semibold">{f.q}</h3>
                <span className={`text-accent font-mono transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </div>
              {open === i && <p className="mt-4 text-sm text-ink-soft leading-relaxed">{f.a}</p>}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow text-[9px] mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-ink"
      />
    </div>
  );
}
function Contact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface ring-1 ring-border p-6">
      <p className="eyebrow text-[9px] mb-2">{label}</p>
      <p className="font-mono text-sm text-ink">{value}</p>
    </div>
  );
}
