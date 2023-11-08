/* eslint-disable no-unused-vars */
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url(https://i.ibb.co/tHvGqYs/banner1.jpg)] bg-center bg-no-repeat bg-cover    lg:py-26 md:pt-44 pt-40">
        <div className="card-body flex items-center justify-center pb-36 ">
          <div>
            <h2 className=" justify-center text-2xl card-title lg:text-4xl md:text-4xl  font-bold text-white">
              Search Between More Then 50,000 Open Jobs.
            </h2>
            <p className=" text-center text-white  md:text-xl">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              <br />
              Nullam aliquam augue vitae nisi faucibus, utricies mtus accumsan.
              <br />
              Broder eletum diam sit amet opus vulputate. Praesent fermentum,
              <br />
              felis sit amet lobortis euismod, massa leo efficitur tortor, at
              lacinia mi orci eu purus.
            </p>
            <div className="text-center mt-8 ">
              <input
                type="text"
                placeholder="Search here...."
                className="input bg-transparent border-slate-500   rounded-none rounded-l-lg md:w-80 sm:w-44 w-40"
              />
              <button className="bg-[#18ad50] rounded-r-lg text-white p-3 px-6">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
