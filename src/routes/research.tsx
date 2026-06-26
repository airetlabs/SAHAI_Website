import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — SAHAI Lab" },
      { name: "description", content: "Research domains at SAHAI Lab — machine learning, computer vision, NLP, generative AI, healthcare AI, XAI, and more." },
      { property: "og:title", content: "Research · SAHAI Lab" },
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
  image?: string; // optional path/URL — if set, shown instead of the generated visual
};

const domains: Domain[] = [
  {
    id: "ml",
    title: "Machine Learning",
    tagline: "Learning from data for social impact",
    body: "Our research in Machine Learning focuses on designing intelligent systems that create meaningful societal impact while upholding principles of ethics, fairness, and responsibility. We study advanced learning algorithms, generative AI, knowledge-driven systems, and human-AI interaction to address challenges in healthcare, education, governance, and social welfare.",
    focus: ["Learning algorithms", "Knowledge-driven AI", "Human-centered AI", "Responsible AI"],
    projects: 6,
    papers: 28,
    faculty: 7,
    hue: "from-[#A8B5C8] to-[#D4DCE6]",
    image: "images/ML.jpeg",
  },

  {
    id: "dl",
    title: "Deep Learning",
    tagline: "Neural intelligence at scale",
    body: "Our research in Deep Learning focuses on the design of scalable neural architectures that enable perception, reasoning, language understanding, and decision-making across complex environments. We investigate foundation models, multimodal learning, generative intelligence, and efficient neural computation while addressing critical challenges related to explainability, fairness, reliability, and ethical deployment.",
    focus: [
      "Foundation models",
      "Multimodal learning",
      "Generative intelligence",
      "Efficient deep learning",
    ],
    projects: 8,
    papers: 34,
    faculty: 9,
    hue: "from-[#C8B8A8] to-[#E6D8C8]",
    image: "images/DL.jpeg",
  },

  {
    id: "csg",
    title: "Computational Science for Social Good",
    tagline: "Data-driven intelligence for societal impact",
    body: "Our research in Computational Science for Social Good focuses on harnessing data, algorithms, and artificial intelligence to address pressing societal challenges. We develop computational methods that support decision-making in areas such as public health, education, governance, sustainability, and social welfare.",
    focus: [
      "Computational social science",
      "Digital humanities",
      "Social media analytics",
      "AI for social good",
    ],
    projects: 5,
    papers: 16,
    faculty: 4,
    hue: "from-[#B8C6D8] to-[#D6E0EB]",
    image: "images/social_good.jpeg",
  },

  {
    id: "nlp",
    title: "Natural Language Processing",
    tagline: "Language technologies for society",
    body: "Our research in Natural Language Processing explores how language technologies can be leveraged to address critical societal challenges. We work on social media analytics, spam filtering, fake news detection, multimodal hate speech recognition, and the analysis of online behavioral patterns. ",
    focus: [
      "Social media analytics",
      "Fake news detection",
      "Multimodal hate speech",
      "Computational psychology",
    ],
    projects: 9,
    papers: 42,
    faculty: 10,
    hue: "from-[#A8C8C0] to-[#C8E0D8]",
    image: "images/nlp.jpeg",
  },

  {
    id: "gen",
    title: "Generative AI",
    tagline: "Creating intelligent multimodal systems",
    body: "Our Generative AI research focuses on advancing foundation models that can generate, interpret, and interact with complex multimodal information. We explore large language models, vision-language systems, knowledge-grounded generation, and agentic AI architectures while addressing challenges related to factuality, explainability, bias mitigation, and safety.",
    focus: [
      "Large language models",
      "Multimodal generation",
      "Knowledge-grounded AI",
      "Agentic systems",
    ],
    projects: 5,
    papers: 22,
    faculty: 5,
    hue: "from-[#C8A8C0] to-[#E6C8D8]",
    image: "images/gen.avif",
  },

  {
    id: "hai",
    title: "Data Compression",
    tagline: "Efficient representations through pattern mining",
    body: "Our research explores Data Compression through the lens of Pattern Mining, leveraging recurring patterns, structural regularities, and latent relationships to design efficient data representation frameworks. We investigate advanced techniques for text compression, image compression, and graph compression, focusing on reducing storage and transmission costs while maintaining data utility and semantic integrity.",
    focus: ["Text compression", "Image compression", "Graph compression", "Pattern mining"],
    projects: 4,
    papers: 18,
    faculty: 6,
    hue: "from-[#D8B0B0] to-[#E8C8C8]",
    image: "images/DC.jpeg",
  },

  {
    id: "xai",
    title: "Human Computer Interaction",
    tagline: "Designing intuitive human-centered experiences",
    body: "Our research in Human–Computer Interaction examines how design influences the effectiveness, security, and accessibility of digital technologies. We study innovative interaction paradigms, including CAPTCHA design, user engagement mechanisms, and visual feedback systems such as intelligent loading indicators.",
    focus: [
      "Human-computer interaction",
      "CAPTCHA design",
      "Loading bar design",
      "Usability studies",
    ],
    projects: 6,
    papers: 24,
    faculty: 4,
    hue: "from-[#B8B0D0] to-[#D0C8E0]",
    image: "images/hci.jpeg",
  },

  {
    id: "kg",
    title: "Data Mining",
    tagline: "Discovering knowledge from complex data",
    body: "Our research explores the foundations and applications of Data Mining for uncovering hidden structures, patterns, and knowledge embedded within large and heterogeneous datasets. We work on text mining, graph embedding, and multimodal classification techniques that enable efficient analysis of textual, visual, and relational information.",
    focus: ["Data mining", "Text mining", "Graph embedding", "Text & image classification"],
    projects: 5,
    papers: 20,
    faculty: 5,
    hue: "from-[#B0C8D8] to-[#C8DCE8]",
    image: "images/DM.jpeg",
  },
  {
    id: "kg",
    title: "Knowledge Graphs",
    tagline: "Structured intelligence for connected knowledge",
    body: "Our research in Knowledge Graphs focuses on representing, organizing, and reasoning over complex interconnected information. We investigate ontology engineering, knowledge graph construction, semantic technologies, graph representation learning, and neuro-symbolic AI to enable intelligent knowledge discovery and decision support. ",
    focus: [
      "Knowledge graph construction",
      "Ontology engineering",
      "Graph representation learning",
      "Neuro-symbolic AI",
    ],
    projects: 5,
    papers: 20,
    faculty: 5,
    hue: "from-[#B0C8D8] to-[#C8DCE8]",
    image: "images/KG.jpeg",
  },
  {
    id: "ling",
    title: "Computational Linguistics",
    tagline: "Understanding language, behavior, and society",
    body: "Our research in Computational Linguistics explores the intersection of language, cognition, and human behavior. We investigate linguistic modeling, discourse analysis, computational psycholinguistics, social media language analytics, and language-based behavioral prediction. A major focus of our work lies in applying computational methods to understand mental health, social well-being, and human communication, enabling language technologies that contribute to digital safety and societal good.",
    focus: [
      "Computational psycholinguistics",
      "Discourse analysis",
      "Social media language analytics",
      "Behavioral prediction",
    ],
    projects: 4,
    papers: 16,
    faculty: 4,
    hue: "from-[#C8B8D8] to-[#DDD0E8]",
    image: "images/CL.png",
  },
];

function DomainVisual({ domain, index }: { domain: Domain; index: number }) {
  return (
    <div
      className={`relative aspect-[3/3.2] w-full max-w-[200px] mx-auto overflow-hidden rounded-xl bg-gradient-to-br ${domain.hue} ring-1 ring-border`}
    >
      {domain.image ? (
        <img
          src={domain.image}
          alt={domain.title}
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
          onError={(e) => {
            // If the image fails to load, hide it so the gradient background still shows
            e.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
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
                    x1="200"
                    y1="160"
                    x2={x}
                    y2={y}
                    stroke="rgba(20,20,30,0.18)"
                    strokeWidth="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={3 + (i % 3)}
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
              cx="200"
              cy="160"
              r="10"
              fill="rgba(20,20,30,0.85)"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </>
      )}
      <div className="absolute left-2.5 top-2.5 font-mono text-[7px] tracking-[0.15em] text-ink/60">
        DOMAIN · {String(index + 1).padStart(2, "0")}
      </div>
      <div className="absolute bottom-2.5 right-2.5 font-mono text-[7px] tracking-[0.15em] text-ink/60">
        SAHAI / RESEARCH
      </div>
    </div>
  );
}

function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={
          <>
            Ten domains. One <span className="italic font-light text-ink/50">interconnected</span>{" "}
            mission.
          </>
        }
        description="Our research is organized into ten major divisions that share methods, datasets, and scholars. Each pillar pursues foundational questions and the systems that translate them into the world."
      >
        <div className="flex flex-wrap gap-3">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-5 py-3 text-sm font-medium hover:bg-ink-dark shadow-md hover:shadow-lg transition-shadow"
            >
              View projects →
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 rounded-full bg-surface ring-1 ring-border px-5 py-3 text-sm font-medium hover:bg-muted"
            >
              Read papers
            </Link>
          </motion.div>
        </div>
      </PageHeader>

      <section className="container-page pb-16">
        <div className="max-w-3xl mx-auto space-y-6">
          {domains.map((d, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="group relative rounded-xl bg-surface ring-1 ring-border p-4 lg:p-5 hover:ring-ink hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] transition-all"
              >
                <div
                  className={`flex flex-col lg:flex-row gap-4 lg:gap-6 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="w-full lg:w-[200px] lg:shrink-0">
                    <DomainVisual domain={d} index={i} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[9px] tracking-[0.15em] text-accent">
                        {String(i + 1).padStart(2, "0")} / 10
                      </span>
                      <div className="h-px flex-1 bg-hairline" />
                      <span className="eyebrow text-[8px] text-ink-soft">{d.tagline}</span>
                    </div>

                    <motion.h2
                      initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="font-display text-xl lg:text-2xl font-semibold tracking-tight leading-[1] group-hover:text-accent transition-colors"
                    >
                      {d.title}
                    </motion.h2>

                    <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">{d.body}</p>

                    <div className="mt-4">
                      <p className="eyebrow text-[9px] mb-2">Focus areas</p>
                      <div className="flex flex-wrap gap-1.5">
                        {d.focus.map((f) => (
                          <span
                            key={f}
                            className="rounded-full bg-muted px-3 py-1.5 text-[11px] font-medium text-ink transition-colors hover:bg-ink/10"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-3 py-3 border-y border-hairline">
                      <Metric label="Active projects" value={d.projects} />
                      <Metric label="Publications" value={d.papers} />
                      <Metric label="Faculty" value={d.faculty} />
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                        <Link
                          to="/projects"
                          className="inline-flex items-center gap-1.5 rounded-full bg-ink text-canvas px-4 py-2 text-xs font-medium hover:bg-ink-dark shadow-sm"
                        >
                          Learn more →
                        </Link>
                      </motion.div>
                      <Link
                        to="/publications"
                        className="text-[10px] font-mono text-ink-soft hover:text-ink transition-colors"
                      >
                        View publications ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-ink text-canvas py-24 border-y border-canvas/5">
        <div className="container-page">
          <Stagger className="grid lg:grid-cols-3 gap-10" stagger={0.1}>
            {[
              [
                "Open datasets",
                "12+",
                "Curated, documented datasets released under permissive licenses for the global research community.",
              ],
              [
                "Open-source releases",
                "24+",
                "Production-grade libraries, training pipelines and pretrained model weights on our public repository.",
              ],
              [
                "Funded by",
                "DST · MEITY · industry",
                "Government of India research missions and industry consortia with combined funding of ₹8.4 Cr+.",
              ],
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
      <CountUp end={value} className="font-display text-xl font-semibold tracking-tight" />
      <div className="eyebrow text-[9px] mt-1 text-ink-soft">{label}</div>
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

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
