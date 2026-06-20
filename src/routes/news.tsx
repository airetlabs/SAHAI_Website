import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — SPARKS Lab" },
      { name: "description", content: "Latest news, events, awards and announcements from SPARKS Lab at NIT Tiruchirappalli." },
      { property: "og:title", content: "News & Updates · SPARKS Lab" },
      { property: "og:description", content: "Breakthroughs, talks and milestones." },
    ],
  }),
  component: NewsPage,
});

const items = [
  { date: "Dec 2024", tag: "Award", title: "Dr. Abdullah named to AI100 list", body: "Recognized among the 100 most impactful AI researchers in India by the National Academy of Sciences." },
  { date: "Nov 2024", tag: "Paper", title: "Two papers accepted at NeurIPS 2024", body: "Work on recursive knowledge graphs and sparse inference accepted to the main conference track." },
  { date: "Oct 2024", tag: "Release", title: "Atlas-7B open release", body: "Multilingual foundation model for 22 Indian languages released under an Apache 2.0 license with full training code." },
  { date: "Sep 2024", tag: "Event", title: "Hosted Indo-Pacific AI Symposium", body: "Three-day symposium with 220 attendees from 14 countries at NIT Trichy campus." },
  { date: "Aug 2024", tag: "Grant", title: "₹3.2 Cr from DST for clinical AI", body: "Major grant awarded for extending the Pulse healthcare framework to four additional hospitals." },
  { date: "Jul 2024", tag: "Talk", title: "Keynote at ACL 2024 Bangkok", body: "Dr. Abdullah delivered the keynote on multilingual foundation models for low-resource languages." },
  { date: "Jun 2024", tag: "Hire", title: "Three new doctoral scholars", body: "Welcomed Aparna, Karthik and Vikram to the doctoral program for research across XAI and robotics." },
  { date: "May 2024", tag: "Workshop", title: "Summer school on neuro-symbolic AI", body: "Hosted 50 students from across India for an intensive two-week workshop on hybrid AI methods." },
];

function NewsPage() {
  const [featured, ...rest] = items;
  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title={<>From the <span className="italic font-light text-ink/50">lab.</span></>}
        description="Awards, papers, events, hires and the everyday research milestones that move the field forward."
      />

      <section className="container-page pb-16">
        <article className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-ink text-canvas">
          <div className="relative aspect-[16/10] lg:aspect-auto bg-ink-dark overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-[0.06]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-9xl font-semibold text-accent">★</div>
                <div className="mt-4 eyebrow text-canvas/50">Featured</div>
              </div>
            </div>
          </div>
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-accent text-ink px-3 py-1 eyebrow text-[9px]">{featured.tag}</span>
              <span className="font-mono text-xs text-canvas/50">{featured.date}</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight">{featured.title}</h2>
            <p className="mt-5 text-canvas/70 leading-relaxed">{featured.body}</p>
            <button className="mt-8 self-start inline-flex items-center gap-2 rounded-full bg-accent text-ink px-5 py-2.5 text-sm font-medium hover:scale-[1.02] transition-transform">
              Read full story →
            </button>
          </div>
        </article>
      </section>

      <section className="container-page pb-32">
        <div className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden">
          {rest.map((n) => (
            <article key={n.title} className="bg-surface p-6 lg:p-8 hover:bg-canvas transition-colors grid lg:grid-cols-[140px_120px_1fr_auto] gap-4 lg:gap-8 items-start lg:items-center">
              <span className="font-mono text-xs text-ink-soft">{n.date}</span>
              <span className="rounded-full bg-accent-soft text-accent px-3 py-1 eyebrow text-[9px] w-fit">{n.tag}</span>
              <div>
                <h3 className="font-display text-lg font-semibold">{n.title}</h3>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed">{n.body}</p>
              </div>
              <span className="text-sm font-medium text-ink hover:text-accent">Read →</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
