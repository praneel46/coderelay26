import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ChapterName = 'opening' | 'challenge' | 'competition';

const targetProgress: Record<string, { chapter?: ChapterName; progress?: number }> = {
  '#home': { chapter: 'opening', progress: 0 },
  '#leadership': { chapter: 'opening', progress: 0.82 },
  '#about': { chapter: 'challenge', progress: 0 },
  '#why-relay': { chapter: 'challenge', progress: 0.36 },
  '#event-countdown': { chapter: 'challenge', progress: 0.64 },
  '#prizes': { chapter: 'challenge', progress: 0.91 },
  '#rounds': { chapter: 'competition', progress: 0 },
  '#rules': { chapter: 'competition', progress: 1 },
};

const desktopMotionQuery = '(min-width: 900px) and (prefers-reduced-motion: no-preference)';

const isDesktopMotion = () =>
  window.matchMedia(desktopMotionQuery).matches;

export const useCinematicScroll = () => {
  useEffect(() => {
    const navigate = (hash: string, immediate = false) => {
      const target = targetProgress[hash];
      const targetElement = document.querySelector<HTMLElement>(hash);

      if (!target || !isDesktopMotion()) {
        targetElement?.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth', block: 'start' });
        return;
      }

      const trigger = ScrollTrigger.getById('chapter-' + target.chapter);
      if (!trigger) {
        targetElement?.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth', block: 'start' });
        return;
      }

      const position = trigger.start + ((trigger.end - trigger.start) * (target.progress ?? 0));
      window.history.replaceState(null, '', hash);
      window.scrollTo({ top: position, behavior: immediate ? 'auto' : 'smooth' });
    };

    const onNavigate = (event: Event) => navigate((event as CustomEvent<string>).detail);
    window.addEventListener('cinematic:navigate', onNavigate);

    let media: ReturnType<typeof gsap.matchMedia> | undefined;
    const context = gsap.context(() => {
      media = gsap.matchMedia();
      media.add(desktopMotionQuery, () => {
        const chapters = Array.from(document.querySelectorAll<HTMLElement>('[data-cinematic-group]'));
        const timelines = new Map<ChapterName, gsap.core.Timeline>();

        chapters.forEach((chapter) => {
          const name = chapter.dataset.cinematicGroup as ChapterName;
          const scenes = Array.from(chapter.querySelectorAll<HTMLElement>('[data-cinematic-scene]'));
          if (!name || scenes.length < 2) return;

          gsap.set(scenes.slice(1), { yPercent: 105, opacity: 0, scale: 0.96, transformOrigin: 'center center' });
          const scrollLength = name === 'opening' ? 2 : name === 'challenge' ? 4.2 : 3.7;
          const timeline = gsap.timeline({
            scrollTrigger: {
              id: 'chapter-' + name,
              trigger: chapter,
              start: 'top top',
              end: () => '+=' + (window.innerHeight * scrollLength),
              scrub: 0.85,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          timelines.set(name, timeline);

          scenes.slice(1).forEach((scene, index) => {
            const previous = scenes[index];
            const position = name === 'opening'
              ? 0.55 + index
              : name === 'challenge'
                ? 0.5 + (index * 1.15)
                : 2.35 + index;
            timeline
              .to(previous, { yPercent: -18, opacity: 0.16, scale: 0.93, duration: 1, ease: 'none' }, position)
              .to(scene, { yPercent: 0, opacity: 1, scale: 1, duration: 1, ease: 'none' }, position);
          });
        });

        const roundItems = Array.from(document.querySelectorAll<HTMLElement>('.round-cinematic-item'));
        if (roundItems.length) {
          gsap.set(roundItems.slice(1), { yPercent: 48, opacity: 0, scale: 0.94 });
          const competitionTimeline = timelines.get('competition');
          if (competitionTimeline) {
            roundItems.slice(1).forEach((item, index) => {
              const position = (index + 1) * 0.46;
              competitionTimeline.to(roundItems[index], { opacity: 0.18, xPercent: -18, duration: 0.32, ease: 'none' }, position)
                .to(item, { yPercent: 0, opacity: 1, scale: 1, duration: 0.32, ease: 'none' }, position);
            });
          }
        }

        gsap.utils.toArray<HTMLElement>('[data-cinematic-closing] > section, footer').forEach((section) => {
          gsap.fromTo(section, { y: 48, opacity: 0.55 }, {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top 88%', end: 'top 46%', scrub: true },
          });
        });

        gsap.delayedCall(0, () => ScrollTrigger.refresh());
      });
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize, { passive: true });

    const hash = window.location.hash;
    if (hash) window.setTimeout(() => navigate(hash, true), 120);

    return () => {
      media?.revert();
      context.revert();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('cinematic:navigate', onNavigate);
    };
  }, []);
};
