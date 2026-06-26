import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem, RevealWords } from "../components/Reveal";
import { Linkedin, GraduationCap } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People — SAHAI Lab" },
      { name: "description", content: "Faculty, researchers, scholars and students of SAHAI Lab at NIT Tiruchirappalli." },
      { property: "og:title", content: "People · SAHAI Lab" },
      // { property: "og:description", content: "Meet the researchers building the future of AI at SAHAI Lab." },
    ],
  }),
  component: PeoplePage,
});

type Person = {
  name: string;
  role: string;
  interests: string;
  initials: string;
  photo?: string;
  email?: string;
  scholar?: string;
  linkedin?: string;
};

type Variant = "large" | "medium" | "compact";

function cleanName(name: string) {
  return name.replace(/\s+/g, " ").trim();
}

const faculty: Person[] = [
  {
    name: "Dr. C. Oswald ",
    role: "Faculty Coordinator",
    interests: `Data Mining,
Machine Learning for Social Analytics,
Data Compression through the perspective of Pattern Mining,
Information Retrieval and Natural Language Processing,
Human-Computer Interaction`,

    initials: "AA",
    photo: "images/faculty/oswald_sir.jpg",
    email: "oswald@nitt.edu",
    scholar: "https://scholar.google.com/citations?user=6kX5pyoAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/oswald-c-bb5b37b7/",
  },
];
const scholars: Person[] = [
  {
    name: "Abhijith  Balan",
    role: "Ph.D · Full-Time",
    interests: "Knowledge graphs · LLM reasoning",
    initials: "MI",
    photo: "",
  },
  {
    name: "Anju  K  B",
    role: "Ph.D  · QIP Scheme ",
    interests: "Healthcare AI · clinical NLP",
    initials: "RS",
    photo: "",
  },
  {
    name: "Sambasiva  Rao  Chindam",
    role: "Ph.D · Part-Time",
    interests: "Edge inference · sparse models",
    initials: "SP",
    photo: "images/Scholars/sambasivarao.JPG",
  },
];
const PGstudents: Person[] = [
  {
    name: "Yash Gogoria",
    role: "M.Tech · CSE (2024)",
    interests:
      "·Coloring Sketches using Conditional GAN    ·Landscape Painting Generation using Generative AI Models",
    initials: "YG",
    photo: "",
  },
  {
    name: "Sachin Kumar Gupt",
    role: "M.Tech · CSE (2024)",
    interests:
      "·Deep Learning Approaches for Covid Chest X-Ray Image Classification \n · Generative AI Model based Hindi Text to Realistic Image Generation ",
    initials: "SKG",
    photo: "",
  },
  {
    name: "Abhisek Raj",
    role: "M.Tech · CSE (2025)",
    interests:
      "·Predicting Suicidal Ideation Risks and Empathetic Text Generation Using LLM \n· Predicting Suicidal Ideation Risks using LLM and Transfer Learning",
    initials: "AR",
    photo: "images/PG/Abhishek_Raj.jpg",
  },
  {
    name: "Rakesh Kumar Rakesh",
    role: "M.Tech · CSE (2026)",
    interests: "·Knowledge graph Embedding Based Biomedical Named Entity Recognition",
    initials: "RKR",
    photo: "images/PG/Rakesh Kumar Rakesh .jpeg",
  },
];

const UGstudents: Person[] = [
  {
    name: "Srikanth V",
    role: "B.Tech (2025)",
    interests: "Enhancing Verizon Computer Support Using Dialogflow and Interaction Analytics",
    initials: "SV",
    photo: "",
  },
  {
    name: "Amarjit",
    role: "B.Tech (2024)",
    interests:
      "Knowledge Graph based Templatized Question Answering tool for School Level Tamil Grammar",
    initials: "A",
    photo: "",
  },
  {
    name: "Dharanish Rahul S",
    role: "B.Tech (2024)",
    interests:
      "Knowledge Graph based Templatized Question Answering tool for School Level Tamil Grammar",
    initials: "DRS",
    photo: "",
  },
  {
    name: "Mithilesh K",
    role: "B.Tech (2024)",
    interests:
      "Knowledge Graph based Templatized Question Answering tool for School Level Tamil Grammar",
    initials: "MK",
    photo: "",
  },
  {
    name: "Joshua Mahadevan",
    role: "B.Tech (2024)",
    interests:
      "Offensive Text Detection in Code-mixed Dravidian Languages towards Marginalised Groups and Women",
    initials: "JM",
    photo: "",
  },
  {
    name: "Lokkamithran",
    role: "B.Tech (2024)",
    interests:
      "Offensive Text Detection in Code-mixed Dravidian Languages towards Marginalised Groups and Women",
    initials: "LK",
    photo: "",
  },
  {
    name: "Mubeena",
    role: "B.Tech (2024)",
    interests:
      "Offensive Text Detection in Code-mixed Dravidian Languages towards Marginalised Groups and Women",
    initials: "MB",
    photo: "",
  },
];

const interns: Person[] = [
  {
    name: "Aditi Baskaran",
    role: "Research Intern (2026)",
    interests: "Lightweight SLM-Based Academic Evaluation Assistant",
    initials: "IO",
    photo: "",
  },
  {
    name: "Nooh K ",
    role: "Research Intern (2026)",
    interests: "Lightweight SLM-Based Academic Evaluation Assistant",
    initials: "IO",
    photo: "",
  },
  {
    name: "Adarsh SPL",
    role: "Research Intern (2026)",
    interests: "Lightweight SLM-Based Academic Evaluation Assistant",
    initials: "IO",
    photo: "",
  },
  {
    name: "K. Preetham Reddy",
    role: "Research Intern (2026)",
    interests: "Lightweight SLM-Based Academic Evaluation Assistant",
    initials: "IO",
    photo: "",
  },
  {
    name: "Madhu Parameswari Ganesan",
    role: "Research Intern (2026)",
    interests: "Lightweight SLM-Based Academic Evaluation Assistant",
    initials: "IO",
    photo: "",
  },
  {
    name: "Golla Madhu Kiran",
    role: "Research Intern (2026)",
    interests:
      "Boundary-Aware Parameter-Efficient Tuning for Nested Biomedical Named Entity Recognition",
    initials: "IO",
    photo: "",
  },
  {
    name: "Surya Narayan Ghosh",
    role: "Research Intern (2026)",
    interests: "Hypergraph Guided Structural Fusion for Nested Biomedical NER",
    initials: "IO",
    photo: "",
  },
  {
    name: "Harsha Dhayini R",
    role: "Research Intern (2026)",
    interests: "Transforming Tamil Ayurvedic Text to Knowledge Graph",
    initials: "IO",
    photo: "",
  },
  {
    name: "Kabilan G",
    role: "Research Intern (2024)",
    interests: "Enhancements in Nested NER",
    initials: "IO",
    photo: "",
  },
  {
    name: "Aranganathan S ",
    role: "Research Intern (2024)",
    interests: "Nested NER in Tamil",
    initials: "IO",
    photo: "",
  },
  {
    name: "Rohan Jose",
    role: "Research Intern (2024)",
    interests: "Offensive and Hate Speech Detection of Malayalam  using Deep Learning Techniques",
    initials: "IO",
    photo: "",
  },
  {
    name: "Hrishikesh Mhaiskar",
    role: "Research Intern (2024)",
    interests: "Thought Recognition from EEG Signals for Indic Languages.",
    initials: "IO",
    photo: "",
  },
  {
    name: "Sudhanshu Kumar",
    role: "Research Intern (2024)",
    interests: "Automated Identification of Mind Wandering States from EEG Signals",
    initials: "IO",
    photo: "",
  },
  {
    name: "Raushan Kumar ",
    role: "Research Intern (2024)",
    interests: "Automated Identification of Mind Wandering States from EEG Signals",
    initials: "IO",
    photo: "",
  },
  {
    name: "Swetha N",
    role: "Research Intern (2024)",
    interests: "An Audio Dataset for code mixed Tamil English Hate and offensive speech detection",
    initials: "IO",
    photo: "",
  },
  {
    name: "Sudharsan M ",
    role: "Research Intern (2024)",
    interests: "KG Creation in Tamil Ayurvedic Text",
    initials: "IO",
    photo: "",
  },
  {
    name: "Faiq Alam",
    role: "Research Intern (2024)",
    interests: "KG Creation and Reasoning in Indian Context ",
    initials: "IO",
    photo: "",
  },
  {
    name: "K.Naveen Ragav ",
    role: "Research Intern (2024)",
    interests: "",
    initials: "IO",
    photo: "",
  },
  {
    name: "Priyanka K.",
    role: "Research Intern (2024)",
    interests: "KG Creation in Tamil Ayurvedic Text",
    initials: "IO",
    photo: "",
  },
  {
    name: "Kalyan Sudarsan ",
    role: "Research Intern (2024)",
    interests: "",
    initials: "IO",
    photo: "",
  },
  {
    name: "VIJEYASRI T",
    role: "Research Intern (2024)",
    interests:
      "REAL-TIME SPEECH ENHANCEMENT FOR DYSARTHRIA INDIVIDUALS USING NLP AND DEEP LEARNING",
    initials: "IO",
    photo: "",
  },
  {
    name: "Gobika R ",
    role: "Research Intern (2024)",
    interests:
      "REAL-TIME SPEECH ENHANCEMENT FOR DYSARTHRIA INDIVIDUALS USING NLP AND DEEP LEARNING",
    initials: "IO",
    photo: "",
  },
  {
    name: "Vinithaa P",
    role: "Research Intern (2024)",
    interests: "MULTI-CLASS SPEECH DISORDER DETECTION USING FRACTAL ANALYSIS AND MFCC",
    initials: "IO",
    photo: "",
  },
  {
    name: "Nagul Pranav",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IO",
    photo: "",
  },
  {
    name: "Balaji",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Gudapadi Nikhil",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "R Vinish Krishna",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Vasan R",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Janarthanan T",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Arvind Krishna",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Krithik",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Tanush Somishetty",
    role: "Research Intern (2024)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Yogesh Perumal",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Abhijit Baidya",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Hashim Faisal syed",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Isai Visaahan P M",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Karthik Balaji N V",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Kirthik B",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Nisha Preethika S",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Piyush Sonekar",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Prabhakar",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Raunak Rajpal",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Sreenidhi N",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
  {
    name: "Vasukumar P",
    role: "Research Intern (2023)",
    interests: "Computer Vision",
    initials: "IT",
    photo: "",
  },
];

function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow=""
        title={
          <>
            The people behind the <span className="italic font-light text-ink/50">research.</span>
          </>
        }
      />

      <Section
        title="Faculty"
        eyebrow=""
        people={faculty}
        variant="large"
        isFirst
        direction="left"
      />
      <Section
        title="PhD Scholars"
        eyebrow=""
        people={scholars}
        variant="medium"
        direction="right"
      />
      <Section
        title="PG Students"
        eyebrow=""
        people={PGstudents}
        variant="compact"
        itemsPerPage={6}
        direction="left"
        showProjectLabel
      />
      <Section
        title="UG Students"
        eyebrow=""
        people={UGstudents}
        variant="compact"
        itemsPerPage={6}
        direction="right"
        showProjectLabel
      />
      <Section
        title="Interns"
        eyebrow=""
        people={interns}
        variant="compact"
        itemsPerPage={6}
        direction="left"
      />
      <section className="container-page pt-6 pb-0">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-ink text-canvas p-10 lg:p-14 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-20 -right-20 size-80 rounded-full bg-accent/30 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <Link
              to="/contact"
              className="absolute top-6 right-6 inline-flex items-center rounded-full border border-canvas/20 bg-canvas/10 px-5 py-2 text-sm font-medium text-canvas backdrop-blur-sm transition-all hover:bg-accent hover:border-accent hover:text-canvas"
            >
              Join Us
              <ArrowRight className="size-4" />
            </Link>
            <div className="relative">
              <p className="eyebrow text-accent mb-3">Join us</p>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight leading-[0.95]">
                We're always looking for curious minds.
              </h2>
            </div>
            <div className="space-y-2 text-sm text-canvas/70 relative">
              <p>
                Ph.D. positions open year-round across all research domains. Industry-funded
                scholarships available for exceptional candidates.
              </p>
              <p>
                M.Tech and B.Tech students from NIT Trichy can apply through the lab's internal
                mentorship program every semester.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </section>
    </>
  );
}

const tierStyles: Record<
  Variant,
  {
    cardPadding: string;
    gap: string;
    photoWidth: string;
    photoMinHeight: string;
    nameSize: string;
    roleSize: string;
    interestSize: string;
    initialsSize: string;
  }
> = {
  large: {
    cardPadding: "p-5 lg:p-8",
    gap: "gap-6 lg:gap-10",
    photoWidth: "w-24 sm:w-32 lg:w-56",
    photoMinHeight: "",
    nameSize: "text-2xl lg:text-3xl font-semibold",
    roleSize: "text-xs",
    interestSize: "mt-4 text-sm lg:text-base font-normal",
    initialsSize: "text-2xl font-semibold",
  },
  medium: {
    cardPadding: "p-4 sm:p-5",
    gap: "gap-4 sm:gap-5",
    photoWidth: "w-24 sm:w-32 lg:w-36",
    photoMinHeight: "min-h-[160px]",
    nameSize: "text-lg font-semibold",
    roleSize: "text-[11px]",
    interestSize: "mt-2 text-[13px] sm:text-sm",
    initialsSize: "text-xl font-semibold",
  },
  compact: {
    cardPadding: "p-3.5",
    gap: "gap-3.5",
    photoWidth: "w-20 h-20 sm:w-24 sm:h-28",
    photoMinHeight: "",
    nameSize: "text-base sm:text-lg font-semibold",
    roleSize: "text-xs",
    interestSize: "mt-2 text-sm",
    initialsSize: "text-lg font-semibold",
  },
};

function PersonCard({
  p,
  variant,
  showProjectLabel,
}: {
  p: Person;
  variant: Variant;
  showProjectLabel?: boolean;
}) {
  const s = tierStyles[variant];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group h-full w-full rounded-2xl bg-surface ring-1 ring-border hover:ring-ink hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] transition-all ${
        variant === "large" ? "max-w-5xl" : ""
      } ${s.cardPadding}`}
    >
      <div className={`flex items-stretch ${s.gap}`}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`relative shrink-0 self-stretch overflow-hidden rounded-xl bg-gradient-to-br from-accent/30 to-sage/20 ${s.photoWidth} ${s.photoMinHeight}`}
        >
          {p.photo ? (
            <img
              src={p.photo}
              alt={cleanName(p.name)}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
          ) : null}
          <span
            className={`absolute inset-0 grid place-items-center font-display tracking-tight text-ink ${
              p.photo ? "hidden" : ""
            } ${s.initialsSize}`}
          >
            {p.initials}
          </span>
        </motion.div>

        <div className="min-w-0 flex-1 flex flex-col">
          <h3
            className={`font-display tracking-tight leading-tight group-hover:text-accent transition-colors ${s.nameSize}`}
          >
            {cleanName(p.name)}
          </h3>
          <p className={`mt-3.5 font-mono uppercase tracking-[0.18em] text-accent ${s.roleSize}`}>
            {p.role}
          </p>

          {showProjectLabel ? (
            <div className="mt-2.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink">
                Project Title
              </p>
              <p className="mt-1 text-[12.5px] leading-snug text-ink-soft whitespace-pre-line">
                {p.interests}
              </p>
            </div>
          ) : (
            <p className={`text-ink-soft leading-relaxed whitespace-pre-line ${s.interestSize}`}>
              {p.interests}
            </p>
          )}

          {p.email && <p className="mt-2 font-mono text-xs text-ink-soft break-all">{p.email}</p>}
        </div>
      </div>

      {(p.scholar || p.linkedin) && (
        <div className="mt-4 flex gap-3 pt-3 border-t border-hairline">
          {p.scholar && (
            <a
              href={p.scholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar profile"
              className="inline-flex items-center justify-center size-7 rounded-full bg-muted text-ink-soft hover:bg-accent hover:text-canvas transition-colors"
            >
              <GraduationCap className="size-3.5" />
            </a>
          )}
          {p.linkedin && (
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center justify-center size-7 rounded-full bg-muted text-ink-soft hover:bg-[#0A66C2] hover:text-white transition-colors"
            >
              <Linkedin className="size-3.5" />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

function DirectionalCardReveal({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right" | "up";
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 40 : 0,
      scale: 0.97,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      variants={variants}
      transition={{ type: "spring", stiffness: 85, damping: 18, mass: 1.2 }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

function Section({
  title,
  eyebrow,
  people,
  variant = "compact",
  itemsPerPage = 6,
  isFirst = false,
  direction = "up",
  showProjectLabel = false,
}: {
  title: string;
  eyebrow: string;
  people: Person[];
  variant?: Variant;
  itemsPerPage?: number;
  isFirst?: boolean;
  direction?: "left" | "right" | "up";
  showProjectLabel?: boolean;
}) {
  const [page, setPage] = useState(1);
  const usesPagination = variant === "compact" && people.length > itemsPerPage;
  const totalPages = Math.max(1, Math.ceil(people.length / itemsPerPage));
  const visiblePeople = usesPagination
    ? people.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : people;

  const gridClasses =
    variant === "large"
      ? "grid gap-6 place-items-center"
      : variant === "medium"
        ? "grid gap-4 lg:grid-cols-3"
        : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className={`container-page py-2.5 ${isFirst ? "border-t-0 -mt-4 pt-0" : "border-t border-hairline"}`}
    >
      <Reveal className="flex items-end justify-between mb-4 flex-wrap gap-4">
        <div>
          {eyebrow && <p className="eyebrow text-accent mb-2">{eyebrow}</p>}
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight">
            <RevealWords text={title} />
          </h2>
        </div>
        <span className="font-mono text-xs text-ink-soft">{people.length} members</span>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stagger className={gridClasses} stagger={0.06}>
            {visiblePeople.map((p, i) => (
              <DirectionalCardReveal key={`${p.name}-${i}`} direction={direction}>
                <PersonCard p={p} variant={variant} showProjectLabel={showProjectLabel} />
              </DirectionalCardReveal>
            ))}
          </Stagger>
        </motion.div>
      </AnimatePresence>

      {usesPagination && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="font-mono text-xs text-ink-soft disabled:opacity-30 hover:text-accent transition-colors px-2"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`size-8 rounded-full font-mono text-xs transition-colors ${
                n === page
                  ? "bg-ink text-canvas"
                  : "text-ink-soft hover:text-accent hover:bg-accent/10"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="font-mono text-xs text-ink-soft disabled:opacity-30 hover:text-accent transition-colors px-2"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
