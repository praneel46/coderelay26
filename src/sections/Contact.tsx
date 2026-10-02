import React from 'react';
import { motion } from 'framer-motion';
import { Phone, User } from 'lucide-react';

interface Coordinator {
  id: string;
  name: string;
  role: string;
  phoneDisplay: string;
  phoneRaw: string;
}

const COORDINATORS: Coordinator[] = [
  {
    id: 'coord-1',
    name: 'PRANEEL KULKARNI',
    role: 'Event Coordinator',
    phoneDisplay: '8660276040',
    phoneRaw: '8660276040',
  },
  {
    id: 'coord-2',
    name: 'KESHAV SAVANTH S',
    role: 'Event Coordinator',
    phoneDisplay: '78925 86349',
    phoneRaw: '7892586349',
  },
];

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-12 select-none"
      aria-label="Event Coordination and Contact"
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
          <span className="font-mono text-xs sm:text-sm text-slate-400 tracking-[0.25em] uppercase font-medium">
            07 // EVENT COORDINATION
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mt-1">
            CONTACT
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-400 mt-2 font-light">
            Direct dispatch channels to student coordinators.
          </p>
        </motion.div>

        {/* 2-Column Coordinator Grid (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {COORDINATORS.map((coord, index) => (
            <motion.div
              key={coord.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 rounded-2xl bg-[#0a0e19]/55 border border-white/[0.08] hover:border-[#00f0ff]/30 backdrop-blur-md transition-all duration-300"
            >
              {/* Corner Engineering Accent */}
              <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-[#00f0ff]/50 transition-colors" />

              {/* Clean Dark Translucent Portrait Placeholder Stage (Ready for official image) */}
              <div className="w-24 h-28 sm:w-24 sm:h-32 shrink-0 rounded-xl bg-white/[0.03] border border-dashed border-white/20 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#00f0ff]/40 transition-colors">
                <div className="absolute inset-0 bg-grid-cyber opacity-20" aria-hidden="true" />
                <User className="w-8 h-8 text-slate-500 group-hover:text-[#00f0ff] transition-colors relative z-10" />
                <span className="font-mono text-[9px] text-slate-600 mt-1 uppercase tracking-wider relative z-10">
                  PORTRAIT
                </span>
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0 text-center sm:text-left flex flex-col justify-center">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-1">
                  COORDINATOR 0{index + 1}
                </span>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-slate-100 transition-colors truncate">
                  {coord.name}
                </h3>

                <p className="font-body text-xs sm:text-sm text-slate-400 mt-0.5">
                  {coord.role}
                </p>

                {/* Call-to-action Phone Link */}
                <div className="mt-4 pt-3 border-t border-white/[0.06]">
                  <a
                    href={`tel:${coord.phoneRaw}`}
                    className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#00f0ff] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded px-1 -mx-1"
                    aria-label={`Call ${coord.name} at ${coord.phoneDisplay}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>+91 {coord.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
