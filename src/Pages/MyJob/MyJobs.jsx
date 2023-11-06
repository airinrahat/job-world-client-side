/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const MyJobs = ({ myjob }) => {
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
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td className="text-xl">{name}</td>
      <td className="text-xl">
        {jobtitle}
        <br />
      </td>

      <td className="text-xl"> {jobcategory}</td>
      <td className="text-xl"> {salary}</td>
      <td className="text-xl"> {applicationDeadline}</td>

      <td className="text-xl"> {datepic}</td>
      <td>
        <Link to="/updateJob">
          <button className="btn btn-primary">Update</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-error text-white">Delete</button>
      </td>
    </tr>
  );
};

export default MyJobs;
