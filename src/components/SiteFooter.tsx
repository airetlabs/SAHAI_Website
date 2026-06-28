import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-ink text-canvas">
      <div className="container-page py-10">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.5fr]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-ink font-display text-lg font-semibold">
                S
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold">SAHAI Lab</span>
                <span className="eyebrow text-[9px] text-canvas/50">NIT Trichy · CSE</span>
              </div>
            </div>
            <p className="text-sm text-canvas/60 leading-relaxed max-w-md">
              Socially Aware Intelligence for Humanity and LAnguage ProcessIng Lab
              <br />
              CSE Department,
              <br />
              National Institute of Technology Tiruchirappalli.
            </p>
            <p className="mt-6 text-xs text-canvas/40 font-mono leading-relaxed">
              Tanjore Main Road, NH-67
              <br />
              Tiruchirappalli — 620015, Tamil Nadu, India
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-canvas/50 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/research", "Research"],
                ["/projects", "Projects"],
                ["/publications", "Publications"],
                ["/patents", "Patents"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-canvas/75 hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-canvas/50 mb-5">Lab</h4>
            <ul className="space-y-3 text-sm">
              {[
                // ["/founder", "Founder"],
                ["/people", "People"],
                //["/news", "News & Updates"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-canvas/75 hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-canvas/50 mb-5">Find Us</h4>

            <div className="overflow-hidden rounded-2xl border border-canvas/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.7783369097856!2d78.81560377427137!3d10.75983195950112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d40d9dffcf5%3A0x31a7add60b8b0fb7!2sCSE%20Department!5e1!3m2!1sen!2sin!4v1782015763178!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NIT Trichy Location"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-canvas/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <p className="eyebrow text-canvas/40">
              © {new Date().getFullYear()} SAHAI Lab · All rights reserved
            </p>
            <p className="text-xs text-canvas/60 uppercase tracking-widest font-semibold">Designed & Developed by</p>
            <p className="text-sm sm:text-[15px] font-bold text-white tracking-wide mt-1">Abhijith · Surya Ghosh · Nooh · Preetham Reddy · Aditi</p>
          </div>

          <div className="flex items-center gap-6 text-xs text-canvas/50 font-mono">
            <span>v1.0 · Tiruchirappalli</span>
            <span className="hidden md:inline">Built for the future of AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
