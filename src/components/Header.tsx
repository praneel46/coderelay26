import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../data/navigation';
import sjbitLogo from '../assets/images/sjbit-logo.png';
import { Terminal, ArrowRight, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-white/[0.08] ${
          isScrolled
            ? 'bg-[#0a0e1a]/92 backdrop-blur-md py-3 sm:py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
            : 'bg-[#080d19]/80 backdrop-blur-md py-3.5 sm:py-4 lg:py-4.5'
        }`}
      >
        <div className="relative flex items-center justify-center w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto min-h-[56px] sm:min-h-[64px] md:min-h-[72px]">
          
          {/* CENTER: True-Centered Institutional Composition (Emblem + Centered Text Stack) */}
          <a
            href="#home"
            className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded-lg p-1 max-w-[calc(100%-70px)] sm:max-w-[calc(100%-90px)]"
            aria-label="SJB Institute of Technology"
          >
            {/* Official SJBIT Circular Emblem */}
            <img
              src={sjbitLogo}
              alt="SJBIT Official Emblem"
              className="w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-[56px] lg:h-[56px] object-contain drop-shadow-[0_0_8px_rgba(0,240,255,0.2)] shrink-0 transition-transform group-hover:scale-105"
              width={56}
              height={56}
            />

            {/* Desktop & Tablet Centered Institutional Text Stack */}
            <div className="hidden md:flex flex-col text-center items-center justify-center leading-tight">
              {/* Line 1: Centered Invocation */}
              <span className="font-mono text-[8.5px] sm:text-[9.5px] lg:text-[10px] text-slate-400 tracking-[0.28em] uppercase font-semibold leading-none mb-1.5 sm:mb-2">
                || JAI SRI GURUDEV ||
              </span>

              {/* Line 2: Centered Trust Name */}
              <span className="font-sans text-[10.5px] sm:text-[11.5px] lg:text-[12.5px] text-slate-300 font-medium tracking-wide leading-none mb-1 sm:mb-1.5">
                Sri Adichunchanagiri Shikshana Trust ®
              </span>

              {/* Line 3: Centered Strongest Institution Title */}
              <h1 className="font-headline text-sm sm:text-base lg:text-[18px] xl:text-[19px] font-bold text-white tracking-[0.06em] uppercase leading-tight mb-1">
                SJB INSTITUTE OF TECHNOLOGY
              </h1>

              {/* Line 4: Centered University Accreditation */}
              <span className="font-mono text-[7.5px] sm:text-[8.5px] lg:text-[9px] text-slate-400 tracking-[0.12em] uppercase leading-tight">
                AN AUTONOMOUS INSTITUTE UNDER VISVESVARAYA TECHNOLOGICAL UNIVERSITY
              </span>
            </div>

            {/* Mobile Compact Centered Institutional Name */}
            <div className="flex md:hidden flex-col text-left justify-center leading-tight">
              <span className="font-headline text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                SJB INSTITUTE OF TECHNOLOGY
              </span>
              <span className="font-mono text-[8px] sm:text-[8.5px] text-slate-400 tracking-wider uppercase mt-0.5">
                AUTONOMOUS INSTITUTE • VTU
              </span>
            </div>
          </a>

          {/* RIGHT: Independent Animated Morphing Hamburger Menu Button */}
          <div className="absolute right-4 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 shrink-0 flex items-center z-50">
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Terminal'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-white hover:text-[#00f0ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] transition-all duration-300 active:scale-95 flex flex-col justify-center items-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00f0ff]/40 cursor-pointer"
            >
              <span
                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? 'translate-y-[6px] rotate-45 !bg-[#00f0ff]' : ''
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 my-1 self-center ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  isMenuOpen ? '-translate-y-[6px] -rotate-45 !bg-[#00f0ff]' : ''
                }`}
              />
            </button>
          </div>

        </div>
      </header>

      {/* DRAWER & BACKDROP ANIMATION (STRICTLY FROM RIGHT SIDE) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-50 bg-[#04060c]/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* RIGHT-SIDE SLIDE-OUT DRAWER */}
            <motion.aside
              aria-label="Site Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 bg-[#080d19]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 max-w-sm w-[85vw] border-l border-white/[0.08] shadow-[-12px_0_32px_rgba(0,0,0,0.85)] origin-right"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00f0ff]" />
                    <span className="font-mono text-xs text-white tracking-widest uppercase font-semibold">
                      MENU
                    </span>
                  </div>
                  <button
                    type="button"
                    aria-label="Close Navigation"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] transition-all hover:rotate-90 active:scale-90 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation Links (Numbered strictly inside opened drawer) */}
                <nav className="flex flex-col gap-1.5 mt-2">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className="group flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border-l-2 border-transparent hover:border-[#00f0ff] transition-all hover:translate-x-1 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
                    >
                      <span className="font-headline text-sm sm:text-base tracking-tight font-medium">
                        <span className="text-slate-500 mr-2 font-mono text-xs">{item.number}</span>
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00f0ff] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Telemetry */}
              <div className="border-t border-white/[0.08] pt-3">
                <div className="flex items-center justify-between text-slate-500 font-mono text-[10px]">
                  <span>STATUS: ONLINE</span>
                  <span className="text-slate-400">LAT: 12.8984° N</span>
                </div>
                <p className="font-mono text-[10px] text-slate-600 mt-0.5">
                  SJBIT CSE TECHNICAL COUNCIL // 2026
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
