import React from 'react';
import { motion } from 'framer-motion';

interface Pillar {
  number: string;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'TEAMWORK',
    description: 'Work together, combine individual strengths and keep the team moving forward.',
  },
  {
    number: '02',
    title: 'SPEED & PRECISION',
    description: 'Think quickly, make accurate decisions and perform under time pressure.',
  },
  {
    number: '03',
    title: 'PROBLEM SOLVING',
    description: 'Analyse challenges, identify problems and develop effective solutions.',
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="About Code Relay Competition Overview"
    >
      {/* =========================================================================
          SECTION-SPECIFIC ATMOSPHERE: QUIETER TECHNICAL CHAMBER
          Subtle deep indigo/cyan ambient gradient and fine diagonal trace
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_20%_40%,rgba(0,85,255,0.04),transparent)] -z-10" />

      {/* Diagonal Circuit Line Accent across section */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 -z-10" xmlns="http://www.w3.org/2000/svg">
        <path d="M -50 120 L 380 120 L 520 260 L 1600 260" fill="none" stroke="#00f0ff" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="380" cy="120" r="2" fill="#00f0ff" fillOpacity="0.4" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Technical Label */}
        {/* Two-Column Editorial Grid (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Dominant Headline & Main Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.08]">
              WHAT IS <br />
              <span className="text-[#00f0ff] text-glow-cyan">CODE RELAY?</span>
            </h2>

            <div className="relative pt-4 sm:pt-6 border-t border-white/[0.08]">
              <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Code Relay is a team-based programming challenge where four members combine technical knowledge, logical thinking, debugging ability and problem-solving skills to progress through multiple challenges.
              </p>
            </div>

            {/* Subtle technical telemetry datum */}
            <div className="pt-2 flex items-center gap-3 text-slate-500 font-mono text-[11px] tracking-wider uppercase">
              <span>COLLABORATIVE PROTOCOL</span>
              <span className="text-white/20">•</span>
              <span>SYNCHRONIZED EXECUTION</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Three Vertically Arranged Content Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8"
          >
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-[#0f131d]/40 border border-white/[0.06] hover:border-[#00f0ff]/30 hover:bg-[#0f131d]/60 backdrop-blur-sm transition-all duration-300"
              >
                {/* Number & Cyan Indicator */}
                <div className="shrink-0 flex flex-col items-center pt-0.5">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#00f0ff]">
                    {pillar.number}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#00f0ff]/60 mt-2 group-hover:scale-125 transition-transform" />
                </div>

                {/* Pillar Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline text-lg sm:text-xl text-white font-bold tracking-tight group-hover:text-slate-100 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-slate-400 mt-1.5 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
