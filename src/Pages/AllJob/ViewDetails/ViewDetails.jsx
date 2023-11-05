/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React from "react";

const ViewDetails = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto my-8 rounded overflow-hidden shadow-lg lg:px-0 px-10">
        <img
          className="w-[100%] h-52"
          src="https://i.ibb.co/Bjs2K0y/jobs.png"
          alt=""
        />
        <div className="p-3">
          <h3 className="text-xl mb-1">
            <b>Job Banner</b>
          </h3>
          <h2 className="text-lg">
            <b> Job title: </b>
          </h2>
          <p>
            <b>Description:</b>
          </p>
          <p>
            <b> Salary range:</b>
          </p>
          <p>
            <b> Number of Applicants:</b> :
          </p>

          <div className="py-5">
            {/* <Link to={`/myCart/${_id}`}> */}
            <button className="btn bg-[#18ad50] text-white mr-2">
              Apply Button
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
