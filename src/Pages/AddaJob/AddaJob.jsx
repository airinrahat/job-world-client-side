/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddaJob = () => {
  useEffect(() => {
    document.title = "JobWorld | AddaJob";
  }, []);

  const { user } = useContext(AuthContext);

  const [startDateOne, setStartDateOne] = useState(new Date());
  const [startDateTwo, setStartDateTwo] = useState(new Date());

  const handleAddJob = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const jobtitle = form.jobtitle.value;
    const jobcategory = form.jobcategory.value;
    const salary = form.salary.value;
    const JobApplicants = form.jobapplicants.value;
    const photo = form.photo.value;
    const applicationDeadline = form.applicationdeadline.value;
    const datepic = form.jobpostingdate.value;
    const description = form.description.value;

    const newAddJob = {
      datepic,
      jobtitle,
      jobcategory,
      salary,
      name,
      photo,
      applicationDeadline,
      description,
      email,
      JobApplicants,
    };
    console.log(newAddJob);

    fetch("https://job-world-server.vercel.app/addjob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "job added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-5 px-10 lg:px-0">
        <h2 className="text-center text-4xl">Add A Job</h2>
        <p className="text-center text-xl my-3">
          It is a long established fact that a reader will be distraceted by the
          <br></br>
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
        <form className="my-10" onSubmit={handleAddJob}>
          {/* form name and quantity row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control md:w-1/2 w-full">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Name
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder=" name"
                />
              </label>
            </div>

            <div className="form-control w-full  md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Job Title
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input type="text" name="jobtitle" placeholder="Job Title" />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Job Category
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input type="text" name="jobcategory" placeholder="Category" />
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
                  defaultValue={"$"}
                  placeholder="price"
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
                  name="jobapplicants"
                  placeholder="jobApplicants"
                  className=" input-bordered  w-full"
                />
              </label>
            </div>

            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Photo URL
                </span>
              </label>
              <label className="input-group input input-bordered text-[#999] w-full ">
                <input type="text" name="photo" placeholder="Photo URL" />
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
                <DatePicker
                  selected={startDateOne}
                  onChange={(date) => setStartDateOne(date)}
                  name="jobpostingdate"
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
                <DatePicker
                  selected={startDateTwo}
                  onChange={(date) => setStartDateTwo(date)}
                  name="applicationdeadline"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}

          <div className="md:flex gap-5 mb-5">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-2xl font-bold text-zinc-600">
                  Email
                </span>
              </label>
              <label className="input-group input input-bordered w-full">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-2xl font-bold text-zinc-600">
                    Job Description
                  </span>
                </label>
                <label className="input-group rounded-l-lg text-[#999]  ">
                  <input
                    type="text"
                    name="description"
                    placeholder="Short description"
                    className="input input-bordered  w-full h-20"
                    style={{ borderRadius: "10px" }}
                  ></input>
                </label>
              </div>
          
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
                  className="btn btn-block  text-white bg-[#575757]"
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
