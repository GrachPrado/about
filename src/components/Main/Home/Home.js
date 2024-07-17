import React,{ Suspense } from 'react';
import { lazy } from 'react';

const HomeTitle = lazy(() => import('./HomeTitle/HomeTitle'));
const HomeSlider = lazy(() => import('./HomeSlider/HomeSlider'));
const HomeCoaches = lazy(() => import('./HomeCoaches/HomeCoaches'));
const HomePartners = lazy(() => import('./HomePartners/HomePartners'));

function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeTitle />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeSlider />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeCoaches />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePartners />
      </Suspense>
    </main>
  );
}

export default Home;