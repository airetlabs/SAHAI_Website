import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Database,
  MessageSquare,
  Search,
  Archive,
  HeartHandshake,
  MousePointerClick,
  Sparkles,
  MapPin,
  CalendarDays,
  BookOpen,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { Timeline } from "@/components/ui/timeline";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — SAHAI Lab" },
      { name: "description", content: "Research domains at SAHAI Lab — machine learning, computer vision, NLP, generative AI, healthcare AI, XAI, and more." },
      { property: "og:title", content: "Research · SAHAI Lab" },
      { property: "og:description", content: "Seven interconnected domains of AI research." },
    ],
  }),
  component: ResearchPage,
});

type Domain = {
  id: string;
  title: string;
  points: string[];
  icon: typeof Database;
};

const domains: Domain[] = [
  {
    id: "dm",
    title: "Data Mining (AI, Machine Learning, Deep Learning)",
    points: ["Text, Image and Video Mining", "Frequent Pattern Mining", "Classification and Clustering of Text/Image Data"],
    icon: Database,
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    points: ["Indic Languages", "EEG to Text Processing", "Named Entity Recognition", "Speech Recognition"],
    icon: MessageSquare,
  },
  {
    id: "ir",
    title: "Information Retrieval",
    points: ["Knowledge Graphs", "Ontology", "Question-Answering"],
    icon: Search,
  },
  {
    id: "dc",
    title: "Data Compression",
    points: ["Text Compression", "Image, Video Compression", "Graph Compression"],
    icon: Archive,
  },
  {
    id: "cssg",
    title: "Computational Science for Social Good",
    points: ["Fake News Detection", "Multimodal Hate Speech Detection", "Computational Linguistics and Clinical Psychology"],
    icon: HeartHandshake,
  },
  {
    id: "hci",
    title: "Human-Computer Interaction",
    points: ["Design of CAPTCHAs", "Design of Loading Bars"],
    icon: MousePointerClick,
  },
  {
    id: "gen",
    title: "Generative AI",
    points: [
      "Large Language Models (LLMs)",
      "Small Language Models (SLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Multimodal Generative Models",
    ],
    icon: Sparkles,
  },
];

const invitedEvents: React.ReactNode[] = [
  <>Talk on <strong className="font-semibold text-ink">AI and ML in Robotics</strong> at <strong className="font-semibold text-ink">Karpaga Vinayaga College of Engineering and Technology, Chennai</strong></>,
  <>Talk on <strong className="font-semibold text-ink">Entrepreneurship, Innovation and Creativity</strong> at <strong className="font-semibold text-ink">CMR Technical Campus Hyderabad</strong></>,
  <>Talk on <strong className="font-semibold text-ink">Career Opportunities for budding Engineering Graduates</strong> at <strong className="font-semibold text-ink">Sona College of Technology, Salem</strong> and <strong className="font-semibold text-ink">Kongunadu College of Engineering, Trichy</strong></>,
  <>Talk on <strong className="font-semibold text-ink">Data Science</strong> at <strong className="font-semibold text-ink">Solamalai College of Engineering, Madurai</strong></>,
  <>Talk on <strong className="font-semibold text-ink">An Introduction to Supervised and Unsupervised Learning</strong> at <strong className="font-semibold text-ink">Guru Nanak College, Chennai</strong> and <strong className="font-semibold text-ink">SRM University, Chennai</strong></>,
  <>Talk on <strong className="font-semibold text-ink">Machine Learning</strong> at <strong className="font-semibold text-ink">KGiSL Institute of Technology, Coimbatore</strong></>,
  <>Talk on <strong className="font-semibold text-ink">An Informal Introduction to Machine Learning and Reinforcement Learning</strong> at <strong className="font-semibold text-ink">NIT Tiruchirappalli</strong></>,
  <>Talk on <strong className="font-semibold text-ink">Types of Itemsets and their algorithms</strong>, Workshop DAMI' 2018 at <strong className="font-semibold text-ink">IIITDM Kancheepuram</strong></>,
  <><strong className="font-semibold text-ink">CODS'15, CODS'16, VLDB'16, CODS'14 and CODS'18</strong> through travel grants from <strong className="font-semibold text-ink">ACM SIGKDD</strong></>,
  <>Doctoral Committee Member — <strong className="font-semibold text-ink">VIT, Amrita University, KTU</strong></>,
];

const organizedEvents: React.ReactNode[] = [
  <>Five-day self-sponsored National Workshop on <strong className="font-semibold text-ink">"Machine Learning and Data Science — Techniques and Trends,"</strong> <strong className="font-semibold text-ink">NIT Tiruchirappalli</strong>, 26–30 June 2023 (co-organized with Dr. J. Pavan Kumar)</>,
  <>One-Day National Level Workshop on <strong className="font-semibold text-ink">"Pixels on Point,"</strong> <strong className="font-semibold text-ink">VIT Chennai</strong>, 22 February 2020</>,
  <>Industrial guest lectures on <strong className="font-semibold text-ink">Data Structures and Algorithms</strong> (<strong className="font-semibold text-ink">LinkedIn</strong>) and <strong className="font-semibold text-ink">Problem Solving Techniques</strong> (<strong className="font-semibold text-ink">Google</strong>), <strong className="font-semibold text-ink">VIT Chennai</strong></>,
];

const metrics: [string, string, string][] = [
  ["Open datasets", "12+", "Curated, documented datasets released under permissive licenses for the global research community."],
  ["Open-source releases", "24+", "Production-grade libraries, training pipelines and pretrained model weights on our public repository."],
  ["Funded by", "DST · MEITY · industry", "Government of India research missions and industry consortia with combined funding of ₹8.4 Cr+."],
];

function ResearchPage() {
  return (
    <>
      <section className="container-page pb-20 pt-12">
        <Reveal className="mb-16 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-balance">
            Research <span className="font-light text-ink/50">Domains</span>
          </h1>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {domains.map((d, i) => (
            <div key={d.id} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-18px)]">
              <DomainCard domain={d} index={i} />
            </div>
          ))}
        </Reveal>
      </section>

      <section className="container-page py-16 border-t border-hairline">
        <Reveal>
          <div className="flex flex-col gap-16 lg:gap-20">
            <EventSection
              icon={CalendarDays}
              title="Events Organized"
              items={organizedEvents}
            />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink/5 text-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
                  Invited Events
                </h2>
              </div>
              <div className="flex flex-col rounded-[1.25rem] border border-border bg-white shadow-md p-6 lg:p-8">
                <ul className="divide-y divide-hairline">
                  {invitedEvents.map((event, idx) => (
                    <li
                      key={idx}
                      className="py-4 first:pt-0 last:pb-0 flex items-start gap-3 text-base leading-relaxed text-ink-soft hover:translate-x-1 transition-transform duration-300 cursor-default"
                    >
                      <BookOpen className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* <section className="bg-ink text-canvas py-24 border-y border-canvas/5"> */}
        <div className="container-page">
          <Stagger className="grid lg:grid-cols-3 gap-10" stagger={0.1}>
            {metrics.map(([title, value, body]) => (
              <StaggerItem key={title}>
                <div className="border-t border-canvas/15 pt-6">
                  <p className="eyebrow text-accent mb-4"></p>
                  {/* <StatValue value={value} /> */}
                  <p className="mt-4 text-lg text-canvas/70 leading-relaxed">{}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      {/* </section> */}
    </>
  );
}
function DomainCard({ domain: d, index: i }: { domain: Domain; index: number }) {
  const Icon = d.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.25rem] bg-surface ring-1 ring-border p-5 lg:p-6 hover:ring-accent/50 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 h-full min-h-[260px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.8rem] bg-ink/5 text-ink group-hover:bg-accent/10 group-hover:text-accent transition-colors">
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-mono text-[18px] font-bold tracking-widest text-ink-soft/70 uppercase">
            {d.id}
          </span>
        </div>

        <h3 className="font-display text-xl lg:text-[22px] font-semibold tracking-tight leading-snug mb-3 text-ink group-hover:text-accent transition-colors duration-300">
          {d.title}
        </h3>

        <div className="pt-3 border-t border-hairline group-hover:border-accent/20 transition-colors">
          <ul className="space-y-2">
            {d.points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[15px] text-ink-soft font-medium leading-relaxed">
                <span className="text-accent mt-1.5 text-[8px] shrink-0">●</span>
                <span className="leading-snug">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function EventSection({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof MapPin;
  title: string;
  items: React.ReactNode[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink/5 text-accent">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <div className="flex flex-col rounded-[1.25rem] border border-border bg-white shadow-md p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <ul className="divide-y divide-hairline">
          {items.map((event, idx) => (
            <li key={idx} className="py-4 first:pt-0 last:pb-0 flex items-start gap-3 text-[19px] leading-relaxed text-ink-soft hover:translate-x-1 transition-transform duration-300 cursor-default">
              <span className="text-accent mt-0.5 text-[8px] shrink-0">●</span>
              <span>{event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


// function StatValue({ value }: { value: string }) {
//   const match = value.match(/^(\d+)(.*)$/);
//   if (!match) {
//     return <div className="font-display text-4xl font-semibold">{value}</div>;
//   }
//   const [, numStr, suffix] = match;
//   return (
//     <div className="font-display text-4xl font-semibold tracking-tight">
//       <CountUp end={parseInt(numStr, 10)} />
//       {suffix}
//     </div>
//   );
// }


function CountUp({ end }: { end: number }) {
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

  return <motion.span ref={ref}>{rounded}</motion.span>;
}