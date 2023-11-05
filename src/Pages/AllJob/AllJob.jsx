/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AllJob = () => {
  useEffect(() => {
    document.title = "JobWorld | AllJob";
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total Job On This Marketplace
      </h2>
      <div className="text-center pb-3 my-4">
        <input
          type="text"
          placeholder="Search Toy Name or Sub Categody"
          className="search"
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
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-xl">name</td>
              <td className="text-xl">
                category
                <br />
              </td>
              <td> price</td>
              <td> rating</td>
              <td> Salary range</td>
              <td>
                <Link to="/viewDetails">
                  <button className="btn btn-error text-white">Details</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJob;
