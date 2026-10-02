import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LEADERS } from '../data/leadership';

const TOTAL_LEADERSHIP = 33;

export const LeadershipShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeLeader = LEADERS[currentIndex];
  useEffect(() => {
    const timer = window.setInterval(() => setCurrentIndex((current) => (current + 1) % LEADERS.length), 7200);
    return () => window.clearInterval(timer);
  }, []);
  const changeLeader = (direction: number) => setCurrentIndex((current) => (current + direction + LEADERS.length) % LEADERS.length);
  return (
    <section id="leadership" className="leadership-section story-panel" aria-label="Institutional Leadership & Divine Blessings">
      <div className="leadership-section__texture" aria-hidden="true" />
      <div className="leadership-section__inner">
        <div className="leadership-heading"><p>Institutional leadership</p><h2>Guidance that<br /><em>moves us forward.</em></h2></div>
        <div className="leadership-stage">
          <AnimatePresence mode="wait">
            <motion.div key={activeLeader.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="leader-card">
              <div className="leader-card__portrait"><div className="leader-card__architecture" aria-hidden="true"><span /><span /></div><img src={activeLeader.image} alt={activeLeader.imageAlt} /></div>
              <div className="leader-card__content"><p className="leader-card__role">{activeLeader.role}</p><h3>{activeLeader.name}</h3><p className="leader-card__institution">{activeLeader.institution}</p></div>
            </motion.div>
          </AnimatePresence>
        </div>
        <nav className="leader-navigation" aria-label="Leadership navigation">
          <button type="button" onClick={() => changeLeader(-1)} aria-label="Previous featured leader"><ArrowLeft size={18} /></button>
          <div className="leader-navigation__status"><strong>{String(currentIndex + 1).padStart(2, '0')}</strong><span>/ {String(LEADERS.length).padStart(2, '0')} featured</span><small>{TOTAL_LEADERSHIP} leaders across the institution</small></div>
          <div className="leader-navigation__dots" aria-label={'Featured leader ' + (currentIndex + 1) + ' of ' + LEADERS.length}>
            {LEADERS.map((leader, index) => <button key={leader.id} type="button" onClick={() => setCurrentIndex(index)} aria-label={'Show ' + leader.role} aria-current={index === currentIndex ? 'true' : undefined} />)}
          </div>
          <button type="button" onClick={() => changeLeader(1)} aria-label="Next featured leader"><ArrowRight size={18} /></button>
        </nav>
      </div>
    </section>
  );
};
