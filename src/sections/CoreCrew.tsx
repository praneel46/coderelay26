import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Phone, ScanLine } from 'lucide-react';
import { ALL_CREW, CORE_LEADS, CREW_CATEGORIES, FACULTY_COMMITTEE, TECH_AND_DEV, type CrewCategory, type CrewMember } from '../data/coreCrew';

const CATEGORY_DATA: Record<CrewCategory, CrewMember[]> = {
  leads: CORE_LEADS,
  all: ALL_CREW,
  tech: TECH_AND_DEV,
  faculty: FACULTY_COMMITTEE,
};

interface CrewCardProps {
  member: CrewMember;
  focused: boolean;
  duplicate?: boolean;
  scanOnFocus: boolean;
  onFocus: (id: string) => void;
  onLeave: () => void;
}

const CrewCard: React.FC<CrewCardProps> = ({ member, focused, duplicate = false, scanOnFocus, onFocus, onLeave }) => {
  const isLead = Boolean(member.phone);
  const canFocus = !duplicate;

  return (
    <article
      className={'crew-card' + (focused ? ' crew-card--focused' : '') + (scanOnFocus ? ' crew-card--scannable' : '')}
      onPointerEnter={() => canFocus && onFocus(member.id)}
      onPointerLeave={(event) => { if (canFocus && event.pointerType === 'mouse') onLeave(); }}
      onPointerDown={() => canFocus && onFocus(member.id)}
      tabIndex={duplicate ? -1 : 0}
      onFocus={() => canFocus && onFocus(member.id)}
      onBlur={() => canFocus && onLeave()}
      aria-hidden={duplicate || undefined}
      aria-label={member.name || `${member.role} placeholder`}
    >
      <div className="crew-card__topline"><span>{member.role}</span><i aria-hidden="true" /></div>
      <div className="crew-card__portrait">
        <div className="crew-card__grid" />
        {member.image ? <img src={member.image} alt="" className="crew-card__image" /> : <div className="crew-card__placeholder"><ScanLine size={22} /><span>IMAGE SLOT</span></div>}
        <div className="crew-card__scanline" />
      </div>
      <div className="crew-card__details">
        <strong>{member.name || 'NAME / TBD'}</strong>
        <span className="crew-card__secondary">{isLead ? <a href={`tel:${member.phone}`} className="crew-card__phone"><Phone size={12} /> {member.secondary}</a> : (member.secondary || 'DETAILS / TBD')}</span>
        {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="crew-card__linkedin" aria-label={`Open ${member.name || 'crew member'} LinkedIn profile`}><span aria-hidden="true">in</span><ExternalLink size={9} aria-hidden="true" /></a>}
      </div>
      {focused && scanOnFocus && <span className="crew-card__status">SCANNING</span>}
    </article>
  );
};

export const CoreCrew: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CrewCategory>('leads');
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [manualPaused, setManualPaused] = useState(false);
  const streamRef = useRef<HTMLDivElement>(null);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleMembers = useMemo(() => CATEGORY_DATA[activeCategory], [activeCategory]);
  const isMarquee = activeCategory === 'all';
  const scanOnFocus = activeCategory === 'faculty';

  useEffect(() => () => { if (pauseTimer.current) clearTimeout(pauseTimer.current); }, []);

  const handleNudge = (direction: number) => {
    streamRef.current?.scrollBy({ left: direction * 220, behavior: 'smooth' });
    setManualPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setManualPaused(false), 1800);
  };

  return (
    <section id="contact" className="core-crew" aria-label="The Core Crew">
      <div className="core-crew__inner">
        <motion.div className="core-crew__heading" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-12% 0px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p>PERSONNEL DIRECTORY</p>
          <h2>THE <em>CORE</em> CREW</h2>
        </motion.div>

        <nav className="core-crew__categories" aria-label="Crew categories">
          {CREW_CATEGORIES.map((category) => (
            <button key={category.id} type="button" className={activeCategory === category.id ? 'is-active' : ''} onClick={(event) => { setActiveCategory(category.id); setFocusedId(null); event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }}>
              <i aria-hidden="true" />{category.label}
            </button>
          ))}
        </nav>

        <div ref={streamRef} className={'crew-stream' + (isMarquee ? ' crew-stream--marquee-shell' : '') + (manualPaused ? ' crew-stream--manual-paused' : '')}>
          {isMarquee && <div className="crew-stream__controls" aria-label="All crew navigation">
            <button type="button" onClick={() => handleNudge(-1)} aria-label="Show previous crew members"><ChevronLeft size={13} /></button>
            <button type="button" onClick={() => handleNudge(1)} aria-label="Show next crew members"><ChevronRight size={13} /></button>
          </div>}
          {visibleMembers.length > 0 ? (
            <div className={'crew-track' + (isMarquee ? ' crew-track--marquee' : '')}>
              <div className="crew-track__group">
                {visibleMembers.map((member) => <CrewCard key={member.id} member={member} focused={focusedId === member.id} scanOnFocus={scanOnFocus} onFocus={setFocusedId} onLeave={() => setFocusedId(null)} />)}
              </div>
              {isMarquee && <div className="crew-track__group" aria-hidden="true">
                {visibleMembers.map((member) => <CrewCard key={`${member.id}-duplicate`} member={member} duplicate focused={false} scanOnFocus={false} onFocus={setFocusedId} onLeave={() => setFocusedId(null)} />)}
              </div>}
            </div>
          ) : (
            <div className="crew-empty"><span>CHANNEL RESERVED</span><strong>PERSONNEL DATA PENDING</strong></div>
          )}
        </div>
      </div>
    </section>
  );
};
