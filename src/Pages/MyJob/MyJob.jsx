/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MyJobs from "./MyJobs";
import { useState } from "react";

const MyJob = () => {
  const loadedmyjobs = useLoaderData();
  const [myjobs, setMyjobs] = useState(loadedmyjobs);
  useEffect(() => {
    document.title = "jobworld | My Toys";
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total Jobs on This Marketplace:{myjobs.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-sm font-bold text-zinc-600">
              <th>Img</th>
              <th>Name</th>
              <th>Job Title</th>
              <th>Job-Category</th>
              <th> Salary </th>
              {/* <th> Job Applicants No</th> */}
              <th> Job Posting Date</th>
              <th> Application Deadline</th>

              <th> Update</th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
            {myjobs.map((myjob) => (
              <MyJobs
                key={myjob._id}
                myjob={myjob}
                myjobs={myjobs}
                setMyjobs={setMyjobs}
              ></MyJobs>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
