/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TabByJobs.css";

const TabByJobs = () => {
  const [jobCategoryOne, setJobCategoryOne] = useState([]);
  const [jobCategoryTow, setJobCategoryTow] = useState([]);
  const [jobCategoryThree, setJobCategoryThree] = useState([]);
  const [jobCategoryFour, setJobCategoryFour] = useState([]);
  const alljobs = useLoaderData();
  const urlOne =
    "http://localhost:5000/alljobscategory?jobcategory=on-site-job";
  useEffect(() => {
    fetch(urlOne)
      .then((res) => res.json())
      .then((data) => setJobCategoryOne(data));
  }, [urlOne]);

  const urlTow = "http://localhost:5000/alljobscategory?jobcategory=remote";
  useEffect(() => {
    fetch(urlTow)
      .then((res) => res.json())
      .then((data) => setJobCategoryTow(data));
  }, [urlTow]);

  const urlThree = "http://localhost:5000/alljobscategory?jobcategory=hybrid";
  useEffect(() => {
    fetch(urlThree)
      .then((res) => res.json())
      .then((data) => setJobCategoryThree(data));
  }, [urlThree]);

  const urlFour = "http://localhost:5000/alljobscategory?jobcategory=part-time";
  useEffect(() => {
    fetch(urlThree)
      .then((res) => res.json())
      .then((data) => setJobCategoryFour(data));
  }, [urlFour]);

  console.log(jobCategoryOne);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="text-center py-4 ">
        <h1 className="text-3xl mt-6 font-bold">Job By-Category</h1>
      </div>
      <div>
        <Tabs data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <TabList className="text-center py-4">
            <Tab>
              <b>1: All Jobs</b>
            </Tab>
            <Tab>
              <b>2: On Site Job</b>
            </Tab>
            <Tab>
              <b>3: Remote Job</b>
            </Tab>
            <Tab>
              <b>4: Hybrid</b>
            </Tab>
            <Tab>
              <b>4: Part Time</b>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {jobCategoryFour.slice(0, 2).map((jobcategoryFour) => (
                <div
                  className=""
                  key={jobcategoryFour._id}
                  category={jobcategoryFour}
                >
                  <div
                    className="tab-img grid  lg:grid-cols-2"
                    style={{ border: "1px solid gray" }}
                  >
                    <LazyLoad>
                      <img height={250} src={jobcategoryFour.photo} alt="" />
                    </LazyLoad>
                    <div className="m-auto">
                      <h4>
                        <b> Name :</b> {jobcategoryFour.name}
                      </h4>
                      <h4 className="py-2">
                        <b> Job Title :</b> {jobcategoryFour.jobtitle}
                      </h4>
                      <h4>
                        <b> Job Posting Date :</b> {jobcategoryFour.datepic}
                      </h4>
                      <h4 className="pt-2">
                        <b> Application Deadline :</b>{" "}
                        {jobcategoryFour.applicationDeadline}
                      </h4>
                      <p className="py-2">
                        <b> Salary range :</b> {jobcategoryFour.salary}
                      </p>

                      <p className="py-2 mb-2">
                        <b> Job Applicants Number :</b>
                        {/* {jobcategoryFour.available_quantity} */}0
                      </p>
                      <Link
                        to="/SingleJob"
                        className="btn bg-[#18ad50] text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 gap-3">
              {jobCategoryOne.slice(0, 2).map((jobcategoryone) => (
                <div
                  className=""
                  key={jobcategoryone._id}
                  category={jobcategoryone}
                >
                  <div
                    className="tab-img grid grid-cols-2"
                    style={{ border: "1px solid gray" }}
                  >
                    <LazyLoad>
                      <img height={250} src={jobcategoryone.photo} alt="" />
                    </LazyLoad>
                    <div className="m-auto">
                      <h4>
                        <b> Name :</b> {jobcategoryone.name}
                      </h4>
                      <h4 className="py-2">
                        <b> Job Title :</b> {jobcategoryone.jobtitle}
                      </h4>
                      <h4>
                        <b> Job Posting Date :</b> {jobcategoryone.datepic}
                      </h4>
                      <h4 className="pt-2">
                        <b> Application Deadline :</b>{" "}
                        {jobcategoryone.applicationDeadline}
                      </h4>
                      <p className="py-2">
                        <b> Salary range :</b> {jobcategoryone.salary}
                      </p>

                      <p className="py-2 mb-2">
                        <b> Job Applicants Number :</b>
                        {/* {jobcategoryone.available_quantity} */}0
                      </p>
                      <Link
                        to="/SingleJob"
                        className="btn bg-[#18ad50] text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 gap-3">
              {jobCategoryTow.slice(0, 2).map((jobcategorytow) => (
                <div
                  className=""
                  key={jobcategorytow._id}
                  category={jobcategorytow}
                >
                  <div
                    className="tab-img grid grid-cols-2"
                    style={{ border: "1px solid gray" }}
                  >
                    <LazyLoad>
                      <img height={250} src={jobcategorytow.photo} alt="" />
                    </LazyLoad>
                    <div className="m-auto">
                      <h4>
                        <b> Name :</b> {jobcategorytow.jobtitle}
                      </h4>
                      <h4 className="py-2">
                        <b> Job Title :</b> {jobcategorytow.datepic}
                      </h4>
                      <h4>
                        <b> Job Posting Date:</b> {jobcategorytow.toy_name}
                      </h4>
                      <h4 className="pt-2">
                        <b> Application Deadline :</b>{" "}
                        {jobcategorytow.applicationDeadline}
                      </h4>
                      <p className="py-2">
                        <b>Salary range :</b> {jobcategorytow.salary}
                      </p>

                      <p className="py-2 mb-2">
                        <b>Job Applicants Number :</b>
                        {/* {jobcategorytow.available_quantity} */}
                      </p>
                      <Link
                        to={`/singletoy/${jobcategorytow._id}`}
                        className="btn bg-[#18ad50] text-white py-2 px-5"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 gap-3">
              {jobCategoryThree.slice(0, 2).map((jobcategorythree) => (
                <div
                  className=""
                  key={jobcategorythree._id}
                  category={jobcategorythree}
                >
                  <div
                    className="tab-img grid grid-cols-2"
                    style={{ border: "1px solid gray" }}
                  >
                    <LazyLoad>
                      <img height={250} src={jobcategorythree.photo} alt="" />
                    </LazyLoad>
                    <div className="m-auto">
                      <h4>
                        <b> Name :</b> {jobcategorythree.name}
                      </h4>
                      <h4 className="py-2">
                        <b> Job Title :</b> {jobcategorythree.jobtitle}
                      </h4>
                      <h4>
                        <b> Job Posting Date :</b> {jobcategorythree.datepic}
                      </h4>
                      <h4 className="pt-2">
                        <b> Application Deadline :</b>{" "}
                        {jobcategorythree.applicationDeadline}
                      </h4>
                      <p className="py-2">
                        <b>Salary range :</b> {jobcategorythree.salary}
                      </p>

                      <p className="py-2 mb-2">
                        <b>Job Applicants Number :</b>
                        {/* {jobcategorythree.available_quantity} */}0
                      </p>
                      <Link
                        to={`/singletoy/${jobcategorythree._id}`}
                        className="btn bg-[#18ad50] text-white py-2 px-5"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 gap-3">
              {jobCategoryFour.slice(0, 2).map((jobcategoryFour) => (
                <div
                  className=""
                  key={jobcategoryFour._id}
                  category={jobcategoryFour}
                >
                  <div
                    className="tab-img grid grid-cols-2"
                    style={{ border: "1px solid gray" }}
                  >
                    <LazyLoad>
                      <img height={250} src={jobcategoryFour.photo} alt="" />
                    </LazyLoad>
                    <div className="m-auto">
                      <h4>
                        <b> Name :</b> {jobcategoryFour.name}
                      </h4>
                      <h4 className="py-2">
                        <b> Job Title :</b> {jobcategoryFour.jobtitle}
                      </h4>
                      <h4>
                        <b> Job Posting Date :</b> {jobcategoryFour.datepic}
                      </h4>
                      <h4 className="pt-2">
                        <b> Application Deadline :</b>{" "}
                        {jobcategoryFour.applicationDeadline}
                      </h4>
                      <p className="py-2">
                        <b> Salary range :</b> {jobcategoryFour.salary}
                      </p>

                      <p className="py-2 mb-2">
                        <b> Job Applicants Number : </b>
                        {/* {jobcategoryFour.available_quantity} */}0
                      </p>
                      <Link
                        to={`/singletoy/${jobcategoryFour._id}`}
                        className="btn bg-[#18ad50] text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabByJobs;
