/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MyJob = () => {
  useEffect(() => {
    document.title = "jobworld | My Toys";
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-center text-3xl font-bold my-5">
        Total car on This Marketplace
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-2xl font-bold text-zinc-600">
              <th>Car-Img</th>
              <th>Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th> Available-Quantity</th>
              <th> Update</th>
              <th> Delete</th>
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
              <td>
                <Link to="/updateJob">
                  <button className="btn btn-primary">Update</button>
                </Link>
              </td>
              <td>
                <button className="btn btn-error text-white">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
