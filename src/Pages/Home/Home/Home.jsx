/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner/Banner";
import About from "../About/About";
import JobCategory from "../JobCategory/JobCategory";
import HeroSection from "../HeroSection/HeroSection";
import TabByJobs from "../TabByJobs/TabByJobs";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <TabByJobs></TabByJobs>
      <JobCategory></JobCategory>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Home;
