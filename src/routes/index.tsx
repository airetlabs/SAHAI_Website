import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ResearchEcosystemSphere } from "../components/ResearchEcosystemSphere";
import { Reveal, RevealChars, RevealWords, Stagger, StaggerItem } from "../components/Reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPARKS Lab — Smart Platform for AI Research and Knowledge Systems" },
      {
        name: "description",
        content:
          "Flagship AI research laboratory at NIT Tiruchirappalli, advancing machine learning, NLP, generative AI and knowledge systems.",
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
/* ─────────────────────────────────────────────────────── NEWS TICKER */

const announcements = [
  "🎉 SPARKS Lab secures new NM-ICPS funding for MindScribe initiative",
  "📄 New paper accepted at ACM TKDD — Configurable Graph Summarization",
  "🤝 ICSSR-JSPS Joint Research Programme concludes successfully",
  "🏆 Best Paper Award at ICoAC for hybrid PSO algorithms research",
  "📢 Applications open for Summer Research Internship 2026",
];
function NewsTicker() {
  return (
    <div className="fixed top-17 left-0 right-0 z-[55] h-10 bg-ink text-canvas overflow-hidden flex items-center">
      {/* News Label */}
      <a
        href="https://www.nitt.edu/home/announcements/news/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-0 top-0 bottom-0 flex items-center gap-2 px-5 bg-accent z-10 shrink-0 hover:brightness-110 transition-all cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-canvas opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-canvas" />
        </span>

        <span className="eyebrow text-canvas text-[10px] tracking-wider">
          News
        </span>
      </a>

      {/* Scrolling News */}
      <div className="absolute inset-0 left-20">
        <motion.div
          className="flex w-max gap-10 items-center h-10 pl-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...announcements, ...announcements].map((a, i) => (
            <span
              key={i}
              className="text-[13px] text-canvas/80 whitespace-nowrap flex items-center gap-10"
            >
              {a}
              <span className="text-canvas/30 text-lg">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
/* ────────────────────────────────────────────────────────────── HERO */

function Hero() {
  return (
    <section className="relative min-h-[94vh] flex items-center pt-4 pb-20 overflow-hidden">
      {/* Backdrop layers — parallax depth */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        className="absolute top-1/4 -left-40 w-[560px] h-[560px] rounded-full bg-accent/15 blur-[140px] -z-10"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[520px] h-[520px] rounded-full bg-sage/15 blur-[140px] -z-10"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          
       
         

          <h1 className="font-display text-6xl sm:text-7xl lg:text-[8.5rem] font-semibold tracking-tight leading-[0.85] text-balance">
            <RevealChars text="SPARKS" delay={0.1} charDelay={0.05} />
            <br />
            <span className="text-ink/30">
              <RevealChars text="LAB." delay={0.45} charDelay={0.06} />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg sm:text-xl text-ink-soft leading-relaxed text-pretty">
            <span className="font-medium text-ink">
              <RevealWords
                text="Smart Platform for AI Research and Knowledge Systems."
                delay={0.9}
                wordDelay={0.05}
              />
            </span>{" "}
            <RevealWords
              text="The laboratory advances Human-Centered Artificial Intelligence through ethical and responsible research, developing technologies that empower communities, address societal challenges, and create lasting humanitarian impact."
              delay={1.25}
              wordDelay={0.03}
            />
          </p>

         
        </div>

        {/* Ecosystem visualization */}
        <motion.div
          className="relative w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <ResearchEcosystemSphere />

          {/* floating indicators */}
          <motion.div
            // className="absolute top-2 -right-2 rounded-2xl bg-ink text-canvas p-4 shadow-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 1.6 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
            }}
          >
            {/* <div className="eyebrow text-canvas/50 text-[9px] mb-1">Publications</div>
            <div className="font-display text-2xl font-semibold">152+</div> */}
          </motion.div>
          <motion.div
            // className="absolute bottom-4 -left-2 rounded-2xl bg-surface ring-1 ring-border p-4 shadow-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.7, delay: 1.8 },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
            }}
          >
            {/* <div className="eyebrow text-[9px] mb-1">Patents filed</div> */}
            {/* <div className="font-display text-2xl font-semibold text-accent">12</div> */}
          </motion.div>
          <motion.div
            // className="absolute top-1/2 -left-6 rounded-2xl bg-surface ring-1 ring-border p-3 shadow-xl hidden md:block"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.0 }}
          >
            {/* <div className="eyebrow text-[9px]">Impact</div>
            <div className="font-display text-lg font-semibold">h-38</div> */}
          </motion.div>
        </motion.div>
      </div>

      
        
    </section>
  );
}

function NittLogoBadge() {
  return (
    <motion.a
      href="https://www.nitt.edu"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-2 right-6 z-[60]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src="https://en.wikipedia.org/wiki/Special:FilePath/NITT_logo.png"
        alt="NIT Tiruchirappalli"
        className="w-14 h-14 object-contain"
      />
    </motion.a>
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
    <section className="container-page pt-0 pb-0" ref={ref}>
      <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
        <div>
          
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] max-w-2xl text-balance">
            Research that <span className="italic font-light text-ink/50">compounds.</span>
          </h2>
        </div>
        
      </Reveal>

      <Reveal className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-hairline ring-1 ring-hairline rounded-3xl overflow-hidden">
      {stats.map((s, i) => (
        <StatCard key={s.label} {...s} index={i} visible={visible} />
      ))}
    </Reveal>
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
    <div className="group relative bg-surface p-4 lg:p-5 hover:bg-canvas transition-colors">
      <div className="flex items-start justify-between mb-3">
        {/* <span className="font-mono text-[9px] text-accent">
          0{index + 1}/
        </span> */}
        {/* <span className="size-1.5 rounded-full bg-accent opacity-60" /> */}
      </div>
      <div className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-none">
        {value}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-3 text-m font-medium text-ink leading-snug">{label}</div>
      <div className="mt-1 eyebrow text-[12px] leading-snug">{note}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── ABOUT STORY */



/* ─────────────────────────────────────────────────────── RESEARCH ECOSYSTEM */

const domains = [
  { id: "ml",  title: "Machine Learning",            note: "Learning · Prediction · Adaptation",projects:1 },
  // { id: "dl",  title: "Deep Learning",               note: "Networks · Representation · Intelligence",projects:1 },
  // { id: "cv",  title: "Computational Science for Social Good",             note: "Impact · Equity · Innovation",projects:1 },
  { id: "nlp", title: "Natural Language Processing", note: "Language · Semantics · Generation",projects:1 },
  { id: "gen", title: "Generative AI",               note: "Creation · Reasoning · Innovation" ,projects:1},
  // { id: "hai", title: "Data Compression",            note: "Efficiency · Encoding · Optimization",projects:1 },
  { id: "xai", title: "Human Computer Interaction",  note: "Experience · Usability · Engagement",projects:1 },
  // { id: "kg",  title: "Knowledge Graphs",            note: "Knowledge · Reasoning · Connections",projects:1 },
  { id: "edge",title: "Data Mining",                 note: "Patterns · Discovery · Insights",projects:1 },
  // { id: "rob", title: "Computational Linguistics",   note: "Language · Computation · Cognition",projects:1 }
];

function ResearchEcosystem() {
  const [hover, setHover] = useState<string | null>(null);
  return (
    <section className="container-page py-22">
      <Reveal className="mb-12">
        
        <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
          Research {" "}
          <span className="font-light text-ink/50">Domains</span>{" "}
          
        </h2>

      </Reveal>

<Reveal className="grid grid-cols-5 gap-2">
  {domains.map((d, i) => (
    <button
      key={d.id}
      onMouseEnter={() => setHover(d.id)}
      onMouseLeave={() => setHover(null)}
      className={`group relative text-left p-6 rounded-2xl ring-1 transition-all duration-500 ${hover && hover !== d.id
        ? "ring-ink/10 bg-surface opacity-50"
        : "ring-ink/20 bg-surface hover:ring-accent hover:-translate-y-1 hover:shadow-lg"
        }`}
    >
      <div className="flex items-start justify-between mb-4">
        
        
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight leading-snug">
        {d.title}
      </h3>
      <p className="mt-2 text-xs text-ink-soft leading-snug">{d.note}</p>
      <div className="mt-6 h-px bg-hairline group-hover:bg-accent transition-colors" />
    </button>
  ))}
</Reveal>
    </section>
  );
}

/* ────────────────────────────────────────────────────── FEATURED PROJECTS */

const projects = [
  {
    tag: "Funded",
    title: "MindScribe: Giving Voice to Silent Minds",
    body: "An ongoing initiative funded by IIT Indore DRISHTI CPS Foundation under the NM-ICPS Scheme, led by Dr. C. Oswald and multi-institutional collaborators.",
    metrics: [
      ["Amount", "10 Lakhs"],
      ["Status", "Ongoing"],
      ["Type", "Funded"],
    ],
    accent: "accent",
  },
  {
    tag: "Funded",
    title: "Exploring ‘Smart’ Pedagogy through TEL System",
    body: "An ICSSR (India)-JSPS (Japan) Joint Research Programme aimed at developing an end-to-end Technology-Enhanced Learning system.",
    metrics: [
      ["Amount", "13.43 L"],
      ["Status", "Completed"],
      ["Partners", "2"],
    ],
    accent: "ember",
  },
  
];

function FeaturedProjects() {
  return (
    <section className="bg-muted/50 pt-1 pb-2 border-y border-hairline">
      <div className="container-page">
        <Reveal className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            
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
        </Reveal>

        <Stagger className="space-y-4">
          {projects.map((p, i) => (
            <StaggerItem key={p.title}>
              <article
                className="group grid lg:grid-cols-[1fr_1.1fr] gap-0 rounded-2xl overflow-hidden bg-surface ring-1 ring-border hover:ring-ink transition-all hover:shadow-[0_30px_80px_-30px_oklch(0.18_0.012_60/0.3)]"
              >
                <div
                  className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[260px] overflow-hidden ${p.accent === "accent"
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
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-surface/90 backdrop-blur-sm px-3 py-1 ring-1 ring-border">
                    <span className="eyebrow text-[9px] text-ink">{p.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-ink/40">
                    Project · 0{i + 1}
                  </div>
                </div>
                <div className="p-6 lg:p-7 flex flex-col justify-between gap-5">
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-semibold tracking-tight leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.body}</p>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-hairline">
                      {p.metrics.map(([k, v]) => (
                        <div key={k}>
                          <div className="font-display text-lg font-bold">{v}</div>
                          <div className="eyebrow text-[12px] mt-2 text-black-5000">{k}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent transition-colors"
                      >
                        Case study
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
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

/* ───────────────────────────────────────────────────────── COLLABORATORS */

function Collaborators() {
  const partners = [
    "IIT Madras","IIT Indore","BITS Pilani,Hyderabad Campus" 
  ];
  return (
    <section className="py-5 overflow-hidden border-y border-hairline">
      <div className="container-page mb-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            
            <h2 className="font-display text-2xl lg:text-4xl font-semibold tracking-tight max-w-xl text-balance">
              Built with India's leading institutions.
            </h2>
          </div>
         
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-canvas to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-canvas to-transparent z-10" />
        <div className="flex w-max gap-12 pr-12 animate-marquee whitespace-nowrap py-4" style={{ animationDuration: "120s" }}>
          {Array(20).fill(partners).flat().map((p, i) => (
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

function HomePage() {
  return (
    <>
    <NewsTicker />
    
      <Hero />
      
      <ImpactStats />
      <ResearchEcosystem />
      <FeaturedProjects />
      
      <Collaborators />
      {/* <TestimonialsMarquee /> */}
      
    </>
  );
}
