import React from "react";
import AboutTitle from "./AboutTitle/AboutTitle";
import AboutCoaches from "./AboutCoaches/AboutCoaches";
import AboutMotivation from "./AboutMotivation/AboutMotivation";
import AboutGallery from './AboutGallery/AboutGallery';

export default function AboutPage() {
  return (
    <>
    <AboutTitle />
    <AboutCoaches />
    <AboutMotivation />
    <AboutGallery />
    </>
  );
}
