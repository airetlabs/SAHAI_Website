import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const links = [
  { to: "/", label: "Home" },
  // { to: "/founder", label: "Founder" },
  { to: "/people", label: "People" },
  // { to: "/research", label: "Research" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  // { to: "/news", label: "News" },
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
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 min-w-0 group">
          <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-ink text-canvas font-display text-base font-semibold">
            S
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-accent" />
          </div>
          <div className="flex flex-col leading-none min-w-0">
            <span className="font-display text-[17px] font-semibold tracking-tight truncate">
              SPARKS Lab
            </span>
            <span className="eyebrow text-[10px] mt-0.5 truncate">
              NIT Tiruchirappalli · CSE
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-2 text-[17px] font-medium text-ink/70 transition-colors duration-300 hover:text-ink group"
              activeProps={{ className: "text-ink font-semibold [&>span:nth-child(2)]:scale-x-100" }}
            >
              <span className="inline-block transition-transform duration-300 origin-left group-hover:scale-[1.03]">
                {l.label}
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-accent scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://www.nitt.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center transition-transform hover:scale-105"
          >
            <img
              src="https://en.wikipedia.org/wiki/Special:FilePath/NITT_logo.png"
              alt="NIT Tiruchirappalli"
              className="h-10 sm:h-12 w-auto object-contain mix-blend-multiply filter contrast-125"
            />
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink text-canvas px-5 py-2.5 text-[15px] font-medium hover:bg-ink-dark transition-all hover:scale-[1.02]"
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
          <nav className="container-page py-7 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-[17px] font-medium text-ink/70 rounded-md hover:bg-muted hover:text-ink transition-colors"
                activeProps={{ className: "text-ink font-semibold bg-muted" }}
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
