/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleRight,
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-10 bg-base-200 text-base-content ">
      <footer className="footer pb-5 mx-auto max-w-screen-xl">
        <aside>
          <nav className="text-[#18ad50] font-bold text-4xl"> Jobworld</nav>

          <p>Email:Info@example.com</p>
          <p>Phone:+121 56556 565556</p>
          <p>Address:Your Address 123 street</p>
        </aside>
        <nav>
          <header className="footer-title text-bold text-gray-600 text-xl">
            Job Categories
          </header>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Work from Home
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Internship Job
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Freelancer Job
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Part Time Job
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Full Time Job
          </a>
        </nav>
        <nav>
          <header className="footer-title text-gray-600 text-xl">
            Job Type
          </header>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Create Account
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Career Counselingt
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            My Oficiona
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            FAQ
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Report a Problem
          </a>
        </nav>
        <nav>
          <header className="footer-title text-gray-600 text-xl">
            Resources
          </header>

          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            My Account
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Support
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            How It Works
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Underwriting
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Employers
          </a>
        </nav>
        <nav>
          <header className="footer-title text-gray-600 text-xl">
            Quick Links
          </header>

          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Jobs Listing
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            About Us
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Contact Us
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Privacy Policy
          </a>
          <a className="link link-hover flex items-center gap-2  ">
            {" "}
            <FaAngleDoubleRight className="text-[#18ad50]"></FaAngleDoubleRight>{" "}
            Term & Condition
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav>
          <div className="grid lg:grid-flow-col  grid-cols-3 gap-4 text-4xl">
            <a>
              <FaTwitter className="text-[#1DA1F2] text-4xl"></FaTwitter>
            </a>
            <a>
              <FaYoutube className="text-[#FF0000]"></FaYoutube>
            </a>
            <a>
              <FaFacebook className="text-[#4267B2]"></FaFacebook>
            </a>
            <a>
              <FaGooglePlus className="text-[#1976D2]"></FaGooglePlus>
            </a>
            <a>
              <FaLinkedin className="text-[#0077b5]"></FaLinkedin>
            </a>
            <a>
              <FaInstagramSquare className="text-[#C13584]"></FaInstagramSquare>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2023 - All right reserved by jobworld Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
