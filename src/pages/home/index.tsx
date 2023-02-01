import React from "react";
import Features from "../../components/home/features";
import Hero from "../../components/home/hero-section";
import ImageBreak from "../../components/home/image-break";
import RoadMap from "../../components/home/roadmap";
import WhatIsShonen from "../../components/home/what-is-shonen";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ImageBreak />
      <WhatIsShonen />
      <RoadMap />
    </>
  );
}

export default Home;
