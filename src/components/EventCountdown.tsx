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

export const EventCountdown: React.FC = () => {
  const targetTimeMs = new Date(EVENT_TARGET_ISO).getTime();
  const [time, setTime] = useState<TimeRemaining>(() => calculateTimeRemaining(targetTimeMs));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeRemaining(targetTimeMs));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimeMs]);

  const pad = (num: number): string => String(num).padStart(2, '0');

  return (
    <aside
      aria-label="Countdown to VIGYANTRA 2026 Code Relay"
      className="fixed right-1.5 sm:right-2.5 md:right-3.5 lg:right-4 top-1/2 -translate-y-1/2 z-30 select-none pointer-events-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35 }}
        className="relative flex flex-col items-center w-[46px] sm:w-[50px] md:w-[54px] lg:w-[58px] py-1.5 sm:py-2 md:py-2.5 px-0.5 sm:px-1 rounded-md sm:rounded-lg bg-[#0a0e19]/88 hover:bg-[#0c1220]/95 border border-white/[0.1] hover:border-[#00f0ff]/35 shadow-[0_6px_24px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 group"
      >
        {/* Subtle Technical Corner Accents */}
        <div className="absolute top-0.5 left-0.5 w-1 h-1 border-t border-l border-[#00f0ff]/40 pointer-events-none" />
        <div className="absolute top-0.5 right-0.5 w-1 h-1 border-t border-r border-[#00f0ff]/40 pointer-events-none" />
        <div className="absolute bottom-0.5 left-0.5 w-1 h-1 border-b border-l border-[#00f0ff]/40 pointer-events-none" />
        <div className="absolute bottom-0.5 right-0.5 w-1 h-1 border-b border-r border-[#00f0ff]/40 pointer-events-none" />

        {/* Top Beacon & Event Date (No T-MINUS wording) */}
        <div className="flex flex-col items-center pb-1 mb-0.5 border-b border-white/[0.08] w-full text-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_6px_#00f0ff] mb-0.5" />
          <span className="font-mono text-[5.5px] sm:text-[6px] md:text-[6.5px] text-slate-300 tracking-wider uppercase font-medium">
            30 OCT
          </span>
        </div>

        {time.isLive ? (
          /* Live State */
          <div className="py-2 sm:py-3 text-center">
            <span className="font-headline text-[9px] sm:text-[10px] font-bold text-[#00f0ff] tracking-wider block animate-pulse">
              LIVE
            </span>
          </div>
        ) : (
          /* 4-Tier Compact Telemetry Units */
          <div className="flex flex-col w-full divide-y divide-white/[0.06]">
            {/* DAYS */}
            <div className="flex flex-col items-center py-1 sm:py-1.5">
              <span className="font-headline text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-none">
                {pad(time.days)}
              </span>
              <span className="font-mono text-[5.5px] sm:text-[6px] md:text-[6.5px] text-slate-400 tracking-widest uppercase mt-0.5">
                DAYS
              </span>
            </div>

            {/* HOURS */}
            <div className="flex flex-col items-center py-1 sm:py-1.5">
              <span className="font-headline text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-none">
                {pad(time.hours)}
              </span>
              <span className="font-mono text-[5.5px] sm:text-[6px] md:text-[6.5px] text-slate-400 tracking-widest uppercase mt-0.5">
                HRS
              </span>
            </div>

            {/* MINUTES */}
            <div className="flex flex-col items-center py-1 sm:py-1.5">
              <span className="font-headline text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-none">
                {pad(time.minutes)}
              </span>
              <span className="font-mono text-[5.5px] sm:text-[6px] md:text-[6.5px] text-slate-400 tracking-widest uppercase mt-0.5">
                MIN
              </span>
            </div>

            {/* SECONDS — Electric Cyan Accent */}
            <div className="flex flex-col items-center pt-1 sm:pt-1.5 pb-0.5">
              <span className="font-headline text-sm sm:text-base md:text-lg font-bold text-[#00f0ff] tracking-tight leading-none text-glow-cyan-sm">
                {pad(time.seconds)}
              </span>
              <span className="font-mono text-[5.5px] sm:text-[6px] md:text-[6.5px] text-[#00f0ff] tracking-widest uppercase mt-0.5 font-semibold">
                SEC
              </span>
            </div>
          </div>
        )}
      </motion.div>
    </aside>
  );
};
