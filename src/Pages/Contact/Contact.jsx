/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  //service_rbve2as

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbve2as",
        "template_uyzqgw2",
        form.current,
        "Lu5Bue4DtyJCq_HQX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="max-w-screen-lg mx-auto my-8">
      <h4 className="text-center text-4xl font-bold mb-4">Contact us</h4>
      <br />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" className="input input-bordered" name="user_name" />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          className="input input-bordered"
          name="user_email"
        />
        <br />
        <label>Message</label>
        <br />
        <br />
        <textarea className="input input-bordered" name="message" />
        <br />
        <input type="submit" className="input input-bordered" value="Send" />
      </form>

      {/* <div className="hero max-w-screen-sm mx-auto mb-10 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">message</span>
                </label>
                <textarea
                  type="textarea"
                  name="message"
                  placeholder="message "
                  className="input input-bordered"
                  required
                />
              </div>
              <input className="btn bg-[#18ad50]" type="submit" value="send" />
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
