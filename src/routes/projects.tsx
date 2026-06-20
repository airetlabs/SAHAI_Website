import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

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

type Project = {
  tag: string;
  status: "Active" | "Beta" | "Archived";
  title: string;
  subtitle: string;
  body: string;
  team: string;
  year: string;
  stack: string[];
  hue: string;
  glyph: "atlas" | "pulse" | "sparse" | "lens" | "mesh" | "embody";
};

const projects: Project[] = [
  { tag: "Generative AI", status: "Active", title: "Atlas", subtitle: "Multilingual foundation models for Indian languages", body: "A 7B-parameter open model family trained on 22 Indian languages for downstream fine-tuning across legal, medical and educational corpora.", team: "12 researchers", year: "2023–", stack: ["PyTorch", "Megatron", "FlashAttn"], hue: "from-[#C8B8A8] to-[#E6D8C8]", glyph: "atlas" },
  { tag: "Healthcare AI", status: "Active", title: "Pulse", subtitle: "Early stroke detection from multi-modal clinical streams", body: "Transformer fusion of EHR, neural imaging and temporal vitals achieving 94% precision on validation cohorts across three partner hospitals.", team: "7 researchers", year: "2022–", stack: ["PyTorch", "MONAI", "FHIR"], hue: "from-[#D8B0B0] to-[#E8C8C8]", glyph: "pulse" },
  { tag: "Edge AI", status: "Active", title: "Sparse", subtitle: "Sub-millisecond inference for constrained devices", body: "Pruning and distillation framework cutting transformer inference latency by 40% on ARM and RISC-V edge hardware with no accuracy compromise.", team: "5 researchers", year: "2023–", stack: ["TVM", "ONNX", "C++"], hue: "from-[#D0C0A8] to-[#E0D4C0]", glyph: "sparse" },
  { tag: "Explainable AI", status: "Active", title: "Lens", subtitle: "Interpretability primitives for deep models", body: "A library of attribution, probing and counterfactual tools for understanding model decisions in clinical and legal applications.", team: "6 researchers", year: "2022–", stack: ["PyTorch", "Captum", "JAX"], hue: "from-[#B8B0D0] to-[#D0C8E0]", glyph: "lens" },
  { tag: "Knowledge Systems", status: "Active", title: "Mesh", subtitle: "Neuro-symbolic reasoning over knowledge graphs", body: "Hybrid systems combining graph neural networks with symbolic logic for verifiable multi-hop reasoning across structured domains.", team: "8 researchers", year: "2024–", stack: ["DGL", "Neo4j", "Prolog"], hue: "from-[#B0C8D8] to-[#C8DCE8]", glyph: "mesh" },
  { tag: "Robotics", status: "Active", title: "Embody", subtitle: "Vision-language-action for mobile manipulation", body: "End-to-end policy learning for warehouse and home robots with simulation-to-real transfer on commodity hardware.", team: "4 researchers", year: "2024–", stack: ["Isaac", "ROS2", "JAX"], hue: "from-[#A8C0B8] to-[#C8D8D0]", glyph: "embody" },
];

const completed = [
  "Vox — speech recognition for 11 South Asian languages",
  "Atlas v0 — bilingual foundation model (2.1B)",
  "Sentinel — wildfire prediction from satellite imagery",
  "Pulse-Pilot — emergency triage assistant deployed at AIIMS",
];

function Glyph({ kind }: { kind: Project["glyph"] }) {
  return (
    <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full">
      {kind === "atlas" && Array.from({ length: 5 }).map((_, i) => (
        <motion.ellipse key={i} cx="100" cy="70" rx={30 + i * 12} ry={10 + i * 4}
          fill="none" stroke="rgba(20,20,30,0.3)" strokeWidth="0.6"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.1 }} />
      ))}
      {kind === "pulse" && (
        <motion.path d="M0 70 L40 70 L55 40 L70 100 L85 30 L100 90 L115 70 L200 70"
          fill="none" stroke="rgba(20,20,30,0.5)" strokeWidth="1.2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.5 }} />
      )}
      {kind === "sparse" && Array.from({ length: 8 }).map((_, r) => Array.from({ length: 14 }).map((_, c) => (
        <motion.rect key={`${r}-${c}`} x={c * 14 + 4} y={r * 14 + 8} width="8" height="8" rx="1"
          fill={Math.random() > 0.6 ? "rgba(20,20,30,0.4)" : "rgba(20,20,30,0.08)"}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.3, delay: (r * 14 + c) * 0.005 }} />
      )))}
      {kind === "lens" && (
        <>
          <motion.circle cx="100" cy="70" r="40" fill="none" stroke="rgba(20,20,30,0.4)" strokeWidth="0.8"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
          <motion.circle cx="100" cy="70" r="22" fill="rgba(20,20,30,0.15)"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
          <motion.circle cx="100" cy="70" r="6" fill="rgba(20,20,30,0.7)"
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} />
        </>
      )}
      {kind === "mesh" && Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        const x = 100 + Math.cos(a) * 45;
        const y = 70 + Math.sin(a) * 35;
        return (
          <g key={i}>
            <motion.line x1="100" y1="70" x2={x} y2={y} stroke="rgba(20,20,30,0.3)" strokeWidth="0.6"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05 }} />
            <motion.circle cx={x} cy={y} r="4" fill="rgba(20,20,30,0.6)"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }} />
          </g>
        );
      })}
      {kind === "embody" && (
        <>
          <motion.rect x="70" y="40" width="60" height="50" rx="4" fill="none" stroke="rgba(20,20,30,0.4)" strokeWidth="0.8"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
          <motion.line x1="100" y1="90" x2="100" y2="120" stroke="rgba(20,20,30,0.4)" strokeWidth="0.8"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} />
          <motion.circle cx="100" cy="65" r="6" fill="rgba(20,20,30,0.7)"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
        </>
      )}
    </svg>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={<>Research, <span className="italic font-light text-ink/50">deployed.</span></>}
        description="Eighteen active projects across foundation models, applied AI, and systems research. Each one connects fundamental science to a real-world question."
      />

      <section className="container-page pb-24">
        <Stagger className="grid md:grid-cols-2 gap-6 lg:gap-8" stagger={0.08}>
          {projects.map((p, i) => (
            <StaggerItem key={p.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full flex flex-col rounded-3xl bg-surface ring-1 ring-border overflow-hidden hover:ring-ink hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.22)] transition-all"
              >
                <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.hue} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)", backgroundSize: "14px 14px" }} />
                  <Glyph kind={p.glyph} />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full bg-canvas/85 backdrop-blur px-2.5 py-1 eyebrow text-[9px] text-ink">{p.tag}</span>
                  </div>
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-canvas/85 backdrop-blur px-2.5 py-1 text-[10px] font-mono text-ink-soft">
                    <motion.span className="size-1.5 rounded-full bg-sage" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    {p.status}
                  </div>
                  <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.2em] text-ink/40">
                    P · {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 lg:p-7">
                  <h3 className="font-display text-3xl font-semibold tracking-tight leading-none group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm font-medium text-ink-soft">{p.subtitle}</p>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">{p.body}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-mono text-ink">{s}</span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-hairline grid grid-cols-2 gap-3 text-[11px]">
                    <div>
                      <div className="eyebrow text-[9px]">Team</div>
                      <div className="font-mono text-ink mt-0.5">{p.team}</div>
                    </div>
                    <div>
                      <div className="eyebrow text-[9px]">Period</div>
                      <div className="font-mono text-ink mt-0.5">{p.year}</div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Read paper", "View code", "Dataset"].map((b) => (
                      <motion.button
                        key={b}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-full bg-muted px-3 py-1.5 text-[11px] font-medium hover:bg-ink hover:text-canvas transition-colors"
                      >
                        {b} →
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-muted/50 border-y border-hairline py-24">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-accent mb-4">Completed projects</p>
            <h2 className="font-display text-4xl font-semibold mb-10">Selected past work</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden" stagger={0.06}>
            {completed.map((c) => (
              <StaggerItem key={c}>
                <div className="bg-surface p-6 text-sm text-ink-soft hover:bg-canvas transition-colors h-full">
                  <span className="text-accent font-mono mr-3">↳</span>{c}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
