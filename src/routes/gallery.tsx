import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SAHAI Lab" },
      { name: "description", content: "Photographs from the lab, workshops, conferences, hackathons and student life at SAHAI Lab, NIT Trichy." },
      { property: "og:title", content: "Gallery · SAHAI Lab" },
      { property: "og:description", content: "Inside the lab." },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Lab", "Workshop", "Conference", "Guest Lecture"];

// Synthesized swatch-cards — visual texture without external images
const palettes = [
  ["from-accent/30", "to-ember/20"],
  ["from-sage/20", "to-accent/20"],
  ["from-ink/80", "to-ink/40"],
  ["from-ember/30", "to-accent/10"],
  ["from-sage/30", "to-ink/10"],
  ["from-accent/40", "to-sage/20"],
];

const items = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  cat: categories[(i % (categories.length - 1)) + 1],
  caption: [
    "Atlas model launch",
    "Neuro-symbolic workshop",
    "Lab anniversary",
    "Hackathon finals",
    "PhD defense",
    "Student orientation",
    "Conference travel",
    "Guest lecture",
    "Annual symposium",
  ][i % 9],
  ratio: i % 5 === 0 ? "row-span-2" : i % 7 === 0 ? "col-span-2" : "",
  palette: palettes[i % palettes.length],
}));

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageHeader
        title={
          <>
            Moments inside the <br />
            <span className="italic font-light text-ink/50">lab.</span>
          </>
        }
      />

      {/* Auto-scroll highlight strips */}
      <section className="space-y-3 pb-16 pt-12 border-t border-hairline">
        {[0, 1].map((row) => (
          <div key={row} className="relative overflow-hidden">
            <div
              className="flex gap-3 animate-marquee py-2"
              style={{
                animationDirection: row % 2 ? "reverse" : "normal",
                animationDuration: "60s",
              }}
            >
              {[...items, ...items].map((it, i) => (
                <div
                  key={`${row}-${i}`}
                  className={`relative shrink-0 w-72 h-44 rounded-2xl bg-gradient-to-br ${it.palette[0]} ${it.palette[1]} ring-1 ring-border overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <div className="absolute bottom-3 left-4 right-4 font-mono text-[10px] text-ink/60 flex justify-between">
                    <span>{it.caption}</span>
                    <span>{it.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container-page pb-32">
        <Reveal className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                filter === c ? "bg-ink text-canvas" : "bg-surface ring-1 ring-border hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto eyebrow self-center">{filtered.length} photos</div>
        </Reveal>

        <AnimatePresence mode="wait">
          <Stagger
            key={filter}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3"
            stagger={0.04}
          >
            {filtered.map((it) => (
              <StaggerItem key={it.id} className={it.ratio}>
                <figure
                  className={`relative h-full w-full rounded-2xl bg-gradient-to-br ${it.palette[0]} ${it.palette[1]} ring-1 ring-border overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-dotgrid opacity-20" />
                  <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-ink/80 to-transparent text-canvas">
                    <div className="eyebrow text-canvas/60 text-[9px]">{it.cat}</div>
                    <div className="text-sm font-medium">{it.caption}</div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </AnimatePresence>
      </section>
    </>
  );
}
