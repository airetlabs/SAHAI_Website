import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People — SPARKS Lab" },
      { name: "description", content: "Faculty, researchers, scholars and students of SPARKS Lab at NIT Tiruchirappalli." },
      { property: "og:title", content: "People · SPARKS Lab" },
      { property: "og:description", content: "Meet the researchers building the future of AI at SPARKS Lab." },
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
    name: "Dr. C.Oswald ",
    role: "Founder · Principal Investigator",
    interests: `Machine Learning, Deep Learning, Data Mining,
Natural Language Processing and Human Computer Interaction,
Text Mining, Social Media Analytics,
Computational Science for Social Good,
Ontology and Knowledge Graphs,
Question Answering (English and Indian Languages),
Text/Image Compression,
Graph Compression`,
    initials: "AA",
    photo: "",
    email: "oswald@nit.edu",
    scholar:"https://scholar.google.com/citations?user=6kX5pyoAAAAJ&hl=en",
    linkedin:"https://www.linkedin.com/in/oswald-c-bb5b37b7/"
  },
];
const scholars: Person[] = [
  { name: "Abhijith  Balan", role: "Ph.D. Scholar · 3rd Year", interests: "Knowledge graphs · LLM reasoning", initials: "MI", photo: "" },
  { name: "Anju  K  B", role: "Ph.D. Scholar · 1st Year", interests: "Healthcare AI · clinical NLP", initials: "RS", photo: "" },
  { name: "Sambasiva  Rao  Chindam", role: "Ph.D. Scholar · 1st Year", interests: "Edge inference · sparse models", initials: "SP", photo: "" },
];
const students: Person[] = [
  { name: "Yash Gogoria", role: "M.Tech · CSE", interests: "AI & Machine Learning", initials: "YG", photo: "" },
  { name: "Sachin Kumar Gupt", role: "M.Tech · CSE (2024)", interests: "Data Analytics", initials: "SKG", photo: "" },
  { name: "Abhisek Raj", role: "M.Tech · CSE (2025)", interests: "Natural Language Processing", initials: "AR", photo: "" },
  { name: "Rakesh Kumar Rakesh", role: "M.Tech · CSE (2026)", interests: "Computer Vision", initials: "RKR", photo: "" },
  { name: "Anurag Kadam", role: "M.Tech · CSE (2027 · Ongoing)", interests: "Generative AI", initials: "AK", photo: "" },
  { name: "Aditya G", role: "B.Tech", interests: "Machine Learning", initials: "AG", photo: "" },
  { name: "Vijay G", role: "B.Tech", interests: "Deep Learning", initials: "VG", photo: "" },
  { name: "Aadit Krishnaa R", role: "B.Tech (2026)", interests: "AI Systems", initials: "AKR", photo: "" },
  { name: "Srikanth V", role: "B.Tech (2025)", interests: "Data Science", initials: "SV", photo: "" },
  { name: "Amarjit", role: "B.Tech", interests: "Computer Vision", initials: "A", photo: "" },
  { name: "Dharanish Rahul S", role: "B.Tech", interests: "Robotics & AI", initials: "DRS", photo: "" },
  { name: "Mithilesh K", role: "B.Tech (2024)", interests: "Natural Language Processing", initials: "MK", photo: "" },
];

const interns: Person[] = [
  { name: "Intern One", role: "Research Intern", interests: "AI & Machine Learning", initials: "IO", photo: "" },
  { name: "Intern Two", role: "Research Intern", interests: "Computer Vision", initials: "IT", photo: "" },
];

function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow="Researchers · Scholars · Students"
        title={<>The people behind the <span className="italic font-light text-ink/50">research.</span></>}
        description="A community of 38+ researchers — from undergraduates to senior faculty — collaborating on the most consequential questions in artificial intelligence."
      />

      <Section title="Faculty" eyebrow="01 · Leadership" people={faculty} variant="large" />
      <Section title="Doctoral Scholars" eyebrow="02 · Research" people={scholars} variant="medium" />
      <Section title="Students" eyebrow="03 · The Next Generation" people={students} variant="compact" itemsPerPage={6} />
      <Section title="Interns" eyebrow="04 · Research Interns" people={interns} variant="compact" itemsPerPage={6} />

      <section className="container-page py-20">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-ink text-canvas p-12 lg:p-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-20 -right-20 size-80 rounded-full bg-accent/30 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="relative">
              <p className="eyebrow text-accent mb-4">Join us</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight leading-[0.95]">
                We're always looking for curious minds.
              </h2>
            </div>
            <div className="space-y-3 text-sm text-canvas/70 relative">
              <p>Ph.D. positions open year-round across all research domains. Industry-funded scholarships available for exceptional candidates.</p>
              <p>M.Tech and B.Tech students from NIT Trichy can apply through the lab's internal mentorship program every semester.</p>
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
    cardPadding: "p-8",
    gap: "gap-6",
    photoWidth: "w-44 sm:w-52 lg:w-60",
    photoMinHeight: "",
    nameSize: "text-3xl font-medium",
    roleSize: "text-[11px]",
    interestSize: "mt-4 text-[15px] font-light",
    initialsSize: "text-3xl font-medium",
  },
 medium: {
  cardPadding: "p-6",
  gap: "gap-6",
  photoWidth: "w-44 sm:w-48 lg:w-52",
  photoMinHeight: "min-h-[220px]",
  nameSize: "text-xl font-semibold",
  roleSize: "text-[10px]",
  interestSize: "mt-3 text-sm",
  initialsSize: "text-2xl font-semibold",
},
  compact: {
    cardPadding: "p-5",
    gap: "gap-4",
    photoWidth: "w-20 sm:w-24",
    photoMinHeight: "",
    nameSize: "text-lg font-semibold",
    roleSize: "text-[9px]",
    interestSize: "mt-3 text-sm",
    initialsSize: "text-lg font-semibold",
  },
};

function PersonCard({ p, variant }: { p: Person; variant: Variant }) {
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
        {/* Photo — fixed width, height matches the text column automatically (no aspect-ratio) */}
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

        {/* Name, role, interests */}
        <div className="min-w-0 flex-1 flex flex-col">
          <h3 className={`font-display tracking-tight leading-tight group-hover:text-accent transition-colors ${s.nameSize}`}>
            {cleanName(p.name)}
          </h3>
          <p className={`mt-2 font-mono uppercase tracking-[0.18em] text-accent/80 ${s.roleSize}`}>
            {p.role}
          </p>
          <p className={`text-ink-soft leading-relaxed whitespace-pre-line ${s.interestSize}`}>
            {p.interests}
          </p>
          {p.email && (
            <p className="mt-3 font-mono text-xs text-ink-soft break-all">{p.email}</p>
          )}
        </div>
      </div>

      {/* Social handles — full width, below */}
      {(p.scholar || p.linkedin) && (
        <div className="mt-5 flex gap-4 pt-4 border-t border-hairline">
          {p.scholar && (
            <a
              href={p.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono tracking-wide text-ink-soft hover:text-accent transition-colors"
            >
              Scholar →
            </a>
          )}
          {p.linkedin && (
            <a
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono tracking-wide text-ink-soft hover:text-accent transition-colors"
            >
              LinkedIn →
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

function Section({
  title,
  eyebrow,
  people,
  variant = "compact",
  itemsPerPage = 6,
}: {
  title: string;
  eyebrow: string;
  people: Person[];
  variant?: Variant;
  itemsPerPage?: number;
}) {
  const [page, setPage] = useState(1);
  const usesPagination = variant === "compact" && people.length > itemsPerPage;
  const totalPages = Math.max(1, Math.ceil(people.length / itemsPerPage));
  const visiblePeople = usesPagination
    ? people.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : people;

  const gridClasses =
    variant === "large"
      ? "grid gap-8 place-items-center"
      : variant === "medium"
      ? "grid gap-6 lg:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="container-page py-6 border-t border-hairline">
      <Reveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="eyebrow text-accent mb-3">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h2>
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
              <StaggerItem key={`${p.name}-${i}`}>
                <PersonCard p={p} variant={variant} />
              </StaggerItem>
            ))}
          </Stagger>
        </motion.div>
      </AnimatePresence>

      {usesPagination && (
        <div className="mt-10 flex items-center justify-center gap-2">
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
                n === page ? "bg-ink text-canvas" : "text-ink-soft hover:text-accent hover:bg-accent/10"
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