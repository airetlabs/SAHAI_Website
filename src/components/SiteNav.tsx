import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const links = [
  { to: "/", label: "Home" },
  // { to: "/founder", label: "Founder" },
  { to: "/research", label: "Research" },
  { to: "/people", label: "People" },
  { to: "/projects", label: "Projects" },
  { to: "/publications", label: "Publications" },
  // { to: "/news", label: "News" },
  { to: "/teaching", label: "Teaching" },
  { to: "/patents", label: "Patents" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showLogoCard, setShowLogoCard] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[999] w-full transition-all duration-500 ${scrolled ? "bg-canvas/85 backdrop-blur-xl border-b border-hairline" : "bg-transparent"
        }`}
    >
      <div className="w-[99vw] mx-auto px-4 md:px-8 flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 min-w-0 group">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowLogoCard(true);
            }}
            className="relative shrink-0 flex items-center justify-center -ml-1 cursor-zoom-in group/logo"
            aria-label="Expand Logo"
          >
            <img src="/sahai-logo.png" alt="SAHAI Lab Logo" className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover/logo:scale-110" />
          </button>
          <div className="flex flex-col leading-none min-w-0">
            <span className="font-display text-[17px] font-semibold tracking-tight truncate">
              SAH<span className="text-accent">AI </span> Lab
            </span>
            <span className="eyebrow font-bold text-[10.5px] text-ink/80 mt-0.5 truncate tracking-widest">NIT Tiruchirappalli · CSE</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative py-2 text-[16px] xl:text-[17px] font-medium text-ink/70 transition-colors duration-300 hover:text-ink group"
              activeProps={{
                className: "text-ink font-semibold [&>span:nth-child(2)]:scale-x-100",
              }}
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
            Join Us
            <span aria-hidden>→</span>
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden grid place-items-center size-10 rounded-md hover:bg-muted"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-px w-5 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-canvas/95 backdrop-blur-xl border-b border-hairline shadow-2xl xl:hidden"
          >
            <nav className="flex flex-col px-4 py-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-lg font-medium text-ink/70 hover:text-ink hover:bg-muted/50 rounded-xl transition-colors"
                  activeProps={{ className: "text-ink font-semibold bg-muted/50" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLogoCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas/80 backdrop-blur-md p-4"
            onClick={() => setShowLogoCard(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-canvas shadow-2xl ring-1 ring-border rounded-[2rem] p-8 md:p-16 max-w-4xl w-full flex flex-col items-center justify-center relative cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowLogoCard(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-muted/50 hover:bg-muted text-ink/70 hover:text-ink transition-colors"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
              <img
                src="/Real1.png"
                alt="SAHAI Lab Logo Expanded"
                className="w-full h-auto max-h-[70vh] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
