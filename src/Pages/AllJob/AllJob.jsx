/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./AllJob.css";
import AllJobs from "./AllJobs";

const AllJob = () => {
  const alljobs = useLoaderData();
  useEffect(() => {
    document.title = "JobWorld | AllJob";
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total Job On This Marketplace : {alljobs.length}
      </h2>
      <div className="text-center pb-3 my-4">
        <input
          type="text"
          placeholder="Search Job Name or Sub Category"
          className="search border-solid border-2 border-[#18ad50]"
          style={{ width: "50%", padding: "12px" }}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-2xl font-bold text-zinc-600">
              <th>Img</th>
              <th>Name</th>
              <th> Job Title</th>
              <th> Job Posting Date</th>
              <th> Application Deadline</th>
              <th> Salary range</th>
              <th> Details</th>
            </tr>
          </thead>
          <tbody>
            {alljobs.map((alljob) => (
              <AllJobs key={alljob._id} alljob={alljob}></AllJobs>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJob;
