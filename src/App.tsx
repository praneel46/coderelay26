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

      {/* Main event content: each chapter carries its own atmosphere. */}
      <main className="relative z-10 flex-1 w-full flex flex-col">
        {/* HERO SECTION */}
        <Hero />

        {/* SWAMIJI LEADERSHIP SHOWCASE */}
        <LeadershipShowcase />

        {/* 01 ABOUT / COMPETITION OVERVIEW */}
        <About />

        {/* DEDICATED EVENT COUNTDOWN SECTION */}
        <EventCountdownSection />

        {/* 02 PRIZES / BOUNTY POOL */}
        <Prizes />

        {/* 03 ROUNDS / EXECUTION PIPELINE */}
        <Rounds />

        {/* 04 RULES / EVENT PROTOCOL */}
        <Rules />

        {/* 05 WHY CODE RELAY? / ARCHITECTURAL VALUE */}
        <WhyRelay />

        {/* 06 FAQ / KNOWLEDGE BASE */}
        <FAQ />

        {/* 07 CONTACT / EVENT TEAM */}
        <Contact />

        {/* 08 VENUE / CAMPUS DATUM POINT */}
        <Venue />
      </main>

      {/* 4. MINIMAL FOOTER WITH BACK TO TOP */}
      <Footer />
    </div>
  );
};

export default App;

