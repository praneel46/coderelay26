import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="relative w-full pt-16 sm:pt-20 pb-10 px-4 sm:px-6 lg:px-12 border-t border-white/[0.08] select-none z-10"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-12 sm:pb-16">
          
          {/* COLUMN 1 — EVENT IDENTITY */}
          <div className="flex flex-col space-y-4 text-left">
            <div className="space-y-1.5 pt-1">
              <p className="font-mono text-xs font-semibold text-slate-200 tracking-wide">
                SJB INSTITUTE OF TECHNOLOGY
              </p>
              <p className="font-mono text-[11px] text-[#00f0ff] tracking-wider font-medium">
                30 OCTOBER 2026
              </p>
            </div>

            <div className="pt-2 border-t border-white/[0.06] text-slate-400 font-body text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                <address className="not-italic text-[11px] text-slate-400 leading-relaxed font-sans">
                  No. 67, BGS Health & Education City,<br />
                  Dr. Vishnuvardhan Road, Kengeri,<br />
                  Bengaluru, Karnataka – 560060, India.
                </address>
              </div>
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div className="flex flex-col space-y-3 text-left">
            <span className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span className="text-[#00f0ff]">//</span> QUICK LINKS
            </span>

            <nav className="grid grid-cols-2 gap-2 pt-1" aria-label="Footer Quick Links">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group flex items-center gap-2 text-xs font-sans text-slate-400 hover:text-white transition-all py-1 focus-visible:outline-none focus-visible:text-[#00f0ff]"
                >
                  <span className="text-[10px] font-mono text-slate-600 group-hover:text-[#00f0ff] transition-colors">
                    {item.number}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform group-hover:text-slate-100">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* COLUMN 3 — CONNECT */}
          <div className="flex flex-col space-y-3 text-left">
            <span className="font-mono text-xs text-slate-400 tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span className="text-[#00f0ff]">//</span> CONNECT
            </span>

            <div className="flex flex-col gap-2.5 pt-1">
              {/* Email Box */}
              <a
                href="mailto:contact@sjbit.edu.in"
                className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#00f0ff]/40 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff]"
                aria-label="Send email to event coordinators"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-[#00f0ff] group-hover:bg-[#00f0ff]/10 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                    OFFICIAL INQUIRIES
                  </span>
                  <span className="font-mono text-xs text-slate-300 group-hover:text-white transition-colors truncate">
                    contact@sjbit.edu.in
                  </span>
                </div>
              </a>

              {/* Instagram Box */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#00f0ff]/40 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff]"
                aria-label="Visit event Instagram page"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-[#00f0ff] group-hover:bg-[#00f0ff]/10 transition-colors shrink-0">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                    INSTAGRAM FEED
                  </span>
                  <span className="font-mono text-xs text-slate-300 group-hover:text-white transition-colors truncate">
                    @sjbit_official
                  </span>
                </div>
              </a>

              {/* Phone Quick Dispatch */}
              <a
                href="tel:8660276040"
                className="group flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[#00f0ff]/40 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff]"
                aria-label="Call event hotline"
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-slate-400 group-hover:text-[#00f0ff] group-hover:bg-[#00f0ff]/10 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">
                    HELPLINE DISPATCH
                  </span>
                  <span className="font-mono text-xs text-slate-300 group-hover:text-white transition-colors">
                    +91 8660276040
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER BAR */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* Left: Copyright & Institution */}
          <div className="flex flex-col space-y-0.5">
            <p className="font-mono text-xs text-slate-300">
              © 2026 VIGYANTRA · CODE RELAY. ALL RIGHTS RESERVED.
            </p>
            <p className="font-mono text-[10px] text-slate-500">
              SJB Institute of Technology, Bengaluru
            </p>
          </div>

          {/* Center: Tagline */}
          <div className="hidden md:block font-mono text-[10px] text-slate-500 tracking-[0.25em] uppercase">
            THINK. CODE. DEBUG. RELAY.
          </div>

          {/* Right: Back to Top Control */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 py-2 px-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00f0ff]/40 text-slate-400 hover:text-white font-mono text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#00f0ff] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
