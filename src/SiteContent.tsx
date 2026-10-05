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
import { RegistrationCTA } from './sections/RegistrationCTA';
import { CoreCrew } from './sections/CoreCrew';
import { Venue } from './sections/Venue';
import { Footer } from './components/Footer';
import { RegistrationProvider } from './components/RegistrationModal';
import { useCinematicScroll } from './hooks/useCinematicScroll';

const SiteContent: React.FC = () => {
  useCinematicScroll();

  return (
    <RegistrationProvider>
      <div className="event-page relative min-h-screen flex flex-col font-body overflow-x-hidden">
        <Header />
        <main className="relative z-10 flex-1 w-full flex flex-col">
          <Hero />
          <LeadershipShowcase />
          <About />
          <EventCountdownSection />
          <Prizes />
          <Rounds />
          <Rules />
          <WhyRelay />
          <FAQ />
          <RegistrationCTA />
          <CoreCrew />
          <Venue />
        </main>
        <Footer />
      </div>
    </RegistrationProvider>
  );
};

export default SiteContent;
