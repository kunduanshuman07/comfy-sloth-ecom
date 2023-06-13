import React from 'react'
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Contact/>
    </main>
  )
}

export default HomePage
