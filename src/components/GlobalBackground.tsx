import React from 'react';
import { motion } from 'framer-motion';

export const GlobalBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#060B14]"
      aria-hidden="true"
    >
      {/* =========================================================================
          LAYER 1: DEEP NAVY / GRAPHITE ATMOSPHERIC BASE GRADIENTS
          Seamless, multi-point atmospheric base across the entire page
          ========================================================================= */}
      <div className="absolute inset-0 bg-[#060B14]" />
      
      {/* Deep atmospheric lighting zones */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#0c182e,transparent),radial-gradient(ellipse_70%_50%_at_20%_45%,#08152b,transparent_70%),radial-gradient(ellipse_90%_70%_at_80%_75%,#071426,transparent_75%),radial-gradient(ellipse_100%_80%_at_50%_100%,#050c18,#060B14_80%)]" />

      {/* =========================================================================
          LAYER 2: DUAL-PITCH TECHNICAL GRID & HORIZONTAL SCAN/DATUM LINES
          Extremely subtle engineering grid pattern & data telemetry lines
          ========================================================================= */}
      {/* Base 48px Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30" />

      {/* Major 192px Datum Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '192px 192px',
        }}
      />

      {/* Subtle Horizontal Telemetry Lines */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-[0.035]">
        <div className="w-full border-b border-white/[0.15] mt-[14vh]" />
        <div className="w-full border-b border-[#00f0ff]/[0.25] mt-[32vh]" />
        <div className="w-full border-b border-white/[0.15] mt-[54vh]" />
        <div className="w-full border-b border-[#00f0ff]/[0.25] mt-[76vh]" />
        <div className="w-full border-b border-white/[0.15] mt-[92vh]" />
      </div>

      {/* =========================================================================
          LAYER 3: LARGE SOFT AMBIENT ATMOSPHERIC ILLUMINATION
          Restrained, slow drifting deep-blue and cyan radial glows creating 3D depth
          ========================================================================= */}
      {/* Upper Hero Ambient Glow */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[8%] left-[20%] w-[38rem] sm:w-[54rem] h-[38rem] sm:h-[54rem] bg-[#003875]/[0.18] rounded-full blur-[160px] sm:blur-[200px]"
      />

      {/* Middle Competition / Circuit Ambient Glow */}
      <motion.div
        animate={{
          x: [25, -25, 25],
          y: [18, -18, 18],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[42%] right-[15%] w-[32rem] sm:w-[48rem] h-[32rem] sm:h-[48rem] bg-[#00f0ff]/[0.035] rounded-full blur-[150px] sm:blur-[190px]"
      />

      {/* Lower Datum / Venue Ambient Glow */}
      <motion.div
        animate={{
          x: [-15, 15, -15],
          y: [12, -12, 12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[75%] left-[30%] w-[30rem] sm:w-[45rem] h-[30rem] sm:h-[45rem] bg-[#00224d]/[0.15] rounded-full blur-[140px] sm:blur-[180px]"
      />

      {/* =========================================================================
          LAYER 4 & 5: VECTOR DIGITAL RELAY CIRCUIT + RACE TRACK HIGHWAYS & PULSES
          Organic circuit traces, chamfered race track curves, and traveling photon pulses
          ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Cyan Relay Baton Pulse Gradient */}
          <linearGradient id="relayBatonPulse" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
            <stop offset="40%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="60%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>

          {/* Vertical Bus Highway Gradient */}
          <linearGradient id="trackBusPulse" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0055ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0055ff" stopOpacity="0" />
          </linearGradient>

          {/* Soft Photonic Glow Filter */}
          <filter id="relayGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ---------------------------------------------------------------------
            CIRCUIT BASE TRACES (Static, very subtle 0.04 - 0.07 opacity)
            --------------------------------------------------------------------- */}
        
        {/* Main Relay Route Track A (Sweeps through upper quadrant & center) */}
        <path
          d="M -100 180 L 320 180 L 460 320 L 1380 320 L 1520 180 L 2200 180"
          fill="none"
          stroke="#00f0ff"
          strokeOpacity="0.055"
          strokeWidth="1.2"
        />

        {/* Relay Route Track B (Mid-viewport chamfered race track bypass) */}
        <path
          d="M -150 560 L 520 560 L 680 720 L 1540 720 L 1700 560 L 2400 560"
          fill="none"
          stroke="#00f0ff"
          strokeOpacity="0.05"
          strokeWidth="1.2"
        />

        {/* Relay Route Track C (Lower-viewport race track loop) */}
        <path
          d="M 2300 940 L 1650 940 L 1490 780 L 720 780 L 560 940 L -100 940"
          fill="none"
          stroke="#00f0ff"
          strokeOpacity="0.045"
          strokeWidth="1.2"
        />

        {/* Left & Right Vertical Circuit Bus Tracks */}
        <line x1="8%" y1="0" x2="8%" y2="100%" stroke="#00f0ff" strokeOpacity="0.035" strokeWidth="1" strokeDasharray="3 9" />
        <line x1="92%" y1="0" x2="92%" y2="100%" stroke="#00f0ff" strokeOpacity="0.035" strokeWidth="1" strokeDasharray="3 9" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#ffffff" strokeOpacity="0.02" strokeWidth="1" strokeDasharray="2 16" />

        {/* Branch Circuit Connectors & Terminals */}
        <path d="M 460 320 L 460 480 L 580 600" fill="none" stroke="#00f0ff" strokeOpacity="0.04" strokeWidth="1" />
        <path d="M 1380 320 L 1380 480 L 1260 600" fill="none" stroke="#00f0ff" strokeOpacity="0.04" strokeWidth="1" />
        <path d="M 680 720 L 680 860 L 800 980" fill="none" stroke="#00f0ff" strokeOpacity="0.04" strokeWidth="1" />

        {/* Circuit Solder Pads / Relay Station Nodes (Subtle circular pads) */}
        <circle cx="320" cy="180" r="3" fill="none" stroke="#00f0ff" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="320" cy="180" r="1" fill="#00f0ff" fillOpacity="0.3" />
        
        <circle cx="1520" cy="180" r="3" fill="none" stroke="#00f0ff" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="1520" cy="180" r="1" fill="#00f0ff" fillOpacity="0.3" />

        <circle cx="520" cy="560" r="3" fill="none" stroke="#00f0ff" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="520" cy="560" r="1" fill="#00f0ff" fillOpacity="0.3" />

        <circle cx="1700" cy="560" r="3" fill="none" stroke="#00f0ff" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="1700" cy="560" r="1" fill="#00f0ff" fillOpacity="0.3" />

        {/* Technical Coordinate Crosshairs (+) at key junctions */}
        <g stroke="#00f0ff" strokeOpacity="0.15" strokeWidth="1">
          <line x1="455" y1="320" x2="465" y2="320" />
          <line x1="460" y1="315" x2="460" y2="325" />
          
          <line x1="1375" y1="320" x2="1385" y2="320" />
          <line x1="1380" y1="315" x2="1380" y2="325" />

          <line x1="675" y1="720" x2="685" y2="720" />
          <line x1="680" y1="715" x2="680" y2="725" />
        </g>

        {/* ---------------------------------------------------------------------
            ANIMATED TRAVELING RELAY SIGNAL PULSES ("The Relay Baton")
            Slow, restrained, and elegant photonic pulses running through the circuit
            --------------------------------------------------------------------- */}
        
        {/* Relay Baton Pulse 1: Upper Highway Track (14s cycle) */}
        <motion.path
          d="M -200 180 L 320 180 L 460 320 L 1380 320 L 1520 180 L 2200 180"
          fill="none"
          stroke="url(#relayBatonPulse)"
          strokeWidth="1.6"
          filter="url(#relayGlowFilter)"
          initial={{ pathOffset: 0, strokeDasharray: "160 2200" }}
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Relay Baton Pulse 2: Mid Highway Track Reverse (16s cycle, offset delay) */}
        <motion.path
          d="M 2400 560 L 1700 560 L 1540 720 L 680 720 L 520 560 L -150 560"
          fill="none"
          stroke="url(#relayBatonPulse)"
          strokeWidth="1.6"
          filter="url(#relayGlowFilter)"
          initial={{ pathOffset: 0, strokeDasharray: "180 2400" }}
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
        />

        {/* Relay Baton Pulse 3: Lower Highway Track Loop (18s cycle, offset delay) */}
        <motion.path
          d="M -100 940 L 560 940 L 720 780 L 1490 780 L 1650 940 L 2300 940"
          fill="none"
          stroke="url(#relayBatonPulse)"
          strokeWidth="1.6"
          filter="url(#relayGlowFilter)"
          initial={{ pathOffset: 0, strokeDasharray: "170 2300" }}
          animate={{ pathOffset: [0, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 9,
          }}
        />

        {/* Vertical Left Bus Pulse (Downward Stream) */}
        <motion.line
          x1="8%"
          y1="-300"
          x2="8%"
          y2="1600"
          stroke="url(#trackBusPulse)"
          strokeWidth="1.4"
          filter="url(#relayGlowFilter)"
          initial={{ strokeDasharray: "120 1800", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: [-1800, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Vertical Right Bus Pulse (Downward Stream) */}
        <motion.line
          x1="92%"
          y1="-300"
          x2="92%"
          y2="1600"
          stroke="url(#trackBusPulse)"
          strokeWidth="1.4"
          filter="url(#relayGlowFilter)"
          initial={{ strokeDasharray: "120 1800", strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: [-1800, 0] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
            delay: 6,
          }}
        />
      </svg>

      {/* =========================================================================
          LAYER 6: SPARSE FLOATING DATA NODES / PARTICLES
          Very subtle, slow-breathing cyan and white telemetry particles
          ========================================================================= */}
      <div className="absolute inset-0">
        {[
          { top: '14%', left: '18%', size: 'w-1 h-1', color: 'bg-[#00f0ff]', delay: 0 },
          { top: '24%', left: '84%', size: 'w-1 h-1', color: 'bg-white', delay: 2 },
          { top: '39%', left: '12%', size: 'w-1.5 h-1.5', color: 'bg-[#00f0ff]', delay: 1 },
          { top: '48%', left: '76%', size: 'w-1 h-1', color: 'bg-white', delay: 3.5 },
          { top: '62%', left: '22%', size: 'w-1 h-1', color: 'bg-[#00f0ff]', delay: 1.5 },
          { top: '71%', left: '88%', size: 'w-1.5 h-1.5', color: 'bg-white', delay: 4 },
          { top: '84%', left: '32%', size: 'w-1 h-1', color: 'bg-[#00f0ff]', delay: 2.5 },
          { top: '93%', left: '68%', size: 'w-1 h-1', color: 'bg-white', delay: 0.5 },
        ].map((node, idx) => (
          <motion.div
            key={idx}
            animate={{
              opacity: [0.12, 0.45, 0.12],
              scale: [0.85, 1.15, 0.85],
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 6 + idx * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: node.delay,
            }}
            style={{ top: node.top, left: node.left }}
            className={`absolute ${node.size} ${node.color} rounded-full shadow-[0_0_8px_rgba(0,240,255,0.6)]`}
          />
        ))}
      </div>
    </div>
  );
};
