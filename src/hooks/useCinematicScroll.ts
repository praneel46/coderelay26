import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCinematicScroll = () => {
  useEffect(() => {
    // 1. Check for reduced motion accessibility preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =========================================================================
      // DESKTOP: CINEMATIC DEPTH & PINNED SECTION TRANSITIONS (≥ 1024px)
      // =========================================================================
      mm.add('(min-width: 1024px)', () => {
        // Major visual transition sections
        const majorTransitions = [
          {
            id: '#home',
            innerSelector: '#home > div',
            pin: true,
            pinDuration: '+=25%',
            scale: 0.975,
            opacity: 0.88,
            y: -25,
          },
          {
            id: '#leadership',
            innerSelector: '#leadership > div.max-w-6xl',
            pin: false,
            scale: 0.98,
            opacity: 0.90,
            y: -20,
          },
          {
            id: '#about',
            innerSelector: '#about > div.max-w-6xl',
            pin: false,
            scale: 0.98,
            opacity: 0.90,
            y: -20,
          },
          {
            id: '#event-countdown',
            innerSelector: '#event-countdown > div.max-w-4xl',
            pin: false,
            scale: 0.98,
            opacity: 0.92,
            y: -15,
          },
          {
            id: '#prizes',
            innerSelector: '#prizes > div.max-w-5xl',
            pin: false,
            scale: 0.98,
            opacity: 0.90,
            y: -20,
          },
          {
            id: '#rounds',
            innerSelector: '#rounds > div.max-w-4xl',
            pin: false,
            scale: 0.98,
            opacity: 0.90,
            y: -20,
          },
          {
            id: '#why-relay',
            innerSelector: '#why-relay > div.max-w-5xl',
            pin: false,
            scale: 0.98,
            opacity: 0.90,
            y: -20,
          },
        ];

        majorTransitions.forEach((item) => {
          const sectionEl = document.querySelector(item.id);
          const innerEl = document.querySelector(item.innerSelector);

          if (!sectionEl || !innerEl) return;

          if (item.pin) {
            // Pinned camera transition for Hero
            gsap.to(innerEl, {
              scale: item.scale,
              opacity: item.opacity,
              y: item.y,
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: sectionEl,
                start: 'top top',
                end: item.pinDuration || '+=30%',
                pin: true,
                pinSpacing: true,
                scrub: 0.8,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
          } else {
            // Scrubbed depth recession as user scrolls away
            gsap.to(innerEl, {
              scale: item.scale,
              opacity: item.opacity,
              y: item.y,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: sectionEl,
                start: 'bottom 85%',
                end: 'bottom top',
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            });
          }
        });
      });

      // =========================================================================
      // TABLET: SUBTLE SCRUBBED TRANSITION (768px - 1023px)
      // =========================================================================
      mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
        const sections = [
          { id: '#home', inner: '#home > div' },
          { id: '#leadership', inner: '#leadership > div.max-w-6xl' },
          { id: '#about', inner: '#about > div.max-w-6xl' },
          { id: '#prizes', inner: '#prizes > div.max-w-5xl' },
          { id: '#why-relay', inner: '#why-relay > div.max-w-5xl' },
        ];

        sections.forEach(({ id, inner }) => {
          const sectionEl = document.querySelector(id);
          const innerEl = document.querySelector(inner);
          if (!sectionEl || !innerEl) return;

          gsap.to(innerEl, {
            scale: 0.985,
            opacity: 0.92,
            y: -15,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sectionEl,
              start: 'bottom 80%',
              end: 'bottom top',
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      // =========================================================================
      // MOBILE: ULTRA-LIGHT FLUID SCROLL (< 768px) — NO PINNING
      // =========================================================================
      mm.add('(max-width: 767px)', () => {
        const sections = [
          { id: '#home', inner: '#home > div' },
          { id: '#leadership', inner: '#leadership > div.max-w-6xl' },
          { id: '#about', inner: '#about > div.max-w-6xl' },
          { id: '#prizes', inner: '#prizes > div.max-w-5xl' },
          { id: '#why-relay', inner: '#why-relay > div.max-w-5xl' },
        ];

        sections.forEach(({ id, inner }) => {
          const sectionEl = document.querySelector(id);
          const innerEl = document.querySelector(inner);
          if (!sectionEl || !innerEl) return;

          gsap.to(innerEl, {
            scale: 0.99,
            opacity: 0.95,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionEl,
              start: 'bottom 90%',
              end: 'bottom 10%',
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          });
        });
      });

      // Refresh ScrollTrigger once DOM layout finishes rendering
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert(); // Completely cleans up all ScrollTriggers and animations
    };
  }, []);
};
