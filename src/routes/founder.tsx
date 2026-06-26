import { createFileRoute } from "@tanstack/react-router";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem, RevealChars, RevealWords } from "../components/Reveal";
import { Globe, Building2, Linkedin } from "lucide-react";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — SAHAI Lab" },
      { name: "description", content: "Dr. C.Oswald, founder of SAHAI Lab — research vision, journey and contributions to AI at NIT Tiruchirappalli." },
      { property: "og:title", content: "Meet the Founder · SAHAI Lab" },
      { property: "og:description", content: "Vision, journey and research philosophy behind SAHAI Lab." },
    ],
  }),
  component: FounderPage,
});

const journey = [
  {
    year: "2022",
    title: "Assistant Professor",
    institution: "NIT Tiruchirappalli",
    body: "Department of Computer Science and Engineering (Sep 2022 – present).",
  },
  {
    year: "2022",
    title: "Assistant Professor",
    institution: "IIIT Kottayam",
    body: "Department of Computer Science and Engineering (July – Sep 2022).",
  },
  {
    year: "2021",
    title: "Institute Postdoctoral Fellow",
    institution: "IIT Kanpur",
    body: "Department of Computer Science and Engineering. Mentor: Prof. Arnab Bhattacharya (Feb 2021 – July 2022).",
  },
  {
    year: "2019",
    title: "Assistant Professor-Senior",
    institution: "VIT Chennai",
    body: "Department of Computer Science and Engineering (June 2019 – Feb 2021).",
  },
  {
    year: "2018",
    title: "Assistant Professor",
    institution: "SRM IST, Chennai",
    body: "Department of Computer Science and Engineering (June 2018 – May 2019).",
  },
  {
    year: "2018",
    title: "Ph.D. in Computer Science and Engineering",
    institution: "IIITDM Kancheepuram",
    body: "Thesis: Efficient Algorithms for Text and Image Compression based on Knowledge Engineering. Advisor: B. Sivaselvan (July 2013 - Nov 2018).",
  },
  {
    year: "2013",
    title: "M.Tech. in Software Engineering",
    institution: "Karunya University",
    body: "University I Rank [8.7/10]. Thesis: Hybrid Heuristic Algorithms for University Course Timetabling Problem (July 2011 - May 2013).",
  },
  {
    year: "2012",
    title: "Intern",
    institution: "IBM India Systems & Software Lab, Bangalore",
    body: "IBM AIX – Functional Verification Testing (FVT) (Dec 2012 – July 2013).",
  },
  {
    year: "2009",
    title: "Programmer Analyst",
    institution: "Cognizant Technology Solutions, Chennai",
    body: "Professional experience (Dec 2009 – May 2011).",
  },
  {
    year: "2009",
    title: "B.E. in Computer Science and Engineering",
    institution: "Sona College of Technology, Anna University",
    body: "Best Co-curricular Student [8.4/10] (June 2005 – May 2009).",
  },
];

const founderStats = [
  { value: 152, suffix: "+", label: "Publications" },
  { value: 4800, suffix: "+", label: "Citations" },
  { value: 38, suffix: "", label: "h-index" },
  { value: 12, suffix: "", label: "Patents" },
  { value: 23, suffix: "", label: "Awards" },
  { value: 18, suffix: "", label: "Years experience" },
  { value: 140, suffix: "+", label: "Students mentored" },
  { value: 11, suffix: "", label: "Industry collabs" },
];

function FounderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Founder & Principal Investigator"
        title={
          <>
            A researcher building{" "}
            <span className="italic font-light text-ink/50">institutional</span> AI.
          </>
        }
        description="The vision, scholarship and philosophy behind SAHAI Lab — and the trajectory that brought it to NIT Tiruchirappalli."
      />

      <section className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-16 pb-24">
        <div className="lg:sticky lg:top-24 self-start">
          <FounderPortrait />
          <Stagger className="mt-6 flex flex-wrap gap-6" stagger={0.08}>
            {[
              { label: "Website", url: "https://oswaldc.netlify.app/teaching", icon: Globe },
              {
                label: "NITT Profile",
                url: "https://www.nitt.edu/home/academics/departments/cse/faculty/oswald/",
                icon: Building2,
              },
              {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/oswald-c-bb5b37b7/",
                icon: Linkedin,
              },
            ].map(({ label, url, icon: Icon }) => (
              <StaggerItem key={label}>
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2.5 text-ink-soft hover:text-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-display text-base font-medium">{label}</span>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="space-y-12 text-ink-soft leading-relaxed">
          <Reveal>
            <p className="eyebrow text-accent mb-4">Biography</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink mb-6 leading-[1.05]">
              <RevealChars text="Dr. C.Oswald" charDelay={0.03} />
            </h2>
            <p className="text-xl text-ink font-light leading-snug text-balance">
              <RevealWords
                text="Assistant Professor at the Department of Computer Science and Engineering, NIT Tiruchirappalli. He holds a Ph.D. from IIITDM Kancheepuram, with a rich academic trajectory across IIT Kanpur, VIT Chennai, IIIT Kottayam, and SRM IST. His research explores the intersections of Machine Learning, Data Mining, NLP, and Knowledge Graphs to solve complex real-world problems."
                wordDelay={0.015}
              />
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-accent mb-4">Research interests</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Deep Learning",
                "Data Mining",
                "Natural Language Processing",
                "Human Computer Interaction",
                "Text Mining",
                "Social Media Analytics",
                "Computational Science for Social Good",
                "Ontology and Knowledge Graphs",
                "Question-Answering (English and Indian Languages)",
                "Text/Image Compression",
                "Graph Compression",
              ].map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  whileHover={{
                    y: -2,
                    scale: 1.04,
                    backgroundColor: "oklch(0.68 0.165 55 / 0.12)",
                    transition: { duration: 0.15 },
                  }}
                  className="rounded-full bg-surface ring-1 ring-border px-3 py-1.5 text-xs font-medium cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow text-accent mb-4">A message from the founder</p>
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 4 }}
              className="relative border-l-2 border-accent pl-6 text-lg text-ink font-light italic leading-relaxed"
            >
              <motion.span
                aria-hidden
                className="absolute -left-[2px] top-0 w-[2px] bg-accent/40"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              "We believe the next decade of AI will be defined not by who builds the
              largest models, but by who builds the most trustworthy, interpretable and
              consequential ones. SAHAI Lab exists to do that work, here in India, with
              students who will lead it."
            </motion.blockquote>
          </Reveal>

          <div className="flex flex-wrap gap-4 pt-2">
            <MagneticButton href="/research" primary>
              Explore research
            </MagneticButton>
            <MagneticButton href="/contact">Get in touch →</MagneticButton>
          </div>
        </div>
      </section>

      <FounderStatsSection />
      <JourneySection />
      <ActivitiesSection />
    </>
  );
}

function FounderPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-6, 6]), { stiffness: 120, damping: 14 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set(e.clientX - r.left - r.width / 2);
        my.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      // style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.015 }}
      className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-accent/25 via-muted to-sage/10 ring-1 ring-border overflow-hidden relative group will-change-transform"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-30" />
      <img
        src="images\oswald_sir.jpg"
        alt="Dr. C. Oswald"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-ink/90 to-transparent text-canvas"></div>
      <motion.div
        className="absolute -top-10 -right-10 size-48 rounded-full bg-accent/25 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -left-12 size-56 rounded-full bg-sage/30 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 group-hover:ring-accent/40 transition-all duration-500" />
      <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-ink/90 to-transparent text-canvas">
        <div className="eyebrow text-accent text-[9px] mb-2">Founder</div>
        <div className="font-display text-3xl font-semibold leading-tight">Dr. C.Oswald</div>
        <div className="mt-2 text-sm text-canvas/70">
          Assistant Professor · Dept. of CSE, NIT Trichy
        </div>
      </div>
    </motion.div>
  );
}

function MagneticButton({
  children,
  href,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - r.left - r.width / 2) * 0.35);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${
        primary
          ? "bg-ink text-canvas hover:bg-accent"
          : "ring-1 ring-border bg-surface hover:ring-ink/40 text-ink"
      }`}
    >
      {children}
    </motion.a>
  );
}

function FounderStatsSection() {
  return (
    <section className="container-page py-24 border-y border-hairline">
      <Reveal className="max-w-2xl mb-14">
        <p className="eyebrow text-accent mb-4">Founder by the numbers</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[0.98] text-balance">
          <RevealWords text="Two decades of scholarship, distilled." wordDelay={0.05} />
        </h2>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {founderStats.map((s, i) => (
          <StatCard key={s.label} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: { value: number; suffix: string; label: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-surface ring-1 ring-border p-6 overflow-hidden hover:ring-accent/40 transition-all"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,oklch(0.68_0.165_55_/_0.18),transparent_60%)]"
      />
      <div className="relative">
        <div className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          <CountUp to={stat.value} />
          <span className="text-accent">{stat.suffix}</span>
        </div>
        <div className="eyebrow text-[10px] mt-3">{stat.label}</div>
      </div>
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 + index * 0.07, ease: "easeOut" }}
      />
    </motion.div>
  );
}

function CountUp({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return <span ref={ref}>{Math.round(val).toLocaleString()}</span>;
}

function JourneySection() {
  return (
    <section className="bg-muted/40 py-32 border-b border-hairline relative overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.68_0.165_55_/_0.08),transparent_60%)]"
      />
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow text-accent mb-4">The Journey</p>
          <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
            <RevealWords
              text="From a doctoral question to a research institute."
              wordDelay={0.06}
            />
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
  const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative max-w-5xl mx-auto">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline md:-translate-x-1/2" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-accent via-accent to-accent/0 md:-translate-x-1/2 origin-top"
      />
      {/* Scroll progress indicator */}
      <motion.div
        style={{ top: indicatorY, opacity: indicatorOpacity }}
        className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="relative -translate-y-1/2">
          <motion.div
            className="size-4 rounded-full bg-accent shadow-[0_0_20px_oklch(0.68_0.165_55_/_0.6)]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 size-4 rounded-full bg-accent/40 blur-md" />
        </div>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {journey.map((j, i) => (
          <TimelineItem key={j.year} item={j} index={i} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ item, index }: { item: (typeof journey)[number]; index: number }) {
  const isLeft = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, amount: 0.4 });

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
        <AnimatePresence>
          {inView && (
            <motion.div
              key="glow"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 size-3 rounded-full bg-accent/50 blur-md"
            />
          )}
        </AnimatePresence>
        <div
          className={`size-3 rounded-full ring-4 ring-canvas transition-colors duration-500 ${inView ? "bg-accent shadow-[0_0_0_1px_oklch(0.68_0.165_55_/_0.4)]" : "bg-ink/30"}`}
        />
        <motion.div
          className="absolute inset-0 size-3 rounded-full bg-accent"
          animate={inView ? { scale: [1, 2.6, 1], opacity: [0.5, 0, 0.5] } : {}}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>

      {/* Connector */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`hidden md:block absolute top-[2.4rem] h-px bg-gradient-to-r from-accent/60 to-transparent ${
          isLeft
            ? "right-1/2 mr-1.5 w-12 origin-right bg-gradient-to-l from-accent/60 to-transparent"
            : "left-1/2 ml-1.5 w-12 origin-left"
        }`}
      />

      {/* Card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pl-12 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}
      >
        <div className={`relative ${isLeft ? "md:ml-auto" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`font-display text-[5rem] font-semibold text-ink/40 leading-none ${isLeft ? "md:text-right" : ""}`}
          >
            {item.year}
          </motion.div>
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-2xl bg-surface ring-1 ring-border p-6 mt-2 shadow-sm hover:shadow-2xl hover:ring-accent/40 transition-all text-left overflow-hidden"
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,oklch(0.68_0.165_55_/_0.12),transparent_60%)]"
            />
            <div className="relative">
              <div className="eyebrow text-accent text-xs mb-2">{item.institution}</div>
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">{item.body}</p>
            </div>
            <motion.div
              aria-hidden
              className="absolute bottom-0 left-0 h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 w-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const awardsData = [
  "Research Excellence Award, VIT Chennai – 2019",
  "Elite Alumni Award, Sona College of Technology – 2017",
  "Outstanding Overall Co-Curricular Performance in Undergrad – 2009",
  "Best NSS Volunteer Award – 2009",
  "NASSCOM Certified Student Trainer on “Associate Analytics”",
];

const teachingData = [
  "Data Analytics: Jan’26",
  "Data Structures: July’25, July’26",
  "Machine Learning (CSPE65): Jan’25, Database Management Systems (CSMI14): July’24",
  "Big Data Analytics (CSOE11): July’23, Jan’22, Artificial Intelligence (CSMI17): July’23, 22, Jan’18",
  "Software Engineering (CSPE73): Jan’24, Jan’23, Comprehensive Viva (CSIR81): Jan’23",
  "Data Structures and Algorithms: Jan’26, Jan’25, Jan’24, June’19, June’20",
  "Problem Solving and Programming in Python: June’20, Jan’19, June’19",
  "Software Quality and Reliability: Jan’20, Software Reliability: June’18, Jan’18",
];

const eventsOrganized = [
  "AICTE sponsored ATAL online FDP on “Generative AI and Ethical AI: Techniques and Applications at NITT.",
  "ACM sponsored “ROCS: Research Opportunities on Computer Science”, 05 April, 2024.",
  "One Week Workshop on “Machine Learning: Techniques and Trends”, 26 – 30 June, 2023 at NIT Tiruchirappalli.",
  "Industrial Guest Lectures on Data Structures and Algorithms in LinkedIn, Problem Solving techniques in Google, Big Data Analytics at Zoho (at NITT and VIT-C)",
];

const eventsParticipated = [
  "Talk on From Words to Worlds: Generative AI for Social Good applications at the Winter School on Interdisciplinary Pathways in Computational Social Sciences: Economics, Sociology and Policy, IIT Jodhpur, February, 2025.",
  "12th Advanced Summer School on NLP (IASNLP) at IIIT Hyderabad, July 2024.",
  "Talk on A Tale of Two Cities: Machine Learning with Digital Humanities at IIT Jodhpur.",
  "Talk on Why Machine Learning is a buzzword?, An Informal Introduction to Reinforcement Learning at MLDS’23, NITT.",
  "Talk on Introduction to scikit-learn at ICSSP’23, NITT.",
  "Talk on Types of Itemsets and their algorithms, Workshop DAMI' 2018 at IIITD&M Kancheepuram.",
  "CODS’15, CODS'16, VLDB'16, CODS'17 and CODS’18 through travel grants from ACM SIGKDD.",
];

function ActivitiesSection() {
  return (
    <section className="container-page py-24 border-b border-hairline relative">
      <Reveal className="mb-16 text-center max-w-2xl mx-auto">
        <p className="eyebrow text-accent mb-4">Academic & Professional Contributions</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Activities & Recognition
        </h2>
      </Reveal>

      <div className="space-y-12">
        {/* Top Row: Awards and Teaching */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards Box */}
          <div className="rounded-3xl ring-1 ring-border p-8 md:p-12 bg-surface shadow-sm overflow-hidden relative group hover:-translate-y-2 hover:shadow-xl hover:ring-accent/40 transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.68_0.165_55_/_0.04),transparent_50%)] pointer-events-none" />
            <div className="relative z-10">
              <Reveal>
                <h3 className="font-display text-3xl font-semibold mb-8 flex items-center gap-3">
                  <span className="text-accent text-2xl">✦</span> Awards & Honors
                </h3>
              </Reveal>
              <ul className="space-y-5">
                {awardsData.map((award, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="flex gap-4 items-start">
                      <span className="text-accent/60 mt-1 text-xl">•</span>
                      <span className="text-lg text-ink-soft leading-relaxed">{award}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          {/* Teaching Box */}
          <div className="rounded-3xl ring-1 ring-border p-8 md:p-12 bg-surface shadow-sm overflow-hidden relative group hover:-translate-y-2 hover:shadow-xl hover:ring-accent/40 transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.68_0.165_55_/_0.04),transparent_50%)] pointer-events-none" />
            <div className="relative z-10">
              <Reveal>
                <h3 className="font-display text-3xl font-semibold mb-8 flex items-center gap-3">
                  <span className="text-accent text-2xl">✦</span> Teaching
                </h3>
              </Reveal>
              <ul className="space-y-5">
                {teachingData.map((course, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="flex gap-4 items-start">
                      <span className="text-accent/60 mt-1 text-xl">•</span>
                      <span className="text-lg text-ink-soft leading-relaxed">{course}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Events Box */}
        <div className="rounded-3xl ring-1 ring-border p-8 md:p-12 bg-surface shadow-sm overflow-hidden relative group hover:-translate-y-2 hover:shadow-xl hover:ring-accent/40 transition-all duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.68_0.165_55_/_0.04),transparent_50%)] pointer-events-none" />
          <div className="relative z-10">
            <Reveal>
              <h3 className="font-display text-3xl font-semibold mb-10 flex items-center gap-3">
                <span className="text-accent text-2xl">❖</span> Events & Talks
              </h3>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <Reveal>
                  <h4 className="font-display text-xl font-semibold mb-6 text-ink/80">
                    Organized Events
                  </h4>
                </Reveal>
                <ul className="space-y-5">
                  {eventsOrganized.map((event, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <li className="flex gap-4 items-start">
                        <span className="text-accent mt-1 text-xl">▹</span>
                        <span className="text-lg text-ink-soft leading-relaxed">{event}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>

              <div>
                <Reveal>
                  <h4 className="font-display text-xl font-semibold mb-6 text-ink/80">
                    Talks & Participation
                  </h4>
                </Reveal>
                <ul className="space-y-5">
                  {eventsParticipated.map((event, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                      <li className="flex gap-4 items-start">
                        <span className="text-accent mt-1 text-xl">▹</span>
                        <span className="text-lg text-ink-soft leading-relaxed">{event}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
