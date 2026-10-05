import React, { useEffect, useRef } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react';
import { useRegistrationModal } from '../components/RegistrationModal';

const revealEase = [0.16, 1, 0.3, 1] as const;

interface NetworkNode {
  x: number;
  y: number;
  phase: number;
  connected: boolean;
}

interface NetworkEdge {
  from: NetworkNode;
  to: NetworkNode;
  phase: number;
}

const NetworkCanvas: React.FC = () => {
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
    let nodes: NetworkNode[] = [];
    let edges: NetworkEdge[] = [];

    const wave = (x: number, y: number, time: number) => {
      const value = Math.sin(((x + (y * 0.6)) / 260) - (time / 1500));
      return value > 0 ? value ** 4 : 0;
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const gap = width < 620 ? 76 : 92;
      const columns = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;
      nodes = [];
      edges = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          nodes.push({
            x: (column * gap) + ((Math.random() - 0.5) * 26),
            y: (row * gap) + ((Math.random() - 0.5) * 26),
            phase: Math.random() * Math.PI * 2,
            connected: false,
          });
        }
      }

      const connect = (from: NetworkNode | undefined, to: NetworkNode | undefined) => {
        if (!from || !to) return;
        from.connected = true;
        to.connected = true;
        edges.push({ from, to, phase: Math.random() * Math.PI * 2 });
      };

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const current = nodes[(row * columns) + column];
          if (Math.random() < 0.6) connect(current, nodes[(row * columns) + column + 1]);
          if (Math.random() < 0.6) connect(current, nodes[((row + 1) * columns) + column]);
          if (Math.random() < 0.22) connect(current, nodes[((row + 1) * columns) + column + 1]);
          if (Math.random() < 0.22 && column > 0) connect(current, nodes[((row + 1) * columns) + column - 1]);
        }
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      edges.forEach((edge) => {
        const midpointX = (edge.from.x + edge.to.x) / 2;
        const midpointY = (edge.from.y + edge.to.y) / 2;
        const glow = wave(midpointX, midpointY, time);
        context.lineWidth = 1;
        context.strokeStyle = `rgba(140, 150, 255, ${0.08 + (0.035 * Math.sin((time / 1800) + edge.phase))})`;
        context.beginPath();
        context.moveTo(edge.from.x, edge.from.y);
        context.lineTo(edge.to.x, edge.to.y);
        context.stroke();

        if (glow > 0.02) {
          context.lineWidth = 1.35;
          context.strokeStyle = midpointX < width / 2 ? `rgba(34, 211, 238, ${glow * 0.62})` : `rgba(167, 139, 250, ${glow * 0.58})`;
          context.beginPath();
          context.moveTo(edge.from.x, edge.from.y);
          context.lineTo(edge.to.x, edge.to.y);
          context.stroke();
        }
      });

      nodes.forEach((node) => {
        if (!node.connected) return;
        const glow = wave(node.x, node.y, time);
        context.beginPath();
        context.fillStyle = `rgba(186, 201, 255, ${0.22 + (0.11 * Math.sin((time / 1000) + node.phase)) + (glow * 0.5)})`;
        context.arc(node.x, node.y, 1.6 + (glow * 1.4), 0, Math.PI * 2);
        context.fill();
        if (glow > 0.05) {
          context.beginPath();
          context.strokeStyle = `rgba(34, 211, 238, ${glow * 0.48})`;
          context.arc(node.x, node.y, 5 + (glow * 4), 0, Math.PI * 2);
          context.stroke();
        }
      });

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

  return <canvas ref={canvasRef} className="network-hero__canvas" aria-hidden="true" />;
};

export const Hero: React.FC = () => {
  const { openRegistration } = useRegistrationModal();
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
      <section id="home" ref={arenaRef} className="event-hero hero-arena network-hero" aria-label="Vigyantra 2026 Code Relay" onPointerMove={handlePointerMove}>
        <div className="network-hero__glow" aria-hidden="true" />
        <NetworkCanvas />
        <div className="network-hero__content hero-parallax-copy">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.15, ease: revealEase }} className="network-hero__badge"><i /><span>&lt;Vigyantra 2026/&gt;</span></motion.div>
          <h1 className="network-hero__title" aria-label="Code Relay">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, delay: 0.32, ease: revealEase }}>Code</motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, delay: 0.46, ease: revealEase }}>Relay</motion.span>
          </h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.62, ease: revealEase }} className="network-hero__tags" aria-label="Think, Code, Debug, Relay">
            <span>Think.</span><span>Code.</span><span>Debug.</span><span>Relay.</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0.78, ease: revealEase }} className="network-hero__actions">
            <button type="button" onClick={openRegistration} className="network-hero__primary">Register now <ArrowUpRight size={18} /></button>
            <a href="#about" className="network-hero__secondary">Event overview <FileText size={17} /></a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55, delay: 0.9, ease: revealEase }} className="network-hero__footer"><span>SJB Institute of Technology</span><span>Scroll to enter <ArrowDownRight size={15} /></span></motion.div>
      </section>
    </MotionConfig>
  );
};
