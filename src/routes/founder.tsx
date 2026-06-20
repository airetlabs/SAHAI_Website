import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — SPARKS Lab" },
      { name: "description", content: "Dr. A. Abdullah, founder of SPARKS Lab — research vision, journey and contributions to AI at NIT Tiruchirappalli." },
      { property: "og:title", content: "Meet the Founder · SPARKS Lab" },
      { property: "og:description", content: "Vision, journey and research philosophy behind SPARKS Lab." },
    ],
  }),
  component: FounderPage,
});

const journey = [
  { year: "2024", title: "Founded SPARKS Lab", body: "Established the laboratory at NIT Tiruchirappalli to advance research in AI and knowledge systems with national-scale ambition." },
  { year: "2022", title: "Distinguished Research Fellow", body: "Recognized internationally for foundational contributions to explainable AI and neuro-symbolic reasoning." },
  { year: "2020", title: "Associate Professor", body: "Joined the Department of Computer Science & Engineering, NIT Trichy as faculty with a focus on intelligent systems." },
  { year: "2018", title: "Postdoctoral Research", body: "Postdoctoral fellow at a leading international AI laboratory, focused on multi-modal representation learning." },
  { year: "2017", title: "Ph.D. in Computer Science", body: "Doctoral research on neuro-symbolic reasoning and large-scale knowledge representation." },
  { year: "2012", title: "M.Tech in CSE", body: "Master's degree with research focus on probabilistic graphical models." },
];

function FounderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Founder & Principal Investigator"
        title={<>A researcher building <span className="italic font-light text-ink/50">institutional</span> AI.</>}
        description="The vision, scholarship and philosophy behind SPARKS Lab — and the trajectory that brought it to NIT Tiruchirappalli."
      />

      <section className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-16 pb-32">
        <Reveal className="lg:sticky lg:top-24 self-start">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-accent/20 via-muted to-sage/10 ring-1 ring-border overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-dotgrid opacity-30" />
            <motion.div
              className="absolute -top-10 -right-10 size-48 rounded-full bg-accent/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-ink/90 to-transparent text-canvas">
              <div className="eyebrow text-accent text-[9px] mb-2">Founder</div>
              <div className="font-display text-3xl font-semibold leading-tight">Dr. A. Abdullah</div>
              <div className="mt-2 text-sm text-canvas/70">Associate Professor · Dept. of CSE, NIT Trichy</div>
            </div>
          </motion.div>
          <Stagger className="mt-6 grid grid-cols-3 gap-3" stagger={0.08}>
            {[["38", "h-index"], ["152+", "publications"], ["12", "patents"]].map(([v, k]) => (
              <StaggerItem key={k}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="rounded-xl bg-surface ring-1 ring-border p-4"
                >
                  <div className="font-display text-xl font-semibold">{v}</div>
                  <div className="eyebrow text-[9px] mt-1">{k}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        <div className="space-y-12 text-ink-soft leading-relaxed">
          <Reveal>
            <p className="eyebrow text-accent mb-4">Biography</p>
            <p className="text-xl text-ink font-light leading-snug text-balance">
              Dr. Abdullah is an Associate Professor at the Department of Computer Science
              & Engineering, NIT Tiruchirappalli, and the founding Principal Investigator
              of SPARKS Lab. His research sits at the intersection of machine learning,
              knowledge representation, and the human disciplines that give intelligent
              systems their meaning.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-accent mb-4">Research interests</p>
            <div className="flex flex-wrap gap-2">
              {["Neuro-symbolic reasoning", "Knowledge graphs", "Explainable AI", "Multilingual NLP", "Multi-modal learning", "Healthcare AI", "Edge intelligence"].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  whileHover={{ y: -2, backgroundColor: "oklch(0.68 0.165 55 / 0.1)" }}
                  className="rounded-full bg-surface ring-1 ring-border px-3 py-1.5 text-xs font-medium cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow text-accent mb-4">A message from the founder</p>
            <blockquote className="border-l-2 border-accent pl-6 text-lg text-ink font-light italic leading-relaxed">
              "We believe the next decade of AI will be defined not by who builds the
              largest models, but by who builds the most trustworthy, interpretable and
              consequential ones. SPARKS Lab exists to do that work, here in India, with
              students who will lead it."
            </blockquote>
          </Reveal>

          <Stagger className="grid sm:grid-cols-2 gap-6" stagger={0.08}>
            <StaggerItem><Stat label="Funded grants" value="₹8.4 Cr+" /></StaggerItem>
            <StaggerItem><Stat label="Doctoral students" value="14 active" /></StaggerItem>
            <StaggerItem><Stat label="Industry collaborations" value="11" /></StaggerItem>
            <StaggerItem><Stat label="International talks" value="40+" /></StaggerItem>
          </Stagger>
        </div>
      </section>

      <JourneySection />
    </>
  );
}

function JourneySection() {
  return (
    <section className="bg-muted/40 py-32 border-y border-hairline">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow text-accent mb-4">The Journey</p>
          <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
            From a doctoral question to a research institute.
          </h2>
        </Reveal>

        <Timeline />
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 50%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto">
      {/* Static background line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline md:-translate-x-1/2" />
      {/* Animated progress line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-accent via-accent to-accent/0 md:-translate-x-1/2 origin-top"
      />

      <div className="space-y-16 md:space-y-24">
        {journey.map((j, i) => (
          <TimelineItem key={j.year} item={j} index={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: typeof journey[number]; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative grid md:grid-cols-2 md:gap-12 items-center">
      {/* Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-4 md:left-1/2 top-8 z-10 -translate-x-1/2"
      >
        <div className="size-3 rounded-full bg-accent ring-4 ring-canvas shadow-[0_0_0_1px_oklch(0.68_0.165_55_/_0.3)]" />
        <motion.div
          className="absolute inset-0 size-3 rounded-full bg-accent"
          animate={{ scale: [1, 2.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pl-12 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}
      >
        <div className={`relative ${isLeft ? "md:ml-auto" : ""}`}>
          <div className={`font-display text-[5rem] font-semibold text-ink/10 leading-none ${isLeft ? "md:text-right" : ""}`}>
            {item.year}
          </div>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-surface ring-1 ring-border p-6 mt-2 shadow-sm hover:shadow-lg hover:ring-ink/30 transition-shadow text-left"
          >
            <h3 className="font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{item.body}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-surface ring-1 ring-border p-6 hover:ring-ink/30 transition-all"
    >
      <div className="font-display text-2xl font-semibold text-ink">{value}</div>
      <div className="eyebrow text-[9px] mt-2">{label}</div>
    </motion.div>
  );
}
