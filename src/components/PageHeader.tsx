import { type ReactNode } from "react";
''
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dotgrid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-page">
        <p className="eyebrow text-accent mb-6 animate-reveal">{eyebrow}</p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[0.95] max-w-4xl animate-reveal [animation-delay:80ms]">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed text-pretty animate-reveal [animation-delay:160ms]">
            {description}
          </p>
        )}
        {children && <div className="mt-10 animate-reveal [animation-delay:240ms]">{children}</div>}
      </div>
    </section>
  );
}
