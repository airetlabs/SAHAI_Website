import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

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
        <Reveal>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-ink text-canvas hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] transition-shadow"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto bg-ink-dark overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-[0.06]" />
              <motion.div
                className="absolute -top-20 -left-20 size-80 rounded-full bg-accent/30 blur-3xl"
                animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="font-display text-9xl font-semibold text-accent"
                  >
                    ★
                  </motion.div>
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
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="mt-8 self-start inline-flex items-center gap-2 rounded-full bg-accent text-ink px-5 py-2.5 text-sm font-medium"
              >
                Read full story →
              </motion.button>
            </div>
          </motion.article>
        </Reveal>
      </section>

      <section className="container-page pb-32">
        <Stagger className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden" stagger={0.05}>
          {rest.map((n) => (
            <StaggerItem key={n.title}>
              <motion.article
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="bg-surface p-6 lg:p-8 hover:bg-canvas transition-colors grid lg:grid-cols-[140px_120px_1fr_auto] gap-4 lg:gap-8 items-start lg:items-center group"
              >
                <span className="font-mono text-xs text-ink-soft">{n.date}</span>
                <span className="rounded-full bg-accent-soft text-accent px-3 py-1 eyebrow text-[9px] w-fit">{n.tag}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold group-hover:text-accent transition-colors">{n.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed">{n.body}</p>
                </div>
                <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">Read →</span>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
