import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const REGISTRATION_URL = 'https://forms.gle/4nJnwdTaFTGTXExS9';
const HEADLINE_WORDS = ['READY', 'TO', 'ENTER', 'THE', 'RELAY?'];

export const RegistrationCTA: React.FC = () => (
  <section id="registration" className="registration-cta" aria-label="Register for Code Relay">
    <div className="registration-cta__inner">
      <p className="registration-cta__eyebrow">FINAL TRANSMISSION // REGISTRATION OPEN</p>
      <h2 className="registration-cta__headline" aria-label={HEADLINE_WORDS.join(' ')}>
        {HEADLINE_WORDS.map((word, index) => (
          <motion.span
            key={word}
            initial={{ clipPath: 'inset(0 100% 0 0)', x: 24 }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)', x: 0 }}
            viewport={{ once: true, margin: '-18% 0px' }}
            transition={{ duration: 0.72, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <p className="registration-cta__copy">Stop watching. Build your team. Take the baton.</p>
      <motion.a
        href={REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="registration-cta__button"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-12% 0px' }}
        transition={{ duration: 0.55, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        REGISTER NOW <ArrowUpRight size={18} aria-hidden="true" />
      </motion.a>
    </div>
  </section>
);
