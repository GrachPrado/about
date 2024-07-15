// CHECKED 15/07/2024
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Main/Home/Home';
import Price from '../Main/Price/Price';
import Schedule from '../Main/Schedule/Schedule';
import About from '../Main/About/About';
import Grappling from '../Main/MartialArts/Grappling';
import Thaibox from '../Main/MartialArts/Thaibox';
import MMA from '../Main/MartialArts/MMA';
import MMAChildren from '../Main/MartialArts/MMAChildren';
import Contacts from '../Main/Contact/Contacts';
import FAQ from '../Main/FAQ/FAQ';
import NotFound from '../Main/NotFound'; // Assuming you have a NotFound component

function HeaderRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/price" element={<Price />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/about" element={<About />} />
      <Route path="/grappling" element={<Grappling />} />
      <Route path="/thaibox" element={<Thaibox />} />
      <Route path="/mma" element={<MMA />} />
      <Route path='/MMAChildren' element={<MMAChildren />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default HeaderRoutes;
