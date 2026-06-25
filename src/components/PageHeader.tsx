import { type ReactNode } from "react";
import { Reveal, RevealWords } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-8 pb-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dotgrid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-page">
        <Reveal delay={0}>
          <p className="eyebrow text-accent mb-6">{eyebrow}</p>
        </Reveal>

        {typeof title === "string" ? (
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[0.95] max-w-4xl">
            <RevealWords text={title} delay={0.05} />
          </h1>
        ) : (
          <Reveal delay={0.05}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[0.95] max-w-4xl">
              {title}
            </h1>
          </Reveal>
        )}

        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft leading-relaxed text-pretty">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.3}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}