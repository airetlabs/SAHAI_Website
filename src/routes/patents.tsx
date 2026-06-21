import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/patents")({
  head: () => ({
    meta: [
      { title: "Patents — SPARKS Lab" },
      { name: "description", content: "Patents granted, filed and transferred from research at SPARKS Lab, NIT Tiruchirappalli." },
      { property: "og:title", content: "Patents · SPARKS Lab" },
      { property: "og:description", content: "Translational IP from foundational research." },
    ],
  }),
  component: PatentsPage,
});

const patents = {
  granted: [
    { no: "202141003735", year: 2021, title: "An Integrated System and Method for a Touchless, Paperless Election Voting for Government and Private mode", inventors: "C.Oswald , M. Mohamad Fasil Ansaary, P. Raghava Ratna" },
    { no: "202041035035", year: 2020, title: "SPoTA: Smart Prevention of Train Accidents", inventors: "C.Oswald, Jayapragash R, Trishit Chakraborty, Tanishq Gupta, Aditya Agrawal" },
    { no: "202041025660", year: 2020, title: "Smart Attendance Marking System (SAMS) using Computer Vision", inventors: "Balasundaram A, Manas Ranjan Prusty, Inayathullah M A, C.Oswald" },
   ],
  filed: [
    {no: "IN-PCT-****", year: 2024, title: "A cab service method for visually and hearing impaired and women passengers using Internet of Things", inventors: "C.Oswald, Trishit Chakraborty, Agniva Mitra, Nagineni Ashish, Ritabrata Nag" }
    // { no: "IN-PCT-2024/1891", year: 2024, title: "On-device generative model compression via structured pruning", inventors: "Patel S., Reddy V." },
    // { no: "IN-PCT-2023/4421", year: 2023, title: "Vision-language fusion for surgical scene understanding", inventors: "Sharma R., et al." },
  ],
  transfer: [
    // { partner: "MedTech Innovations Pvt. Ltd.", tech: "Pulse clinical decision support stack" },
    // { partner: "Bharat Edge Compute", tech: "Sparse-inference runtime for ARM Cortex-M" },
  ],
};

function PatentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Patents · 12 total"
        title={<>Research, <span className="italic font-light text-ink/50">protected.</span></>}
        description="Four patents granted or filed across machine learning systems,  AI and IOT "
      />

      <section className="container-page pb-20">
        <Group title="Granted" eyebrow="01" items={patents.granted} status="Granted" />
      </section>
      <section className="container-page pb-20">
        <Group title="Filed" eyebrow="02" items={patents.filed} status="Filed" />
      </section>

      {/* <section className="bg-ink text-canvas py-20 border-y border-canvas/5">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-accent mb-4">03 · Technology Transfer</p>
            <h2 className="font-display text-4xl font-semibold mb-10">Active commercial deployments</h2>
          </Reveal>
          <Stagger className="grid sm:grid-cols-2 gap-6" stagger={0.1}>
            {patents.transfer.map((t) => (
              <StaggerItem key={t.partner}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-canvas/5 ring-1 ring-canvas/10 p-8 hover:bg-canvas/10 hover:ring-accent/30 transition-all h-full"
                >
                  <p className="eyebrow text-canvas/50 mb-3">Partner</p>
                  <div className="font-display text-2xl font-semibold">{t.partner}</div>
                  <p className="mt-4 text-sm text-canvas/70">{t.tech}</p>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section> */}
    </>
  );
}

function Group({ title, eyebrow, items, status }: { title: string; eyebrow: string; items: typeof patents.granted; status: string }) {
  return (
    <>
      <Reveal className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-4xl font-semibold tracking-tight">
          <span className="font-mono text-base text-accent mr-4">{eyebrow}</span>{title}
        </h2>
        <span className="eyebrow">{items.length} patents</span>
      </Reveal>
      <Stagger className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden" stagger={0.06}>
        {items.map((p) => (
          <StaggerItem key={p.no}>
            <motion.article
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              className="bg-surface p-6 lg:p-8 grid lg:grid-cols-[180px_1fr_auto_auto] gap-4 lg:gap-8 items-start lg:items-center hover:bg-canvas group"
            >
              <div>
                <div className="font-mono text-sm text-accent">{p.no}</div>
                <div className="eyebrow text-[9px] mt-1">{p.year}</div>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-tight group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="mt-1 text-xs font-mono text-ink-soft">Inventors: {p.inventors}</p>
              </div>
              <span className={`rounded-full px-3 py-1 eyebrow text-[9px] w-fit ${status === "Granted" ? "bg-sage/20 text-sage" : "bg-accent-soft text-accent"}`}>
                {status}
              </span>
              <button className="text-sm font-medium text-ink group-hover:text-accent transition-colors">View →</button>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}
