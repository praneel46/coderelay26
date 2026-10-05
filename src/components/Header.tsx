import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HEADER_NAV_ITEMS } from '../data/navigation';
import sjbitLogo from '../assets/images/sjbit-header-logo.jpg';
import { useRegistrationModal } from './RegistrationModal';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openRegistration } = useRegistrationModal();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
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
      <a href="#home" className="site-brand" aria-label="SJB Institute of Technology, return home" onClick={(event) => { event.preventDefault(); handleNavClick('#home'); }}>
        <img src={sjbitLogo} alt="SJB Institute of Technology emblem" width={96} height={96} />
        <span className="site-brand__copy">
          <small className="site-brand__extra site-brand__greeting">|| JAI SRI GURUDEV ||</small>
          <span className="site-brand__trust">Sri Adichunchanagiri Shikshana Trust <sup>®</sup></span>
          <strong>SJB INSTITUTE OF TECHNOLOGY</strong>
          <small className="site-brand__university site-brand__extra">An autonomous institute under Visvesvaraya Technological University</small>
        </span>
      </a>
      <nav className="site-header__nav" aria-label="Primary navigation">
        <button type="button" className="site-header__register" onClick={openRegistration} aria-label="Open Code Relay registration form">Register <ArrowUpRight size={15} aria-hidden="true" /></button>
        <button type="button" className={'site-menu-trigger ' + (isMenuOpen ? 'open' : '')} aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          <i aria-hidden="true"><b /><b /><b /></i>
        </button>
      </nav>
      <nav className={'site-menu-panel ' + (isMenuOpen ? 'open' : '')} aria-label="Site navigation">
        {HEADER_NAV_ITEMS.map((item) => (
          <button key={item.number} type="button" onClick={() => handleNavClick(item.href)}><span>{item.number}</span>{item.label}</button>
        ))}
      </nav>
    </header>
  );
};
