/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner/Banner";
import About from "../About/About";
import JobCategory from "../JobCategory/JobCategory";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <JobCategory></JobCategory>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
