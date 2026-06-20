import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — SPARKS Lab" },
      { name: "description", content: "Peer-reviewed publications, conference papers, journal articles and patents from SPARKS Lab researchers." },
      { property: "og:title", content: "Publications · SPARKS Lab" },
      { property: "og:description", content: "152+ publications spanning the leading AI venues." },
    ],
  }),
  component: PublicationsPage,
});

type Pub = {
  venue: string; type: string; year: number; title: string;
  authors: string; body: string; citations: number; flagship?: boolean;
};

const pubs: Pub[] = [
  { venue: "NeurIPS 2024", type: "Conference", year: 2024, title: "Recursive Knowledge Graphs for Generative Reasoning", authors: "Abdullah A., Sharma R., Krishnan V., et al.", body: "We show how structured knowledge graphs can constrain LLM hallucinations through dynamic node retrieval and iterative self-correction across multi-hop reasoning chains.", citations: 42, flagship: true },
  { venue: "Nature Machine Intelligence", type: "Journal", year: 2024, title: "Interpretable Multi-modal Fusion for Clinical Decision Support", authors: "Sharma R., Abdullah A., Iyer M.", body: "A clinically validated framework combining EHR, imaging and waveform data with built-in attribution for clinician trust.", citations: 67, flagship: true },
  { venue: "CVPR 2024", type: "Conference", year: 2024, title: "Dynamic Latent Inference for Heterogeneous Edge Devices", authors: "Iyer M., Abdullah A., Patel S.", body: "Decentralized framework for adaptive vision-model updates across constrained IoT hardware.", citations: 28 },
  { venue: "ACL 2024", type: "Conference", year: 2024, title: "Atlas — A Multilingual Foundation Model for 22 Indian Languages", authors: "Reddy V., Abdullah A., et al.", body: "Open release of a 7B-parameter foundation model with strong cross-lingual transfer.", citations: 89 },
  { venue: "ICLR 2024", type: "Conference", year: 2024, title: "Sparse Attention Distillation for Real-Time Inference", authors: "Patel S., Abdullah A.", body: "40% latency reduction on transformer inference with no accuracy degradation.", citations: 35 },
  { venue: "TMLR", type: "Journal", year: 2023, title: "On the Geometry of Neural Knowledge Representations", authors: "Abdullah A., Menon A.", body: "Empirical study of representation collapse in deep knowledge embeddings.", citations: 51 },
  { venue: "EMNLP 2023", type: "Conference", year: 2023, title: "Low-Resource Language Adaptation via Hierarchical Distillation", authors: "Krishnan P., Joshi N.", body: "Methodology for adapting large multilingual models to low-resource South Asian languages.", citations: 31 },
  { venue: "MICCAI 2023", type: "Conference", year: 2023, title: "Early Stroke Prediction from Continuous Vital Signs", authors: "Sharma R., et al.", body: "Temporal transformer architecture deployed at three Indian tertiary care hospitals.", citations: 24 },
];

const filters = ["All", "Conference", "Journal", "Preprint", "Patent"];

function PublicationsPage() {
  const [filter, setFilter] = useState("All");
  const flagship = pubs.filter((p) => p.flagship);
  const rest = pubs.filter((p) => !p.flagship && (filter === "All" || p.type === filter));

  return (
    <>
      <PageHeader
        eyebrow="Publications · 152+"
        title={<>Scholarship as <span className="italic font-light text-ink/50">contribution.</span></>}
        description="Peer-reviewed work from SPARKS Lab researchers across the leading venues in machine learning, vision, language, and applied AI."
      />

      <section className="container-page pb-12">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                filter === f
                  ? "bg-ink text-canvas"
                  : "bg-surface ring-1 ring-border text-ink-soft hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
          <div className="ml-auto font-mono text-xs text-ink-soft">
            Showing {flagship.length + rest.length} papers
          </div>
        </div>
      </section>

      {/* Flagship showcase */}
      <section className="container-page space-y-12 pb-20">
        {flagship.map((p, i) => (
          <PubShowcase key={p.title} pub={p} reverse={i % 2 === 1} index={i} />
        ))}
      </section>

      {/* Archive grid */}
      <section className="bg-muted/40 border-y border-hairline py-24">
        <div className="container-page">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-display text-4xl font-semibold tracking-tight">Archive</h2>
            <span className="eyebrow">{rest.length} entries</span>
          </div>
          <div className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden">
            {rest.map((p) => (
              <article key={p.title} className="bg-surface p-6 lg:p-8 hover:bg-canvas transition-colors grid lg:grid-cols-[1fr_2fr_auto] gap-6 items-start">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="font-mono text-[10px] text-accent">{p.venue}</span>
                  <span className="font-mono text-[10px] text-ink-soft">{p.year}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-2 text-xs font-mono text-ink-soft">{p.authors}</p>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-2">{p.body}</p>
                </div>
                <div className="flex lg:flex-col items-center lg:items-end gap-3 lg:text-right">
                  <div>
                    <div className="font-display text-2xl font-semibold text-accent">{p.citations}</div>
                    <div className="eyebrow text-[9px]">citations</div>
                  </div>
                  <div className="flex gap-1">
                    {["PDF", "BibTeX"].map((b) => (
                      <button key={b} className="rounded-md bg-muted hover:bg-ink hover:text-canvas px-2 py-1 text-[10px] font-mono">{b}</button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PubShowcase({ pub, reverse, index }: { pub: Pub; reverse: boolean; index: number }) {
  return (
    <article className={`group grid lg:grid-cols-10 rounded-3xl overflow-hidden bg-surface ring-1 ring-border hover:ring-ink transition-all`}>
      <div className={`lg:col-span-7 aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-muted to-canvas relative overflow-hidden ${reverse ? "lg:order-2" : ""}`}>
        <div className="absolute inset-0 bg-dotgrid opacity-30" />
        <div className="absolute inset-0 grid place-items-center">
          <FlagshipDiagram variant={index} />
        </div>
        <div className="absolute top-6 left-6 eyebrow text-[9px] text-ink-soft">
          Fig {index + 1} · Architecture
        </div>
        <div className="absolute bottom-6 right-6 font-mono text-[10px] text-ink-soft">
          {pub.venue}
        </div>
      </div>
      <div className="lg:col-span-3 p-10 flex flex-col justify-between gap-8">
        <div>
          <span className="inline-block rounded-full bg-accent-soft text-accent px-3 py-1 eyebrow text-[9px]">Featured · {pub.year}</span>
          <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">{pub.title}</h3>
          <p className="mt-3 text-xs font-mono text-ink-soft">{pub.authors}</p>
          <p className="mt-5 text-sm text-ink-soft leading-relaxed">{pub.body}</p>
        </div>
        <div>
          <div className="flex items-center justify-between py-3 border-t border-hairline">
            <span className="eyebrow text-[9px]">Citations</span>
            <span className="font-display text-xl font-semibold text-accent">{pub.citations}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["PDF", "BibTeX", "DOI", "View"].map((b) => (
              <button key={b} className="rounded-full bg-muted hover:bg-ink hover:text-canvas px-3 py-1.5 text-[11px] font-mono transition-colors">
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function FlagshipDiagram({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <svg viewBox="0 0 600 300" className="w-3/4 h-3/4">
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i}>
            <circle cx={80 + i * 110} cy={150} r="22" fill="oklch(0.985 0.005 80)" stroke="oklch(0.68 0.165 55)" strokeWidth="1.5" />
            <text x={80 + i * 110} y={155} textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="oklch(0.18 0.012 60)">
              {`L${i + 1}`}
            </text>
            {i < 4 && (
              <line x1={102 + i * 110} y1={150} x2={158 + i * 110} y2={150} stroke="oklch(0.18 0.012 60 / 0.3)" strokeWidth="1" markerEnd="url(#a)" />
            )}
          </g>
        ))}
        <defs>
          <marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="oklch(0.18 0.012 60 / 0.5)" />
          </marker>
        </defs>
        {/* Recursive loops */}
        <path d="M 540 130 Q 580 100 580 150 Q 580 200 540 170" fill="none" stroke="oklch(0.68 0.165 55)" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#a)" />
        <text x="300" y="50" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="oklch(0.32 0.012 60)" letterSpacing="0.15em">
          RECURSIVE KNOWLEDGE PIPELINE
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 600 300" className="w-3/4 h-3/4">
      {/* Multi-modal fusion */}
      {[{ y: 80, l: "EHR" }, { y: 150, l: "IMAGING" }, { y: 220, l: "VITALS" }].map((row, i) => (
        <g key={i}>
          <rect x="40" y={row.y - 18} width="100" height="36" rx="6" fill="oklch(0.985 0.005 80)" stroke="oklch(0.6 0.18 35 / 0.5)" />
          <text x="90" y={row.y + 4} textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="oklch(0.18 0.012 60)">{row.l}</text>
          <line x1="140" y1={row.y} x2="280" y2="150" stroke="oklch(0.6 0.18 35 / 0.4)" strokeDasharray="3 3" />
        </g>
      ))}
      <rect x="280" y="120" width="120" height="60" rx="8" fill="oklch(0.6 0.18 35 / 0.15)" stroke="oklch(0.6 0.18 35)" />
      <text x="340" y="155" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="oklch(0.18 0.012 60)">FUSION</text>
      <line x1="400" y1="150" x2="500" y2="150" stroke="oklch(0.18 0.012 60 / 0.3)" />
      <rect x="500" y="120" width="80" height="60" rx="8" fill="oklch(0.985 0.005 80)" stroke="oklch(0.18 0.012 60 / 0.3)" />
      <text x="540" y="155" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="oklch(0.18 0.012 60)">RISK</text>
    </svg>
  );
}
