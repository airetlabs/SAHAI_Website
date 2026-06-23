
import { createFileRoute } from "@tanstack/react-router";
import { useState, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [active, setActive] = useState<Pub | boolean | null>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <PageHeader
        eyebrow="Publications · 152+"
        title={<>Scholarship as <span className="italic font-light text-ink/50">contribution.</span></>}
        description="Peer-reviewed work from SPARKS Lab researchers across the leading venues in machine learning, vision, language, and applied AI."
      >
        <ScrollIndicator />
      </PageHeader>

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
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/20 backdrop-blur-sm h-full w-full z-50"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100] p-4 sm:p-6">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-surface ring-1 ring-border rounded-full h-8 w-8 text-ink z-[101]"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              
              {/* Overlay click to close */}
              <div className="absolute inset-0 z-0" onClick={() => setActive(null)} />

              <motion.div
                layoutId={`card-${active.title}-${id}`}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-canvas sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border relative z-10"
              >
                <motion.div layoutId={`image-${active.title}-${id}`} className={`relative h-60 sm:h-80 w-full overflow-hidden bg-gradient-to-br ${active.gradient}`}>
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <div className="absolute inset-0 grid place-items-center opacity-80 scale-150">
                    <PubGlyph variant={0} />
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-ink/60 bg-canvas/60 px-2 py-1 rounded backdrop-blur-sm">
                    {active.venue}
                  </div>
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-6">
                    <div className="flex-1 pr-4">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-display font-bold text-xl text-ink leading-tight"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.title}-${id}`}
                        className="text-sm font-mono text-ink-soft mt-2"
                      >
                        {active.authors}
                      </motion.p>
                    </div>

                    {active.link && (
                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={active.link}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-medium bg-ink text-canvas hover:bg-accent transition-colors shrink-0"
                      >
                        Read Paper
                      </motion.a>
                    )}
                  </div>
                  <div className="pt-2 relative px-6">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-ink-soft text-sm h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto leading-relaxed [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-ink-soft mb-2">
                         <span className="rounded bg-surface ring-1 ring-border px-2 py-0.5 text-ink">{active.category}</span>
                         <span>{active.date}</span>
                         <span>• {active.type}</span>
                      </div>
                      {active.body}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <ul className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden w-full">
          {filtered.map((pub, index) => (
            <motion.div
              layoutId={`card-${pub.title}-${id}`}
              key={`card-${pub.title}-${id}`}
              onClick={() => setActive(pub)}
              className="bg-surface p-6 flex flex-col md:flex-row justify-between items-center hover:bg-canvas cursor-pointer transition-colors group"
            >
              <div className="flex gap-6 flex-col md:flex-row w-full md:items-center">
                <motion.div layoutId={`image-${pub.title}-${id}`} className={`relative h-40 w-full md:h-16 md:w-16 rounded-xl overflow-hidden bg-gradient-to-br ${pub.gradient} shrink-0`}>
                   <div className="absolute inset-0 bg-dotgrid opacity-30" />
                   <div className="absolute inset-0 grid place-items-center opacity-80 scale-75">
                     <PubGlyph variant={index % 4} />
                   </div>
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    layoutId={`title-${pub.title}-${id}`}
                    className="font-display font-semibold text-lg text-ink text-center md:text-left leading-snug"
                  >
                    {pub.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${pub.title}-${id}`}
                    className="text-sm font-mono text-ink-soft text-center md:text-left mt-1"
                  >
                    {pub.authors}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${pub.title}-${id}`}
                className="px-5 py-2.5 text-xs rounded-full font-medium bg-canvas ring-1 ring-border hover:bg-ink hover:text-canvas text-ink mt-4 md:mt-0 transition-colors shrink-0"
              >
                Click here
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </section>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-ink"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};



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

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="flex flex-col items-start gap-3 text-accent/70 hover:text-accent transition-colors w-fit pt-4"
    >
      <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to explore</span>
      <div className="p-2 rounded-full border border-accent/20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </motion.div>
  );
}
