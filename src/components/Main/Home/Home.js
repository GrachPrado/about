import React, { Suspense, useEffect } from 'react';

// Preload Components
const preloadComponent = (component) => component.preload && component.preload();

// Lazy load components
const HomeTitle = React.lazy(() => import('./HomeTitle/HomeTitle'));
const HomeSlider = React.lazy(() => import('./HomeSlider/HomeSlider'));
const HomeCoaches = React.lazy(() => import('./HomeCoaches/HomeCoaches'));
const HomePartners = React.lazy(() => import('./HomePartners/HomePartners'));

function Home() {
  useEffect(() => {
    // Preload components when Home component mounts
    preloadComponent(HomeSlider);
    preloadComponent(HomeCoaches);
    preloadComponent(HomePartners);
  }, []);

  return (
    <main>
      <Suspense fallback={<div>Loading title...</div>}>
        <HomeTitle />
      </Suspense>
      <Suspense fallback={<div>Loading slider...</div>}>
        <HomeSlider />
      </Suspense>
      <Suspense fallback={<div>Loading coaches...</div>}>
        <HomeCoaches />
      </Suspense>
      <Suspense fallback={<div>Loading partners...</div>}>
        <HomePartners />
      </Suspense>
    </main>
  );
}

export default Home;
