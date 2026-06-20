import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — SPARKS Lab" },
      { name: "description", content: "Active and completed research projects at SPARKS Lab across foundation models, healthcare AI, edge intelligence and more." },
      { property: "og:title", content: "Projects · SPARKS Lab" },
      { property: "og:description", content: "Research projects shaping the field." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { tag: "Generative AI", status: "Active", title: "Atlas", subtitle: "Multilingual foundation models for Indian languages", body: "A 7B-parameter open model family trained on 22 Indian languages, designed for downstream fine-tuning across legal, medical and educational corpora.", team: "12 researchers", year: "2023–", funding: "MEITY" },
  { tag: "Healthcare AI", status: "Active", title: "Pulse", subtitle: "Early stroke detection from multi-modal clinical streams", body: "Transformer-based fusion of EHR, neural imaging and temporal vitals achieving 94% precision on validation cohorts across three partner hospitals.", team: "7 researchers", year: "2022–", funding: "DST + AIIMS" },
  { tag: "Edge AI", status: "Active", title: "Sparse", subtitle: "Sub-millisecond inference for constrained devices", body: "Pruning and distillation framework cutting transformer inference latency by 40% on ARM and RISC-V edge hardware with no accuracy compromise.", team: "5 researchers", year: "2023–", funding: "Industry consortium" },
  { tag: "Explainable AI", status: "Active", title: "Lens", subtitle: "Interpretability primitives for deep models", body: "A library of attribution, probing and counterfactual tools for understanding model decisions in clinical and legal applications.", team: "6 researchers", year: "2022–", funding: "DST" },
  { tag: "Knowledge Systems", status: "Active", title: "Mesh", subtitle: "Neuro-symbolic reasoning over knowledge graphs", body: "Hybrid systems combining graph neural networks with symbolic logic for verifiable multi-hop reasoning.", team: "8 researchers", year: "2024–", funding: "Internal" },
  { tag: "Robotics", status: "Active", title: "Embody", subtitle: "Vision-language-action for mobile manipulation", body: "End-to-end policy learning for warehouse and home robots with simulation-to-real transfer.", team: "4 researchers", year: "2024–", funding: "Industry" },
];

const completed = [
  "Vox — speech recognition for 11 South Asian languages",
  "Atlas v0 — bilingual foundation model (2.1B)",
  "Sentinel — wildfire prediction from satellite imagery",
  "Pulse-Pilot — emergency triage assistant deployed at AIIMS",
];

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={<>Research, <span className="italic font-light text-ink/50">deployed.</span></>}
        description="Eighteen active projects across foundation models, applied AI, and systems research. Each one connects fundamental science to a real-world question."
      />

      <section className="container-page pb-24 space-y-8">
        {projects.map((p, i) => (
          <article key={p.title} className={`grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start rounded-3xl bg-surface ring-1 ring-border p-8 lg:p-12 hover:ring-ink transition-all`}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="rounded-full bg-accent-soft text-accent px-3 py-1 eyebrow text-[9px]">{p.tag}</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-soft">
                  <span className="size-1.5 rounded-full bg-sage" /> {p.status}
                </span>
              </div>
              <div className="font-display text-5xl font-semibold tracking-tight leading-none">{p.title}</div>
              <p className="mt-3 text-base text-ink-soft">{p.subtitle}</p>
              <div className="mt-8 space-y-2 pt-6 border-t border-hairline">
                {[["Team", p.team], ["Period", p.year], ["Funding", p.funding], ["Project", `0${i + 1}`]].map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs">
                    <span className="eyebrow text-[9px]">{k}</span>
                    <span className="font-mono text-ink">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-ink leading-relaxed">{p.body}</p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Read paper", "View code", "Dataset"].map((b) => (
                  <button key={b} className="rounded-full bg-muted px-4 py-2 text-xs font-medium hover:bg-ink hover:text-canvas transition-colors">
                    {b} →
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-muted/50 border-y border-hairline py-24">
        <div className="container-page">
          <p className="eyebrow text-accent mb-4">Completed projects</p>
          <h2 className="font-display text-4xl font-semibold mb-10">Selected past work</h2>
          <ul className="grid sm:grid-cols-2 gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden">
            {completed.map((c) => (
              <li key={c} className="bg-surface p-6 text-sm text-ink-soft">
                <span className="text-accent font-mono mr-3">↳</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
