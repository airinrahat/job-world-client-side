/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./AllJob.css";
import AllJobs from "./AllJobs";

const AllJob = () => {
  const alljobs = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "JobWorld | AllJob";
  }, []);

  const handleSearch = (alljobs) => {
    return alljobs.filter(
      (item) =>
        item.jobtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.jobtitle.toUpperCase().includes(searchQuery.toUpperCase())
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total Job On This Marketplace : {alljobs.length}
      </h2>
      <div className="text-center pb-3 my-4">
        <input
          type="text"
          placeholder="Search on Job title"
          className="search border-solid border-2 border-[#18ad50]"
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%", padding: "12px" }}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-2xl font-bold text-zinc-600">
              <th>Img</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Posting Date</th>
              <th>Application Deadline</th>
              <th>JobApplicants</th>
              <th>Salary</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {handleSearch(alljobs).map((alljob) => (
              <AllJobs key={alljob._id} alljob={alljob}></AllJobs>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJob;
