import React from 'react';
import { motion } from 'framer-motion';

interface RoundItem {
  number: string;
  title: string;
  stage: string;
  description: string;
}

const ROUNDS: RoundItem[] = [
  {
    number: '01',
    title: 'CODE IQ',
    stage: 'QUALIFIER',
    description:
      'Core algorithmic analysis and foundational speed test evaluating mathematical intuition and speed.',
  },
  {
    number: '02',
    title: 'TRIPLE STRIKE',
    stage: 'KNOCKOUT',
    description:
      'Rapid debugging and parallel triage challenges under synchronized time constraints.',
  },
  {
    number: '03',
    title: 'CODE AUCTION',
    stage: 'STRATEGIC',
    description:
      'Resource bidding and algorithmic optimization tactics where architectural strategy defines victory.',
  },
  {
    number: '04',
    title: 'RELAY FINALE',
    stage: 'CHAMPIONSHIP',
    description:
      'Live continuous digital handover battle where 3 coders pass dynamic active sessions in rapid baton relays.',
  },
];

export const Rounds: React.FC = () => {
  return (
    <section
      id="rounds"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="The Four Relay Rounds"
    >
      {/* =========================================================================
          SECTION-SPECIFIC ATMOSPHERE: THE RELAY TRACK CHAMBER
          Dynamic linear cyan track glow and high-speed telemetry atmosphere
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_30%_50%,rgba(0,240,255,0.05),transparent)] -z-10" />

      {/* Track Highway Grid Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025] -z-10"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 240, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center sm:text-left mb-14 sm:mb-20"
        >
          <span className="font-mono text-xs sm:text-sm text-slate-400 tracking-[0.25em] uppercase font-medium">
            03 // EXECUTION PIPELINE
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mt-1">
            THE FOUR ROUNDS
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-400 mt-2 font-light">
            Four stages. One team. Every decision matters.
          </p>
        </motion.div>

        {/* =========================================================================
            VERTICAL DIGITAL RELAY RAIL & ALIGNED ROUND NODES
            ========================================================================= */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          
          {/* Straight Vertical Cyan Rail Line with Progressive Drawing */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="origin-top absolute left-[11px] sm-[19px] md:left-[23px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#00f0ff]/80 via-[#00f0ff]/30 to-white/10"
          >
            {/* Animated Traveling Baton Pulse Beam */}
            <motion.div
              animate={{
                top: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-[-1px] w-[4px] h-24 bg-gradient-to-b from-transparent via-[#00f0ff] to-transparent shadow-[0_0_16px_#00f0ff]"
            />
          </motion.div>

          {/* Sequential Round Nodes & Content Cards */}
          <div className="space-y-8 sm:space-y-12">
            {ROUNDS.map((round, index) => (
              <motion.div
                key={round.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex items-start"
              >
                {/* Aligned Node on the Rail */}
                <div className="absolute -left-[24px] sm:-left-[32px] md:-left-[36px] top-1.5 flex items-center justify-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#04060c] border-2 border-[#00f0ff]/60 group-hover:border-[#00f0ff] group-hover:shadow-[0_0_12px_rgba(0,240,255,0.7)] transition-all duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00f0ff]" />
                  </div>
                </div>

                {/* Round Content Container (Translucent Graphite) */}
                <div className="w-full p-5 sm:p-7 rounded-xl bg-[#0f131d]/45 border border-white/[0.08] group-hover:border-[#00f0ff]/30 group-hover:bg-[#0f131d]/65 backdrop-blur-sm transition-all duration-300 ml-2 sm:ml-4">
                  
                  {/* Top Metadata: Stage & Number */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-3">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#00f0ff] tracking-wider">
                      STAGE {round.number}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-slate-400 tracking-widest uppercase">
                      {round.stage}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-xl sm:text-2xl text-white font-bold tracking-tight group-hover:text-slate-100 transition-colors">
                    {round.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
                    {round.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
