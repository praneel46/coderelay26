import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ScanLine } from 'lucide-react';
import {
  ALL_CREW,
  CORE_LEADS,
  CREW_CATEGORIES,
  FACULTY_COMMITTEE,
  OPERATIONS_AND_MEDIA,
  TECH_AND_DEV,
  type CrewCategory,
  type CrewSlot,
} from '../data/coreCrew';

type CrewEntry = CrewSlot & { phone?: string };

const CATEGORY_DATA: Record<Exclude<CrewCategory, 'all'>, CrewEntry[]> = {
  leads: CORE_LEADS,
  faculty: FACULTY_COMMITTEE,
  tech: TECH_AND_DEV,
  operations: OPERATIONS_AND_MEDIA,
};

const CrewCard: React.FC<{ member: CrewEntry; onFocus: (id: string) => void; onLeave: () => void; focused: boolean }> = ({ member, onFocus, onLeave, focused }) => {
  const isLead = Boolean(member.phone);
  const card = (
    <article
      className={'crew-card' + (focused ? ' crew-card--focused' : '')}
      onPointerEnter={() => onFocus(member.id)}
      onPointerLeave={(event) => { if (event.pointerType === 'mouse') onLeave(); }}
      onPointerDown={() => onFocus(member.id)}
      tabIndex={0}
      onFocus={() => onFocus(member.id)}
      onBlur={onLeave}
      aria-label={member.name || `${member.role} placeholder`}
    >
      <div className="crew-card__topline"><span>{member.role}</span><i aria-hidden="true" /></div>
      <div className="crew-card__portrait" aria-hidden="true">
        <div className="crew-card__grid" />
        <div className="crew-card__placeholder"><ScanLine size={24} /><span>IMAGE SLOT</span></div>
        <div className="crew-card__scanline" />
      </div>
      <div className="crew-card__details">
        <strong>{member.name || 'NAME / TBD'}</strong>
        {isLead ? (
          <a href={`tel:${member.phone}`} className="crew-card__secondary crew-card__phone"><Phone size={13} /> {member.secondary}</a>
        ) : (
          <span className="crew-card__secondary">{member.secondary || 'DETAILS / TBD'}</span>
        )}
      </div>
      {focused && <span className="crew-card__status">SCANNING</span>}
    </article>
  );
  return card;
};

export const CoreCrew: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CrewCategory>('all');
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const visibleMembers = useMemo<CrewEntry[]>(() => activeCategory === 'all' ? ALL_CREW : CATEGORY_DATA[activeCategory], [activeCategory]);
  const isMarquee = activeCategory === 'all';
  const focused = focusedId !== null;

  return (
    <section id="contact" className="core-crew" aria-label="The Core Crew">
      <div className="core-crew__inner">
        <motion.div className="core-crew__heading" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-12% 0px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p>Personnel directory // Vigyantra operations</p>
          <h2>THE <em>CORE</em> CREW</h2>
        </motion.div>

        <nav className="core-crew__categories" aria-label="Crew categories">
          {CREW_CATEGORIES.map((category) => (
            <button key={category.id} type="button" className={activeCategory === category.id ? 'is-active' : ''} onClick={() => { setActiveCategory(category.id); setFocusedId(null); }}>
              <i aria-hidden="true" />{category.label}
            </button>
          ))}
        </nav>

        <div className={'crew-stream' + (focused && isMarquee ? ' crew-stream--focused' : '')}>
          {visibleMembers.length > 0 ? (
            <div className={'crew-track' + (isMarquee ? ' crew-track--marquee' : '')}>
              <div className="crew-track__group">
                {visibleMembers.map((member) => <CrewCard key={member.id} member={member} focused={focusedId === member.id} onFocus={setFocusedId} onLeave={() => setFocusedId(null)} />)}
              </div>
              {isMarquee && <div className="crew-track__group" aria-hidden="true">
                {visibleMembers.map((member) => <CrewCard key={`${member.id}-duplicate`} member={member} focused={focusedId === member.id} onFocus={setFocusedId} onLeave={() => setFocusedId(null)} />)}
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
