import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import {
  INTRO_BG,
  INTRO_MAX_WAIT_MS,
  INTRO_POSTERS,
  INTRO_SESSION_KEY,
  INTRO_VIDEOS,
} from '../data/introConfig';

interface IntroSplashProps {
  onReveal: () => void;
  onComplete: () => void;
}

type VideoChoice = 'mobile' | 'desktop';

const markIntroSeen = () => {
  try {
    sessionStorage.setItem(INTRO_SESSION_KEY, '1');
  } catch {
    // Storage can be disabled in private browsing; playback remains recoverable.
  }
};

export const IntroSplash: React.FC<IntroSplashProps> = ({ onReveal, onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishStarted = useRef(false);
  const playbackStarted = useRef(false);
  const hiddenAt = useRef<number | null>(null);
  const exitTimer = useRef<number | null>(null);
  const autoplayTimer = useRef<number | null>(null);
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const choice = useMemo<VideoChoice>(() => (
    window.matchMedia('(min-aspect-ratio: 1/1)').matches || window.innerWidth >= 1024
      ? 'desktop'
      : 'mobile'
  ), []);

  const finish = useCallback(() => {
    if (finishStarted.current) return;
    finishStarted.current = true;
    markIntroSeen();
    onReveal();
    setIsExiting(true);
    exitTimer.current = window.setTimeout(() => {
      document.querySelector<HTMLElement>('.site-brand')?.focus();
      onComplete();
    }, 600);
  }, [onComplete, onReveal]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const skipTimer = window.setTimeout(() => setShowSkip(true), 800);
    const safetyTimer = window.setTimeout(finish, INTRO_MAX_WAIT_MS);
    const video = videoRef.current;
    let stalledTimer = 0;

    const attemptPlayback = () => {
      video?.play().catch(() => {
        setAutoplayBlocked(true);
        autoplayTimer.current = window.setTimeout(finish, 4000);
      });
    };
    const onStalled = () => {
      window.clearTimeout(stalledTimer);
      if (!playbackStarted.current) stalledTimer = window.setTimeout(finish, 4000);
    };
    const onPlaying = () => {
      playbackStarted.current = true;
      setAutoplayBlocked(false);
      window.clearTimeout(stalledTimer);
      if (autoplayTimer.current) window.clearTimeout(autoplayTimer.current);
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        hiddenAt.current = Date.now();
      } else if (hiddenAt.current && Date.now() - hiddenAt.current > 3000) {
        video?.pause();
        finish();
      }
    };

    video?.addEventListener('ended', finish);
    video?.addEventListener('error', finish);
    video?.addEventListener('stalled', onStalled);
    video?.addEventListener('playing', onPlaying);
    document.addEventListener('visibilitychange', onVisibilityChange);
    attemptPlayback();

    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(safetyTimer);
      window.clearTimeout(stalledTimer);
      if (autoplayTimer.current) window.clearTimeout(autoplayTimer.current);
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
      video?.pause();
      if (finishStarted.current) {
        video?.removeAttribute('src');
        video?.load();
      }
      video?.removeEventListener('ended', finish);
      video?.removeEventListener('error', finish);
      video?.removeEventListener('stalled', onStalled);
      video?.removeEventListener('playing', onPlaying);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      document.body.style.overflow = '';
    };
  }, [finish]);

  useEffect(() => {
    if (showSkip) skipButtonRef.current?.focus();
  }, [showSkip]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        finish();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [finish]);

  const playFromTap = () => {
    videoRef.current?.play().then(() => {
      if (autoplayTimer.current) window.clearTimeout(autoplayTimer.current);
      setAutoplayBlocked(false);
    }).catch(finish);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className={'intro-splash' + (isExiting ? ' intro-splash--exiting' : '')}
      style={{ backgroundColor: INTRO_BG }}
      role="dialog"
      aria-modal="true"
      aria-label="Introduction video"
    >
      <video
        ref={videoRef}
        className="intro-splash__video"
        src={INTRO_VIDEOS[choice]}
        poster={INTRO_POSTERS[choice] ?? undefined}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noremoteplayback"
        aria-hidden="true"
      />
      {autoplayBlocked && <button type="button" className="intro-splash__play" onClick={playFromTap}>Tap to play</button>}
      <button type="button" className="intro-splash__sound" onClick={toggleMute} aria-label={isMuted ? 'Unmute introduction video' : 'Mute introduction video'}>
        {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
      </button>
      <button ref={skipButtonRef} type="button" className={'intro-splash__skip' + (showSkip ? ' intro-splash__skip--visible' : '')} onClick={finish} aria-label="Skip introduction">
        SKIP <span aria-hidden="true">›</span>
      </button>
    </div>
  );
};
