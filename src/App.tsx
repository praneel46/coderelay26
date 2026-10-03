import React, { lazy, Suspense, useCallback, useState } from 'react';
import { IntroSplash } from './components/IntroSplash';
import { useIntroGate } from './hooks/useIntroGate';

// Prefetch the site bundle immediately, but do not mount it until the intro is ready.
const siteContentPromise = import('./SiteContent');
const SiteContent = lazy(() => siteContentPromise);

export const App: React.FC = () => {
  const { showIntro, completeIntro } = useIntroGate();
  const [siteVisible, setSiteVisible] = useState(!showIntro);
  const revealSite = useCallback(() => setSiteVisible(true), []);

  return (
    <>
      {siteVisible && (
        <Suspense fallback={null}>
          <SiteContent />
        </Suspense>
      )}
      {showIntro && <IntroSplash onReveal={revealSite} onComplete={completeIntro} />}
    </>
  );
};

export default App;

