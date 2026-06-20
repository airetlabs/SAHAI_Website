import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/patents")({
  head: () => ({
    meta: [
      { title: "Patents — SPARKS Lab" },
      { name: "description", content: "Patents granted, filed and transferred from research at SPARKS Lab, NIT Tiruchirappalli." },
      { property: "og:title", content: "Patents · SPARKS Lab" },
      { property: "og:description", content: "Translational IP from foundational research." },
    ],
  }),
  component: PatentsPage,
});

const patents = {
  granted: [
    { no: "IN-419823", year: 2023, title: "System and method for sparse attention distillation in transformer inference", inventors: "Abdullah A., Patel S." },
    { no: "IN-401205", year: 2022, title: "Apparatus for multi-modal clinical risk prediction from EHR and imaging streams", inventors: "Sharma R., Abdullah A." },
    { no: "IN-388742", year: 2022, title: "Method for low-resource language adaptation in neural translation models", inventors: "Krishnan P., Abdullah A." },
  ],
  filed: [
    { no: "IN-PCT-2024/2247", year: 2024, title: "Recursive knowledge graph retrieval for grounded language generation", inventors: "Abdullah A., Iyer M." },
    { no: "IN-PCT-2024/1891", year: 2024, title: "On-device generative model compression via structured pruning", inventors: "Patel S., Reddy V." },
    { no: "IN-PCT-2023/4421", year: 2023, title: "Vision-language fusion for surgical scene understanding", inventors: "Sharma R., et al." },
  ],
  transfer: [
    { partner: "MedTech Innovations Pvt. Ltd.", tech: "Pulse clinical decision support stack" },
    { partner: "Bharat Edge Compute", tech: "Sparse-inference runtime for ARM Cortex-M" },
  ],
};

function PatentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Patents · 12 total"
        title={<>Research, <span className="italic font-light text-ink/50">protected.</span></>}
        description="Twelve patents granted or filed across machine learning systems, healthcare AI and edge inference — with two technology transfers to industry partners."
      />

      <section className="container-page pb-20">
        <Group title="Granted" eyebrow="01" items={patents.granted} />
      </section>
      <section className="container-page pb-20">
        <Group title="Filed" eyebrow="02" items={patents.filed} />
      </section>

      <section className="bg-ink text-canvas py-20 border-y border-canvas/5">
        <div className="container-page">
          <p className="eyebrow text-accent mb-4">03 · Technology Transfer</p>
          <h2 className="font-display text-4xl font-semibold mb-10">Active commercial deployments</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {patents.transfer.map((t) => (
              <article key={t.partner} className="rounded-2xl bg-canvas/5 ring-1 ring-canvas/10 p-8">
                <p className="eyebrow text-canvas/50 mb-3">Partner</p>
                <div className="font-display text-2xl font-semibold">{t.partner}</div>
                <p className="mt-4 text-sm text-canvas/70">{t.tech}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Group({ title, eyebrow, items }: { title: string; eyebrow: string; items: typeof patents.granted }) {
  return (
    <>
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          <span className="font-mono text-base text-accent mr-4">{eyebrow}</span>{title}
        </h2>
        <span className="eyebrow">{items.length} patents</span>
      </div>
      <div className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden">
        {items.map((p) => (
          <article key={p.no} className="bg-surface p-6 lg:p-8 grid lg:grid-cols-[180px_1fr_auto] gap-4 lg:gap-8 items-start lg:items-center hover:bg-canvas">
            <div>
              <div className="font-mono text-sm text-accent">{p.no}</div>
              <div className="eyebrow text-[9px] mt-1">{p.year}</div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
              <p className="mt-1 text-xs font-mono text-ink-soft">Inventors: {p.inventors}</p>
            </div>
            <button className="text-sm font-medium text-ink hover:text-accent">View →</button>
          </article>
        ))}
      </div>
    </>
  );
}
