import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    number: '01',
    question: 'How many members can be in a team?',
    answer: 'Each team must strictly comprise exactly 4 members.',
  },
  {
    id: 'faq-02',
    number: '02',
    question: 'Can students from different colleges form a team?',
    answer: 'Yes, members from different colleges may form a team.',
  },
  {
    id: 'faq-03',
    number: '03',
    question: 'Can team members be changed after registration?',
    answer: 'No, the registered team members must remain fixed throughout the event.',
  },
  {
    id: 'faq-04',
    number: '04',
    question: 'When is Code Relay?',
    answer: '30 October 2026 at SJB Institute of Technology, Bengaluru.',
  },
  {
    id: 'faq-05',
    number: '05',
    question: 'How many rounds are there?',
    answer: 'There are 4 sequential rounds: Code IQ (Qualifier), Triple Strike (Knockout), Code Auction (Strategic), and Relay Finale (Championship).',
  },
  {
    id: 'faq-06',
    number: '06',
    question: 'Will round procedures be explained beforehand?',
    answer: 'Detailed procedures and round-specific instructions will be announced by the organizers at the appropriate stage.',
  },
  {
    id: 'faq-07',
    number: '07',
    question: 'What should participants prepare?',
    answer: 'Programming fundamentals, logical reasoning, code comprehension, debugging, problem-solving, and teamwork.',
  },
  {
    id: 'faq-08',
    number: '08',
    question: 'What is the prize pool?',
    answer: '₹45,000 aggregate grant: ₹20,000 for 1st Place, ₹15,000 for 2nd Place, and ₹10,000 for 3rd Place.',
  },
  {
    id: 'faq-09',
    number: '09',
    question: 'Can external resources be used?',
    answer: 'Only resources, devices, software, and environments explicitly approved and permitted by the organizers.',
  },
  {
    id: 'faq-10',
    number: '10',
    question: 'What happens if there is a technical issue?',
    answer: 'Report genuine technical issues immediately to the technical proctors for clock freeze and node reassignment protocols.',
  },
];

export const FAQ: React.FC = () => {
  // Independent open/close state for smooth FAQ reading
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      id="faq"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 select-none"
      aria-label="Frequently Asked Questions"
    >
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
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-400 mt-2 font-light">
            Direct answers to all operational and structural participant inquiries.
          </p>
        </motion.div>

        {/* Clean Editorial FAQ Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQS.map((faq) => {
            const isOpen = openIds.has(faq.id);
            const headerId = `faq-header-${faq.id}`;
            const contentId = `faq-content-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="group transition-colors duration-200"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#04060c] rounded-sm transition-all"
                >
                  <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#00f0ff] shrink-0">
                      {faq.number}
                    </span>
                    <span className="font-headline text-sm sm:text-base md:text-lg text-slate-100 font-medium group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div className="shrink-0 p-1 rounded-full bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/[0.06] transition-colors">
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 group-hover:text-[#00f0ff] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 !text-[#00f0ff]' : ''
                      }`}
                    />
                  </div>
                </button>

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
                        {faq.answer}
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
