import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useCinematicScroll = () => {
  useEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const hero = document.querySelector<HTMLElement>('#home');
        const leadership = document.querySelector<HTMLElement>('#leadership');

        if (hero) {
          gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          })
            .to('.hero-parallax-copy', { yPercent: -12, opacity: 0.34, ease: 'none' }, 0)
            .to('.network-hero__canvas', { scale: 1.04, yPercent: 6, opacity: 0.55, ease: 'none' }, 0)
            .to('.network-hero__footer', { yPercent: 26, opacity: 0, ease: 'none' }, 0);
        }

        if (leadership) {
          const heading = leadership.querySelector<HTMLElement>('.leadership-heading');
          const stage = leadership.querySelector<HTMLElement>('.leadership-stage');
          const navigation = leadership.querySelector<HTMLElement>('.leader-navigation');

          gsap.timeline({
            scrollTrigger: {
              trigger: leadership,
              start: 'top 82%',
              end: 'top 38%',
              scrub: 0.55,
            },
          })
            .fromTo(heading, { y: 38, opacity: 0.2 }, { y: 0, opacity: 1, ease: 'none' }, 0)
            .fromTo(stage, { y: 54, opacity: 0.18, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, ease: 'none' }, 0.08)
            .fromTo(navigation, { y: 16, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.26);
        }

        const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => window.cancelAnimationFrame(refreshFrame);
      });

      return () => media.revert();
    });

    return () => context.revert();
  }, []);
};
