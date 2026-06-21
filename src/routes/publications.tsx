
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";

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
  venue: string; type: string; year: number; date: string; title: string;
  authors: string; body: string; citations: number; category: string;
  gradient: string;
  link?: string;
};

const pubs: Pub[] = [
  { venue: "NeurIPS 2024", type: "Conference", year: 2024, date: "Dec 2024", category: "Knowledge Systems", title: "Recursive Knowledge Graphs for Generative Reasoning", authors: "Abdullah A., Sharma R., Krishnan V.", body: "Structured knowledge graphs constrain LLM hallucinations through dynamic retrieval and iterative self-correction across multi-hop chains.", citations: 42, gradient: "from-accent/30 via-canvas to-sage/20" },
  { venue: "CVPR 2024", type: "Conference", year: 2024, date: "Jun 2024", category: "Computer Vision", title: "Dynamic Latent Inference for Heterogeneous Edge Devices", authors: "Iyer M., Abdullah A., Patel S.", body: "Decentralized framework for adaptive vision-model updates across constrained IoT hardware in real time.", citations: 28, gradient: "from-accent/20 via-muted to-ink/10" },
  { venue: "ACL 2024", type: "Conference", year: 2024, date: "Aug 2024", category: "NLP", title: "Atlas — A Multilingual Foundation Model for 22 Indian Languages", authors: "Reddy V., Abdullah A., et al.", body: "Open release of a 7B-parameter foundation model with strong cross-lingual transfer across low-resource Indic languages.", citations: 89, gradient: "from-sage/20 via-muted to-accent/30" },
  { venue: "ICLR 2024", type: "Conference", year: 2024, date: "May 2024", category: "Deep Learning", title: "Sparse Attention Distillation for Real-Time Inference", authors: "Patel S., Abdullah A.", body: "40% latency reduction on transformer inference with no accuracy degradation on a benchmark suite of 12 tasks.", citations: 35, gradient: "from-accent/25 via-canvas to-sage/15" },
  { venue: "EMNLP 2023", type: "Conference", year: 2023, date: "Dec 2023", category: "NLP", title: "Low-Resource Language Adaptation via Hierarchical Distillation", authors: "Krishnan P., Joshi N.", body: "Methodology for adapting large multilingual models to low-resource South Asian languages efficiently.", citations: 31, gradient: "from-sage/25 via-canvas to-accent/15" },
  { venue: "MICCAI 2023", type: "Conference", year: 2023, date: "Sep 2023", category: "Healthcare AI", title: "Early Stroke Prediction from Continuous Vital Signs", authors: "Sharma R., et al.", body: "Temporal transformer architecture deployed at three Indian tertiary care hospitals with 94% precision.", citations: 24, gradient: "from-accent/20 via-canvas to-muted" },
  { venue: "AAAI 2023", type: "Conference", year: 2023, date: "Feb 2023", category: "Explainable AI", title: "Counterfactual Probing for Vision-Language Models", authors: "Menon A., Iyer M.", body: "Diagnostic toolkit for probing what vision-language models truly know vs. memorize.", citations: 19, gradient: "from-accent/15 via-muted to-sage/20" },
  {
    venue: "ACM Trans. on Knowledge Discovery from Data", type: "Journal", year: 2026, date: "2026", category: "Graph Analytics", title: "CGS: Configurable Graph Summarization with Bounded Neighborhood Loss and Query Support",
    authors: "Mitra, S., Elza Simon, S., Oswald, C., Bhattacharya, A. and Pal, A.",
    body: "Configurable Graph Summarization with Bounded Neighborhood Loss and Query Support.", citations: 0, gradient: "from-accent/30 via-canvas to-sage/20", link: "https://dl.acm.org/doi/10.1145/3786788"
  },
  {
    venue: "ACM Transactions on the Web (TWEB)", type: "Journal", year: 2022, date: "2022", category: "NLP", title: "Spotspam: Intention analysis–driven sms spam detection using bert embeddings",
    authors: "Oswald, C., Simon, S.E. and Bhattacharya, A.",
    body: "Intention analysis-driven sms spam detection using bert embeddings.", citations: 0, gradient: "from-sage/30 via-canvas to-accent/20", link: "https://dl.acm.org/doi/10.1145/3538491"
  },
  {
    venue: "Data Science Journal", type: "Journal", year: 2018, date: "2018", category: "Data Compression", title: "Text and image compression based on data mining perspective",
    authors: "Oswald, C. and Sivaselvan, B.",
    body: "Text and image compression based on data mining perspective.", citations: 0, gradient: "from-accent/20 via-muted to-ink/10", link: "http://doi.org/10.5334/dsj-2018-012"
  },
  {
    venue: "The Computer Journal", type: "Journal", year: 2023, date: "2023", category: "Data Compression", title: "Smart Multimedia Compressor—Intelligent Algorithms for Text and Image Compression",
    authors: "Oswald, C. and Sivaselvan, B.",
    body: "Intelligent Algorithms for Text and Image Compression.", citations: 0, gradient: "from-sage/20 via-muted to-accent/30", link: "https://doi.org/10.1093/comjnl/bxab173"
  },
  {
    venue: "Concurrency and Computation: Practice and Experience", type: "Journal", year: 2021, date: "2021", category: "Image Compression", title: "An efficient and novel data clustering and run length encoding approach to image compression",
    authors: "C. Oswald, Haritha, E., Akash Raja, A. and Sivaselvan, B.",
    body: "An efficient and novel data clustering and run length encoding approach to image compression.", citations: 0, gradient: "from-accent/25 via-canvas to-sage/15", link: "https://onlinelibrary.wiley.com/doi/10.1002/cpe.6185"
  },
  {
    venue: "Journal of Ambient Intelligence and Humanized Computing", type: "Journal", year: 2018, date: "2018", category: "Text Compression", title: "An optimal text compression algorithm based on frequent pattern mining",
    authors: "Oswald, C. and Sivaselvan, B.",
    body: "An optimal text compression algorithm based on frequent pattern mining.", citations: 0, gradient: "from-muted via-canvas to-accent/20", link: "https://doi.org/10.1007/s12652-017-0540-2"
  },
  {
    venue: "Intl. Journal of Computer Information Systems and Industrial Management Applications", type: "Journal", year: 2023, date: "2023", category: "Security", title: "A Novel and Efficient Multilayered Approach to CAPTCHA: Design, Performance and Usability Evaluation",
    authors: "Navansh Goel, Tejaswi Kumar and C. Oswald",
    body: "A Novel and Efficient Multilayered Approach to CAPTCHA: Design, Performance and Usability Evaluation.", citations: 0, gradient: "from-sage/25 via-canvas to-accent/15", link: "https://www.mirlabs.org/ijcisim/regular_papers_2023/Paper39.pdf"
  },
  {
    venue: "Annals of Data Science", type: "In review", year: 2024, date: "In review", category: "NLP", title: "Offensive Text Detection in Code-mixed Dravidian Languages Towards Marginalized Groups and Women",
    authors: "Lokkamithran M, Mubeena, Joshua Mahadevan",
    body: "Offensive Text Detection in Code-mixed Dravidian Languages Towards Marginalized Groups and Women.", citations: 0, gradient: "from-accent/20 via-canvas to-muted", link: "https://scholar.google.com/scholar?q=Offensive%20Text%20Detection%20in%20Code-mixed%20Dravidian%20Languages%20Towards%20Marginalized%20Groups%20and%20Women"
  },
  {
    venue: "The Expert Systems Journal", type: "In review", year: 2024, date: "In review", category: "Social Media Analysis", title: "DEFENSE: Detection of COVID-19 Fake News in Social Media Posts using Feature Engineering and Sentence Embedding",
    authors: "C. Oswald, Allen P. Alex and Arnab Bhattacharya",
    body: "Detection of COVID-19 Fake News in Social Media Posts using Feature Engineering and Sentence Embedding.", citations: 0, gradient: "from-sage/25 via-canvas to-accent/15", link: "https://scholar.google.com/scholar?q=Detection%20of%20COVID-19%20Fake%20News%20in%20Social%20Media%20Posts%20using%20Feature%20Engineering%20and%20Sentence%20Embedding"
  },
  {
    venue: "Annals of Data Science", type: "In review", year: 2024, date: "In review", category: "Data Science", title: "Discovering Depression in Reddit: Addressing the Under-Represented Users in Social Media",
    authors: "C. Oswald, Suyash Chaudhary and Arnab Bhattacharya",
    body: "Discovering Depression in Reddit: Addressing the Under-Represented Users in Social Media.", citations: 0, gradient: "from-accent/15 via-muted to-sage/20", link: "https://scholar.google.com/scholar?q=Discovering%20Depression%20in%20Reddit%3A%20Addressing%20the%20Under-Represented%20Users%20in%20Social%20Media"
  }
];

const filters = ["All", "Conference", "Journal", "In review"];

function PublicationsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = pubs.filter((p) => filter === "All" || p.type === filter);

  return (
    <>
      <PageHeader
        eyebrow="Publications · 152+"
        title={<>Scholarship as <span className="italic font-light text-ink/50">contribution.</span></>}
        description="Peer-reviewed work from SPARKS Lab researchers across the leading venues in machine learning, vision, language, and applied AI."
      />

      <section className="container-page pb-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 ${filter === f
                    ? "bg-ink text-canvas shadow-md"
                    : "bg-surface ring-1 ring-border text-ink-soft hover:bg-muted"
                  }`}
              >
                {f}
              </button>
            ))}
            <div className="ml-auto font-mono text-xs text-ink-soft">
              {filtered.length} papers
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-32">
        <Stagger key={filter} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {filtered.map((p, i) => (
            <StaggerItem key={i}>
              <PubCard pub={p} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}

function PubCard({ pub, index }: { pub: Pub; index: number }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-surface ring-1 ring-border hover:ring-ink hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.18)] transition-all"
    >
      {/* Image */}
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${pub.gradient}`}>
        <div className="absolute inset-0 bg-dotgrid opacity-30" />
        <motion.div
          className="absolute inset-0 grid place-items-center"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <PubGlyph variant={index % 4} />
        </motion.div>
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="rounded-full bg-canvas/90 backdrop-blur ring-1 ring-border px-3 py-1 eyebrow text-[9px] text-ink">
            {pub.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-ink/60">
          {pub.venue}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 text-[10px] font-mono text-ink-soft">
            <span>{pub.date}</span>
            <span className="size-1 rounded-full bg-ink/30" />
            <span>{pub.type}</span>
          </div>
          {pub.link && (
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-muted hover:bg-ink hover:text-canvas px-2.5 py-1 text-[10px] font-mono transition-colors shrink-0"
            >
              Read
            </a>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold leading-tight text-ink group-hover:text-accent transition-colors">
          {pub.title}
        </h3>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-5 flex-1">
          {pub.body}
        </p>
        <AuthorList authors={pub.authors.split(/,\s+(?![A-Z]\.|[A-Z]\b)|\s+and\s+/).filter(Boolean)} />
      </div>
    </motion.article>
  );
}

function AuthorList({ authors }: { authors: string[] }) {
  if (authors.length <= 3) {
    return <p className="mt-4 text-xs font-mono text-ink-soft truncate">{authors.join(", ")}</p>;
  }

  const visibleAuthors = authors.slice(0, 2);
  const hiddenCount = authors.length - 2;

  const AuthorNames = () => (
    <ul className="flex flex-col gap-1.5 max-h-[200px] overflow-y-auto font-sans text-sm">
      {authors.map((author, i) => (
        <li key={i} className="leading-snug">{author}</li>
      ))}
    </ul>
  );

  return (
    <div className="mt-4 flex items-center text-xs font-mono text-ink-soft min-w-0">
      <span className="truncate">{visibleAuthors.join(", ")}</span>
      
      {/* Desktop: Tooltip (hover) */}
      <div className="hidden sm:block">
        <TooltipProvider delayDuration={150}>
          <Tooltip>
            <TooltipTrigger className="ml-1 shrink-0 text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm outline-none">
              +{hiddenCount} more
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="z-50 max-w-[260px] bg-canvas text-ink border border-muted p-3 shadow-xl rounded-md">
              <AuthorNames />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Mobile: Popover (click) */}
      <div className="block sm:hidden">
        <Popover>
          <PopoverTrigger className="ml-1 shrink-0 text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm outline-none">
            +{hiddenCount} more
          </PopoverTrigger>
          <PopoverContent side="top" align="start" className="z-50 max-w-[260px] bg-canvas text-ink border border-muted p-3 shadow-xl rounded-md">
            <AuthorNames />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function PubGlyph({ variant }: { variant: number }) {
  const stroke = "oklch(0.18 0.012 60 / 0.5)";
  const accent = "oklch(0.68 0.165 55)";
  if (variant === 0) {
    return (
      <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={30 + i * 47} cy="60" r="14" fill="oklch(0.985 0.005 80)" stroke={accent} strokeWidth="1.2" />
        ))}
        {[0, 1, 2].map((i) => (
          <line key={i} x1={44 + i * 47} y1="60" x2={62 + i * 47} y2="60" stroke={stroke} strokeWidth="1" />
        ))}
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
        {[20, 50, 80, 110, 140, 170].map((x, i) => (
          <rect key={i} x={x} y={70 - i * 6} width="14" height={20 + i * 10} rx="2" fill={accent} opacity={0.3 + i * 0.1} />
        ))}
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
        <path d="M10,90 Q60,20 100,60 T190,40" fill="none" stroke={accent} strokeWidth="2" />
        <path d="M10,100 Q60,40 100,70 T190,60" fill="none" stroke={stroke} strokeWidth="1.5" strokeDasharray="3 3" />
        {[10, 60, 100, 140, 190].map((x, i) => (
          <circle key={i} cx={x} cy={[90, 50, 60, 50, 40][i]} r="3" fill={accent} />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
      <circle cx="100" cy="60" r="38" fill="none" stroke={accent} strokeWidth="1.2" />
      <circle cx="100" cy="60" r="24" fill="none" stroke={stroke} strokeWidth="1" />
      <circle cx="100" cy="60" r="10" fill={accent} />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = 38;
        const x = 100 + r * Math.cos((deg * Math.PI) / 180);
        const y = 60 + r * Math.sin((deg * Math.PI) / 180);
        return <circle key={deg} cx={x} cy={y} r="3" fill={accent} />;
      })}
    </svg>
  );
}
