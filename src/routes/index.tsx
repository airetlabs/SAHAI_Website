import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResearchEcosystemSphere } from "../components/ResearchEcosystemSphere";
import { Reveal, RevealChars, RevealWords, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAHAI Lab — Social Aware Intelligence for humanity and Language system Lab" },
      {
        name: "description",
        content:
          "Flagship AI research laboratory at NIT Tiruchirappalli, advancing machine learning, NLP, generative AI and knowledge systems.",
      },
      { property: "og:title", content: "SAHAI Lab — AI Research at NIT Trichy" },
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
  "🎉 SAHAI Lab secures new NM-ICPS funding for the MindScribe project from IIT Indore",
  "📄 New paper published in the ACM TKDD journal — Configurable Graph Summarization",
  "🤝 ICSSR(India)-JSPS(Japan) Joint Research Programme completed successfully",
  "📢 10 students successfully completed the Summer 2026 Research Internship",
  "🎓 2 conference papers published successfully at ICSCST 2026",
];
function NewsTicker() {
  return (
    <div className="fixed top-17 left-0 right-0 z-[55] h-14 bg-ink text-canvas overflow-hidden flex items-center">
      {/* News Label */}
      <a
        href="https://www.nitt.edu/home/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-0 top-0 bottom-0 flex items-center gap-2 px-5 bg-accent z-10 shrink-0 hover:brightness-110 transition-all cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-canvas opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-canvas" />
        </span>

        <span className="eyebrow text-canvas text-[10px] tracking-wider">News</span>
      </a>

      {/* Scrolling News */}
      <div className="absolute inset-0 left-20">
        <motion.div
          className="flex w-max gap-10 items-center h-14 pl-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...announcements, ...announcements].map((a, i) => (
            <span
              key={i}
              className="text-base font-semibold text-canvas/90 whitespace-nowrap flex items-center gap-10"
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
  const [showHeroLogoCard, setShowHeroLogoCard] = useState(false);

  return (
    <section className="relative lg:min-h-[94vh] block lg:flex lg:items-center pt-24 lg:pt-20 pb-20 overflow-hidden">
      <AnimatePresence>
        {showHeroLogoCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-canvas/80 backdrop-blur-md p-4"
            onClick={() => setShowHeroLogoCard(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-canvas shadow-2xl ring-1 ring-border rounded-[2rem] p-8 md:p-16 max-w-4xl w-full flex flex-col items-center justify-center relative cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowHeroLogoCard(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-muted/50 hover:bg-muted text-ink/70 hover:text-ink transition-colors"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
              <img
                src="/Real1.png"
                alt="SAHAI Lab Logo Expanded"
                className="w-full h-auto max-h-[70vh] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Backdrop layers — parallax depth */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div
        className="absolute top-1/4 -left-40 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[140px] -z-10"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[360px] h-[360px] rounded-full bg-sage/15 blur-[140px] -z-10"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page flex flex-col items-center">
        {/* Top: Logo and Sphere */}
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col justify-center items-start lg:pr-12 min-h-[80vh] lg:min-h-0 pt-4 lg:pt-8">
            <h1 className="sr-only">SAHAI Lab</h1>
            <Reveal delay={0.1}>
              <div className="font-display text-6xl sm:text-7xl lg:text-[8.5rem] font-semibold tracking-tight leading-[0.85] text-balance text-ink flex flex-col items-start drop-shadow-sm mb-6">
                <span className="flex items-end -ml-2 lg:-ml-4">
                  <button 
                    onClick={() => setShowHeroLogoCard(true)}
                    className="relative shrink-0 flex items-center justify-center cursor-zoom-in mr-3 lg:mr-5 group/herologo"
                  >
                    <img
                      src="/cropped1.png"
                      alt="S"
                      className="h-[1.2em] object-contain drop-shadow-xl transition-transform duration-300 group-hover/herologo:scale-110"
                    />
                  </button>
                  <span
                    className="tracking-[0.07em]"
                    style={{
                      textShadow: "0px 4px 10px rgba(0,0,0,0.15), 0px 10px 20px rgba(0,0,0,0.15), 0px 20px 30px rgba(0,0,0,0.1)"
                    }}
                  >
                    <span className="text-[#E3770E]">A</span>
                    H
                    <span className="text-[#0D5F06]">AI</span>
                  </span>
                </span>
                <span className="font-semibold text-ink/30 mt-2 tracking-[0.07em]">LAB</span>
              </div>
            </Reveal>

            <div className="space-y-6 lg:space-y-8 w-full text-left">
              <Reveal delay={0.2}>
                <h2 className="text-[17px] sm:text-lg lg:text-[22px] leading-relaxed font-medium text-ink max-w-2xl">
                  <strong className="font-semibold text-ink">
                    SAHAI (
                    <span className="text-accent font-semibold text-[1.15em]">S</span>ocially{" "}
                    <span className="text-accent font-semibold text-[1.15em]">A</span>ware Intelligence for{" "}
                    <span className="text-accent font-semibold text-[1.15em]">H</span>umanity and L
                    <span className="text-accent font-semibold text-[1.15em]">A</span>nguage Process
                    <span className="text-accent font-semibold text-[1.15em]">I</span>ng Lab)
                  </strong>{" "}
                  <span>advances human-centered AI through research in Artificial Intelligence, Data Science (Machine Learning, Deep Learning, Data Mining), Natural Language Processing, Indic languages, and multimodal intelligence.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-[16px] sm:text-[17px] lg:text-[22px] text-ink-soft leading-relaxed lg:w-[calc(200%+3rem)] xl:w-[calc(200%+4rem)] max-w-5xl pt-2">
                  Inspired by the meaning of <strong className="font-semibold text-ink">SAHAI (सहाय in Hindi) - help and support</strong> - we develop intelligent, accessible, and inclusive technologies that address real-world societal challenges. Our research focuses on <strong className="font-semibold text-ink">AI for social good</strong>, creating impactful solutions for education, healthcare, accessibility, governance, and language technologies. We welcome students, researchers, and industry partners to collaborate in building AI that serves humanity and creates lasting societal impact.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Ecosystem visualization */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto flex items-center justify-center lg:justify-start min-h-[60vh] lg:min-h-0 lg:-mt-44 xl:-mt-56 lg:translate-x-12 xl:translate-x-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.95 }}
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
            <div className="font-display text-base font-semibold truncate">
              SAH<span className="text-accent">AI</span> Lab
            </div>
            <div className="eyebrow text-[9px] truncate">Social Aware Intelligence</div>
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
  { num: 7, suffix: "", label: "Journals", note: "Peer reviewed publications" },
  { num: 30, suffix: "+", label: "Conferences", note: "National & International" },
  { num: 2, suffix: "", label: "Funded Projects", note: "Active research streams" },
  { num: 42, suffix: "+", label: "Interns", note: "Research scholars & students" },
  { num: 10, suffix: "", label: "Collaborators", note: "Industry & academia" },
  { num: 5, suffix: "", label: "Awards", note: "Best Paper and others" },
  { num: 26, suffix: "+", label: "Students", note: "UG and PG students" },
];

function ImpactStats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="container-page py-16 md:py-24" ref={ref}>
      <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] max-w-2xl text-balance">
            Research that <span className="italic font-light text-ink/50">compounds.</span>
          </h2>
        </div>
      </Reveal>

      <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-px bg-hairline ring-1 ring-hairline rounded-3xl overflow-hidden">
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

/* ────────────────────────────────────────────────────── FEATURED PROJECTS */

import mindscribeImg from "../../images/mindscribe.jpg";
import saksharImg from "../../images/SAKSHAR.png";

const projects = [
  {
    tag: "Funded",
    title: "MindScribe: Giving Voice to Silent Minds",
    body: "A pioneering NM-ICPS initiative funded by IIT Indore DRISHTI CPS Foundation, translating EEG brain signals into meaningful text to restore communication for individuals with speech and motor impairments. Led by Dr. C. Oswald with multi-institutional collaborators.",
    metrics: [
      ["Amount", "10 Lakhs"],
      ["Status", "Ongoing"],
      ["Focus", "BCI + NLP"],
    ],
    accent: "accent",
    image: mindscribeImg,
    link: "/projects",
    linkLabel: "Details →"
  },
  {
    tag: "Funded",
    title: "Exploring ‘Smart’ Pedagogy through TEL System",
    body: "An ICSSR (India)-JSPS (Japan) Joint Research Programme aimed at developing an end-to-end Technology-Enhanced Learning system bridging Indian and Japanese educational methodologies through AI-driven personalization.",
    metrics: [
      ["Amount", "13.43 L"],
      ["Status", "Completed"],
      ["Partners", "2"],
    ],
    accent: "ember",
    image: saksharImg,
    link: "https://drive.google.com/file/d/18aaWEmoQGfNDemcCWN4KJQhUvKg25vwW/preview",
    linkLabel: "Watch Video ↗",
    imageClass: "object-contain"
  },
];

function FeaturedProjects() {
  return (
    <section className="bg-muted/50 py-16 md:py-24 border-y border-hairline">
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

        <Stagger className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <StaggerItem key={p.title}>
              <article className="group h-full grid grid-rows-[auto_1fr] rounded-3xl overflow-hidden bg-surface ring-1 ring-border hover:ring-accent transition-all hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
                <div
                  className={`relative aspect-[16/9] overflow-hidden border-b border-hairline ${p.accent === "accent"
                    ? "bg-accent/10"
                    : p.accent === "ember"
                      ? "bg-ember/10"
                      : "bg-sage/10"
                    }`}
                >
                  <img src={p.image} alt={p.title} className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.03] ${p.imageClass || 'object-cover'}`} />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-surface/95 backdrop-blur-md px-3 py-1 ring-1 ring-border shadow-sm">
                    <span className="eyebrow text-[10px] text-ink font-medium tracking-widest uppercase">{p.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/90 drop-shadow-md bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                    Project · 0{i + 1}
                  </div>
                </div>
                <div className="p-6 lg:p-7 flex flex-col justify-between gap-5">
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-semibold tracking-tight leading-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm lg:text-base text-ink-soft leading-relaxed line-clamp-3">{p.body}</p>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-hairline">
                      {p.metrics.map(([k, v]) => (
                        <div key={k}>
                          <div className="font-display text-lg font-semibold text-ink">{v}</div>
                          <div className="eyebrow text-[10px] mt-1 text-ink/60 font-medium uppercase tracking-widest">{k}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      {p.link.startsWith("http") ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-4 py-2 text-sm font-medium transition-colors shadow-sm hover:bg-accent"
                        >
                          {p.linkLabel}
                        </a>
                      ) : (
                        <Link
                          to={p.link}
                          className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-4 py-2 text-sm font-medium transition-colors shadow-sm hover:bg-accent"
                        >
                          {p.linkLabel}
                        </Link>
                      )}
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
        }),
      )}
    </svg>
  );
}

/* ───────────────────────────────────────────────────────── COLLABORATORS */

function Collaborators() {
  const partners = [
    "IIT Delhi",
    "IIT Jodhpur",
    "IIT Indore",
    "BITs Pilani Hyderabad",
    "IIIT Hyderabad",
    "IIT Kanpur",
    "Waseda University, Japan",
    "TechSoftX Corporation",
    "IIT Bombay",
    "Blue Yonder",
  ];
  return (
    <section className="py-16 md:py-24 overflow-hidden border-y border-hairline">
      <div className="container-page mb-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <h2 className="font-display text-2xl lg:text-4xl font-semibold tracking-tight max-w-xl text-balance">
              Collaborating Institutes
            </h2>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-canvas to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-canvas to-transparent z-10" />
        <div
          className="flex w-max gap-12 pr-12 animate-marquee whitespace-nowrap py-4"
          style={{ animationDuration: "360s" }}
        >
          {Array(20)
            .fill(partners)
            .flat()
            .map((p, i) => (
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
      <FeaturedProjects />

      <Collaborators />
      {/* <TestimonialsMarquee /> */}
    </>
  );
}
