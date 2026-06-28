import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, RevealChars, Stagger, StaggerItem } from "../components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — SAHAI Lab" },
      { name: "description", content: "Active and completed research projects at SAHAI Lab." },
      { property: "og:title", content: "Projects · SAHAI Lab" },
    ],
  }),
  component: ProjectsPage,
});

type ProjectItem = {
  id: string;
  title: string;
  status: "Ongoing" | "Completed";
  type: "Funded" | "Course";
  amount?: string;
  agency?: string;
  pi?: string[];
  copi?: string[];
  team?: string[];
  link?: string;
  linkLabel?: string;
  description?: string;
  hue: string;
  image?: string;
};

import mindscribeImg from "../../images/mindscribe.jpg";
import saksharImg from "../../images/SAKSHAR.png";

const projectData: ProjectItem[] = [
  {
    id: "p1",
    type: "Funded",
    status: "Ongoing",
    title: "MindScribe: Giving Voice to Silent Minds",
    description: "An innovative brain-computer interface system designed to translate neural signals into text, enabling communication for individuals with severe speech impairments through advanced deep learning and neural decoding techniques.",
    amount: "10 Lakhs",
    agency: "IIT Indore DRISHTI CPS Foundation under the NM-ICPS Scheme",
    pi: ["Dr. Chandresh Kumar Maurya, Associate Professor, Dept. of CSE, IIT Indore."],
    copi: [
      "Dr. C. Oswald, NIT Tiruchirappalli",
      "Prof. Amit Agrawal, Head, Neurosurgery, AIIMS Bhopal",
    ],
    hue: "from-[#C8B8A8] to-[#E6D8C8]",
    image: mindscribeImg,
  },
  {
    id: "p2",
    type: "Funded",
    status: "Completed",
    title:
      "Exploring ‘Smart’ Pedagogy through the End to End Development of a Technology-Enhanced Learning (TEL) system",
    amount: "13.43 Lakhs",
    agency: "ICSSR (India)-JSPS (Japan) Joint Research Programme in the field of Social Sciences",
    pi: ["Dr. Rachel Philip, Assistant Professor, School of Liberal Arts, IIT Jodhpur."],
    copi: [
      "Prof. Takafumi Matsumaru, Waseda Univeristy",
      "Dr. Riby Abraham Boby, IIT Jodhpur",
      "Dr. Sivananthan Sampath, IIT Delhi",
      "Dr. C. Oswald, NIT Tiruchirappalli",
      "Dr. Rajlaxmi Chouhan, IIT Jodhpur",
    ],
    hue: "from-[#D8B0B0] to-[#E8C8C8]",
    image: saksharImg,
    link: "https://drive.google.com/file/d/18aaWEmoQGfNDemcCWN4KJQhUvKg25vwW/preview",
    linkLabel: "Watch Video ↗",
  },
  {
    id: "p3",
    type: "Course",
    status: "Completed",
    title: "Algorithm Visualizer",
    description:
      "An interactive web-based educational platform that helps students understand complex computer science algorithms through step-by-step graphical animations and real-time execution tracing.",
    link: "https://algorithmvisualizer.github.io/AlgoVis/",
    team: [
      "Vaibhave S",
      "Shyam Sasidharan Nair",
      "Shyam Sundaram S",
      "Akash A",
      "Oswald C",
      "Dept. of CSE, VIT Chennai.",
    ],
    hue: "from-[#D0C0A8] to-[#E0D4C0]",
  },
  {
    id: "p4",
    type: "Course",
    status: "Completed",
    title: "Hungarian Method Visualizer",
    description:
      "A specialized tool designed to visually demonstrate the Hungarian algorithm for solving assignment problems, making mathematical optimization concepts intuitive and highly accessible.",
    link: "https://hungvisual.github.io/HungVis/",
    team: ["Shubh Todi", "Oswald C", "Department of CSE, VIT Chennai."],
    hue: "from-[#B8B0D0] to-[#D0C8E0]",
  },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<"Funded" | "Course">("Funded");
  const filtered = projectData.filter((p) => p.type === filter);

  return (
    <>


      <section className="container-page pb-24">
        <Reveal>
          <div className="flex flex-wrap gap-4 sm:gap-8 mb-12 border-b border-hairline pb-4">
            {(["Funded", "Course"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xl font-display font-medium transition-all relative ${
                  filter === f ? "text-ink" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                {f}
                {filter === f && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <Stagger className="grid lg:grid-cols-2 gap-8" stagger={0.08} key={filter}>
            {filtered.length > 0 ? (
              filtered.map((p, i) => {
                const isFullSpan =
                  filtered.length === 1 || (filtered.length % 2 !== 0 && i === filtered.length - 1);

                return (
                  <StaggerItem key={p.id} className={isFullSpan ? "lg:col-span-2" : "col-span-1"}>
                    <motion.div
                      className={`group flex ${isFullSpan ? "flex-col lg:flex-row" : "flex-col"} overflow-hidden rounded-3xl bg-surface ring-1 ring-border shadow-sm hover:shadow-2xl hover:ring-accent/40 hover:-translate-y-1.5 transition-all duration-300 h-full`}
                    >
                      {/* Image Space */}
                      <div
                        className={`flex items-center justify-center bg-gradient-to-br ${p.hue} overflow-hidden ${isFullSpan ? "lg:w-[35%] shrink-0" : "w-full"}`}
                      >
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-auto block"
                          />
                        ) : (
                          <div
                            className="w-full h-[120px] sm:h-[160px] opacity-25"
                            style={{
                              backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)",
                              backgroundSize: "14px 14px",
                            }}
                          />
                        )}
                      </div>

                      {/* Content Space */}
                      <div
                        className={`flex flex-col flex-1 p-4 sm:p-5 md:p-6 ${isFullSpan ? "lg:w-[70%]" : ""}`}
                      >
                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                          <div className="flex-1">
                            <h3 className={`font-display font-semibold text-ink leading-snug mb-2 ${p.title.length > 50 ? "text-base sm:text-lg" : "text-lg sm:text-xl"}`}>
                              {p.title}
                            </h3>
                            {p.description && (
                              <p className="mt-1 text-sm text-ink-soft leading-relaxed mb-2">
                                {p.description}
                              </p>
                            )}
                            {p.amount && (
                              <div className="mt-1 text-sm text-ink-soft">
                                <span className="font-medium text-ink">Amount:</span> {p.amount}
                              </div>
                            )}
                            {p.agency && (
                              <div className="mt-1 text-sm text-ink-soft">
                                <span className="font-medium text-ink">Funding Agency:</span>{" "}
                                {p.agency}
                              </div>
                            )}
                          </div>
                          {p.type === "Course" && p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-4 py-2 text-xs font-medium hover:bg-accent hover:-translate-y-0.5 transition-all"
                            >
                              {p.linkLabel || "Visit Project ↗"}
                            </a>
                          )}
                        </div>

                        <div className="pt-4 mt-4 border-t border-hairline grid sm:grid-cols-2 gap-4">
                          {p.pi && p.pi.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-ink/40 uppercase tracking-[0.15em] block mb-1">
                                Principal Investigator
                              </span>
                              <CollapsiblePersonList
                                people={p.pi}
                                itemClassName="text-xs sm:text-sm text-ink font-medium"
                              />
                            </div>
                          )}
                          {p.copi && p.copi.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-ink/40 uppercase tracking-[0.15em] block mb-1">
                                Co-Investigators
                              </span>
                              <CollapsiblePersonList
                                people={p.copi}
                                itemClassName="text-xs sm:text-sm text-ink-soft"
                              />
                            </div>
                          )}
                          {p.team && p.team.length > 0 && (
                            <div className="sm:col-span-2 mt-2 sm:mt-0">
                              <span className="text-[10px] font-bold text-ink/40 uppercase tracking-[0.15em] block mb-1">
                                Team
                              </span>
                              <CollapsiblePersonList
                                people={p.team}
                                itemClassName="text-xs sm:text-sm text-ink-soft"
                              />
                            </div>
                          )}
                        </div>

                        {p.type !== "Course" && p.link && (
                          <div className="mt-4 pt-3 border-t border-hairline flex">
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-4 py-2 text-xs font-medium hover:bg-accent hover:-translate-y-0.5 transition-all"
                            >
                              {p.linkLabel || "Visit Project ↗"}
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center text-ink-soft lg:col-span-2"
              >
                No projects found in this category.
              </motion.div>
            )}
          </Stagger>
        </AnimatePresence>
      </section>
    </>
  );
}

function CollapsiblePersonList({
  people,
  itemClassName,
}: {
  people: string[];
  itemClassName?: string;
}) {
  if (!people || people.length === 0) return null;

  return (
    <ul className="mt-2 space-y-2 min-w-0">
      {people.map((name, idx) => (
        <li
          key={idx}
          className={`${itemClassName || "text-sm md:text-base text-ink"} leading-snug flex items-start gap-2`}
        >
          <span className="text-accent/60 mt-1.5 text-[8px] shrink-0">●</span>
          <span className="text-wrap break-words">{name}</span>
        </li>
      ))}
    </ul>
  );
}
