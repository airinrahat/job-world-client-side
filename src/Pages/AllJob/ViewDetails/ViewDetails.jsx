/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React from "react";

const ViewDetails = () => {
  return (
    <div>
      {/* <div className="max-w-sm mx-auto my-8 rounded overflow-hidden shadow-lg lg:px-0 px-10">
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
           
            <button className="btn bg-[#18ad50] text-white mr-2">
              Apply Button
            </button>
        
          </div>
        </div>
      </div> */}
      <div className="card lg:card-side bg-base-100  max-w-sm mx-auto my-8 rounded overflow-hidden  lg:px-0 px-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://i.ibb.co/fXSFwTP/login2.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl mb-1">
              <b>Job Banner:</b>
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
              <button
                className="btn bg-[#18ad50] text-white mr-2"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Apply Button
              </button>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center my-4">
                  Details Page
                </h3>
                <form action="/action_page.php">
                  Name:
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full  "
                  />
                  Email:
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full  my-3"
                  />
                  <br />
                  <label>Select a file : </label>
                  <input type="file" id="myfile" name="myfile" />
                  <br />
                  <br />
                  <input type="submit" />
                  <button className="btn">Close</button>
                </form>
                <div className="modal-action">
                  <button className="btn">Close</button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
