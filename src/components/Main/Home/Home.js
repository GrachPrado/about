import React from 'react';
import HomeTitle from './HomeTitle/HomeTitle';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeCoaches from './HomeCoaches/HomeCoaches';
import HomePartners from './HomePartners/HomePartners';

function Home() {
  return(
    <main>
    <HomeTitle />
    <HomeSlider />
    <HomeCoaches/>
    <HomePartners />
    </main>
)
}

export default Home;
