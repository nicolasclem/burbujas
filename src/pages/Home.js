import React from "react";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Spaces from "../components/Spaces";
import Prices from "../components/Prices";
import ReviewSection from "../components/ReviewSection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Spaces />
      <Prices />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
