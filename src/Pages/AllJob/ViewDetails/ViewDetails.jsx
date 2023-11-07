/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = "JobWorld | ViewDetails";
  }, []);
  const viewDetail = useLoaderData();
  const { jobtitle, description, salary, JobApplicants } = viewDetail;

  return (
    <div>
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
              <b>Job Banner: </b>
            </h3>
            <h2 className="text-lg">
              <b> Job title:{jobtitle} </b>
            </h2>
            <p>
              <b>Description:{description}</b>
            </p>
            <p>
              <b> Salary range:{salary}</b>
            </p>
            <p>
              <b> Number of Applicants:{JobApplicants}</b> :
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
                    defaultValue={user.displayName}
                    placeholder="Name"
                    className="input input-bordered w-full my-3 "
                  />
                  Email:
                  <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Email"
                    className="input input-bordered w-full  my-3"
                  />
                  <br />
                  <label>Select a file : </label>
                  <input type="file" id="myfile" name="myfile" />
                </form>
                <div className="modal-action">
                  <form method="dialog ">
                    <button className="btn btn-success  mr-4">Submit</button>
                    <button className="btn">Close</button>
                  </form>
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
