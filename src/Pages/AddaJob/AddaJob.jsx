/* eslint-disable no-unused-vars */
import React from "react";

const AddaJob = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Add A Job</h2>

        <form className="my-10">
          {/* form name and quantity row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Job Title
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Job Title"
                  className="input input-bordered w-full"
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
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Salary Range
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={"$"}
                  placeholder="price"
                  className="input input-bordered w-full"
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
              <label className="input-group">
                <input
                  type="number"
                  name=" Job Applicants"
                  value="0"
                  placeholder="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
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
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Job Posting Date"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Application Deadline
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name=" Application"
                  placeholder=" Application Deadline"
                  className="input input-bordered w-full"
                />
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
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Short description"
                  className="input input-bordered w-full h-20"
                ></input>
              </label>
            </div>
          </div>
          <div className="md:flex mb-5">
            <div className="form-control md:w-1/2 ml-4">
              <label className="">
                <input
                  type="submit"
                  value="Add a Job"
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

export default AddaJob;
