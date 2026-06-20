import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

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

const faculty = [
  { name: "Dr. A. Abdullah", role: "Founder · Principal Investigator", interests: "Neuro-symbolic AI, XAI", initials: "AA" },
  { name: "Dr. R. Venkataraman", role: "Co-Investigator · Computer Vision", interests: "Vision-language, medical imaging", initials: "RV" },
  { name: "Dr. P. Krishnan", role: "Faculty · NLP", interests: "Multilingual models, low-resource", initials: "PK" },
];
const scholars = [
  { name: "Meera Iyer", role: "Ph.D. Scholar · 4th Year", interests: "Knowledge graphs · LLM reasoning", initials: "MI" },
  { name: "Rahul Sharma", role: "Ph.D. Scholar · 3rd Year", interests: "Healthcare AI · clinical NLP", initials: "RS" },
  { name: "Sanjana Patel", role: "Ph.D. Scholar · 3rd Year", interests: "Edge inference · sparse models", initials: "SP" },
  { name: "Vikram Reddy", role: "Ph.D. Scholar · 2nd Year", interests: "Generative AI · diffusion", initials: "VR" },
  { name: "Aparna Menon", role: "Ph.D. Scholar · 2nd Year", interests: "Explainable AI", initials: "AM" },
  { name: "Karthik Subramanian", role: "Ph.D. Scholar · 1st Year", interests: "Robotics · embodied AI", initials: "KS" },
];
const students = [
  { name: "Aditya Rao", role: "M.Tech · CSE", interests: "Computer vision", initials: "AR" },
  { name: "Nivedita Joshi", role: "M.Tech · CSE", interests: "NLP", initials: "NJ" },
  { name: "Pranav Desai", role: "M.Tech · CSE", interests: "Reinforcement learning", initials: "PD" },
  { name: "Lavanya R.", role: "Dual Degree · B.Tech+M.Tech", interests: "Multi-modal", initials: "LR" },
  { name: "Aryan Mehta", role: "B.Tech · Final Year", interests: "ML systems", initials: "AM" },
  { name: "Sneha K.", role: "B.Tech · Final Year", interests: "Generative AI", initials: "SK" },
];

function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow="Researchers · Scholars · Students"
        title={<>The people behind the <span className="italic font-light text-ink/50">research.</span></>}
        description="A community of 38+ researchers — from undergraduates to senior faculty — collaborating on the most consequential questions in artificial intelligence."
      />

      <Section title="Faculty" eyebrow="01 · Leadership" people={faculty} large />
      <Section title="Doctoral Scholars" eyebrow="02 · Research" people={scholars} />
      <Section title="Students" eyebrow="03 · The Next Generation" people={students} />

      <section className="container-page py-24">
        <div className="rounded-3xl bg-ink text-canvas p-12 lg:p-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className="eyebrow text-accent mb-4">Join us</p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight leading-[0.95]">
              We're always looking for curious minds.
            </h2>
          </div>
          <div className="space-y-3 text-sm text-canvas/70">
            <p>Ph.D. positions open year-round across all research domains. Industry-funded scholarships available for exceptional candidates.</p>
            <p>M.Tech and B.Tech students from NIT Trichy can apply through the lab's internal mentorship program every semester.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  title, eyebrow, people, large = false,
}: { title: string; eyebrow: string; people: typeof faculty; large?: boolean }) {
  return (
    <section className="container-page py-20 border-t border-hairline">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="eyebrow text-accent mb-3">{eyebrow}</p>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h2>
        </div>
        <span className="font-mono text-xs text-ink-soft">{people.length} members</span>
      </div>
      <div className={`grid gap-6 ${large ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {people.map((p) => (
          <article key={p.name} className="group rounded-2xl bg-surface ring-1 ring-border p-6 hover:ring-ink hover:-translate-y-1 transition-all">
            <div className="flex items-start gap-4">
              <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-sage/20 font-display text-lg font-semibold text-ink">
                {p.initials}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
                <p className="mt-1 eyebrow text-[9px] text-ink-soft">{p.role}</p>
              </div>
            </div>
            <p className="mt-5 text-sm text-ink-soft leading-relaxed">{p.interests}</p>
            <div className="mt-5 flex gap-3 pt-4 border-t border-hairline">
              {["Email", "Scholar", "LinkedIn"].map((l) => (
                <button key={l} className="text-[11px] font-mono text-ink-soft hover:text-accent transition-colors">
                  {l} →
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
