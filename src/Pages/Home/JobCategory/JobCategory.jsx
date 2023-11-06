/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaArchive,
  FaBriefcase,
  FaBriefcaseMedical,
  FaDigitalTachograph,
  FaPencilRuler,
  FaWordpress,
} from "react-icons/fa";

const JobCategory = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-5 py-16 lg:px-0 px-10">
      <h2 className="lg:text-3xl text-xl font-bold  text-center">
        Job Service
      </h2>
      <p className=" text-center mt-5 mb-7">
        Lorem Ipsum is simply dummy text printing and type setting industry
        <br />
        Lorem Ipsum been industry standard dummy text ever since when unknown
        printer took a galley.
      </p>
      <div className="grid lg:grid-cols-3 gap-10  grid-cols-1">
        <div className="card glass w-full shadow-xl border">
          <div className="card-body text-center ">
            {/* <h2 className="card-title text-xl font-bold "> */}{" "}
            <span className="flex justify-center items-center text-7xl  text-white  ">
              <FaBriefcase className="bg-[#18ad50] p-3  rounded-lg  text-white "></FaBriefcase>
            </span>
            <h4 className="text-gray-400 "> Web & Software Dev</h4>
            <p className="text-[#18ad50] ">122 Jobs</p>
          </div>
        </div>

        <div className="card glass w-full shadow-xl border">
          <div className="card-body text-center ">
            {/* <h2 className="card-title text-xl font-bold "> */}{" "}
            <span className="flex justify-center items-center  text-7xl  text-white  ">
              <FaBriefcaseMedical className="bg-[#18ad50] p-3 rounded-lg   text-white "></FaBriefcaseMedical>
            </span>
            <h4 className="text-gray-400 "> Accounting & Consulting</h4>
            <p className="text-[#18ad50] ">222 Jobs</p>
          </div>
        </div>

        <div className="card glass w-full shadow-xl border">
          <div className="card-body text-center ">
            {/* <h2 className="card-title text-xl font-bold "> */}{" "}
            <span className="flex justify-center items-center text-7xl  text-white  ">
              <FaPencilRuler className="bg-[#18ad50] p-3  rounded-lg  text-white "></FaPencilRuler>
            </span>
            <h4 className="text-gray-400 "> Writing & Translations</h4>
            <p className="text-[#18ad50] ">300 Jobs</p>
          </div>
        </div>

        <div className="card glass w-full shadow-xl border">
          <div className="card-body text-center ">
            {/* <h2 className="card-title text-xl font-bold "> */}{" "}
            <span className="flex justify-center items-center text-7xl  text-white  ">
              <FaArchive className="bg-[#18ad50] p-3  rounded-lg  text-white "></FaArchive>
            </span>
            <h4 className="text-gray-400 "> Sales & Marketing</h4>
            <p className="text-[#18ad50] ">120 Jobs</p>
          </div>
        </div>

        <div className="card glass w-full shadow-xl border">
          <div className="card-body text-center ">
            {/* <h2 className="card-title text-xl font-bold "> */}{" "}
            <span className="flex justify-center items-center text-7xl  text-white  ">
              <FaDigitalTachograph className="bg-[#18ad50] p-3  rounded-lg  text-white "></FaDigitalTachograph>
            </span>
            <h4 className="text-gray-400 "> Graphics & Design</h4>
            <p className="text-[#18ad50] ">450 Jobs</p>
          </div>
        </div>

        <div className="card glass w-full shadow-xl border">
          <div className="card-body text-center ">
            {/* <h2 className="card-title text-xl font-bold "> */}{" "}
            <span className="flex justify-center items-center text-7xl  text-white  ">
              <FaWordpress className="bg-[#18ad50] p-3  rounded-lg  text-white "></FaWordpress>
            </span>
            <h4 className="text-gray-400 "> Digital Marketing</h4>
            <p className="text-[#18ad50] ">182 Jobs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
