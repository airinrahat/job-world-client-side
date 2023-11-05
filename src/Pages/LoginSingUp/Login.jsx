/* eslint-disable no-unused-vars */
import React from "react";
// import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/google.svg";

const Login = () => {
  return (
    <div>
      <form>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="relative">
              <img
                src="https://i.ibb.co/fXSFwTP/login2.png"
                alt="img"
                className="w-[400px] h-full hidden rounded-lg md:block object-cover"
              />

              <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                <span className="text-black text-xl">
                  We have been uesing Untitle to kick
                  <br />
                  start every new project and can not <br />
                  imagine working without it
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-3 text-4xl text-center font-bold">
                Please Login
              </span>
              <span className="font-light text-center text-gray-400 mb-8">
                Hey! Enter your details to get login to your account
              </span>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  name="email"
                />
              </div>

              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  required
                  placeholder="Enter Your Password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                />
              </div>

              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember </span>
                </div>
                <span className="font-bold text-md">Forgot password</span>
              </div>
              <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Sign in
              </button>
              <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                <img src={img} alt="img" className="w-6 h-6 inline mr-2" />
                Sign in with Google
              </button>
              <div className="text-center text-gray-400">
                Do not have an account?
                <Link className="text-blue-600 font-bold ml-1" to="/singup">
                  <u>Sign up for free</u>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
