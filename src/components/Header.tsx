import React, { useEffect, useState } from 'react';
import { HEADER_NAV_ITEMS } from '../data/navigation';
import silverJubileeLogo from '../assets/images/silver-jubilee-logo.png';
import vigyantraLogo from '../assets/images/vigyantra-golden.png';
import { useRegistrationModal } from './RegistrationModal';
import { ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openRegistration } = useRegistrationModal();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
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
    <header className={'site-header ' + (isScrolled ? 'site-header--scrolled' : '')}>
      <div className="site-header__inner">
        <a
          href="#home"
          className="site-brand"
          aria-label="SJB Institute of Technology, Vigyantra 2026 Code Relay"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick('#home');
          }}
        >
          <img
            className="site-brand__jubilee"
            src={silverJubileeLogo}
            alt="SJB Institute of Technology Silver Jubilee 25 Years"
            width={72}
            height={72}
          />
          <span className="site-brand__divider" aria-hidden="true" />
          <img
            className="site-brand__vigyantra"
            src={vigyantraLogo}
            alt="Vigyantra 2026"
            width={360}
            height={100}
          />
        </a>

        <div className="site-header__actions">
          <button
            type="button"
            className="site-header__register-btn"
            onClick={openRegistration}
            aria-label="Register for Code Relay"
          >
            <span>REGISTER</span>
            <ArrowUpRight size={14} />
          </button>

          <button
            type="button"
            className={'site-menu-trigger ' + (isMenuOpen ? 'open' : '')}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i aria-hidden="true">
              <b />
              <b />
              <b />
            </i>
          </button>
        </div>

        <nav className={'site-menu-panel ' + (isMenuOpen ? 'open' : '')} aria-label="Site navigation">
          {HEADER_NAV_ITEMS.map((item) => (
            <button key={item.number} type="button" onClick={() => handleNavClick(item.href)}>
              <span>{item.number}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
