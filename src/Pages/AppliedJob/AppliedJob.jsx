/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

const AppliedJob = () => {
  useEffect(() => {
    document.title = "JobWorld | AppliendJob";
  }, []);
  return (
    <div>
      <h3 className="text-4xl font-bold"> Applied Jobs page</h3>
    </div>
  );
};

export default AppliedJob;
