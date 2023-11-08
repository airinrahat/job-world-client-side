/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobs = ({ myjob, setMyjobs, myjobs }) => {
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

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addjob/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This Job has been deleted.", "success");

              const remaining = myjobs.filter((job) => job._id !== _id);
              setMyjobs(remaining);
            }
          });
      }
    });
  };

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

      <td className="text-xl"> {datepic}</td>
      <td className="text-xl"> {applicationDeadline}</td>
      <td>
        <Link to={`/updateJob/${_id}`}>
          <button className="btn btn-primary">Update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyJobs;
