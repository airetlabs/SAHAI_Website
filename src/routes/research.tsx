import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — SPARKS Lab" },
      { name: "description", content: "Research domains at SPARKS Lab — machine learning, computer vision, NLP, generative AI, healthcare AI, XAI, and more." },
      { property: "og:title", content: "Research · SPARKS Lab" },
      { property: "og:description", content: "Ten interconnected domains of AI research." },
    ],
  }),
  component: ResearchPage,
});

type Domain = {
  id: string;
  title: string;
  tagline: string;
  body: string;
  focus: string[];
  projects: number;
  papers: number;
  faculty: number;
  hue: string;
};

const domains: Domain[] = [
  { id: "ml", title: "Machine Learning", tagline: "Foundations of learning systems", body: "Theoretical and empirical research on optimization, generalization, and the principles that govern how machines learn from data at scale.", focus: ["Learning theory", "Optimization", "Statistical inference", "Probabilistic models"], projects: 6, papers: 28, faculty: 7, hue: "from-[#A8B5C8] to-[#D4DCE6]" },
  { id: "dl", title: "Deep Learning", tagline: "Architectures at the frontier", body: "Designing, scaling and understanding neural networks — from attention mechanisms to billion-parameter foundation models trained on heterogeneous corpora.", focus: ["Transformer scaling", "Training dynamics", "Mixture of experts", "Efficient pretraining"], projects: 8, papers: 34, faculty: 9, hue: "from-[#C8B8A8] to-[#E6D8C8]" },
  { id: "cv", title: "Computer Vision", tagline: "Perception that understands the world", body: "Vision-language understanding, 3D scene reasoning and medical image analysis for autonomous systems and clinical applications.", focus: ["Vision-language models", "3D understanding", "Medical imaging", "Video reasoning"], projects: 7, papers: 31, faculty: 6, hue: "from-[#B8C8A8] to-[#D8E6C8]" },
  { id: "nlp", title: "Natural Language Processing", tagline: "Language for a billion voices", body: "Multilingual NLP with a deep focus on low-resource Indian languages — building models that speak, read and reason in 22+ tongues.", focus: ["Multilingual LLMs", "Speech & translation", "Low-resource learning", "Cultural alignment"], projects: 9, papers: 42, faculty: 10, hue: "from-[#A8C8C0] to-[#C8E0D8]" },
  { id: "gen", title: "Generative AI", tagline: "Models that imagine", body: "Diffusion, autoregressive and multi-modal generative systems aligned with human intent — from text and images to molecules and code.", focus: ["Diffusion models", "Multi-modal generation", "Alignment & RLHF", "Controllable synthesis"], projects: 5, papers: 22, faculty: 5, hue: "from-[#C8A8C0] to-[#E6C8D8]" },
  { id: "hai", title: "Healthcare AI", tagline: "Intelligence at the bedside", body: "Clinical decision support, diagnostic imaging and predictive medicine — built and validated with AIIMS and three partner hospitals.", focus: ["Diagnostic imaging", "Clinical prediction", "Genomics", "Hospital deployments"], projects: 4, papers: 18, faculty: 6, hue: "from-[#D8B0B0] to-[#E8C8C8]" },
  { id: "xai", title: "Explainable AI", tagline: "Trust through transparency", body: "Methods for interpreting, auditing and certifying machine decisions in high-stakes settings — law, medicine, and public policy.", focus: ["Attribution methods", "Mechanistic interpretability", "Model auditing", "Counterfactual reasoning"], projects: 6, papers: 24, faculty: 4, hue: "from-[#B8B0D0] to-[#D0C8E0]" },
  { id: "kg", title: "Knowledge Systems", tagline: "Where graphs meet neurons", body: "Neuro-symbolic reasoning over knowledge graphs — structured knowledge as a substrate for verifiable, multi-hop AI reasoning.", focus: ["Knowledge graphs", "Neuro-symbolic AI", "Ontology learning", "Graph neural networks"], projects: 5, papers: 20, faculty: 5, hue: "from-[#B0C8D8] to-[#C8DCE8]" },
  { id: "edge", title: "Edge AI", tagline: "Intelligence everywhere", body: "Sparse, quantized and distilled models for constrained hardware — from microcontrollers to mobile NPUs operating at sub-millisecond latency.", focus: ["Model compression", "On-device inference", "Hardware co-design", "Federated learning"], projects: 3, papers: 12, faculty: 3, hue: "from-[#D0C0A8] to-[#E0D4C0]" },
  { id: "rob", title: "Robotics", tagline: "Embodied intelligence", body: "Vision-language-action policies, perception-action loops and human-robot collaboration for mobile manipulation in unstructured environments.", focus: ["Manipulation", "Sim-to-real", "Human-robot interaction", "Embodied agents"], projects: 4, papers: 14, faculty: 4, hue: "from-[#A8C0B8] to-[#C8D8D0]" },
];

function DomainVisual({ domain, index }: { domain: Domain; index: number }) {
  return (
    <div className={`relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${domain.hue} ring-1 ring-border`}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)", backgroundSize: "18px 18px" }} />
      <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id={`g-${domain.id}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 90 + (i % 3) * 28;
          const x = 200 + Math.cos(angle) * r;
          const y = 160 + Math.sin(angle) * r;
          return (
            <g key={i}>
              <motion.line
                x1="200" y1="160" x2={x} y2={y}
                stroke="rgba(20,20,30,0.18)" strokeWidth="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx={x} cy={y} r={3 + (i % 3)}
                fill="rgba(20,20,30,0.55)"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + 0.05 * i }}
              />
            </g>
          );
        })}
        <circle cx="200" cy="160" r="60" fill={`url(#g-${domain.id})`} />
        <motion.circle
          cx="200" cy="160" r="10" fill="rgba(20,20,30,0.85)"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute left-5 top-5 font-mono text-[10px] tracking-[0.2em] text-ink/60">
        DOMAIN · {String(index + 1).padStart(2, "0")}
      </div>
      <div className="absolute bottom-5 right-5 font-mono text-[10px] tracking-[0.2em] text-ink/60">
        SPARKS / RESEARCH
      </div>
    </div>
  );
}

function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={<>Ten domains. One <span className="italic font-light text-ink/50">interconnected</span> mission.</>}
        description="Our research is organized into ten major divisions that share methods, datasets, and scholars. Each pillar pursues foundational questions and the systems that translate them into the world."
      >
        <div className="flex flex-wrap gap-3">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-5 py-3 text-sm font-medium hover:bg-ink-dark shadow-md hover:shadow-lg transition-shadow">View projects →</Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link to="/publications" className="inline-flex items-center gap-2 rounded-full bg-surface ring-1 ring-border px-5 py-3 text-sm font-medium hover:bg-muted">Read papers</Link>
          </motion.div>
        </div>
      </PageHeader>

      <section className="container-page pb-32 space-y-24">
        {domains.map((d, i) => {
          const reverse = i % 2 === 1;
          return (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[2rem] bg-surface ring-1 ring-border p-8 lg:p-14 hover:ring-ink hover:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.25)] transition-all"
            >
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <DomainVisual domain={d} index={i} />

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-accent">{String(i + 1).padStart(2, "0")} / 10</span>
                    <div className="h-px flex-1 bg-hairline" />
                    <span className="eyebrow text-[9px] text-ink-soft">{d.tagline}</span>
                  </div>

                  <motion.h2
                    initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] group-hover:text-accent transition-colors"
                  >
                    {d.title}
                  </motion.h2>

                  <p className="mt-6 text-lg text-ink-soft leading-relaxed">{d.body}</p>

                  <div className="mt-8">
                    <p className="eyebrow text-[9px] mb-3">Focus areas</p>
                    <div className="flex flex-wrap gap-2">
                      {d.focus.map((f) => (
                        <span key={f} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-ink">{f}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 py-6 border-y border-hairline">
                    <Metric label="Active projects" value={d.projects} />
                    <Metric label="Publications" value={d.papers} />
                    <Metric label="Faculty" value={d.faculty} />
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-5 py-3 text-sm font-medium hover:bg-ink-dark shadow-md">
                        Learn more →
                      </Link>
                    </motion.div>
                    <Link to="/publications" className="text-xs font-mono text-ink-soft hover:text-ink transition-colors">
                      View publications ↗
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="bg-ink text-canvas py-24 border-y border-canvas/5">
        <div className="container-page">
          <Stagger className="grid lg:grid-cols-3 gap-10" stagger={0.1}>
            {[
              ["Open datasets", "12+", "Curated, documented datasets released under permissive licenses for the global research community."],
              ["Open-source releases", "24+", "Production-grade libraries, training pipelines and pretrained model weights on our public repository."],
              ["Funded by", "DST · MEITY · industry", "Government of India research missions and industry consortia with combined funding of ₹8.4 Cr+."],
            ].map(([title, value, body]) => (
              <StaggerItem key={title}>
                <div>
                  <p className="eyebrow text-accent mb-4">{title}</p>
                  <div className="font-display text-4xl font-semibold">{value}</div>
                  <p className="mt-4 text-sm text-canvas/60 leading-relaxed">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <CountUp end={value} className="font-display text-3xl font-semibold tracking-tight" />
      <div className="eyebrow text-[9px] mt-1">{label}</div>
    </div>
  );
}

function CountUp({ end, className }: { end: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, end, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, end, mv]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
