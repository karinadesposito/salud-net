// src/pages/Home.jsx
import React from "react";
import useParallax from "../hooks/useParallax";
import Hero from "../components/Hero.jsx";
import Offer from "../components/Offer.jsx";
import WhyPersonalize from "../components/WhyPersonalize.jsx";
import Showcase from "../components/Showcase.jsx";
import Quote from "../components/Quote.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  useParallax(".has-parallax", 0.20); // bajá a 0.18 si lo querés casi imperceptible

  return (
    <>
      <Hero />
      <Offer />
      <WhyPersonalize />
      <Showcase />
      <Quote />
      <Contact />
    </>
  );
}
