import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import silverJubileeLogo from '../assets/images/silver-jubilee-logo.png';

const ease = [0.16, 1, 0.3, 1] as const;

export const Hero: React.FC = () => (
  <section id="home" className="event-hero" aria-label="Vigyantra 2026 Code Relay">
    <div className="event-hero__inner">
      <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12, ease }} className="hero-kicker">
        <span>30 October 2026</span><span className="hero-kicker__line" /><span>SJBIT Bengaluru</span>
      </motion.div>
      <div className="hero-content">
        <div className="hero-copy hero-parallax-copy">
          <motion.p initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3, ease }} className="hero-event-label">Vigyantra '26</motion.p>
          <h1 className="hero-title" aria-label="Code Relay">
            <motion.span initial={{ clipPath: 'inset(0 100% 0 0)', y: 30 }} animate={{ clipPath: 'inset(0 0% 0 0)', y: 0 }} transition={{ duration: 0.88, delay: 0.38, ease }}>Code</motion.span>
            <motion.em initial={{ clipPath: 'inset(0 0 0 100%)', y: 36 }} animate={{ clipPath: 'inset(0 0 0 0)', y: 0 }} transition={{ duration: 0.9, delay: 0.52, ease }}>Relay</motion.em>
          </h1>
          <motion.p initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.7, ease }} className="hero-eyebrow">Think. Code. Debug. Relay.</motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.82, ease }} className="hero-summary">A three-member programming relay where speed, strategy and a clean handover decide the finish.</motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.96, ease }} className="hero-actions">
            <a href="https://forms.gle/4nJnwdTaFTGTXExS9" target="_blank" rel="noopener noreferrer" className="hero-action hero-action--primary">Register <ArrowUpRight size={18} /></a>
            <a href="#about" className="hero-action hero-action--quiet">Event overview <FileText size={17} /></a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.42, ease }} className="jubilee-stage">
          <div className="jubilee-stage__frame" aria-hidden="true" /><div className="jubilee-stage__flare" aria-hidden="true" />
          <img src={silverJubileeLogo} alt="SJBIT 25 Years Silver Jubilee 2026" className="jubilee-stage__logo" />
          <div className="jubilee-stage__label"><Sparkles size={14} /><span>25 years of excellence</span></div>
          <span className="jubilee-stage__number" aria-hidden="true">25</span>
        </motion.div>
      </div>
    </div>
  </section>
);
