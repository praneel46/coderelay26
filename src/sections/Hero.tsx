import React, { useEffect, useRef } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react';
import anniversaryLogo from '../assets/images/silver-jubilee-logo.png';

const revealEase = [0.16, 1, 0.3, 1] as const;

const RelayCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let pageVisible = !document.hidden;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const curvePoint = (progress: number) => {
      const x = (-0.08 + (progress * 1.16)) * width;
      const baseY = height * 0.52;
      const y = baseY + Math.sin((progress * Math.PI * 1.1) - 0.75) * height * 0.16;
      return { x, y };
    };

    const drawPath = () => {
      context.beginPath();
      for (let step = 0; step <= 80; step += 1) {
        const point = curvePoint(step / 80);
        if (step === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.strokeStyle = 'rgba(0, 240, 255, 0.26)';
      context.lineWidth = 1;
      context.stroke();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const horizon = height * 0.2;
      const lower = height * 1.05;

      context.strokeStyle = 'rgba(220, 233, 242, 0.035)';
      context.lineWidth = 1;
      for (let index = 0; index < 8; index += 1) {
        const x = width * (index / 12);
        context.beginPath();
        context.moveTo(width * 0.5, horizon);
        context.lineTo(x, lower);
        context.stroke();
      }
      for (let index = 0; index < 6; index += 1) {
        const depth = index / 8;
        const y = horizon + ((depth ** 1.8) * (lower - horizon));
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      drawPath();

      const point = curvePoint((time * 0.000055) % 1);
      context.beginPath();
      context.fillStyle = 'rgba(0, 240, 255, 0.9)';
      context.shadowColor = '#00f0ff';
      context.shadowBlur = 13;
      context.arc(point.x, point.y, 2.6, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;

      if (!reduceMotion && pageVisible) frame = window.requestAnimationFrame(draw);
    };

    const handleVisibilityChange = () => {
      pageVisible = !document.hidden;
      window.cancelAnimationFrame(frame);
      if (pageVisible && !reduceMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    if (reduceMotion) draw(0);
    else frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-arena__canvas" aria-hidden="true" />;
};

export const Hero: React.FC = () => {
  const arenaRef = useRef<HTMLElement>(null);
  const pointerFrame = useRef(0);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const arena = arenaRef.current;
    if (!arena) return;

    const bounds = arena.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) - 0.5;
    const y = ((event.clientY - bounds.top) / bounds.height) - 0.5;
    window.cancelAnimationFrame(pointerFrame.current);
    pointerFrame.current = window.requestAnimationFrame(() => {
      arena.style.setProperty('--pointer-x', x.toFixed(3));
      arena.style.setProperty('--pointer-y', y.toFixed(3));
    });
  };

  return (
    <MotionConfig reducedMotion="user">
    <section id="home" ref={arenaRef} className="event-hero hero-arena" aria-label="Vigyantra 2026 Code Relay" onPointerMove={handlePointerMove}>
      <RelayCanvas />
      <div className="hero-arena__wash" aria-hidden="true" />

      <div className="event-hero__inner hero-arena__inner">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.2, ease: revealEase }} className="hero-arena__meta">
          <span>Vigyantra 2026</span><span>SJBIT Bengaluru</span><span>30 October</span>
        </motion.div>

        <div className="hero-opening hero-parallax-copy">
          <svg className="hero-opening__signal" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
            <motion.path d="M-50 470 C150 430 190 170 380 192 S620 500 760 290 S920 120 1080 180" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.35, delay: 0.42, ease: 'easeInOut' }} />
            <motion.circle cx="380" cy="192" r="5" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.28, delay: 1.12 }} />
          </svg>
          <motion.figure initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.62, delay: 1.06, ease: revealEase }} className="hero-opening__emblem">
            <img src={anniversaryLogo} alt="SJB Institute of Technology 25 years of excellence" />
          </motion.figure>
          <div className="hero-opening__copy">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.48, delay: 1.5, ease: revealEase }} className="hero-opening__event">Vigyantra 2026</motion.p>
            <h1 className="hero-opening__title" aria-label="Code Relay">
              <motion.span initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} transition={{ duration: 0.75, delay: 1.92, ease: revealEase }}>Code</motion.span>
              <motion.span initial={{ clipPath: 'inset(0 0 0 100%)' }} animate={{ clipPath: 'inset(0 0 0 0)' }} transition={{ duration: 0.86, delay: 2.22, ease: revealEase }}>Relay</motion.span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46, delay: 2.92, ease: revealEase }} className="hero-opening__tagline">Think. Code. Debug. Relay.</motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46, delay: 3.15, ease: revealEase }} className="hero-arena__actions">
              <a href="https://forms.gle/4nJnwdTaFTGTXExS9" target="_blank" rel="noopener noreferrer" className="hero-arena__primary">Register <ArrowUpRight size={18} /></a>
              <a href="#about" className="hero-arena__secondary">Event overview <FileText size={16} /></a>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.95 }} className="hero-arena__footer">
          <span>01 / COMPETITIVE PROGRAMMING</span><span>Scroll to enter <ArrowDownRight size={15} /></span>
        </motion.div>
      </div>
    </section>
    </MotionConfig>
  );
};
