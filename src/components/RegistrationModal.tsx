import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

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
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeRegistration = () => {
    if (navigationTimer.current) clearTimeout(navigationTimer.current);
    navigationTimer.current = null;
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeRegistration();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const openRegistration = () => {
    setIsOpen(true);
    navigationTimer.current = setTimeout(() => {
      window.location.assign(REGISTRATION_URL);
    }, 700);
  };

  return (
    <RegistrationContext.Provider value={{ openRegistration }}>
      {children}
      {isOpen && (
        <div className="registration-modal" role="dialog" aria-modal="true" aria-labelledby="registration-modal-title">
          <button type="button" className="registration-modal__backdrop" aria-label="Cancel registration redirect" onClick={closeRegistration} />
          <div className="registration-modal__panel">
            <div className="registration-modal__header">
              <div>
                <span className="registration-modal__eyebrow">SECURE REGISTRATION CHANNEL</span>
                <h2 id="registration-modal-title">CODE RELAY ENTRY</h2>
              </div>
              <button type="button" className="registration-modal__close" onClick={closeRegistration} aria-label="Cancel registration redirect"><X size={18} /></button>
            </div>
            <div className="registration-modal__frame">
              <div className="registration-modal__loader" aria-live="polite">
                <div className="registration-modal__code-field" aria-hidden="true"><span>01 // HANDSHAKE</span><span>AUTH::RELAY_ENTRY</span><span>FORM_CHANNEL: ONLINE</span><span>REDIRECTING...</span></div>
                <div className="registration-modal__loader-core"><span className="registration-modal__spinner" /><span className="registration-modal__loader-glyph">&lt;/&gt;</span></div>
                <strong>CONNECTING TO REGISTRATION</strong>
                <small>Taking you to the entry form<span className="registration-modal__dots">...</span></small>
              </div>
            </div>
          </div>
        </div>
      )}
    </RegistrationContext.Provider>
  );
};
