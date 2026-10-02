import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import silverJubileeLogo from '../assets/images/silver-jubilee-logo.png';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 select-none"
    >
      {/* =========================================================================
          FOREGROUND ART-DIRECTED HERO COMPOSITION
          ========================================================================= */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 my-auto py-4">

        {/* Official 25 Years Silver Jubilee Logo */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center items-center mb-4 sm:mb-5"
        >
          <img
            src={silverJubileeLogo}
            alt="SJBIT 25 Years Silver Jubilee 2026"
            className="w-[85px] sm:w-[105px] md:w-[120px] h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] select-none pointer-events-none"
            width={120}
            height={126}
          />
        </motion.div>

        {/* Step 1: Event Identity Header (Refined Soft White, Tracked Space Grotesk) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-1 sm:mb-2"
        >
          <span className="w-5 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
          <h2 className="font-headline text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-slate-300 uppercase">
            VIGYANTRA 2026
          </h2>
          <span className="w-5 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
        </motion.div>

        {/* Step 2: DOMINANT HERO TITLE: CODE RELAY (Soft White + Restrained Cyan) */}
        <div className="relative my-1 sm:my-2 w-full flex justify-center items-center">
          {/* Subtle horizontal scanline behind title */}
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          <motion.h1
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight sm:tracking-[-0.03em] uppercase select-none relative z-10 text-white"
          >
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              CODE
            </span>{' '}
            <span className="text-[#00f0ff] text-glow-cyan">
              RELAY
            </span>
          </motion.h1>
        </div>

        {/* Step 3: Technical Tagline bounded by Hairline Brackets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3 sm:gap-4 my-4 sm:my-6 w-full max-w-md sm:max-w-xl px-2"
        >
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20" />
          <p className="font-mono text-[11px] sm:text-xs md:text-sm text-slate-400 tracking-[0.2em] sm:tracking-[0.28em] uppercase font-medium whitespace-nowrap">
            THINK. CODE. DEBUG. RELAY.
          </p>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/20" />
        </motion.div>

        {/* Step 4: High-Precision CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-md mt-2 mb-8 sm:mb-10"
        >
          {/* Primary Cyber Action: REGISTER */}
          <a
            href="https://forms.gle/4nJnwdTaFTGTXExS9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden sheen-active w-full py-3.5 px-7 rounded bg-[#00f0ff] text-[#04060c] font-headline text-sm sm:text-base font-bold tracking-wider text-center box-glow-cyan hover:shadow-[0_0_28px_rgba(0,240,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#04060c]"
          >
            <span>REGISTER</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary Action: THE BROCHURE (Translucent Graphite Glass) */}
          <a
            href="#about"
            className="group relative overflow-hidden w-full py-3.5 px-7 rounded border border-white/[0.12] hover:border-white/30 text-slate-200 hover:text-white font-headline text-sm sm:text-base font-medium tracking-wider text-center bg-[#0f131d]/60 hover:bg-[#161c2b]/80 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04060c]"
          >
            <FileText className="w-4 h-4 text-slate-400 group-hover:text-slate-200 transition-colors" />
            <span>THE BROCHURE</span>
          </a>
        </motion.div>

        {/* =========================================================================
            5. REFINED EVENT TELEMETRY HUD (TRANSLUCENT GRAPHITE GLASS)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-2xl px-2 sm:px-4"
        >
          <div className="grid grid-cols-3 divide-x divide-white/[0.08] py-3.5 sm:py-4 px-3 sm:px-6 bg-[#0f131d]/55 border border-white/[0.08] rounded-xl backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            
            {/* Metric 1: TEAMS */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4">
              <span className="font-mono text-[9px] sm:text-[11px] text-slate-400 tracking-widest uppercase flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-slate-400 hidden sm:inline-block" />
                TEAMS
              </span>
              <span className="font-headline text-xs sm:text-sm md:text-base text-slate-100 font-bold tracking-tight mt-0.5 sm:mt-1">
                03 CO-DEVS
              </span>
            </div>

            {/* Metric 2: FORMAT */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4">
              <span className="font-mono text-[9px] sm:text-[11px] text-slate-400 tracking-widest uppercase flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-slate-400 hidden sm:inline-block" />
                FORMAT
              </span>
              <span className="font-headline text-xs sm:text-sm md:text-base text-slate-100 font-bold tracking-tight mt-0.5 sm:mt-1">
                04 ROUNDS
              </span>
            </div>

            {/* Metric 3: PRIZE POOL */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4">
              <span className="font-mono text-[9px] sm:text-[11px] text-slate-400 tracking-widest uppercase flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#00f0ff] hidden sm:inline-block" />
                BOUNTY POOL
              </span>
              <span className="font-headline text-xs sm:text-sm md:text-base text-[#00f0ff] font-bold tracking-tight mt-0.5 sm:mt-1 text-glow-cyan-sm">
                ₹45,000
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
