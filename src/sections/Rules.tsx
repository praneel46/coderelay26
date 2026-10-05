import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface RuleItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

const RULES: RuleItem[] = [
  {
    id: 'rule-01',
    number: '01',
    title: 'ELIGIBILITY & TEAM FORMATION',
    content:
      'Each team must strictly comprise exactly three (3) bonafide undergraduate or postgraduate students. Cross-college combinations are fully recognized and permitted.',
  },
  {
    id: 'rule-02',
    number: '02',
    title: 'REGISTRATION & IDENTIFICATION',
    content:
      'Every participant must hold valid institutional photo identification cards along with their registration pass throughout the relay duration.',
  },
  {
    id: 'rule-03',
    number: '03',
    title: 'REPORTING & CONDUCT',
    content:
      'Teams must report to the SJBIT CSE Apex Lab by 08:30 AM IST. Professional decorum and strict compliance with proctors are mandatory at all times.',
  },
  {
    id: 'rule-04',
    number: '04',
    title: 'SUBMISSION & ISSUES',
    content:
      'All code submissions are compiled and verified on standard Linux relay test nodes. Late submissions past countdown freeze are rejected without exception.',
  },
  {
    id: 'rule-05',
    number: '05',
    title: 'FAIR PLAY',
    content:
      'Any unauthorized external AI tooling, unapproved smart hardware, unauthorized browsing, or inter-team communication triggers immediate terminal disqualification.',
  },
  {
    id: 'rule-06',
    number: '06',
    title: 'SUBMISSIONS & TECHNICAL ISSUES',
    content:
      'In case of hardware failure or power disruption, notify the lab steward within 30 seconds for clock freeze and node reassignment protocols.',
  },
  {
    id: 'rule-07',
    number: '07',
    title: 'SCORING & DECISIONS',
    content:
      'Evaluations rely on automated test suites assessing time complexity, memory allocation, and correctness. The Jury’s ruling remains absolute and irrevocable.',
  },
  {
    id: 'rule-08',
    number: '08',
    title: 'OTHER GUIDELINES',
    content:
      'Physical baton handoffs require seamless seating rotations. Organizers reserve rights to recalibrate test vectors based on environmental contingencies.',
  },
];

export const Rules: React.FC = () => {
  // Single-open pattern: only one accordion open at a time, all closed by default
  const [openRuleId, setOpenRuleId] = useState<string | null>(null);

  const toggleRule = (id: string) => {
    setOpenRuleId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="rules"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 select-none overflow-hidden"
      aria-label="Rules & Regulations"
    >
      {/* =========================================================================
          SECTION-SPECIFIC ATMOSPHERE: STRUCTURED GOVERNANCE CHAMBER
          Organized grid, subtle horizontal scanning line, and restrained accents
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(0,85,255,0.035),transparent)] -z-10" />

      {/* Subtle Horizontal Scanning Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left mb-12 sm:mb-16"
        >
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mt-1">
            RULES &amp; REGULATIONS
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-400 mt-2 font-light">
            Strict governance for competitive integrity across all relay terminals.
          </p>
        </motion.div>

        {/* Technical Accordion System */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {RULES.map((rule) => {
            const isOpen = openRuleId === rule.id;
            const headerId = `rule-header-${rule.id}`;
            const contentId = `rule-content-${rule.id}`;

            return (
              <div
                key={rule.id}
                className="group transition-colors duration-200"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleRule(rule.id)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#04060c] rounded-sm transition-all"
                >
                  <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#00f0ff] shrink-0">
                      {rule.number}
                    </span>
                    <span className="font-headline text-sm sm:text-base md:text-lg text-slate-100 font-medium group-hover:text-white transition-colors truncate sm:whitespace-normal">
                      {rule.title}
                    </span>
                  </div>

                  {/* Morphing down arrow indicator */}
                  <div className="shrink-0 p-1 rounded-full bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/[0.06] transition-colors">
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 group-hover:text-[#00f0ff] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 !text-[#00f0ff]' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Animated Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pt-1 pl-7 sm:pl-12 pr-4 font-body text-sm sm:text-base text-slate-300 leading-relaxed">
                        {rule.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
