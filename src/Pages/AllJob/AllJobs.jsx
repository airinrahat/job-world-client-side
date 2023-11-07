/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const AllJobs = ({ alljob }) => {
  const { _id, photo, name, jobtitle, applicationDeadline, datepic, salary } =
    alljob;
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
      <td> {datepic}</td>
      <td> {applicationDeadline}</td>
      <td>{salary}</td>
      <td>
        <Link to={`/viewDetails/${_id}`}>
          <button className="btn bg-[#18ad50] text-white">Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllJobs;
