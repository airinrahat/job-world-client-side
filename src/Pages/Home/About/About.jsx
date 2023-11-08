/* eslint-disable no-unused-vars */
import React from "react";
import { FaCheck } from "react-icons/fa";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="lg:w-1/2 md:mb-6 relative">
          <img
            src="https://i.ibb.co/FDDxFkf/banner.jpg"
            className="w-4/4 rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/YyzGZg9/about.jpg"
            className="w-3/4 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 md:mt-32  mt-24 space-y-5 p-4">
          <h3 className="text-2xl text-[#18ad50] font-bold">About Us</h3>
          <h1 className="text-3xl font-bold">
            We Help To Get The Best Job And Find A Talent
          </h1>
          <p className="py-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-[#18ad50]"></FaCheck>
            Tempor erat elitr rebum at clita
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-[#18ad50]"></FaCheck>
            Aliqu diam amet diam et eos
          </p>
          <p className="flex items-center gap-2">
            <FaCheck className="text-[#18ad50]"></FaCheck>
            Clita duo justo magna dolore erat amet
          </p>

          <button className="btn bg-[#18ad50] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
