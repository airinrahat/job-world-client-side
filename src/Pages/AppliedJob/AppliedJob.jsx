/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaRegCalendarAlt,
} from "react-icons/fa";

const AppliedJob = () => {
  useEffect(() => {
    document.title = "JobWorld | AppliendJob";
  }, []);
  return (
    <div className="max-w-screen-lg mx-auto">
      <h3 className="text-4xl font-bold text-center "> Applied Jobs page</h3>

      <div className="text-center my-5">
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal gap-2 ">
          <button className="btn ">On Site Job </button>
          <button className="btn">Part Time</button>
          <button className="btn">Remote</button>
          <button className="btn">Hybrid</button>
        </div>
      </div>
      {/* https://i.ibb.co/tpy5wkG/com-logo-5.jpg
https://i.ibb.co/7prrphB/com-logo-4.jpg
https://i.ibb.co/Xb87HKY/com-logo-3.jpg
https://i.ibb.co/mSnS8Q7/com-logo-2.jpg
https://i.ibb.co/yf0Jj04/logo.jpg */}
      <div className=" grid grid-cols-3 gap-4 my-8">
        <div className="card card-side bg-base-100 shadow-xl  ">
          <div>
            <figure>
              <img src="https://i.ibb.co/tpy5wkG/com-logo-5.jpg" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold text-2xl ">
                Software Engineer
              </h2>
              <div className="text-start ">
                <div className="flex gap-2">
                  <FaMapMarkerAlt className="text-xl text-[#18ad50]"></FaMapMarkerAlt>
                  <span className=" font-bold"> New York, USA</span>
                </div>
                <div className="flex gap-2 my-2">
                  <FaClock className="text-xl  text-[#18ad50]"></FaClock>
                  <span className=" font-bold"> On Site Job</span>
                </div>
                <div className="flex gap-2">
                  <FaMoneyBill className="text-xl  text-[#18ad50]"></FaMoneyBill>
                  <span className=" font-bold"> $123 - $456</span>
                </div>
                <div className="flex gap-2  mt-2">
                  <FaRegCalendarAlt className="text-xl  text-[#18ad50]"></FaRegCalendarAlt>
                  <span className=" font-bold"> Date Line: 01 Jan, 2045</span>
                </div>
              </div>
              <div className="card-actions mt-3  ">
                <button className="btn bg-[#18ad50] text-white">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl  ">
          <div>
            <figure>
              <img src="https://i.ibb.co/7prrphB/com-logo-4.jpg" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold text-2xl ">
                Product Designer
              </h2>
              <div className="text-start ">
                <div className="flex gap-2">
                  <FaMapMarkerAlt className="text-xl text-[#18ad50]"></FaMapMarkerAlt>
                  <span className=" font-bold"> New York, USA</span>
                </div>
                <div className="flex gap-2 my-2">
                  <FaClock className="text-xl  text-[#18ad50]"></FaClock>
                  <span className=" font-bold"> Part Time</span>
                </div>
                <div className="flex gap-2">
                  <FaMoneyBill className="text-xl  text-[#18ad50]"></FaMoneyBill>
                  <span className=" font-bold"> $123 - $456</span>
                </div>
                <div className="flex gap-2  mt-2">
                  <FaRegCalendarAlt className="text-xl  text-[#18ad50]"></FaRegCalendarAlt>
                  <span className=" font-bold"> Date Line: 01 Jan, 2045</span>
                </div>
              </div>
              <div className="card-actions mt-3  ">
                <button className="btn bg-[#18ad50] text-white">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl  ">
          <div>
            <figure>
              <img src="https://i.ibb.co/yf0Jj04/logo.jpg" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-bold text-2xl ">
                Wordpress Developer
              </h2>
              <div className="text-start ">
                <div className="flex gap-2">
                  <FaMapMarkerAlt className="text-xl text-[#18ad50]"></FaMapMarkerAlt>
                  <span className=" font-bold"> New York, USA</span>
                </div>
                <div className="flex gap-2 my-2">
                  <FaClock className="text-xl  text-[#18ad50]"></FaClock>
                  <span className=" font-bold"> Remote Time</span>
                </div>
                <div className="flex gap-2">
                  <FaMoneyBill className="text-xl  text-[#18ad50]"></FaMoneyBill>
                  <span className=" font-bold"> $123 - $456</span>
                </div>
                <div className="flex gap-2  mt-2">
                  <FaRegCalendarAlt className="text-xl  text-[#18ad50]"></FaRegCalendarAlt>
                  <span className=" font-bold"> Date Line: 01 Jan, 2045</span>
                </div>
              </div>
              <div className="card-actions mt-3  ">
                <button className="btn bg-[#18ad50] text-white">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
