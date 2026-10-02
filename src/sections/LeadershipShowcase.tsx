import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEADERS } from '../data/leadership';

export const LeadershipShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LEADERS.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const activeLeader = LEADERS[currentIndex];

  return (
    <section
      id="leadership"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 overflow-hidden select-none"
      aria-label="Institutional Leadership & Divine Blessings"
    >
      {/* Restrained Localized Photonic Bloom behind the stage */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[45rem] h-[30rem] sm:h-[45rem] bg-[#00f0ff]/[0.04] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Subtle Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left mb-10 sm:mb-14"
        >
          <span className="font-mono text-xs sm:text-sm text-slate-400 tracking-[0.25em] uppercase font-medium">
            INSTITUTIONAL LEADERSHIP
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mt-1">
            DIVINE BLESSINGS &amp; PATRONAGE
          </h2>
        </motion.div>

        {/* =========================================================================
            CINEMATIC SLIDESHOW STAGE: ONE SWAMIJI + CORRESPONDING EDITORIAL TEXT
            (Both occupy the exact same coordinate space with smooth cross-fade)
            ========================================================================= */}
        <div className="relative min-h-[480px] sm:min-h-[440px] md:min-h-[480px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLeader.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* LEFT: Frameless Large Swamiji Cutout Stage */}
              <div className="md:col-span-5 flex justify-center items-center relative">
                {/* Soft ambient aura directly behind the transparent cutout */}
                <div 
                  className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-[radial-gradient(circle,_rgba(0,240,255,0.08)_0%,_transparent_70%)] rounded-full blur-2xl pointer-events-none" 
                  aria-hidden="true" 
                />

                <div className="relative w-64 sm:w-72 md:w-80 h-72 sm:h-80 md:h-96 flex items-center justify-center">
                  <img
                    src={activeLeader.image}
                    alt={activeLeader.imageAlt}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_32px_rgba(0,0,0,0.85)]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* RIGHT: Editorial Institutional Typography */}
              <div className="md:col-span-7 flex flex-col text-center md:text-left justify-center space-y-3 sm:space-y-4">
                
                {/* Leadership Role */}
                <div className="inline-flex items-center self-center md:self-start">
                  <span className="font-mono text-xs sm:text-sm text-slate-300 tracking-[0.2em] uppercase font-semibold border-b border-[#00f0ff]/50 pb-0.5">
                    {activeLeader.role}
                  </span>
                </div>

                {/* Revered Full Name */}
                <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight tracking-tight text-glow-cyan-sm">
                  {activeLeader.name}
                </h3>

                {/* Organization / Trust */}
                <p className="font-body text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                  {activeLeader.institution}
                </p>

                {/* Subtle Breathing Horizon Hairline */}
                <div className="pt-4 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]/80 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Ambient Progress Beacon */}
        <div className="flex justify-center md:justify-start items-center gap-2 mt-8 sm:mt-12 opacity-60">
          {LEADERS.map((_, idx) => (
            <div
              key={idx}
              className={`h-0.5 rounded-full transition-all duration-700 ${
                idx === currentIndex
                  ? 'w-10 bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]'
                  : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
