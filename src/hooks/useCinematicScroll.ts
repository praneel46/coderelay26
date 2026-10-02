import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCinematicScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      const hero = document.querySelector('#home');

      if (hero) {
        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });

        heroTimeline
          .to('.hero-parallax-copy', { yPercent: -16, opacity: 0.42, ease: 'none' }, 0)
          .to('.hero-parallax-jubilee', { xPercent: 14, yPercent: 24, scale: 0.8, ease: 'none' }, 0)
          .to('.hero-signal-field', { yPercent: -11, xPercent: -3, ease: 'none' }, 0)
          .to('.hero-footnote', { yPercent: -38, opacity: 0, ease: 'none' }, 0);
      }

      gsap.utils.toArray<HTMLElement>('.story-panel, #about, #prizes, #rounds, #contact').forEach((section) => {
        const content = section.querySelector<HTMLElement>('.leadership-section__inner, .max-w-6xl, .max-w-5xl, .max-w-4xl');
        if (!content) return;

        gsap.fromTo(content, { y: 34, opacity: 0.72 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 76%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('.coordinator-card').forEach((card, index) => {
        const signal = card.querySelector<HTMLElement>('.coordinator-card__signal');
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
        });

        timeline.fromTo(card, { y: 44, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.72,
          delay: index * 0.1,
          ease: 'power3.out',
        });

        if (signal) {
          timeline.fromTo(signal, { scaleX: 0 }, {
            scaleX: 1,
            duration: 0.55,
            transformOrigin: 'left center',
            ease: 'power2.out',
          }, '-=0.25');
        }
      });

      ScrollTrigger.refresh();
    });

    return () => context.revert();
  }, []);
};
