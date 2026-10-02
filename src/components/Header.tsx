import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/navigation';
import sjbitLogo from '../assets/images/sjbit-logo.png';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    const header = document.querySelector<HTMLElement>('.site-header');
    if (!target) return;

    const offset = (header?.offsetHeight ?? 0) + 12;
    const position = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, '', href);
    window.scrollTo({ top: Math.max(0, position), behavior: 'smooth' });
  };

  return (
    <>
      <header className={'site-header ' + (isScrolled ? 'site-header--scrolled' : '')}>
        <div className="site-header__inner">
          <a href="#home" className="site-brand" aria-label="SJB Institute of Technology, return home" onClick={(event) => { event.preventDefault(); handleNavClick('#home'); }}>
            <img src={sjbitLogo} alt="" width={58} height={58} />
            <span className="site-brand__copy">
              <strong>SJB Institute of Technology</strong>
              <small>Autonomous Institute · VTU</small>
            </span>
          </a>
          <button type="button" className="site-menu-trigger" aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
            <span>Menu</span>
            <i aria-hidden="true"><b /><b /><b /></i>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div className="site-menu-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} />
            <motion.aside className="site-menu-drawer" aria-label="Site navigation" initial={{ x: '105%' }} animate={{ x: 0 }} exit={{ x: '105%' }} transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}>
              <div className="site-menu-drawer__top">
                <div><span>Vigyantra '26</span><p>Code Relay</p></div>
                <button type="button" aria-label="Close navigation" onClick={() => setIsMenuOpen(false)}><X size={22} /></button>
              </div>
              <motion.nav className="site-menu-nav" initial="closed" animate="open" exit="closed" variants={{ open: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } }, closed: { transition: { staggerChildren: 0.025, staggerDirection: -1 } } }}>
                {NAV_ITEMS.map((item) => (
                  <motion.button key={item.number} type="button" onClick={() => handleNavClick(item.href)} variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: 22 } }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}>
                    <span>{item.number}</span><strong>{item.label}</strong><ArrowUpRight size={19} />
                  </motion.button>
                ))}
              </motion.nav>
              <div className="site-menu-drawer__bottom"><span>01 / 25 years of excellence</span><span>SJBIT Bengaluru</span></div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
