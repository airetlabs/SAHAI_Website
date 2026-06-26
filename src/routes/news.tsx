import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — SAHAI Lab" },
      { name: "description", content: "Latest news, events, awards and announcements from SAHAI Lab at NIT Tiruchirappalli." },
      { property: "og:title", content: "News & Updates · SAHAI Lab" },
      { property: "og:description", content: "Breakthroughs, talks and milestones." },
    ],
  }),
  component: NewsPage,
});

const featuredNews = {
  main: {
    date: "Dec 2024",
    tag: "Major Grant",
    title: "MindScribe Initiative Funded by NM-ICPS",
    body: "An ongoing initiative funded by IIT Indore DRISHTI CPS Foundation under the NM-ICPS Scheme, led by Dr. C. Oswald and multi-institutional collaborators to give voice to silent minds.",
  },
  sideTop: {
    date: "Nov 2024",
    tag: "Global Partnership",
    title: "ICSSR-JSPS Joint Research on Smart Pedagogy",
    body: "An international collaboration between India and Japan to develop an end-to-end Technology-Enhanced Learning system.",
  },
};

const carouselNews = [
  {
    date: "Oct 2024",
    tag: "Publication",
    title: "CGS Framework published in ACM TKDD",
    body: "Our advanced configurable graph summarization technique ensuring bounded neighborhood loss was accepted into the prestigious ACM Transactions.",
  },
  {
    date: "Aug 2024",
    tag: "Publication",
    title: "Smart Multimedia Compressor",
    body: "Intelligent framework optimizing text and image compression published in The Computer Journal.",
  },
  {
    date: "Jul 2024",
    tag: "Deployment",
    title: "Algorithm Visualizer Platform Goes Live",
    body: "An interactive web-based educational platform deployed to help students understand complex algorithms.",
  },
  {
    date: "May 2024",
    tag: "Publication",
    title: "Spotspam in ACM TWEB",
    body: "Our research analyzing SMS spam detection using BERT embeddings was successfully published.",
  },
];

function CarouselCard({ items }: { items: typeof carouselNews }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500); // Rotate every 2.5 seconds

    return () => clearInterval(timer);
  }, [items.length, isHovered]);

  return (
    <motion.article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl bg-surface p-8 hover:bg-white transition-colors ring-1 ring-border group flex flex-col justify-between shadow-sm hover:shadow-xl h-full"
    >
      <div className="relative z-10 h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-ink/50">{items[index].date}</span>
              <span className="eyebrow text-[9px] text-accent">{items[index].tag}</span>
              <span className="ml-auto font-mono text-[9px] text-ink/30 animate-pulse">Live</span>
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight">
              {items[index].title}
            </h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{items[index].body}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background decoration */}
      <motion.div className="absolute -top-10 -left-10 size-40 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors duration-700" />

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-8 flex gap-1.5 z-20">
        {items.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-4 bg-accent" : "w-1.5 bg-ink/10"}`}
          />
        ))}
      </div>
    </motion.article>
  );
}

function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title={
          <>
            From the <span className="italic font-light text-ink/50">lab.</span>
          </>
        }
        description="Grants, publications, partnerships, and the everyday research milestones that move the field forward."
      />

      <section className="container-page pb-16">
        <Reveal>
          {/* STATIC BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* MAIN CELL (Spans 2 columns) */}
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-ink text-canvas hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] transition-shadow group flex flex-col justify-between p-10 lg:p-14 min-h-[400px]"
            >
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <motion.div
                className="absolute -top-32 -right-32 size-96 rounded-full bg-accent/20 blur-3xl group-hover:bg-accent/40 transition-colors duration-1000"
                animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-full bg-accent text-ink px-3 py-1 eyebrow text-[9px] font-bold tracking-wider">
                    {featuredNews.main.tag}
                  </span>
                  <span className="font-mono text-xs text-canvas/50">{featuredNews.main.date}</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold leading-tight max-w-2xl">
                  {featuredNews.main.title}
                </h2>
                <p className="mt-6 text-canvas/70 leading-relaxed text-lg max-w-xl">
                  {featuredNews.main.body}
                </p>
              </div>

              <div className="relative z-10 mt-12 flex justify-between items-end">
                <motion.button
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full bg-surface text-ink px-6 py-3 text-sm font-medium hover:bg-canvas transition-colors"
                >
                  Read full story →
                </motion.button>
                <div className="font-display text-8xl text-canvas/10 select-none">★</div>
              </div>
            </motion.article>

            {/* SIDE CELLS STACK */}
            <div className="grid grid-rows-2 gap-6 md:col-span-1 md:row-span-2">
              {/* TOP SIDE CELL (Static) */}
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-3xl bg-[#F0E5D8] p-8 hover:bg-[#EBE0D2] transition-colors ring-1 ring-border/5 group flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] text-ink/50">
                      {featuredNews.sideTop.date}
                    </span>
                    <span className="eyebrow text-[9px] text-ember">
                      {featuredNews.sideTop.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-tight">
                    {featuredNews.sideTop.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {featuredNews.sideTop.body}
                  </p>
                </div>
                <motion.div className="absolute -bottom-10 -right-10 size-40 rounded-full bg-ember/10 blur-2xl group-hover:bg-ember/20 transition-colors duration-700" />
              </motion.article>

              {/* BOTTOM SIDE CELL (Auto-sliding Carousel) */}
              <CarouselCard items={carouselNews} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-32">
        <Reveal className="mb-8">
          <h3 className="font-display text-3xl font-semibold text-ink">Archive & Updates</h3>
          <p className="text-ink-soft mt-2 text-sm">
            A chronological log of all laboratory activities.
          </p>
        </Reveal>

        <Stagger
          className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden"
          stagger={0.08}
        >
          {[featuredNews.main, featuredNews.sideTop, ...carouselNews].map((n) => (
            <StaggerItem key={n.title}>
              <motion.article
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                className="bg-surface hover:bg-canvas p-6 lg:p-8 transition-colors grid lg:grid-cols-[140px_120px_1fr_auto] gap-4 lg:gap-8 items-start lg:items-center group"
              >
                <span className="font-mono text-xs text-ink-soft group-hover:text-ink transition-colors">
                  {n.date}
                </span>
                <span className="rounded-full bg-accent/10 text-accent px-3 py-1 eyebrow text-[9px] w-fit border border-accent/20 group-hover:bg-accent group-hover:text-ink transition-colors">
                  {n.tag}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-3xl line-clamp-2">
                    {n.body}
                  </p>
                </div>
                <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300">
                  Read →
                </span>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
