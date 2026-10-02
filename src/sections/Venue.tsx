import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Venue: React.FC = () => {
  const googleMapsUrl = 'https://maps.google.com/?q=SJB+Institute+of+Technology+Bengaluru';

  return (
    <section
      id="venue"
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 select-none"
      aria-label="Event Venue and Location"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left mb-6 sm:mb-8"
        >
          <span className="font-mono text-xs sm:text-sm text-slate-400 tracking-[0.25em] uppercase font-medium">
            08 // CAMPUS DATUM POINT
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mt-1">
            VENUE &amp; LOCATION
          </h2>
        </motion.div>

        {/* Compact & Focused Live Google Map Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-full h-[320px] sm:h-[370px] md:h-[420px] rounded-2xl border border-white/[0.1] hover:border-[#00f0ff]/40 shadow-[0_10px_32px_rgba(0,0,0,0.55)] backdrop-blur-md overflow-hidden transition-colors duration-300 mx-auto"
        >
          {/* Subtle Technical Engineering Corner Marks */}
          <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00f0ff]/60 z-20 pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#00f0ff]/60 z-20 pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#00f0ff]/60 z-20 pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00f0ff]/60 z-20 pointer-events-none" />

          {/* Floating Action: View in Google Maps */}
          <div className="absolute top-3.5 right-3.5 z-20">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-lg bg-[#0a0e19]/90 hover:bg-[#0f1524] border border-white/[0.12] hover:border-[#00f0ff]/50 text-slate-200 hover:text-white font-headline text-xs font-semibold tracking-wide shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
              aria-label="Open SJB Institute of Technology in Google Maps"
            >
              <span>VIEW IN GOOGLE MAPS</span>
              <ExternalLink className="w-3 h-3 text-[#00f0ff]" />
            </a>
          </div>

          {/* Live Interactive Google Map Embed */}
          <iframe
            src="https://maps.google.com/maps?q=SJB%20Institute%20of%20Technology%2C%20BGS%20Health%20%26%20Education%20City%2C%20Dr.%20Vishnuvardhan%20Road%2C%20Kengeri%2C%20Bengaluru%2C%20Karnataka%20560060&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SJB Institute of Technology Google Maps Location"
          />
        </motion.div>

      </div>
    </section>
  );
};


