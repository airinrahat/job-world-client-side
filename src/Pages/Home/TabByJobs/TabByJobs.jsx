/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TabByJobs.css";

const TabByJobs = () => {
  const [subCategoryOne, setSubCategoryOne] = useState([]);
  const [subCategoryTow, setSubCategoryTow] = useState([]);
  const [subCategoryThree, setSubCategoryThree] = useState([]);

  const urlOne =
    "https://b7-a11-toy-marketplace-server-side-two.vercel.app/subCategory?sub_category=dog";
  useEffect(() => {
    fetch(urlOne)
      .then((res) => res.json())
      .then((data) => setSubCategoryOne(data));
  }, [urlOne]);

  const urlTow =
    "https://b7-a11-toy-marketplace-server-side-two.vercel.app/subCategory?sub_category=teddy-bear";
  useEffect(() => {
    fetch(urlTow)
      .then((res) => res.json())
      .then((data) => setSubCategoryTow(data));
  }, [urlTow]);

  const urlThree =
    "https://b7-a11-toy-marketplace-server-side-two.vercel.app/subCategory?sub_category=cat";
  useEffect(() => {
    fetch(urlThree)
      .then((res) => res.json())
      .then((data) => setSubCategoryThree(data));
  }, [urlThree]);

  // console.log(subCategoryOne);
  // console.log(subCategoryTow);
  // console.log(subCategoryThree);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="text-center py-4">
        <h1>Animals Sub-Categories</h1>
      </div>
      <Tabs data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <TabList className="text-center py-4">
          <Tab>
            <b>1: All Jobs</b>
          </Tab>
          <Tab>
            <b>2: DOGS</b>
          </Tab>
          <Tab>
            <b>3: TEDDY BEARS</b>
          </Tab>
          <Tab>
            <b>4: CATS</b>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2 gap-3">
            {subCategoryOne.slice(0, 2).map((subcategoryone) => (
              <div
                className=""
                key={subcategoryone._id}
                category={subcategoryone}
              >
                <div
                  className="tab-img grid grid-cols-2"
                  style={{ border: "1px solid gray" }}
                >
                  <LazyLoad>
                    <img
                      height={250}
                      src={subcategoryone.Picture_URL_of_Toy}
                      alt=""
                    />
                  </LazyLoad>
                  <div className="m-auto">
                    <h4>
                      <b>Toy Name :</b> {subcategoryone.toy_name}
                    </h4>
                    <p className="py-2">
                      <b>Price :</b> {subcategoryone.price}
                    </p>
                    <div>
                      <b>Rating :</b>
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={subcategoryone.rating}
                        readOnly
                      />
                    </div>
                    <p className="py-2 mb-2">
                      <b>Available Quantity :</b>
                      {subcategoryone.available_quantity}
                    </p>
                    <Link
                      to={`/singletoy/${subcategoryone._id}`}
                      className="btn btn-primary py-2 px-5"
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
            {subCategoryOne.slice(0, 2).map((subcategoryone) => (
              <div
                className=""
                key={subcategoryone._id}
                category={subcategoryone}
              >
                <div
                  className="tab-img grid grid-cols-2"
                  style={{ border: "1px solid gray" }}
                >
                  <LazyLoad>
                    <img
                      height={250}
                      src={subcategoryone.Picture_URL_of_Toy}
                      alt=""
                    />
                  </LazyLoad>
                  <div className="m-auto">
                    <h4>
                      <b>Toy Name :</b> {subcategoryone.toy_name}
                    </h4>
                    <p className="py-2">
                      <b>Price :</b> {subcategoryone.price}
                    </p>
                    <div>
                      <b>Rating :</b>
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={subcategoryone.rating}
                        readOnly
                      />
                    </div>
                    <p className="py-2 mb-2">
                      <b>Available Quantity :</b>
                      {subcategoryone.available_quantity}
                    </p>
                    <Link
                      to={`/singletoy/${subcategoryone._id}`}
                      className="btn btn-primary py-2 px-5"
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
            {subCategoryTow.slice(0, 2).map((subcategorytow) => (
              <div
                className=""
                key={subcategorytow._id}
                category={subcategorytow}
              >
                <div
                  className="tab-img grid grid-cols-2"
                  style={{ border: "1px solid gray" }}
                >
                  <LazyLoad>
                    <img
                      height={250}
                      src={subcategorytow.Picture_URL_of_Toy}
                      alt=""
                    />
                  </LazyLoad>
                  <div className="m-auto">
                    <h4>
                      <b>Toy Name :</b> {subcategorytow.toy_name}
                    </h4>
                    <p className="py-2">
                      <b>Price :</b> {subcategorytow.price}
                    </p>
                    <div>
                      <b>Rating :</b>
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={subcategorytow.rating}
                        readOnly
                      />
                    </div>
                    <p className="py-2 mb-2">
                      <b>Available Quantity :</b>
                      {subcategorytow.available_quantity}
                    </p>
                    <Link
                      to={`/singletoy/${subcategorytow._id}`}
                      className="btn btn-primary py-2 px-5"
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
            {subCategoryThree.slice(0, 2).map((subcategorythree) => (
              <div
                className=""
                key={subcategorythree._id}
                category={subcategorythree}
              >
                <div
                  className="tab-img grid grid-cols-2"
                  style={{ border: "1px solid gray" }}
                >
                  <LazyLoad>
                    <img
                      height={250}
                      src={subcategorythree.Picture_URL_of_Toy}
                      alt=""
                    />
                  </LazyLoad>
                  <div className="m-auto">
                    <h4>
                      <b>Toy Name :</b> {subcategorythree.toy_name}
                    </h4>
                    <p className="py-2">
                      <b>Price :</b> {subcategorythree.price}
                    </p>
                    <div>
                      <b>Rating :</b>
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={subcategorythree.rating}
                        readOnly
                      />
                    </div>
                    <p className="py-2 mb-2">
                      <b>Available Quantity :</b>
                      {subcategorythree.available_quantity}
                    </p>
                    <Link
                      to={`/singletoy/${subcategorythree._id}`}
                      className="btn btn-primary py-2 px-5"
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
  );
};

export default TabByJobs;
