/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import MyJobs from "./MyJobs";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyJob = () => {
  const { user } = useContext(AuthContext);
  const [myjobs, setMyjobs] = useState([]);

  // const url = "http://localhost:5000/addjob";
  const url = `https://job-world-server.vercel.app/myjobs?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyjobs(data));
  }, [url]);

  console.log(myjobs, user);

  useEffect(() => {
    document.title = "jobworld | My Jobs";
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
