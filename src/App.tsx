import React from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { LeadershipShowcase } from './sections/LeadershipShowcase';
import { About } from './sections/About';
import { EventCountdownSection } from './sections/EventCountdownSection';
import { Prizes } from './sections/Prizes';
import { Rounds } from './sections/Rounds';
import { Rules } from './sections/Rules';
import { WhyRelay } from './sections/WhyRelay';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Venue } from './sections/Venue';
import { Footer } from './components/Footer';
import { useCinematicScroll } from './hooks/useCinematicScroll';

export const App: React.FC = () => {
  useCinematicScroll();

  return (
    <div className="event-page relative min-h-screen flex flex-col font-body overflow-x-hidden">

      {/* 2. STICKY INSTITUTIONAL HEADER */}
      <Header />

      {/* The existing content is preserved inside four desktop cinematic chapters. */}
      <main className="relative z-10 flex-1 w-full flex flex-col">
        <div className="cinematic-group cinematic-group--opening" data-cinematic-group="opening">
          <div className="cinematic-scene cinematic-scene--hero" data-cinematic-scene><Hero /></div>
          <div className="cinematic-scene cinematic-scene--leaders" data-cinematic-scene><LeadershipShowcase /></div>
        </div>

        <div className="cinematic-group cinematic-group--challenge" data-cinematic-group="challenge">
          <div className="cinematic-scene" data-cinematic-scene><About /></div>
          <div className="cinematic-scene" data-cinematic-scene><WhyRelay /></div>
          <div className="cinematic-scene" data-cinematic-scene><EventCountdownSection /></div>
          <div className="cinematic-scene" data-cinematic-scene><Prizes /></div>
        </div>

        <div className="cinematic-group cinematic-group--competition" data-cinematic-group="competition">
          <div className="cinematic-scene" data-cinematic-scene><Rounds /></div>
          <div className="cinematic-scene" data-cinematic-scene><Rules /></div>
        </div>

        <div className="cinematic-closing" data-cinematic-closing>
          <FAQ />
          <Contact />
          <Venue />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;

