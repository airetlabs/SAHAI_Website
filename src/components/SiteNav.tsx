import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/founder", label: "Founder" },
  { to: "/people", label: "People" },
  { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  { to: "/news", label: "News" },
  { to: "/patents", label: "Patents" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-canvas/85 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 min-w-0 group">
          <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-canvas font-display text-base font-semibold">
            S
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-accent" />
          </div>
          <div className="flex flex-col leading-none min-w-0">
            <span className="font-display text-[15px] font-semibold tracking-tight truncate">
              SPARKS Lab
            </span>
            <span className="eyebrow text-[9px] mt-0.5 truncate">
              NIT Tiruchirappalli · CSE
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-2 text-[13px] font-medium text-ink-soft transition-all duration-300 hover:text-ink hover:font-bold group"
              activeProps={{ className: "text-ink font-bold" }}
            >
              <span className="inline-block transition-transform duration-300 origin-left group-hover:scale-[1.03]">
                {l.label}
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-ember transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-4 py-2 text-[13px] font-medium hover:bg-ink-dark transition-all hover:scale-[1.02]"
          >
            Join Research
            <span aria-hidden>→</span>
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden grid place-items-center size-10 rounded-md hover:bg-muted"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-hairline bg-canvas/95 backdrop-blur-xl">
          <nav className="container-page py-6 grid grid-cols-2 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium text-ink-soft rounded-md hover:bg-muted"
                activeProps={{ className: "text-ink bg-muted" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
