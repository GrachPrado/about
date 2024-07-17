import React,{ Suspense } from 'react';
import HomeTitle from './HomeTitle/HomeTitle';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeCoaches from './HomeCoaches/HomeCoaches';
import HomePartners from './HomePartners/HomePartners';

function Home() {
  return(
    <main>
    <Suspense fallback={<div>Loading...</div>}>
    <HomeTitle />
    </Suspense>
    <HomeSlider />
    <HomeCoaches/>
    <HomePartners />
    </main>
)
}

export default Home;
