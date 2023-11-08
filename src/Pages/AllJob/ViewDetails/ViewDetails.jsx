/* eslint-disable no-unused-vars */
import { Rating } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = "JobWorld | ViewDetails";
  }, []);
  const viewDetail = useLoaderData();
  console.log(viewDetail);
  const {
    _id,
    jobtitle,
    description,
    applicationDeadline,
    salary,
    JobApplicants,
    photo,
    name,
    jobcategory,
  } = viewDetail;

  const handleApplyJob = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const myfile = form.myfile.value;

    const applyJob = {
      name,
      email,
      myfile,
      jobtitle,
      jobcategory,
      salary,
      photo,
      description,
    };
    console.log(applyJob, new Date());

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;
    console.log(formattedDate);

    if (formattedDate <= applicationDeadline) {
      fetch("http://localhost:5000/appliedjob/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(applyJob),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === "Job application successful") {
            Swal.fire({
              title: "Success",
              text: "Job applied successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        });
    }
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100  max-w-sm mx-auto my-8 rounded overflow-hidden  lg:px-0 px-10">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={photo} alt="" />
          </a>
          <div className="p-5">
            <h3 className="text-xl mb-1">
              <b>Job Banner: </b> {name}
            </h3>
            <h2 className="text-lg">
              <b> Job title: </b> {jobtitle}
            </h2>
            <p>
              <b>Description:</b>
              {description}
            </p>
            <p>
              <b> Salary range:</b>
              {salary}
            </p>
            <p>
              <b> Number of Applicants:</b> {JobApplicants}
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
                <form onSubmit={handleApplyJob} action="/action_page.php">
                  Name:
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    placeholder="Name"
                    className="input input-bordered w-full my-3 "
                    name="name"
                  />
                  Email:
                  <input
                    type="email"
                    defaultValue={user.email}
                    placeholder="Email"
                    className="input input-bordered w-full  my-3"
                    name="email"
                  />
                  <br />
                  Resume URL:
                  <input
                    type="url"
                    placeholder="url"
                    className="input input-bordered w-full  my-3"
                    name="url"
                  />
                  <div className="flex justify-end items-center">
                    <input
                      type="submit"
                      value="Apply Job"
                      className="btn btn-success mt-7  mr-4"
                    />
                    <div className="modal-action">
                      <form method="dialog ">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
