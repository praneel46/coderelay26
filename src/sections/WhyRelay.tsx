import React from 'react';
import { motion } from 'framer-motion';

interface Concept {
  number: string;
  tag: string;
  title: string;
  description: string;
}

const CONCEPTS: Concept[] = [
  {
    number: '01',
    tag: 'LOG',
    title: 'LOGIC',
    description:
      'Strengthen analytical thinking and problem-solving skills under real-time telemetry constraints.',
  },
  {
    number: '02',
    tag: 'SRC',
    title: 'CODING',
    description:
      'Put programming knowledge into practical competitive challenges demanding optimal algorithmic runtime.',
  },
  {
    number: '03',
    tag: 'SYN',
    title: 'TEAMWORK',
    description:
      'Combine individual strengths and make decisions together during rapid handoffs.',
  },
  {
    number: '04',
    tag: 'ADP',
    title: 'ADAPTABILITY',
    description:
      'Respond quickly, understand new problems instantly and continue the solution uninterrupted.',
  },
];

export const WhyRelay: React.FC = () => {
  return (
    <section
      id="why-relay"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="Why Code Relay - Architectural Value"
    >
      {/* =========================================================================
          SECTION-SPECIFIC ATMOSPHERE: ARCHITECTURAL NODE NETWORK
          Subtle floating nodes and connecting crosshairs
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(0,240,255,0.04),transparent)] -z-10" />

      {/* Floating Network Solder Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 -z-10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15%" cy="25%" r="2" fill="#00f0ff" />
        <circle cx="85%" cy="30%" r="2" fill="#00f0ff" />
        <circle cx="20%" cy="80%" r="2" fill="#00f0ff" />
        <circle cx="80%" cy="75%" r="2" fill="#00f0ff" />
        <line x1="15%" y1="25%" x2="20%" y2="80%" stroke="#00f0ff" strokeOpacity="0.08" strokeDasharray="3 6" />
        <line x1="85%" y1="30%" x2="80%" y2="75%" stroke="#00f0ff" strokeOpacity="0.08" strokeDasharray="3 6" />
      </svg>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left mb-12 sm:mb-16"
        >
          <span className="font-mono text-xs sm:text-sm text-slate-400 tracking-[0.25em] uppercase font-medium">
            05 // ARCHITECTURAL VALUE
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mt-1">
            WHY CODE RELAY?
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-400 mt-2 font-light max-w-2xl">
            Beyond individual coding speed — engineered to test real engineering dynamics.
          </p>
        </motion.div>

        {/* =========================================================================
            TECHNICAL 2x2 EDITORIAL COMPOSITION (CONNECTED ENGINEERING NETWORK)
            ========================================================================= */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Subtle Cross-Axis Connecting Hairlines (Desktop Only) */}
          <div 
            className="hidden md:block absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none -translate-y-1/2" 
            aria-hidden="true" 
          />
          <div 
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent pointer-events-none -translate-x-1/2" 
            aria-hidden="true" 
          />

          {CONCEPTS.map((concept, index) => (
            <motion.div
              key={concept.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#0f131d]/40 border border-white/[0.07] hover:border-[#00f0ff]/30 hover:bg-[#0f131d]/60 backdrop-blur-sm transition-all duration-300"
            >
              {/* Corner Marker */}
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-[#00f0ff]/50 transition-colors" />

              <div>
                {/* Header with Number & Tag */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                  <span className="font-mono text-xs font-bold text-[#00f0ff]">
                    {concept.number}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                    SYS.{concept.tag}
                  </span>
                </div>

                {/* Concept Title */}
                <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors">
                  {concept.title}
                </h3>

                {/* Concept Narrative */}
                <p className="font-body text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
                  {concept.description}
                </p>
              </div>

              {/* Bottom Subtle Status Beacon */}
              <div className="pt-4 mt-6 border-t border-white/[0.04] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]/60 group-hover:bg-[#00f0ff] group-hover:shadow-[0_0_8px_#00f0ff] transition-all" />
                <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">
                  OPERATIONAL FACTOR
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
