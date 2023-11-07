/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SingleJob = () => {
  useEffect(() => {
    document.title = "JobWorld | SingleJob";
  }, []);
  return (
    <div className="container py-5 max-w-screen-lg mx-auto">
      <h2 className="text-center text-2xl font-bold mb-5">
        {/* {singletoy.toy_name} */}
        Details Information :
      </h2>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-2/4">
          <img src="https://i.ibb.co/fXSFwTP/login2.png" alt="Movie" />
        </figure>
        <div className="card-body">
          <h4 className="card-title">
            <b> Name :</b>
          </h4>
          <h5>
            <b>Job Title:</b>
          </h5>
          <p className="m-0">
            <b>Job Posting Date :</b>
          </p>
          <p className="m-0">
            <b>Job Applicants Number :</b>
          </p>
          <span className="d-flex gap-3">
            <b> Salary range :</b>
          </span>
          <p className="m-0">
            <b> Application Deadline :</b>
          </p>
          <p>
            <b>Description :</b>
          </p>

          <div className="mt-4">
            <Link to="/alltoys" className="btn bg-[#18ad50]">
              Back to All Jobs
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="grid grid-cols-2">
          <div className="card">
            <div className="row g-0" data-aos="zoom-in">
              <div className="grid grid-cols-2 m-auto">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/yf0Jj04/logo.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="col-md-8 m-auto">
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Toy Name :</b>
                  </h4>
                  <h5>
                    <b>Sub-category Name :</b>
                  </h5>
                  <p className="m-0">
                    <b>Price :</b>
                  </p>
                  <p className="m-0">
                    <b>Quantity :</b>
                  </p>
                  <span className="d-flex gap-3">
                    <b> Rating :</b>
                    <Rating style={{ maxWidth: 100 }} readOnly />
                  </span>
                  <p className="m-0">
                    <b>Seller Name :</b>
                  </p>
                  <p>
                    <b>Description :</b>
                  </p>

                  <div className="mt-4">
                    <Link to="/alltoys" className="btn btn-primary">
                      Back to All Toys
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SingleJob;
