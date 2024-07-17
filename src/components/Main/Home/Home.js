import React, { Suspense, useEffect } from 'react';

// Lazy load components
const HomeTitle = React.lazy(() => import('./HomeTitle/HomeTitle'));
const HomeSlider = React.lazy(() => import('./HomeSlider/HomeSlider'));
const HomeCoaches = React.lazy(() => import('./HomeCoaches/HomeCoaches'));
const HomePartners = React.lazy(() => import('./HomePartners/HomePartners'));

function Home() {
  useEffect(() => {
    // Preload all components when Home component mounts
    import('./HomeTitle/HomeTitle');
    import('./HomeSlider/HomeSlider');
    import('./HomeCoaches/HomeCoaches');
    import('./HomePartners/HomePartners');
  }, []);

  return (
    <main>
      <Suspense fallback={<div>Loading content...</div>}>
        <HomeTitle />
        <HomeSlider />
        <HomeCoaches />
        <HomePartners />
      </Suspense>
    </main>
  );
}

export default Home;
