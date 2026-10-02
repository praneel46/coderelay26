import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react';

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

    const curvePoint = (progress: number, lane: number) => {
      const x = (-0.08 + (progress * 1.16)) * width;
      const baseY = height * (lane === 0 ? 0.34 : 0.67);
      const y = baseY + Math.sin((progress * Math.PI * 1.25) + (lane * 1.4)) * height * 0.13;
      return { x, y };
    };

    const drawPath = (lane: number, opacity: number) => {
      context.beginPath();
      for (let step = 0; step <= 80; step += 1) {
        const point = curvePoint(step / 80, lane);
        if (step === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.strokeStyle = lane === 0 ? `rgba(204, 228, 58, ${opacity})` : `rgba(170, 115, 255, ${opacity})`;
      context.lineWidth = lane === 0 ? 1.25 : 0.8;
      context.stroke();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const horizon = height * 0.2;
      const lower = height * 1.05;

      context.strokeStyle = 'rgba(222, 231, 190, 0.06)';
      context.lineWidth = 1;
      for (let index = 0; index < 13; index += 1) {
        const x = width * (index / 12);
        context.beginPath();
        context.moveTo(width * 0.5, horizon);
        context.lineTo(x, lower);
        context.stroke();
      }
      for (let index = 0; index < 9; index += 1) {
        const depth = index / 8;
        const y = horizon + ((depth ** 1.8) * (lower - horizon));
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      drawPath(0, 0.42);
      drawPath(1, 0.22);

      const particleCount = width < 600 ? 5 : 9;
      for (let index = 0; index < particleCount; index += 1) {
        const lane = index % 2;
        const speed = 0.00007 + (index * 0.000012);
        const progress = (time * speed + (index / particleCount)) % 1;
        const point = curvePoint(progress, lane);
        const radius = lane === 0 ? 3.2 : 2.1;
        context.beginPath();
        context.fillStyle = lane === 0 ? 'rgba(204, 228, 58, 0.95)' : 'rgba(170, 115, 255, 0.8)';
        context.shadowColor = lane === 0 ? '#cce43a' : '#aa73ff';
        context.shadowBlur = lane === 0 ? 15 : 9;
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }

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
    <section id="home" ref={arenaRef} className="event-hero hero-arena" aria-label="Vigyantra 2026 Code Relay" onPointerMove={handlePointerMove}>
      <RelayCanvas />
      <div className="hero-arena__wash" aria-hidden="true" />
      <div className="hero-arena__frame" aria-hidden="true" />

      <div className="event-hero__inner hero-arena__inner">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08, ease: revealEase }} className="hero-arena__meta">
          <span>Vigyantra 2026</span><span>SJBIT Bengaluru</span><span>30 October</span>
        </motion.div>

        <div className="hero-arena__layout">
          <div className="hero-arena__copy hero-parallax-copy">
            <motion.p initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.22, ease: revealEase }} className="hero-arena__eyebrow">
              <span>Protocol 01</span> Three minds. One uninterrupted run.
            </motion.p>
            <h1 className="hero-arena__title" aria-label="Code Relay">
              <motion.span initial={{ clipPath: 'inset(0 100% 0 0)', y: 24 }} animate={{ clipPath: 'inset(0 0 0 0)', y: 0 }} transition={{ duration: 0.72, delay: 0.32, ease: revealEase }}>Code</motion.span>
              <motion.span initial={{ clipPath: 'inset(0 0 0 100%)', y: 24 }} animate={{ clipPath: 'inset(0 0 0 0)', y: 0 }} transition={{ duration: 0.78, delay: 0.45, ease: revealEase }} className="hero-arena__title-accent">Relay</motion.span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.68, ease: revealEase }} className="hero-arena__tagline">Think. Code. Debug. Relay.</motion.p>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.76, ease: revealEase }} className="hero-arena__summary">A three-member programming relay where every handover carries the team closer to the finish.</motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.88, ease: revealEase }} className="hero-arena__actions">
              <a href="https://forms.gle/4nJnwdTaFTGTXExS9" target="_blank" rel="noopener noreferrer" className="hero-arena__primary">Register <ArrowUpRight size={18} /></a>
              <a href="#about" className="hero-arena__secondary">Event overview <FileText size={16} /></a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.46, ease: revealEase }} className="hero-arena__sequence" aria-label="Relay sequence">
            <p>Live relay sequence</p>
            <ol>
              <li><span>01</span><strong>Parse</strong><ArrowDownRight size={14} /></li>
              <li><span>02</span><strong>Build</strong><ArrowDownRight size={14} /></li>
              <li><span>03</span><strong>Handoff</strong><ArrowDownRight size={14} /></li>
              <li><span>04</span><strong>Finish</strong><ArrowDownRight size={14} /></li>
            </ol>
            <div className="hero-arena__sequence-status"><i /><span>Relay active</span></div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.95 }} className="hero-arena__footer">
          <span>01 / COMPETITIVE PROGRAMMING</span><span>Scroll to enter <ArrowDownRight size={15} /></span>
        </motion.div>
      </div>
    </section>
  );
};
