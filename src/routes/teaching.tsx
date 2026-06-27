import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpenText, Download, FileText } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching — SPARKS Lab" },
      { name: "description", content: "Courses taught and downloadable teaching materials from SPARKS Lab." },
      { property: "og:title", content: "Teaching · SPARKS Lab" },
    ],
  }),
  component: TeachingPage,
});

const courses = [
  { title: "Artificial Intelligence", semester: "Fall 22-23, 23-24" },
  { title: "Big Data Analytics", semester: "Fall 22-23, 23-24" },
  { title: "Software Engineering", semester: "Winter 22-23" },
  { title: "Machine Learning for Engineering Applications", semester: "Winter 22-23" },
  { title: "Software Quality and Reliability", semester: "Winter 19-20" },
  { title: "Artificial Intelligence", semester: "Fall 18-19" },
  { title: "Software Reliability", semester: "Fall 18-19 and Winter 18-19" },
];

const materials = [
  {
    title: "Solutions for Few Recurrence Relations",
    description: "Student Contributors: S. Girish and Harshanth K Prakash, Department of CSE, VIT Chennai.",
    topics: [
      { label: "Substitution Method", href: "/teaching_material/Subs.pdf" },
      { label: "Recurrence-Tree Method", href: "/teaching_material/Tree.pdf" },
      { label: "Master Theorem", href: "/teaching_material/Master.pdf" },
    ],
  },
  {
    title: "Solutions for Few Problems in Python",
    description: "Student Contributor: Aditya Kumar Gupta, Department of CSE, VIT Chennai.",
    href: "teaching_material/python_sol.pdf",
    
  },
];

function TeachingPage() {
  return (
    <>
      <PageHeader
        title={
          <>
          </>
        }
       
      />

      <section className="container-page pt-0 pb-2 space-y-12">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-surface/90 p-8 shadow-sm sm:p-10">
            <div className="mb-6">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                Courses Taught
              </h2>
            </div>

            <div className="divide-y divide-border">
              {courses.map((course, idx) => (
                <div
                  key={`${course.title}-${idx}`}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <BookOpenText className="h-4 w-4 shrink-0 text-accent" />
                    <span className="font-display text-lg font-medium text-ink">{course.title}</span>
                  </div>
                  <span className="text-sm font-medium text-ink-soft sm:text-right">{course.semester}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[2rem] border border-border bg-surface/90 p-8 shadow-sm sm:p-10">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
                  Learning Materials.
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-ink">
                <FileText className="h-4 w-4" />
                PDF resources available below
              </div>
            </div>
<div className="grid gap-6 lg:grid-cols-2">
              {/* First box: title + description + 3 separate topic links */}
              <div className="flex h-full flex-col rounded-2xl border border-border bg-canvas/80 p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-accent-soft p-2 text-accent">
                    <FileText className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{materials[0].title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{materials[0].description}</p>

                {materials[0]?.topics?.length ? (
                  <div className="mt-6 flex flex-col divide-y divide-border border-t border-border">
                    {materials[0].topics?.map((topic) => (
                      <a
                        key={topic.label}
                        href={topic.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-ink transition-colors hover:text-accent"
                      >
                        <span className="flex items-center gap-2">
                          <Download className="h-3.5 w-3.5 shrink-0 text-accent" />
                          {topic.label}
                        </span>
                        <span aria-hidden className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Second box: single download card */}
              <motion.a
                href={materials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.01 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-canvas/80 p-6 shadow-sm transition-colors hover:border-accent/40 hover:bg-accent-soft/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-full bg-accent-soft p-2 text-accent">
                    <Download className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
                    
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{materials[1].title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{materials[1].description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  View PDF
                  <span aria-hidden>→</span>
                </div>
              </motion.a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}