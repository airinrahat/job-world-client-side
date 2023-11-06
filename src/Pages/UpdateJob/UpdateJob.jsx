/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const myjob = useLoaderData();
  const {
    _id,
    datepic,
    jobtitle,
    jobcategory,
    salary,
    name,
    photo,
    applicationDeadline,
    description,
  } = myjob;

  const handleUpdateJob = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const jobtitle = form.jobtitle.value;
    const jobcategory = form.jobcategory.value;
    const salary = form.salary.value;
    // const JobApplicants = form.JobApplicants.value;
    const photo = form.photo.value;
    const applicationDeadline = form.applicationDeadline.value;
    const jobpostingdate = form.jobpostingdate.value;
    const description = form.description.value;

    const updateJob = {
      datepic,

      jobtitle,
      jobcategory,
      salary,
      name,
      photo,
      applicationDeadline,
      description,
    };
    console.log(updateJob);

    fetch(`http://localhost:5000/addjob/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Update A Job</h2>
        <p className="text-center text-xl my-3">
          It is a long established fact that a reader will be distraceted by the
          <br></br>
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
        <form onSubmit={handleUpdateJob} className="my-10">
          {/* form name and quantity row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Name
                </span>
              </label>
              <label className="input-group input input-bordered  w-full">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Name"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Job Title
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input
                  type="text"
                  name="jobtitle"
                  defaultValue={jobtitle}
                  placeholder="Job Title"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Job Category
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input
                  type="text"
                  name="jobcategory"
                  defaultValue={jobcategory}
                  placeholder="Category"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Salary Range
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input
                  type="text"
                  name="salary"
                  defaultValue={salary}
                  placeholder="salary"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600  ">
                  Job Applicants
                </span>
              </label>
              <label className="input-group input  input-bordered ">
                <input
                  type="number"
                  name=" JobApplicants"
                  defaultValue={0}
                  placeholder="Job Applicants"
                  className=" input-bordered  w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Photo URL
                </span>
              </label>
              <label className="input-group input input-bordered text-[#999] w-full ">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Job Posting Date
                </span>
              </label>
              <label className="input-group input input-bordered text-[#999] w-full pt-3">
                <input
                  type="date"
                  name="jobpostingdate"
                  placeholder=" job posting date"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Application Deadline
                </span>
              </label>
              <label className="input-group input input-bordered text-[#999] w-full pt-3">
                <input name="applicationDeadline" type="date"></input>
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Job Description
                </span>
              </label>
              <label className="input-group input input-bordered text-[#999] w-full h-20">
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Short description"
                ></input>
              </label>
            </div>
          </div>
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2 ml-4">
              <label className="">
                <input
                  type="submit"
                  value="Update a Job"
                  className="btn btn-block text-white bg-[#18ad50]"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className=" ">
                <input
                  type="reset"
                  value="RESET"
                  className="btn btn-block text-white bg-[#575757]"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
