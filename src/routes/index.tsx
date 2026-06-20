import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPARKS Lab — Smart Platform for AI Research and Knowledge Systems" },
      {
        name: "description",
        content:
          "Flagship AI research laboratory at NIT Tiruchirappalli, advancing machine learning, computer vision, NLP, generative AI and knowledge systems.",
      },
      { property: "og:title", content: "SPARKS Lab — AI Research at NIT Trichy" },
      {
        property: "og:description",
        content:
          "We build the future of artificial intelligence through rigorous research, real-world systems, and human-centered design.",
      },
    ],
  }),
  component: HomePage,
});

/* ────────────────────────────────────────────────────────────── HERO */

function KnowledgeGraph() {
  // Decorative SVG knowledge graph — the hero signature
  const nodes = [
    { id: "core", cx: 300, cy: 200, r: 14, label: "SPARKS" },
    { id: "ml", cx: 110, cy: 90, r: 7 },
    { id: "cv", cx: 500, cy: 100, r: 8 },
    { id: "nlp", cx: 520, cy: 290, r: 6 },
    { id: "gen", cx: 130, cy: 320, r: 9 },
    { id: "xai", cx: 320, cy: 60, r: 5 },
    { id: "edge", cx: 80, cy: 220, r: 5 },
    { id: "rob", cx: 540, cy: 200, r: 6 },
    { id: "hai", cx: 260, cy: 350, r: 7 },
    { id: "kg", cx: 400, cy: 330, r: 5 },
  ];
  const core = nodes[0];
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="oklch(0.68 0.165 55)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="oklch(0.68 0.165 55)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={core.cx} cy={core.cy} r="160" fill="url(#glow)" />
      {nodes.slice(1).map((n, i) => (
        <line
          key={n.id}
          x1={core.cx}
          y1={core.cy}
          x2={n.cx}
          y2={n.cy}
          stroke="oklch(0.18 0.012 60 / 0.18)"
          strokeWidth="0.8"
          strokeDasharray="2 4"
          style={{ animation: `draw-line 3s ease-out ${i * 0.08}s both` }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r + 4}
            fill="oklch(0.68 0.165 55 / 0.1)"
            style={{ animation: `pulse-ring 4s ease-in-out ${i * 0.2}s infinite` }}
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill={n.id === "core" ? "oklch(0.18 0.012 60)" : "oklch(0.68 0.165 55)"}
          />
          {n.id === "core" && (
            <text
              x={n.cx}
              y={n.cy + 4}
              textAnchor="middle"
              fontSize="9"
              fontFamily="JetBrains Mono"
              fill="oklch(0.985 0.005 80)"
              letterSpacing="0.1em"
            >
              CORE
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-sage/10 blur-[120px] -z-10" />

      <div className="container-page grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 mb-8 animate-reveal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="eyebrow text-accent text-[10px]">
              Advancing intelligence · 2024
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-[8.5rem] font-semibold tracking-tight leading-[0.85] text-balance animate-reveal [animation-delay:80ms]">
            SPARKS
            <br />
            <span className="text-ink/30">LAB.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg sm:text-xl text-ink-soft leading-relaxed text-pretty animate-reveal [animation-delay:160ms]">
            <span className="font-medium text-ink">
              Smart Platform for AI Research and Knowledge Systems.
            </span>{" "}
            Advancing the future of Artificial Intelligence through research, innovation,
            education, and real-world impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-reveal [animation-delay:240ms]">
            <Link
              to="/research"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-6 py-3.5 text-sm font-medium hover:bg-ink-dark transition-all hover:scale-[1.02]"
            >
              Explore Research
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-surface ring-1 ring-border px-6 py-3.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Join SPARKS Lab
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              View Publications →
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-xl mx-auto animate-reveal [animation-delay:320ms]">
          <div className="absolute inset-0 rounded-3xl bg-surface ring-1 ring-border shadow-[0_30px_80px_-20px_oklch(0.18_0.012_60/0.15)] overflow-hidden">
            <KnowledgeGraph />
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="eyebrow text-[9px] text-ink/40">
                Knowledge Graph · v2.4
              </span>
              <span className="font-mono text-[10px] text-ink/40">10 domains · 42 nodes</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 font-mono text-[9px] text-ink/50">
              <div>↳ Active · 24 researchers</div>
              <div className="text-center">⌁ Live inference</div>
              <div className="text-right">∞ Compute online</div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 rounded-2xl bg-ink text-canvas p-4 shadow-xl animate-float-soft">
            <div className="eyebrow text-canvas/50 text-[9px] mb-1">Awards</div>
            <div className="font-display text-2xl font-semibold">12</div>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-surface ring-1 ring-border p-4 shadow-xl animate-float-soft [animation-delay:1.5s]">
            <div className="eyebrow text-[9px] mb-1">h-index</div>
            <div className="font-display text-2xl font-semibold text-accent">38</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="eyebrow text-[9px]">Scroll</span>
        <div className="h-10 w-px bg-ink" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── TRUST BAR */

function TrustBar() {
  return (
    <section className="border-y border-hairline bg-surface/50">
      <div className="container-page py-8 grid gap-6 md:grid-cols-[auto_1fr_auto] items-center">
        <div className="flex items-center gap-4 min-w-0">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-canvas font-display text-lg">
            S
          </div>
          <div className="min-w-0">
            <div className="font-display text-base font-semibold truncate">SPARKS Lab</div>
            <div className="eyebrow text-[9px] truncate">Smart Platform · AI Research</div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center text-center">
          <div className="eyebrow text-[9px] mb-1">An official research laboratory of</div>
          <div className="font-display text-sm font-medium text-ink">
            Department of Computer Science & Engineering
          </div>
        </div>
        <div className="flex items-center gap-4 min-w-0">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ember/10 ring-1 ring-ember/20 text-ember font-display text-lg font-semibold">
            N
          </div>
          <div className="min-w-0">
            <div className="font-display text-base font-semibold truncate">NIT Tiruchirappalli</div>
            <div className="eyebrow text-[9px] truncate">Institute of National Importance</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────── IMPACT STATS */

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

const stats = [
  { num: 152, suffix: "+", label: "Publications", note: "Peer reviewed · 2018–2024" },
  { num: 18, suffix: "", label: "Active Projects", note: "Funded research streams" },
  { num: 12, suffix: "", label: "Patents", note: "Filed & granted" },
  { num: 38, suffix: "", label: "Researchers", note: "Faculty · scholars · students" },
  { num: 24, suffix: "+", label: "Collaborations", note: "Industry · academia · gov" },
  { num: 16, suffix: "", label: "Awards", note: "International recognition" },
];

function ImpactStats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="container-page py-28" ref={ref}>
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
        <div>
          <p className="eyebrow text-accent mb-4">01 · Impact</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] max-w-2xl text-balance">
            Research that <span className="italic font-light text-ink/50">compounds.</span>
          </h2>
        </div>
        <p className="text-sm text-ink-soft max-w-sm leading-relaxed">
          Six years of disciplined inquiry, measured not by output alone but by the
          systems, scholars and ideas that endured.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-hairline ring-1 ring-hairline rounded-3xl overflow-hidden">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  num,
  suffix,
  label,
  note,
  index,
  visible,
}: {
  num: number;
  suffix: string;
  label: string;
  note: string;
  index: number;
  visible: boolean;
}) {
  const value = useCountUp(num, visible);
  return (
    <div className="group relative bg-surface p-8 lg:p-10 hover:bg-canvas transition-colors">
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[10px] text-accent">
          0{index + 1}/
        </span>
        <span className="size-1.5 rounded-full bg-accent opacity-60" />
      </div>
      <div className="font-display text-5xl lg:text-6xl font-semibold tracking-tight text-ink">
        {value}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-4 text-sm font-medium text-ink">{label}</div>
      <div className="mt-1 eyebrow text-[9px]">{note}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── ABOUT STORY */

function AboutStory() {
  return (
    <section className="relative py-32 bg-ink text-canvas overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="container-page relative grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="eyebrow text-accent mb-6">02 · The Lab</p>
          <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
            We build the
            <br />
            <span className="italic font-light text-canvas/50">infrastructure</span>
            <br />
            of intelligence.
          </h2>
        </div>

        <div className="space-y-12 text-lg leading-relaxed text-canvas/75">
          <p className="text-2xl text-canvas font-light leading-snug text-balance">
            SPARKS Lab is a research ecosystem at the intersection of machine learning,
            cognitive systems, and the human disciplines that give them meaning.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="eyebrow text-accent mb-3">Mission</p>
              <p className="text-sm text-canvas/70 leading-relaxed">
                To advance the science of artificial intelligence through rigorous research,
                open knowledge, and systems that serve real human needs at scale.
              </p>
            </div>
            <div>
              <p className="eyebrow text-accent mb-3">Vision</p>
              <p className="text-sm text-canvas/70 leading-relaxed">
                A future where intelligence is interpretable, equitable, and instrumental in
                solving the most consequential problems of our time.
              </p>
            </div>
          </div>

          <ul className="space-y-3 border-t border-canvas/10 pt-8">
            {[
              "Foundational research in neural architectures and knowledge representation",
              "Translational systems for healthcare, climate, and public infrastructure",
              "Open datasets, reproducible benchmarks, and trained models for the community",
              "Mentoring the next generation of Indian AI researchers and engineers",
            ].map((p) => (
              <li key={p} className="flex gap-4 text-sm text-canvas/70">
                <span className="text-accent mt-1">→</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── RESEARCH ECOSYSTEM */

const domains = [
  { id: "ml", title: "Machine Learning", note: "Foundations & theory", projects: 6 },
  { id: "dl", title: "Deep Learning", note: "Architectures · training", projects: 8 },
  { id: "cv", title: "Computer Vision", note: "Perception · recognition", projects: 7 },
  { id: "nlp", title: "Natural Language", note: "Understanding · generation", projects: 9 },
  { id: "gen", title: "Generative AI", note: "Models · diffusion · LLMs", projects: 5 },
  { id: "hai", title: "Healthcare AI", note: "Clinical · diagnostics", projects: 4 },
  { id: "xai", title: "Explainable AI", note: "Interpretation · trust", projects: 6 },
  { id: "kg", title: "Knowledge Systems", note: "Graphs · reasoning", projects: 5 },
  { id: "edge", title: "Edge AI", note: "Efficient · on-device", projects: 3 },
  { id: "rob", title: "Robotics", note: "Embodied intelligence", projects: 4 },
];

function ResearchEcosystem() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <section className="container-page py-32">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="eyebrow text-accent mb-6">03 · Ecosystem</p>
          <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
            Ten domains.
            <br />
            <span className="italic font-light text-ink/50">One living</span>
            <br />
            network.
          </h2>
          <p className="mt-8 text-ink-soft leading-relaxed max-w-md">
            We don't research in silos. Each domain feeds the others — perception informs
            language, language informs reasoning, reasoning informs the systems we deploy
            into the world.
          </p>
          <Link
            to="/research"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            Explore all research →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {domains.map((d, i) => (
            <button
              key={d.id}
              onMouseEnter={() => setHover(d.id)}
              onMouseLeave={() => setHover(null)}
              className={`group relative text-left p-6 rounded-2xl ring-1 transition-all duration-500 ${
                hover && hover !== d.id
                  ? "ring-hairline bg-surface opacity-50"
                  : "ring-border bg-surface hover:ring-accent hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] text-ink/40">
                  {d.projects} projects
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {d.title}
              </h3>
              <p className="mt-2 text-xs text-ink-soft">{d.note}</p>
              <div className="mt-6 h-px bg-hairline group-hover:bg-accent transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── FEATURED PROJECTS */

const projects = [
  {
    tag: "Generative AI",
    title: "Atlas — Multilingual Foundation Models for Indian Languages",
    body: "A 7B-parameter open model family trained on 22 Indian languages. Built for downstream fine-tuning across legal, medical and educational corpora.",
    metrics: [
      ["Languages", "22"],
      ["Parameters", "7B"],
      ["Downloads", "180k"],
    ],
    accent: "accent",
  },
  {
    tag: "Healthcare AI",
    title: "Pulse — Early Stroke Detection from Multi-Modal Clinical Streams",
    body: "Transformer-based fusion of EHR, neural imaging and temporal vitals achieving 94% precision on validation cohorts across three partner hospitals.",
    metrics: [
      ["Precision", "94%"],
      ["Sites", "3"],
      ["Patients", "11k+"],
    ],
    accent: "ember",
  },
  {
    tag: "Edge AI",
    title: "Sparse — Sub-millisecond Inference for Constrained Devices",
    body: "A pruning and distillation framework cutting transformer inference latency by 40% on ARM and RISC-V edge hardware with no accuracy compromise.",
    metrics: [
      ["Latency", "0.8ms"],
      ["Reduction", "40%"],
      ["Accuracy", "98.2%"],
    ],
    accent: "sage",
  },
];

function FeaturedProjects() {
  return (
    <section className="bg-muted/50 py-32 border-y border-hairline">
      <div className="container-page">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="eyebrow text-accent mb-4">04 · Featured work</p>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] max-w-2xl text-balance">
              Projects shaping the field.
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-ink hover:text-accent border-b border-ink hover:border-accent pb-0.5 transition-colors"
          >
            All projects →
          </Link>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group grid lg:grid-cols-[1.4fr_1fr] gap-0 rounded-3xl overflow-hidden bg-surface ring-1 ring-border hover:ring-ink transition-all hover:shadow-[0_30px_80px_-30px_oklch(0.18_0.012_60/0.3)]"
            >
              <div
                className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${
                  p.accent === "accent"
                    ? "bg-accent/10"
                    : p.accent === "ember"
                      ? "bg-ember/10"
                      : "bg-sage/10"
                }`}
              >
                <div className="absolute inset-0 bg-dotgrid opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ProjectVisual variant={i} />
                </div>
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-surface/90 backdrop-blur-sm px-3 py-1 ring-1 ring-border">
                  <span className="eyebrow text-[9px] text-ink">{p.tag}</span>
                </div>
                <div className="absolute bottom-6 left-6 font-mono text-[10px] text-ink/40">
                  Project · 0{i + 1}
                </div>
              </div>
              <div className="p-10 flex flex-col justify-between gap-8">
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl font-semibold tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-ink-soft leading-relaxed">{p.body}</p>
                </div>
                <div>
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-hairline">
                    {p.metrics.map(([k, v]) => (
                      <div key={k}>
                        <div className="font-display text-xl font-semibold">{v}</div>
                        <div className="eyebrow text-[9px] mt-1">{k}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent transition-colors"
                    >
                      Case study
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                    <span className="font-mono text-[10px] text-ink/40">2024</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ variant }: { variant: number }) {
  if (variant === 0) {
    // Concentric language rings
    return (
      <svg viewBox="0 0 300 240" className="w-3/4 h-3/4" aria-hidden>
        {[100, 78, 56, 34].map((r, i) => (
          <circle
            key={r}
            cx="150"
            cy="120"
            r={r}
            fill="none"
            stroke="oklch(0.68 0.165 55)"
            strokeOpacity={0.15 + i * 0.12}
            strokeWidth="1"
            strokeDasharray={i === 1 ? "3 6" : "0"}
          />
        ))}
        <circle cx="150" cy="120" r="10" fill="oklch(0.18 0.012 60)" />
        {Array.from({ length: 22 }).map((_, i) => {
          const angle = (i / 22) * Math.PI * 2;
          const r = 100;
          return (
            <circle
              key={i}
              cx={150 + Math.cos(angle) * r}
              cy={120 + Math.sin(angle) * r}
              r="3"
              fill="oklch(0.68 0.165 55)"
            />
          );
        })}
      </svg>
    );
  }
  if (variant === 1) {
    // Heartbeat / ECG line
    return (
      <svg viewBox="0 0 300 200" className="w-4/5 h-3/4" aria-hidden>
        <path
          d="M 10 100 L 70 100 L 85 60 L 100 140 L 115 80 L 130 100 L 180 100 L 195 50 L 210 150 L 225 90 L 240 100 L 290 100"
          fill="none"
          stroke="oklch(0.6 0.18 35)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="100"
          x2="300"
          y2="100"
          stroke="oklch(0.18 0.012 60)"
          strokeOpacity="0.15"
          strokeWidth="0.5"
          strokeDasharray="2 4"
        />
      </svg>
    );
  }
  // Lattice
  return (
    <svg viewBox="0 0 300 200" className="w-3/4 h-3/4" aria-hidden>
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => {
          const active = (r + c) % 3 === 0;
          return (
            <rect
              key={`${r}-${c}`}
              x={20 + c * 30}
              y={20 + r * 28}
              width="14"
              height="14"
              rx="2"
              fill={active ? "oklch(0.55 0.06 160)" : "oklch(0.55 0.06 160 / 0.15)"}
            />
          );
        })
      )}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────── TIMELINE */

const timeline = [
  { year: "2018", title: "SPARKS Lab founded", body: "Established at the Department of CSE, NIT Tiruchirappalli with three founding researchers." },
  { year: "2020", title: "First NeurIPS publication", body: "Lab's foundational paper on attention-driven knowledge distillation accepted at NeurIPS." },
  { year: "2021", title: "₹3.2 Cr DST grant", body: "Major government funding awarded for explainable AI in clinical decision support." },
  { year: "2022", title: "First patent granted", body: "Sparse-inference framework granted patent by the Indian Patent Office." },
  { year: "2023", title: "Industry consortium", body: "Founding member of the National Mission on AI translational research consortium." },
  { year: "2024", title: "Atlas open release", body: "Released 7B multilingual foundation model under permissive open license." },
];

function ImpactTimeline() {
  return (
    <section className="container-page py-32">
      <div className="max-w-2xl mb-20">
        <p className="eyebrow text-accent mb-4">05 · Timeline</p>
        <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
          A six-year trajectory.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-hairline -translate-x-1/2" />
        <div className="space-y-16">
          {timeline.map((t, i) => (
            <div
              key={t.year}
              className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <span className="font-display text-6xl font-semibold text-ink/10 leading-none">
                  {t.year}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{t.body}</p>
              </div>
              <div className="hidden md:block" />
              <div className="absolute left-3 md:left-1/2 top-6 size-3 rounded-full bg-accent ring-4 ring-canvas -translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────── PUBLICATIONS */

const pubs = [
  {
    venue: "NeurIPS 2024",
    title: "Recursive Knowledge Graphs for Generative Reasoning",
    authors: "Abdullah A., Sharma R., Krishnan V., et al.",
    body: "We show that structured knowledge graphs can constrain LLM hallucinations through dynamic node retrieval and iterative self-correction.",
    citations: 42,
  },
  {
    venue: "CVPR 2024",
    title: "Dynamic Latent Inference for Heterogeneous Edge Devices",
    authors: "Iyer M., Abdullah A., Patel S.",
    body: "A decentralized framework for adaptive vision-model updates across constrained IoT hardware using sparse graph structures.",
    citations: 28,
  },
];

function PublicationsPreview() {
  return (
    <section className="bg-ink text-canvas py-32 border-y border-canvas/5">
      <div className="container-page">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="eyebrow text-accent mb-4">06 · Scholarship</p>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] max-w-2xl text-balance">
              Latest breakthroughs.
            </h2>
          </div>
          <Link
            to="/publications"
            className="text-sm font-medium text-canvas hover:text-accent border-b border-canvas hover:border-accent pb-0.5 transition-colors"
          >
            Full archive →
          </Link>
        </div>

        <div className="space-y-8">
          {pubs.map((p, i) => (
            <article
              key={p.title}
              className={`grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden ring-1 ring-canvas/10 bg-canvas/5 hover:bg-canvas/[0.07] transition-colors ${
                i % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              <div className="lg:col-span-8 aspect-[21/10] lg:aspect-auto bg-ink-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-[0.08]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArchitectureDiagram variant={i} />
                </div>
                <div className="absolute top-6 left-6 eyebrow text-[9px] text-canvas/40">
                  Fig. {i + 1} · System Architecture
                </div>
              </div>
              <div className="lg:col-span-4 p-10 flex flex-col justify-between gap-8">
                <div>
                  <span className="inline-block rounded-full bg-accent/15 text-accent px-3 py-1 eyebrow text-[9px]">
                    {p.venue}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-xs text-canvas/50 font-mono">{p.authors}</p>
                  <p className="mt-5 text-sm text-canvas/70 leading-relaxed">{p.body}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between py-3 border-t border-canvas/10">
                    <span className="eyebrow text-[9px] text-canvas/40">Citations</span>
                    <span className="font-display text-lg font-semibold text-accent">
                      {p.citations}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["PDF", "BibTeX", "DOI"].map((b) => (
                      <button
                        key={b}
                        className="rounded-full bg-canvas/5 hover:bg-canvas/10 px-3 py-1.5 text-[11px] font-mono transition-colors"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <svg viewBox="0 0 600 300" className="w-4/5 h-3/4" aria-hidden>
        {/* 3 column architecture */}
        {[80, 300, 520].map((x, i) => (
          <g key={x}>
            {[60, 130, 200].map((y, j) => (
              <rect
                key={j}
                x={x - 30}
                y={y - 18}
                width="60"
                height="36"
                rx="6"
                fill="oklch(0.985 0.005 80 / 0.05)"
                stroke="oklch(0.68 0.165 55 / 0.4)"
                strokeWidth="1"
              />
            ))}
            <text x={x} y="260" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="oklch(0.985 0.005 80 / 0.4)">
              {["INPUT", "REASONING", "OUTPUT"][i]}
            </text>
          </g>
        ))}
        {[60, 130, 200].map((y) => (
          <g key={y}>
            <line x1="110" y1={y} x2="270" y2={y} stroke="oklch(0.68 0.165 55 / 0.5)" strokeWidth="0.7" />
            <line x1="330" y1={y} x2="490" y2={y} stroke="oklch(0.68 0.165 55 / 0.5)" strokeWidth="0.7" />
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 600 300" className="w-4/5 h-3/4" aria-hidden>
      {/* edge mesh */}
      {Array.from({ length: 7 }).map((_, i) => {
        const x = 80 + i * 75;
        return (
          <g key={i}>
            <rect x={x - 18} y="130" width="36" height="40" rx="4" fill="oklch(0.985 0.005 80 / 0.06)" stroke="oklch(0.68 0.165 55 / 0.5)" />
            <line x1={x} y1="170" x2={x} y2="220" stroke="oklch(0.985 0.005 80 / 0.2)" strokeDasharray="2 3" />
            <circle cx={x} cy="240" r="6" fill="oklch(0.6 0.18 35 / 0.7)" />
          </g>
        );
      })}
      <line x1="80" y1="80" x2="520" y2="80" stroke="oklch(0.68 0.165 55)" strokeWidth="1" strokeDasharray="4 4" />
      <text x="300" y="60" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="oklch(0.985 0.005 80 / 0.4)">
        CENTRAL COORDINATOR
      </text>
    </svg>
  );
}

/* ───────────────────────────────────────────────────────── COLLABORATORS */

function Collaborators() {
  const partners = [
    "IIT Madras", "AIIMS Delhi", "DST India", "Microsoft Research",
    "NVIDIA", "Google Research", "ISRO", "TCS Research",
    "Wadhwani AI", "Stanford HAI", "Mila Quebec", "Intel Labs",
  ];
  return (
    <section className="py-24 overflow-hidden border-y border-hairline">
      <div className="container-page mb-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="eyebrow text-accent mb-4">07 · Network</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight max-w-xl text-balance">
              Built with the world's leading institutions.
            </h2>
          </div>
          <p className="text-sm text-ink-soft max-w-xs leading-relaxed">
            Joint research, shared infrastructure and cross-continental scholar exchange
            programs with 24+ partner organizations.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-canvas to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-canvas to-transparent z-10" />
        <div className="flex gap-12 animate-marquee whitespace-nowrap py-4">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="font-display text-2xl lg:text-3xl font-semibold text-ink/30 hover:text-ink transition-colors flex-shrink-0"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── FINAL CTA */

function FinalCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/8 blur-[140px] -z-10" />

      <div className="container-page text-center">
        <p className="eyebrow text-accent mb-8">Join SPARKS</p>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-balance max-w-4xl mx-auto">
          Build the future of
          <br />
          <span className="italic font-light text-ink/40">artificial intelligence.</span>
        </h2>
        <p className="mt-10 max-w-xl mx-auto text-lg text-ink-soft leading-relaxed">
          Join a community of researchers, innovators and engineers creating real-world
          impact through AI — at one of India's premier institutes of national importance.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-7 py-4 text-sm font-medium hover:bg-ink-dark transition-all hover:scale-[1.03]"
          >
            Join Research →
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-surface ring-1 ring-border px-7 py-4 text-sm font-medium hover:bg-muted transition-colors"
          >
            Collaborate with us
          </Link>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-4 py-4 text-sm font-medium text-ink-soft hover:text-ink"
          >
            Explore opportunities →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────── PAGE */

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ImpactStats />
      <AboutStory />
      <ResearchEcosystem />
      <FeaturedProjects />
      <ImpactTimeline />
      <PublicationsPreview />
      <Collaborators />
      <FinalCTA />
    </>
  );
}
