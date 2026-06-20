import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

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
        <div className="lg:sticky lg:top-24 self-start">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-accent/20 via-muted to-sage/10 ring-1 ring-border overflow-hidden relative">
            <div className="absolute inset-0 bg-dotgrid opacity-30" />
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-ink/90 to-transparent text-canvas">
              <div className="eyebrow text-accent text-[9px] mb-2">Founder</div>
              <div className="font-display text-3xl font-semibold leading-tight">Dr. A. Abdullah</div>
              <div className="mt-2 text-sm text-canvas/70">Associate Professor · Dept. of CSE, NIT Trichy</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[["38", "h-index"], ["152+", "publications"], ["12", "patents"]].map(([v, k]) => (
              <div key={k} className="rounded-xl bg-surface ring-1 ring-border p-4">
                <div className="font-display text-xl font-semibold">{v}</div>
                <div className="eyebrow text-[9px] mt-1">{k}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12 text-ink-soft leading-relaxed">
          <div>
            <p className="eyebrow text-accent mb-4">Biography</p>
            <p className="text-xl text-ink font-light leading-snug text-balance">
              Dr. Abdullah is an Associate Professor at the Department of Computer Science
              & Engineering, NIT Tiruchirappalli, and the founding Principal Investigator
              of SPARKS Lab. His research sits at the intersection of machine learning,
              knowledge representation, and the human disciplines that give intelligent
              systems their meaning.
            </p>
          </div>

          <div>
            <p className="eyebrow text-accent mb-4">Research interests</p>
            <div className="flex flex-wrap gap-2">
              {["Neuro-symbolic reasoning", "Knowledge graphs", "Explainable AI", "Multilingual NLP", "Multi-modal learning", "Healthcare AI", "Edge intelligence"].map((t) => (
                <span key={t} className="rounded-full bg-surface ring-1 ring-border px-3 py-1.5 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-accent mb-4">A message from the founder</p>
            <blockquote className="border-l-2 border-accent pl-6 text-lg text-ink font-light italic leading-relaxed">
              "We believe the next decade of AI will be defined not by who builds the
              largest models, but by who builds the most trustworthy, interpretable and
              consequential ones. SPARKS Lab exists to do that work, here in India, with
              students who will lead it."
            </blockquote>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Stat label="Funded grants" value="₹8.4 Cr+" />
            <Stat label="Doctoral students" value="14 active" />
            <Stat label="Industry collaborations" value="11" />
            <Stat label="International talks" value="40+" />
          </div>
        </div>
      </section>

      {/* Journey Timeline — zig-zag */}
      <section className="bg-muted/40 py-32 border-y border-hairline">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="eyebrow text-accent mb-4">The Journey</p>
            <h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tight leading-[0.95] text-balance">
              From a doctoral question to a research institute.
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline -translate-x-1/2" />
            <div className="space-y-16">
              {journey.map((j, i) => (
                <div key={j.year} className={`relative grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="relative inline-block">
                      <span className="font-display text-[5rem] font-semibold text-ink/10 leading-none">{j.year}</span>
                    </div>
                    <div className="rounded-2xl bg-surface ring-1 ring-border p-6 mt-2 shadow-sm">
                      <h3 className="font-display text-xl font-semibold">{j.title}</h3>
                      <p className="mt-3 text-sm text-ink-soft leading-relaxed">{j.body}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 top-20 size-3 rounded-full bg-accent ring-4 ring-canvas -translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface ring-1 ring-border p-6">
      <div className="font-display text-2xl font-semibold text-ink">{value}</div>
      <div className="eyebrow text-[9px] mt-2">{label}</div>
    </div>
  );
}
