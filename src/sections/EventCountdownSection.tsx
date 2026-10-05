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

interface FlipDigitProps {
  digit: string;
  accent?: boolean;
}

const FlipDigit: React.FC<FlipDigitProps> = ({ digit, accent = false }) => {
  const [current, setCurrent] = useState(digit);
  const [previous, setPrevious] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== current) {
      setPrevious(current);
      setCurrent(digit);
      setIsFlipping(true);

      const timer = setTimeout(() => {
        setIsFlipping(false);
      }, 580);

      return () => clearTimeout(timer);
    }
  }, [digit, current]);

  return (
    <div className={`flip-digit-card ${accent ? 'flip-digit-accent' : ''}`}>
      {/* Upper Static Half (New Digit) */}
      <div className="flip-card-half flip-card-top">
        <span className="flip-digit-glyph">{current}</span>
      </div>

      {/* Lower Static Half (Old Digit while flipping, New Digit after) */}
      <div className="flip-card-half flip-card-bottom">
        <span className="flip-digit-glyph">{isFlipping ? previous : current}</span>
      </div>

      {/* Flipping Top Leaf (Old Digit flipping down) */}
      {isFlipping && (
        <div className="flip-card-half flip-card-top flip-leaf-front" key={`top-${previous}-${current}`}>
          <span className="flip-digit-glyph">{previous}</span>
          <div className="flip-leaf-shadow flip-shadow-top" />
        </div>
      )}

      {/* Flipping Bottom Leaf (New Digit landing down) */}
      {isFlipping && (
        <div className="flip-card-half flip-card-bottom flip-leaf-back" key={`bottom-${previous}-${current}`}>
          <span className="flip-digit-glyph">{current}</span>
          <div className="flip-leaf-shadow flip-shadow-bottom" />
        </div>
      )}

      {/* Center Split Seam */}
      <div className="flip-card-seam" />

      {/* Mechanical Side Axle Hinge Notches */}
      <div className="flip-card-hinge flip-hinge-left" />
      <div className="flip-card-hinge flip-hinge-right" />
    </div>
  );
};

interface FlipUnitProps {
  label: string;
  value: string;
  accent?: boolean;
}

const FlipUnit: React.FC<FlipUnitProps> = ({ label, value, accent = false }) => {
  const digits = value.padStart(2, '0').split('');

  return (
    <div className={`flip-unit-group ${accent ? 'flip-unit-accent' : ''}`}>
      <div className="flip-unit-digits">
        {digits.map((d, i) => (
          <FlipDigit key={`${label}-${i}`} digit={d} accent={accent} />
        ))}
      </div>
      <span className="flip-unit-label">{label}</span>
    </div>
  );
};

const FlipColon: React.FC = () => (
  <div className="flip-colon-separator" aria-hidden="true">
    <div className="flip-colon-dot" />
    <div className="flip-colon-dot" />
  </div>
);

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
    { label: 'HOURS', value: pad(time.hours), isAccent: false },
    { label: 'MINUTES', value: pad(time.minutes), isAccent: false },
    { label: 'SECONDS', value: pad(time.seconds), isAccent: true },
  ];

  return (
    <section
      id="event-countdown"
      className="relative w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="Event Countdown Timer"
    >
      {/* =========================================================================
          SECTION-SPECIFIC ATMOSPHERE: MINIMAL DARK CHAMBER TRANSITION
          Transitioning from About: almost pure black with downward signal lead-in
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,#04060c_60%,transparent)] -z-10" />

      {/* Downward Traveling Signal Transition Line from About */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-[#00f0ff]/40 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
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
              3D MECHANICAL SPLIT-FLAP FLIP CLOCK
              Inspired by digitalclock.live/flip-clock with split-flap leaves & axle hinges
              ========================================================================= */
          <motion.div
            className="flip-clock-wrapper"
            role="timer"
            aria-label={`${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds until Code Relay`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {countdownUnits.map((unit, index) => (
              <React.Fragment key={unit.label}>
                <FlipUnit label={unit.label} value={unit.value} accent={unit.isAccent} />
                {index < countdownUnits.length - 1 && <FlipColon />}
              </React.Fragment>
            ))}
          </motion.div>
        )}

        {/* Location & Date Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-12 flex items-center justify-center gap-2"
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

