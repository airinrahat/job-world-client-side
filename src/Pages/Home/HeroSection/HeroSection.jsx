/* eslint-disable no-unused-vars */
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/vkNS0br/bgimg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md py-6">
            <h1 className=" py-5  text-4xl font-bold">
              Create Profile That Works
            </h1>
            <p className="pb-5">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Nullam aliquam augue vitae nisi faucibus, utricies mtus accumsan.
              Broder eletum diam sit amet opus vulputate. Praesent fermentum,
              felis sit amet lobortis euismod, massa leo efficitur tortor, at
              lacinia mi orci eu purus.
            </p>
            <button className="btn bg-[#18ad50] border-none  text-white">
              Get Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
