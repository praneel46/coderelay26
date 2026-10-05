import React, { createContext, useContext, useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

export const REGISTRATION_URL = 'https://forms.gle/4nJnwdTaFTGTXExS9';

interface RegistrationContextValue {
  openRegistration: () => void;
}

const RegistrationContext = createContext<RegistrationContextValue | null>(null);

export const useRegistrationModal = (): RegistrationContextValue => {
  const context = useContext(RegistrationContext);
  if (!context) throw new Error('useRegistrationModal must be used inside RegistrationProvider');
  return context;
};

export const RegistrationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const openRegistration = () => {
    setIsLoaded(false);
    setIsOpen(true);
  };

  return (
    <RegistrationContext.Provider value={{ openRegistration }}>
      {children}
      {isOpen && (
        <div className="registration-modal" role="dialog" aria-modal="true" aria-labelledby="registration-modal-title">
          <button type="button" className="registration-modal__backdrop" aria-label="Close registration form" onClick={() => setIsOpen(false)} />
          <div className="registration-modal__panel">
            <div className="registration-modal__header">
              <div>
                <span className="registration-modal__eyebrow">SECURE REGISTRATION CHANNEL</span>
                <h2 id="registration-modal-title">CODE RELAY ENTRY</h2>
              </div>
              <button type="button" className="registration-modal__close" onClick={() => setIsOpen(false)} aria-label="Close registration form"><X size={18} /></button>
            </div>
            <div className={'registration-modal__frame' + (isLoaded ? ' is-loaded' : '')}>
              {!isLoaded && <div className="registration-modal__loader" aria-live="polite"><span className="registration-modal__spinner" /><strong>CONNECTING TO REGISTRATION</strong><small>Preparing your entry form...</small></div>}
              <iframe title="Code Relay registration form" src={REGISTRATION_URL} onLoad={() => setIsLoaded(true)} />
            </div>
            <a className="registration-modal__fallback" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">Open form in a new tab <ExternalLink size={13} /></a>
          </div>
        </div>
      )}
    </RegistrationContext.Provider>
  );
};
