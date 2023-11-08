/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AppliedJob = () => {
  const { user } = useContext(AuthContext);
  const [myappliedjobs, setMyAppliedjobs] = useState([]);
  const [selectedJobType, setselectedJobType] = useState("");

  const url = `http://localhost:5000/myappliedjobs?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyAppliedjobs(data));
  }, [url]);

  const handleJobTypeChange = (event) => {
    setselectedJobType(event.target.value);
  };

  // Filter jobs based on the selected job type
  const filteredJobs = selectedJobType
    ? myappliedjobs.filter((job) => job.jobcategory === selectedJobType)
    : myappliedjobs;

  useEffect(() => {
    document.title = "JobWorld | AppliendJob";
  }, []);

  console.log(filteredJobs);

  // Replace the URL with the actual URL of your PDF file
  const pdfUrl =
    "https://drive.google.com/file/d/1JAgG0tjqdsX0Ns0fLJwDwaPvIQeMKWCD/view?usp=drive_link";

  const handleDownloadClick = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "your-file-name.pdf"; // You can specify the desired file name here
    link.click();
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <h3 className="text-4xl font-bold text-center"> Applied Jobs page</h3>

      <div className="text-center mb-5 mt-7">
        <select
          id="brand-input"
          value={selectedJobType}
          onChange={handleJobTypeChange}
          className="font-normal text-xl bg-[#f4f4f4]  rounded-md border-none  color-[#474747] py-3 px-6"
        >
          <option value="">Filter By Job Type</option>
          <option value="on-site-job">Onsite</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="part-time">Part Time</option>
        </select>
      </div>

      <div className="">
        <table className="table">
          <thead>
            <tr className="text-2xl font-bold text-zinc-600">
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th> Job Title</th>
              <th> Job Category</th>
              <th> Salary</th>
              <th> My resume</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((myappliedjob) => (
              <tr key={myappliedjob._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myappliedjob.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xl">{myappliedjob.name}</td>
                <td className="text-xl">{myappliedjob.email}</td>
                <td className="text-xl">
                  {myappliedjob.jobtitle}
                  <br />
                </td>
                <td className="text-xl"> {myappliedjob.jobcategory}</td>

                <td className="text-xl"> {myappliedjob.salary}</td>
                <td>
                  <button onClick={handleDownloadClick}>Download PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJob;
