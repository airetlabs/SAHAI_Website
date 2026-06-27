import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SPARKS Lab" },
      { name: "description", content: "Photographs from the lab, workshops, conferences, hackathons and student life at SPARKS Lab, NIT Trichy." },
      { property: "og:title", content: "Gallery · SPARKS Lab" },
      { property: "og:description", content: "Inside the lab." },
    ],
  }),
  component: GalleryPage,
});

const imageModules = import.meta.glob("../../gallery_pics/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF,heic,HEIC,jfif,JFIF}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const palettes = [
  ["from-accent/30", "to-ember/20"],
  ["from-sage/20", "to-accent/20"],
  ["from-ink/80", "to-ink/40"],
  ["from-ember/30", "to-accent/10"],
  ["from-sage/30", "to-ink/10"],
  ["from-accent/40", "to-sage/20"],
];

const categoryMap: Record<string, string> = {
  Collaborations: "Collaborations",
  "Conferences attended": "Conferences",
  "Events Conducted": "Events",
  "NITT Club Activities": "Club Activities",
  Talks: "Talks",
  "With students": "Students",
};

const items = Object.entries(imageModules).map(([path, src], index) => {
  const relativePath = path.replace("../../gallery_pics/", "");
  const topLevelFolder = relativePath.split("/")[0];
  const rawCaption = (relativePath.split("/").pop() || "").replace(/\.[^.]+$/, "");

  let caption: string | null = rawCaption;
  if (
    /^(whatsapp|img[-_\s]*\d|dsc|snap|untitled|\d{8,})/i.test(caption) ||
    caption.length < 3 ||
    /^[0-9a-fA-F-]+$/.test(caption)
  ) {
    caption = null;
  }

  return {
    id: index + 1,
    src,
    cat: categoryMap[topLevelFolder] ?? "Collaborations",
    caption,
    palette: palettes[index % palettes.length],
  };
});

type GalleryItem = typeof items[number];

const categories = ["All", "Collaborations", "Conferences", "Events", "Club Activities", "Talks", "Students"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          >
            <motion.figure
              key="lightbox-card"
              className={`relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-gradient-to-br ${selected.palette[0]} ${selected.palette[1]} ring-1 ring-border shadow-2xl`}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.caption || "Gallery photo"}
                className="w-full max-h-[80vh] object-contain block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent pointer-events-none" />

              {/* Caption */}
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-canvas pointer-events-none">
                <div className="font-bold text-xs text-canvas/70 uppercase tracking-wider mb-1">{selected.cat}</div>
                {selected.caption && <div className="text-base font-medium leading-snug">{selected.caption}</div>}
              </figcaption>

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink/50 hover:bg-ink/80 text-canvas flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Marquee strip */}
      <section className="space-y-3 border-t border-hairline pb-16 pt-12">
        {[0, 1].map((row) => {
          const half = Math.ceil(items.length / 2);
          const rowItems = row === 0 ? items.slice(0, half) : items.slice(half);
          return (
            <div key={row} className="relative overflow-hidden">
              <div
                className="flex animate-marquee gap-3 py-2"
                style={{ animationDirection: row % 2 ? "reverse" : "normal", animationDuration: "60s" }}
              >
                {[...rowItems, ...rowItems].map((it, i) => (
                  <div
                    key={`${row}-${i}`}
                    className={`relative h-44 w-72 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${it.palette[0]} ${it.palette[1]} ring-1 ring-border cursor-pointer`}
                    onClick={() => setSelected(it)}
                  >
                    <img src={it.src} alt={it.caption || "Gallery photo"} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex justify-between font-mono text-canvas/90 items-end">
                      <span className="truncate pr-2 text-[10px]">{it.caption || ""}</span>
                      <span className="shrink-0 text-xs font-bold">{it.cat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Filterable grid */}
      <section className="container-page pb-32">
        <Reveal className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${filter === c ? "bg-ink text-canvas" : "bg-surface ring-1 ring-border hover:bg-muted"
                }`}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto self-center eyebrow">{filtered.length} photos</div>
        </Reveal>

        <AnimatePresence mode="wait">
          <Stagger key={filter} className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4" stagger={0.04}>
            {filtered.map((it) => (
              <StaggerItem key={it.id} className="break-inside-avoid">
                <figure
                  className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${it.palette[0]} ${it.palette[1]} ring-1 ring-border transition-transform hover:scale-[1.02] cursor-pointer`}
                  onClick={() => setSelected(it)}
                >
                  <img src={it.src} alt={it.caption || "Gallery photo"} className="w-full h-auto block" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-canvas pointer-events-none">
                    <div className="font-bold text-xs text-canvas/90 uppercase tracking-wider mb-1">{it.cat}</div>
                    {it.caption && <div className="text-sm font-medium leading-tight">{it.caption}</div>}
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
// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
// import { AnimatePresence, motion } from "framer-motion";

// export const Route = createFileRoute("/gallery")({
//   head: () => ({
//     meta: [
//       { title: "Gallery — SPARKS Lab" },
//       { name: "description", content: "Photographs from the lab, workshops, conferences, hackathons and student life at SPARKS Lab, NIT Trichy." },
//       { property: "og:title", content: "Gallery · SPARKS Lab" },
//       { property: "og:description", content: "Inside the lab." },
//     ],
//   }),
//   component: GalleryPage,
// });

// const imageModules = import.meta.glob("../../gallery_pics/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}", {
//   eager: true,
//   import: "default",
// }) as Record<string, string>;

// const palettes = [
//   ["from-accent/30", "to-ember/20"],
//   ["from-sage/20", "to-accent/20"],
//   ["from-ink/80", "to-ink/40"],
//   ["from-ember/30", "to-accent/10"],
//   ["from-sage/30", "to-ink/10"],
//   ["from-accent/40", "to-sage/20"],
// ];

// const categoryMap: Record<string, string> = {
//   Collaborations: "Collaborations",
//   "Conferences attended": "Conferences",
//   "Events Conducted": "Events",
//   "NITT Club Activities": "Club Activities",
//   Talks: "Talks",
//   "With students": "Students",
// };

// const normalizeCaption = (rawName: string) => {
//   const name = rawName.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();

//   if (!name) return "";

//   const compact = name.replace(/\s+/g, " ");
//   if (/^(img|dsc|photo|picture|pic|screenshot|whatsapp(?: image)?)(\b|\s)/i.test(compact)) return "";
//   if (/^\d[\d\s._-]*$/.test(compact)) return "";

//   return compact;
// };

// const items = Object.entries(imageModules).map(([path, src], index) => {
//   const relativePath = path.replace("../../gallery_pics/", "");
//   const topLevelFolder = relativePath.split("/")[0];
//   const rawCaption = (relativePath.split("/").pop() || "").replace(/\.[^.]+$/, "");

//   let caption: string | null = rawCaption;
//   if (
//     /^(whatsapp|img[-_\s]*\d|dsc|snap|untitled|\d{8,})/i.test(caption) ||
//     caption.length < 3 ||
//     /^[0-9a-fA-F-]+$/.test(caption)
//   ) {
//     caption = null;
//   }

//   return {
//     id: index + 1,
//     src,
//     cat: categoryMap[topLevelFolder] ?? "Collaborations",
//     caption,
//     ratio: index % 4 === 0 ? "row-span-2" : "",
//     palette: palettes[index % palettes.length],
//   };
// });

// type GalleryItem = typeof items[number];

// const categories = ["All", "Collaborations", "Conferences", "Events", "Club Activities", "Talks", "Students"];

// function GalleryPage() {
//   const [filter, setFilter] = useState("All");
//   const [selected, setSelected] = useState<GalleryItem | null>(null);

//   const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

//   return (
//     <>
//       {/* Lightbox */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             key="backdrop"
//             className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.figure
//               key="lightbox-card"
//               className={`relative max-h-[90vh] max-w-4xl w-full overflow-hidden rounded-3xl bg-gradient-to-br ${selected.palette[0]} ${selected.palette[1]} ring-1 ring-border shadow-2xl`}
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.85, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 320, damping: 28 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={selected.src}
//                 alt={selected.caption || "Gallery photo"}
//                 className="w-full max-h-[80vh] object-contain block"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent pointer-events-none" />

//               {/* Caption */}
//               <figcaption className="absolute inset-x-0 bottom-0 p-5 text-canvas pointer-events-none">
//                 <div className="font-bold text-xs text-canvas/70 uppercase tracking-wider mb-1">{selected.cat}</div>
//                 {selected.caption && <div className="text-base font-medium leading-snug">{selected.caption}</div>}
//               </figcaption>

//               {/* Close button */}
//               <button
//                 onClick={() => setSelected(null)}
//                 className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ink/50 hover:bg-ink/80 text-canvas flex items-center justify-center transition-colors"
//                 aria-label="Close"
//               >
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               </button>
//             </motion.figure>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Marquee strip */}
//       <section className="space-y-3 border-t border-hairline pb-16 pt-12">
//         {[0, 1].map((row) => {
//           const half = Math.ceil(items.length / 2);
//           const rowItems = row === 0 ? items.slice(0, half) : items.slice(half);
//           return (
//             <div key={row} className="relative overflow-hidden">
//               <div
//                 className="flex animate-marquee gap-3 py-2"
//                 style={{ animationDirection: row % 2 ? "reverse" : "normal", animationDuration: "60s" }}
//               >
//                 {marqueeItems.concat(marqueeItems).map((it, i) => (
//                   <div
//                     key={`${row}-${i}`}
//                     className={`relative h-44 w-72 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${it.palette[0]} ${it.palette[1]} ring-1 ring-border cursor-pointer`}
//                     onClick={() => setSelected(it)}
//                   >
//                     <img src={it.src} alt={it.caption} className="absolute inset-0 h-full w-full object-contain" loading="lazy" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
//                     <div className="absolute bottom-3 left-4 right-4 flex justify-between font-mono text-canvas/90 items-end">
//                       <span className="truncate pr-2 text-[10px]">{it.caption || ""}</span>
//                       <span className="shrink-0 text-xs font-bold">{it.cat}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </section>

//       {/* Filterable grid */}
//       <section className="container-page pb-32">
//         <Reveal className="mb-10 flex flex-wrap gap-2">
//           {categories.map((c) => (
//             <button
//               key={c}
//               onClick={() => setFilter(c)}
//               className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
//                 filter === c ? "bg-ink text-canvas" : "bg-surface ring-1 ring-border hover:bg-muted"
//               }`}
//             >
//               {c}
//             </button>
//           ))}
//           <div className="ml-auto self-center eyebrow">{filtered.length} photos</div>
//         </Reveal>

//         <AnimatePresence mode="wait">
//           <Stagger key={filter} className="grid grid-cols-2 gap-3 auto-rows-[180px] md:grid-cols-3 lg:grid-cols-4" stagger={0.04}>
//             {filtered.map((it) => (
//               <StaggerItem key={it.id} className="break-inside-avoid">
//                 <figure
//                   className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${it.palette[0]} ${it.palette[1]} ring-1 ring-border transition-transform hover:scale-[1.02] cursor-pointer`}
//                   onClick={() => setSelected(it)}
//                 >
//                   <img src={it.src} alt={it.caption || "Gallery photo"} className="w-full h-auto block" loading="lazy" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />
//                   <figcaption className="absolute inset-x-0 bottom-0 p-4 text-canvas pointer-events-none">
//                     <div className="font-bold text-xs text-canvas/90 uppercase tracking-wider mb-1">{it.cat}</div>
//                     {it.caption && <div className="text-sm font-medium leading-tight">{it.caption}</div>}
//                   </figcaption>
//                 </figure>
//               </StaggerItem>
//             ))}
//           </Stagger>
//         </AnimatePresence>
//       </section>
//     </>
//   );
// }
