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

const domains = [
  { id: "ml", title: "Machine Learning", body: "Foundational research in learning theory, optimization, and generalization across statistical and neural paradigms.", projects: 6, papers: 28 },
  { id: "dl", title: "Deep Learning", body: "Architecture design, training dynamics and efficient scaling of large neural networks.", projects: 8, papers: 34 },
  { id: "cv", title: "Computer Vision", body: "Perception, recognition and vision-language understanding for real-world scenes and clinical imagery.", projects: 7, papers: 31 },
  { id: "nlp", title: "Natural Language Processing", body: "Multilingual understanding and generation with a focus on low-resource Indian languages.", projects: 9, papers: 42 },
  { id: "gen", title: "Generative AI", body: "Diffusion, LLMs and multi-modal generative systems aligned with human intent.", projects: 5, papers: 22 },
  { id: "hai", title: "Healthcare AI", body: "Clinical decision support, diagnostic imaging and predictive medicine with hospital partners.", projects: 4, papers: 18 },
  { id: "xai", title: "Explainable AI", body: "Methods for interpreting, auditing and trusting machine decisions in high-stakes settings.", projects: 6, papers: 24 },
  { id: "kg", title: "Knowledge Systems", body: "Graphs, ontologies and neuro-symbolic reasoning for structured knowledge.", projects: 5, papers: 20 },
  { id: "edge", title: "Edge AI", body: "Sparse, efficient inference on constrained hardware from microcontrollers to mobile.", projects: 3, papers: 12 },
  { id: "rob", title: "Robotics", body: "Embodied intelligence, perception-action loops and human-robot collaboration.", projects: 4, papers: 14 },
];

function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={<>Ten domains. One <span className="italic font-light text-ink/50">interconnected</span> mission.</>}
        description="Our research is organized into ten domains that share methods, datasets, and scholars. We pursue both foundational questions and the systems that translate them into the world."
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

      <section className="container-page pb-32">
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.05}>
          {domains.map((d, i) => (
            <StaggerItem key={d.id}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full rounded-3xl bg-surface ring-1 ring-border p-8 hover:ring-ink hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] transition-all overflow-hidden"
              >
                <motion.div
                  className="absolute -top-12 -right-12 size-40 rounded-full bg-accent/0 group-hover:bg-accent/10 blur-2xl transition-colors duration-500"
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-[10px] text-accent">{String(i + 1).padStart(2, "0")} / 10</span>
                    <motion.span
                      className="size-2 rounded-full bg-accent"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
                    />
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-tight group-hover:text-accent transition-colors">{d.title}</h3>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed">{d.body}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3 pt-5 border-t border-hairline">
                    <div>
                      <CountUp end={d.projects} className="font-display text-lg font-semibold" />
                      <div className="eyebrow text-[9px] mt-0.5">projects</div>
                    </div>
                    <div>
                      <CountUp end={d.papers} className="font-display text-lg font-semibold" />
                      <div className="eyebrow text-[9px] mt-0.5">papers</div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
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
