import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// =========================================================================
// CONFIGURABLE EVENT TARGET DATE & TIME (Asia/Kolkata IST)
// 30 OCTOBER 2026, 09:00:00 IST (UTC+05:30)
// =========================================================================
export const EVENT_TARGET_ISO = '2026-10-30T09:00:00+05:30';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

const calculateTimeRemaining = (targetTimeMs: number): TimeRemaining => {
  const now = Date.now();
  const diff = targetTimeMs - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, isLive: false };
};

export const EventCountdownSection: React.FC = () => {
  const targetTimeMs = new Date(EVENT_TARGET_ISO).getTime();
  const [time, setTime] = useState<TimeRemaining>(() => calculateTimeRemaining(targetTimeMs));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining(targetTimeMs));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimeMs]);

  const pad = (num: number): string => String(num).padStart(2, '0');

  const countdownUnits = [
    { label: 'DAYS', value: pad(time.days), isAccent: false },
    { label: 'HRS', value: pad(time.hours), isAccent: false },
    { label: 'MIN', value: pad(time.minutes), isAccent: false },
    { label: 'SEC', value: pad(time.seconds), isAccent: true },
  ];

  return (
    <section
      id="event-countdown"
      className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="Event Countdown Timer"
    >
      {/* =========================================================================
          SECTION-SPECIFIC ATMOSPHERE: MINIMAL DARK CHAMBER TRANSITION
          Transitioning from About: almost pure black with downward signal lead-in
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,#04060c_60%,transparent)] -z-10" />

      {/* Downward Traveling Signal Transition Line from About */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-[#00f0ff]/40 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase font-semibold">
              EVENT HORIZON
            </span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight">
            EVENT STARTS IN
          </h2>
        </motion.div>

        {time.isLive ? (
          /* Live State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#080d19]/80 border border-[#00f0ff]/40 shadow-[0_0_32px_rgba(0,240,255,0.2)] backdrop-blur-md"
          >
            <span className="font-headline text-2xl sm:text-4xl font-bold text-[#00f0ff] tracking-wider block animate-pulse">
              EVENT IS NOW LIVE
            </span>
            <p className="font-mono text-xs sm:text-sm text-slate-300 mt-2">
              CODE RELAY ARENA HAS COMMENCED · SJBIT BENGALURU
            </p>
          </motion.div>
        ) : (
          /* =========================================================================
              COUNTDOWN BOXES
              Desktop: 4 compact boxes in 1 horizontal row
              Mobile: Compact 2x2 grid
              ========================================================================= */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full max-w-xs md:max-w-2xl mx-auto">
            {countdownUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.95, y: 14 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6 rounded-xl bg-[#080d19]/85 hover:bg-[#0b1222]/95 border transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.7)] backdrop-blur-md ${
                  unit.isAccent
                    ? 'border-[#00f0ff]/30 hover:border-[#00f0ff]/60 shadow-[0_4px_24px_rgba(0,240,255,0.1)]'
                    : 'border-white/[0.08] hover:border-[#00f0ff]/30'
                }`}
              >
                {/* Subtle Technical Corner Brackets */}
                <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-[#00f0ff]/50 transition-colors pointer-events-none" />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-[#00f0ff]/50 transition-colors pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-[#00f0ff]/50 transition-colors pointer-events-none" />
                <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-[#00f0ff]/50 transition-colors pointer-events-none" />

                {/* Number Display */}
                <span
                  className={`font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-none ${
                    unit.isAccent ? 'text-[#00f0ff] text-glow-cyan-sm' : 'text-white'
                  }`}
                >
                  {unit.value}
                </span>

                {/* Monospace Label */}
                <span
                  className={`font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-1.5 sm:mt-2 font-medium ${
                    unit.isAccent
                      ? 'text-[#00f0ff] font-semibold'
                      : 'text-slate-400 group-hover:text-slate-300'
                  }`}
                >
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Location & Date Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-10 flex items-center justify-center gap-2"
        >
          <span className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider uppercase font-medium">
            30 OCTOBER 2026 <span className="text-white/20 mx-1.5">•</span> SJBIT, BENGALURU
          </span>
        </motion.div>

        {/* Downward Lead-Out Signal Line to Prizes */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gradient-to-b from-[#00f0ff]/30 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
