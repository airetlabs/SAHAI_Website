import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, RevealChars, Stagger, StaggerItem } from "../components/Reveal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — SPARKS Lab" },
      { name: "description", content: "Active and completed research projects at SPARKS Lab." },
      { property: "og:title", content: "Projects · SPARKS Lab" },
    ],
  }),
  component: ProjectsPage,
});

type ProjectItem = {
  id: string;
  title: string;
  status: "Ongoing" | "Completed";
  type: "Funded" | "Hosted";
  amount?: string;
  agency?: string;
  pi?: string[];
  copi?: string[];
  team?: string[];
  link?: string;
  description?: string;
  hue: string;
};

const projectData: ProjectItem[] = [
  {
    id: "p1",
    type: "Funded",
    status: "Ongoing",
    title: "MindScribe: Giving Voice to Silent Minds",
    amount: "10 Lakhs",
    agency: "IIT Indore DRISHTI CPS Foundation under the NM-ICPS Scheme",
    pi: [
      "Dr. Chandresh Kumar Maurya, Associate Professor, Dept. of CSE, IIT Indore."
    ],
    copi: [
      "Dr. C. Oswald, NIT Tiruchirappalli",
      "Prof. Amit Agrawal, Head, Neurosurgery, AIIMS Bhopal"
    ],
    hue: "from-[#C8B8A8] to-[#E6D8C8]"
  },
  {
    id: "p2",
    type: "Funded",
    status: "Completed",
    title: "Exploring ‘Smart’ Pedagogy through the End to End Development of a Technology-Enhanced Learning (TEL) system",
    amount: "13.43 Lakhs",
    agency: "ICSSR (India)-JSPS (Japan) Joint Research Programme in the field of Social Sciences",
    pi: [
      "Dr. Rachel Philip, Assistant Professor, School of Liberal Arts, IIT Jodhpur."
    ],
    copi: [
      "Prof. Takafumi Matsumaru, Waseda Univeristy",
      "Dr. Riby Abraham Boby, IIT Jodhpur",
      "Dr. Sivananthan Sampath, IIT Delhi",
      "Dr. C. Oswald, NIT Tiruchirappalli",
      "Dr. Rajlaxmi Chouhan, IIT Jodhpur"
    ],
    hue: "from-[#D8B0B0] to-[#E8C8C8]"
  },
  {
    id: "p3",
    type: "Hosted",
    status: "Completed",
    title: "Algorithm Visualizer",
    description: "An interactive web-based educational platform that helps students understand complex computer science algorithms through step-by-step graphical animations and real-time execution tracing.",
    link: "https://algorithmvisualizer.github.io/AlgoVis/",
    team: [
      "Vaibhave S",
      "Shyam Sasidharan Nair",
      "Shyam Sundaram S",
      "Akash A",
      "Oswald C",
      "Dept. of CSE, VIT Chennai."
    ],
    hue: "from-[#D0C0A8] to-[#E0D4C0]"
  },
  {
    id: "p4",
    type: "Hosted",
    status: "Completed",
    title: "Hungarian Method Visualizer",
    description: "A specialized tool designed to visually demonstrate the Hungarian algorithm for solving assignment problems, making mathematical optimization concepts intuitive and highly accessible.",
    link: "https://hungvisual.github.io/HungVis/",
    team: [
      "Shubh Todi",
      "Oswald C",
      "Department of CSE, VIT Chennai."
    ],
    hue: "from-[#B8B0D0] to-[#D0C8E0]"
  }
];

function ProjectsPage() {
  const [filter, setFilter] = useState<"Ongoing" | "Completed">("Ongoing");
  const filtered = projectData.filter(p => p.status === filter);

  return (
    <>
      <PageHeader
        eyebrow="Funded & Hosted Projects"
        title={<>Research Grants & <span className="italic font-light text-ink/50">Initiatives.</span></>}
        description="A showcase of ongoing and completed research projects, including funded initiatives and hosted platforms."
      />

      <section className="container-page pb-24">
        <Reveal>
          <div className="flex flex-wrap gap-4 sm:gap-8 mb-12 border-b border-hairline pb-4">
            {(["Ongoing", "Completed"] as const).map(f => (
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
                const isFullSpan = filtered.length === 1 || (filtered.length % 2 !== 0 && i === filtered.length - 1);
                
                return (
                  <StaggerItem key={p.id} className={isFullSpan ? "lg:col-span-2" : "col-span-1"}>
                    <motion.div
                      className={`group flex ${isFullSpan ? "flex-col lg:flex-row" : "flex-col"} overflow-hidden rounded-3xl bg-surface ring-1 ring-border shadow-sm hover:shadow-2xl hover:ring-accent/40 hover:-translate-y-1.5 transition-all duration-300 h-full`}
                    >
                      {/* Image Space */}
                      <div className={`relative bg-gradient-to-br ${p.hue} ${isFullSpan ? "min-h-[250px] lg:min-h-full lg:w-[30%] shrink-0" : "min-h-[200px] shrink-0 basis-[35%]"}`}>
                        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)", backgroundSize: "14px 14px" }} />
                        <div className="absolute left-6 top-6 flex items-center gap-2">
                          <span className="rounded-full bg-canvas/85 backdrop-blur px-3 py-1.5 eyebrow text-[10px] text-ink">{p.type} Project</span>
                        </div>
                      </div>

                      {/* Content Space */}
                      <div className={`flex flex-col flex-1 p-6 sm:p-8 md:p-10 ${isFullSpan ? "lg:w-[70%]" : "basis-[65%]"}`}>
                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                          <div className="flex-1">
                            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-snug mb-4">
                              {p.title}
                            </h3>
                            {p.description && (
                              <p className="mt-2 text-base text-ink-soft leading-relaxed mb-4">
                                {p.description}
                              </p>
                            )}
                            {p.amount && (
                              <div className="mt-2 text-base text-ink-soft">
                                <span className="font-medium text-ink">Amount:</span> {p.amount}
                              </div>
                            )}
                            {p.agency && (
                              <div className="mt-2 text-base text-ink-soft">
                                <span className="font-medium text-ink">Funding Agency:</span> {p.agency}
                              </div>
                            )}
                          </div>
                          {p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-5 py-2.5 text-sm font-medium hover:bg-accent hover:-translate-y-0.5 transition-all"
                            >
                              Visit Project ↗
                            </a>
                          )}
                        </div>

                        <div className="mt-auto pt-8 mt-8 border-t border-hairline grid sm:grid-cols-2 gap-6">
                          {p.pi && p.pi.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-ink/40 uppercase tracking-[0.15em]">Principal Investigator</span>
                              <CollapsiblePersonList people={p.pi} itemClassName="text-sm md:text-base text-ink" />
                            </div>
                          )}
                          {p.copi && p.copi.length > 0 && (
                            <div>
                              <span className="text-[10px] font-bold text-ink/40 uppercase tracking-[0.15em]">Co-Investigators</span>
                              <CollapsiblePersonList people={p.copi} itemClassName={p.id === "p2" ? "text-xs md:text-sm text-ink-soft" : "text-sm md:text-base text-ink"} />
                            </div>
                          )}
                          {p.team && p.team.length > 0 && (
                            <div className="sm:col-span-2">
                              <span className="text-[10px] font-bold text-ink/40 uppercase tracking-[0.15em]">Team</span>
                              <CollapsiblePersonList people={p.team} itemClassName="text-sm md:text-base text-ink" />
                            </div>
                          )}
                        </div>
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

function CollapsiblePersonList({ people, itemClassName }: { people: string[], itemClassName?: string }) {
  if (!people || people.length === 0) return null;
  if (people.length <= 3) {
    return (
      <ul className="mt-2 space-y-2">
        {people.map((name, idx) => (
          <li key={idx} className={`${itemClassName || "text-sm md:text-base text-ink"} leading-snug flex items-start gap-2`}>
            <span className="text-accent/60 mt-1 text-[8px] shrink-0">●</span>
            <span className="truncate">{name}</span>
          </li>
        ))}
      </ul>
    );
  }

  const visiblePeople = people.slice(0, 2);
  const hiddenCount = people.length - 2;

  const PersonNames = () => (
    <ul className="flex flex-col gap-1.5 max-h-[200px] overflow-y-auto font-sans text-sm">
      {people.map((name, i) => (
        <li key={i} className="leading-snug flex items-start gap-2">
          <span className="text-accent/60 mt-1.5 text-[6px] shrink-0">●</span>
          <span className="text-wrap break-words">{name}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className="mt-2 space-y-2 min-w-0">
      {visiblePeople.map((name, idx) => (
        <li key={idx} className={`${itemClassName || "text-sm md:text-base text-ink"} leading-snug flex items-start gap-2`}>
          <span className="text-accent/60 mt-1 text-[8px] shrink-0">●</span>
          <span className="truncate">{name}</span>
        </li>
      ))}
      <li className={`${itemClassName || "text-sm md:text-base text-ink"} leading-snug flex items-start gap-2`}>
        <span className="text-accent/60 mt-1 text-[8px] shrink-0">●</span>
        
        {/* Desktop: Tooltip (hover) */}
        <div className="hidden sm:block">
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm outline-none truncate text-left">
                +{hiddenCount} more
              </TooltipTrigger>
              <TooltipContent side="top" align="start" className="z-50 max-w-[280px] bg-canvas text-ink border border-muted p-3 shadow-xl rounded-md">
                <PersonNames />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Mobile: Popover (click) */}
        <div className="block sm:hidden">
          <Popover>
            <PopoverTrigger className="text-accent hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded-sm outline-none truncate text-left">
              +{hiddenCount} more
            </PopoverTrigger>
            <PopoverContent side="top" align="start" className="z-50 max-w-[280px] bg-canvas text-ink border border-muted p-3 shadow-xl rounded-md">
              <PersonNames />
            </PopoverContent>
          </Popover>
        </div>
      </li>
    </ul>
  );
}
