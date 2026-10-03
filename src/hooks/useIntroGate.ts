import { useCallback, useState } from 'react';
import {
  INTRO_ENABLED,
  INTRO_PLAY_ONCE_PER_SESSION,
  INTRO_SESSION_KEY,
} from '../data/introConfig';

const readSessionFlag = (): boolean => {
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === '1';
  } catch {
    return false;
  }
};

const shouldShowIntro = (): boolean => {
  if (!INTRO_ENABLED) return false;
  if (new URLSearchParams(window.location.search).has('nointro')) return false;
  if (new URLSearchParams(window.location.search).get('intro') === '1') return true;
  if (window.location.hash === '#home' && readSessionFlag()) return false;
  return !INTRO_PLAY_ONCE_PER_SESSION || !readSessionFlag();
};

export const useIntroGate = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return shouldShowIntro();
  });

  const completeIntro = useCallback(() => setShowIntro(false), []);
  return { showIntro, completeIntro };
};
