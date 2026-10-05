import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PrizeTier {
  place: string;
  rank: string;
  amount: string;
  title: string;
  citation: string;
  isPrimary?: boolean;
}

const FIRST_PLACE: PrizeTier = {
  place: '01',
  rank: '1ST PLACE',
  amount: '₹20,000',
  title: 'CHAMPIONSHIP APEX',
  citation: 'GRAND TROPHY + CITATIONS',
  isPrimary: true,
};

const SECOND_PLACE: PrizeTier = {
  place: '02',
  rank: '2ND PLACE',
  amount: '₹15,000',
  title: 'RUNNER UP SPRINT',
  citation: 'SILVER SHIELD + CITATIONS',
};

const THIRD_PLACE: PrizeTier = {
  place: '03',
  rank: '3RD PLACE',
  amount: '₹10,000',
  title: 'BRONZE PODIUM',
  citation: 'HONOR MEDALS + CITATIONS',
};

export const Prizes: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);
  const [isCounterFinished, setIsCounterFinished] = useState(false);

  // High-performance accelerating/decelerating cash counter using requestAnimationFrame
  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1400; // ms
    const target = 45000;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentVal = Math.floor(easeOutQuart(progress) * target);

      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
        setIsCounterFinished(true);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, [isInView]);

  return (
    <section
      id="prizes"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="Competition Prize Pool and Rewards"
    >
      {/* =========================================================================
          SECTION-SPECIFIC ATMOSPHERE: ILLUMINATED BOUNTY STAGE
          Subtle vertical light beams and ambient podium glow
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_50%_at_50%_40%,rgba(0,240,255,0.04),transparent)] -z-10" />

      {/* Subtle Vertical Light Beams */}
      <div className="absolute inset-0 pointer-events-none flex justify-around opacity-[0.035] -z-10">
        <div className="w-[1px] h-full bg-gradient-to-b from-[#00f0ff] via-transparent to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-white via-transparent to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-[#00f0ff] via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mt-1">
            REWARDS &amp; HONORS
          </h2>
        </motion.div>

        {/* =========================================================================
            CINEMATIC CASH COUNTER DISPLAY (FUTURISTIC FINANCIAL TELEMETRY MODULE)
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl mx-auto p-5 sm:p-7 rounded-2xl bg-[#0a0e19]/60 border border-white/[0.08] backdrop-blur-md text-center mb-10 sm:mb-12 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Subtle Local Inner Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none bg-grid-cyber" 
            aria-hidden="true" 
          />

          {/* Technical Corner Brackets */}
          <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-[#00f0ff]/60" />
          <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-[#00f0ff]/60" />
          <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-[#00f0ff]/60" />
          <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-[#00f0ff]/60" />

          {/* Top Telemetry Header Line */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2.5 relative z-10">
            <span className="font-mono text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.2em] font-medium">
              AGGREGATE PRIZE POOL
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#00f0ff]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>GUARANTEED GRANT</span>
            </div>
          </div>

          {/* The Large Dominant Cash Counter */}
          <div className="relative z-10 my-1 sm:my-2">
            <span
              className={`font-headline text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white transition-all duration-500 block ${
                isCounterFinished ? 'text-[#00f0ff] text-glow-cyan' : 'text-slate-100'
              }`}
            >
              ₹{count.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Bottom Telemetry Verification Strip */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-center gap-2 text-slate-400 font-mono text-[10px] sm:text-[11px] tracking-wider uppercase relative z-10">
            <span>OFFICIALLY ALLOCATED</span>
            <span className="text-white/20">•</span>
            <span>SJBIT CSE TECHNICAL COUNCIL</span>
          </div>
        </motion.div>

        {/* =========================================================================
            DESKTOP COMPACT PODIUM COMPOSITION (BALANCED & SLIGHTLY ELEVATED CENTER)
            ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6 items-end relative pt-6 pb-2">
          
          {/* ---------------- 2ND PLACE (LEFT - LOWER POSITION) ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCounterFinished ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between p-5 lg:p-6 rounded-xl bg-[#0a0e19]/50 border border-white/[0.08] hover:border-white/20 backdrop-blur-md transition-all duration-300 overflow-hidden min-h-[200px]"
          >
            {/* Local subtle inner grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-cyber" aria-hidden="true" />
            <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/20" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/20" />

            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2 relative z-10">
              <span className="font-mono text-xs text-slate-500 font-bold">{SECOND_PLACE.place}</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">{SECOND_PLACE.rank}</span>
            </div>

            <div className="my-1.5 relative z-10">
              <span className="font-headline text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 block">
                {SECOND_PLACE.amount}
              </span>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-white/[0.06] relative z-10">
              <h3 className="font-headline text-xs lg:text-sm font-bold text-white tracking-wide uppercase">
                {SECOND_PLACE.title}
              </h3>
              <p className="font-mono text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">
                {SECOND_PLACE.citation}
              </p>
            </div>
          </motion.div>

          {/* ---------------- 1ST PLACE (CENTER - SLIGHTLY ELEVATED ~45px WITH ILLUMINATED BASE) ---------------- */}
          <div className="relative flex flex-col items-center -translate-y-8 lg:-translate-y-11 z-20">
            
            {/* Slightly Elevated 1st Place Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isCounterFinished ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative flex flex-col justify-between p-6 lg:p-7 rounded-2xl bg-[#0a0e19]/80 border-2 border-[#00f0ff]/50 shadow-[0_0_30px_rgba(0,240,255,0.2)] backdrop-blur-md transition-all duration-300 overflow-hidden min-h-[235px] group"
            >
              {/* Local subtle inner grid */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-cyber" aria-hidden="true" />
              
              {/* Cyan Engineering Corner Accents */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#00f0ff]" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff]" />

              <div className="flex items-center justify-between border-b border-[#00f0ff]/20 pb-2 mb-2 relative z-10">
                <span className="font-mono text-xs text-[#00f0ff] font-bold tracking-wider">{FIRST_PLACE.place}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                  <span className="font-mono text-xs font-bold tracking-widest text-[#00f0ff]">{FIRST_PLACE.rank}</span>
                </div>
              </div>

              <div className="my-2 relative z-10 text-center">
                <span className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-white text-glow-cyan block">
                  {FIRST_PLACE.amount}
                </span>
              </div>

              <div className="mt-2.5 pt-2.5 border-t border-[#00f0ff]/20 relative z-10 text-center">
                <h3 className="font-headline text-xs lg:text-sm font-bold text-white tracking-wide uppercase">
                  {FIRST_PLACE.title}
                </h3>
                <p className="font-mono text-[10px] lg:text-[11px] text-[#dbfcff] mt-0.5 uppercase tracking-wider">
                  {FIRST_PLACE.citation}
                </p>
              </div>
            </motion.div>

            {/* Futuristic Illuminated Podium Base Platform (Tightly under 1st card ~20px) */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.7 }}
              animate={isCounterFinished ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-[104%] relative flex flex-col items-center mt-2 pointer-events-none"
            >
              {/* Soft vertical light connector */}
              <div className="w-24 h-4 bg-gradient-to-b from-[#00f0ff]/25 to-transparent blur-[2px] -mt-1" />

              {/* Digital Base Platform Layer */}
              <div className="w-full h-2 rounded-full bg-[#0a0e19]/90 border border-[#00f0ff]/60 shadow-[0_0_20px_rgba(0,240,255,0.65)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/70 to-transparent animate-pulse" />
              </div>

              {/* Underlying Atmospheric Radial Cyan Bloom */}
              <div className="w-48 h-8 bg-[#00f0ff]/20 rounded-full blur-lg -mt-1" />
            </motion.div>

          </div>

          {/* ---------------- 3RD PLACE (RIGHT - LOWER POSITION) ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCounterFinished ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between p-5 lg:p-6 rounded-xl bg-[#0a0e19]/50 border border-white/[0.08] hover:border-white/20 backdrop-blur-md transition-all duration-300 overflow-hidden min-h-[200px]"
          >
            {/* Local subtle inner grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-cyber" aria-hidden="true" />
            <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/20" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/20" />

            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-2 relative z-10">
              <span className="font-mono text-xs text-slate-500 font-bold">{THIRD_PLACE.place}</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">{THIRD_PLACE.rank}</span>
            </div>

            <div className="my-1.5 relative z-10">
              <span className="font-headline text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 block">
                {THIRD_PLACE.amount}
              </span>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-white/[0.06] relative z-10">
              <h3 className="font-headline text-xs lg:text-sm font-bold text-white tracking-wide uppercase">
                {THIRD_PLACE.title}
              </h3>
              <p className="font-mono text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">
                {THIRD_PLACE.citation}
              </p>
            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            MOBILE COMPACT PODIUM STACK (TIGHTLY SPACED)
            ========================================================================= */}
        <div className="flex md:hidden flex-col gap-4">
          
          {/* Mobile 1st Place Card + Illuminated Platform */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isCounterFinished ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-full relative flex flex-col justify-between p-5 rounded-2xl bg-[#0a0e19]/80 border-2 border-[#00f0ff]/50 shadow-[0_0_24px_rgba(0,240,255,0.18)] backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-grid-cyber" aria-hidden="true" />
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]" />

              <div className="flex items-center justify-between border-b border-[#00f0ff]/20 pb-2 mb-2 relative z-10">
                <span className="font-mono text-xs text-[#00f0ff] font-bold">{FIRST_PLACE.place}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                  <span className="font-mono text-xs font-bold tracking-wider text-[#00f0ff]">{FIRST_PLACE.rank}</span>
                </div>
              </div>

              <div className="my-1.5 relative z-10 text-center">
                <span className="font-headline text-3xl font-bold tracking-tight text-white text-glow-cyan block">
                  {FIRST_PLACE.amount}
                </span>
              </div>

              <div className="mt-2 pt-2 border-t border-[#00f0ff]/20 relative z-10 text-center">
                <h3 className="font-headline text-xs font-bold text-white tracking-wide uppercase">
                  {FIRST_PLACE.title}
                </h3>
                <p className="font-mono text-[9px] text-[#dbfcff] mt-0.5 uppercase tracking-wider">
                  {FIRST_PLACE.citation}
                </p>
              </div>
            </div>

            {/* Mobile Illuminated Base */}
            <div className="w-[85%] flex flex-col items-center mt-1.5 pointer-events-none">
              <div className="w-full h-1.5 rounded-full bg-[#0a0e19] border border-[#00f0ff]/60 shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
              <div className="w-32 h-6 bg-[#00f0ff]/20 rounded-full blur-md -mt-1" />
            </div>
          </motion.div>

          {/* Mobile 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isCounterFinished ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full relative flex flex-col justify-between p-4 rounded-xl bg-[#0a0e19]/50 border border-white/[0.08] backdrop-blur-md overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 mb-1.5">
              <span className="font-mono text-xs text-slate-500 font-bold">{SECOND_PLACE.place}</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">{SECOND_PLACE.rank}</span>
            </div>
            <div className="my-1">
              <span className="font-headline text-2xl font-bold tracking-tight text-slate-100 block">
                {SECOND_PLACE.amount}
              </span>
            </div>
            <div className="mt-1.5 pt-1.5 border-t border-white/[0.06]">
              <h3 className="font-headline text-[11px] font-bold text-white tracking-wide uppercase">
                {SECOND_PLACE.title}
              </h3>
              <p className="font-mono text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">
                {SECOND_PLACE.citation}
              </p>
            </div>
          </motion.div>

          {/* Mobile 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isCounterFinished ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full relative flex flex-col justify-between p-4 rounded-xl bg-[#0a0e19]/50 border border-white/[0.08] backdrop-blur-md overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 mb-1.5">
              <span className="font-mono text-xs text-slate-500 font-bold">{THIRD_PLACE.place}</span>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-300">{THIRD_PLACE.rank}</span>
            </div>
            <div className="my-1">
              <span className="font-headline text-2xl font-bold tracking-tight text-slate-100 block">
                {THIRD_PLACE.amount}
              </span>
            </div>
            <div className="mt-1.5 pt-1.5 border-t border-white/[0.06]">
              <h3 className="font-headline text-[11px] font-bold text-white tracking-wide uppercase">
                {THIRD_PLACE.title}
              </h3>
              <p className="font-mono text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">
                {THIRD_PLACE.citation}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
