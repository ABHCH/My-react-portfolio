import React from "react";
import Social from "./Social";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="Contact-container ml-1 md:ml-24 lg:ml-52 p-5 flex w-[100%]">
        <div className="form mt-7">
          <div className="heading text-white text-6xl ">Contact .</div>
          <div className="small text-white mt-4">
            Get in touch or Shoot me an email directly on{" "}
            <span>chaturvedia4435@gmail.com</span>
          </div>
          <form
            action="https://formspree.io/f/mrgdpdlj"
            method="POST"
            className="contact-inputs"
          >
            <input
              className="block w-[100%] md:w-[130%] mt-4 p-3 bg-grey outline-none border-solid border-[1px] border-my-border-color placeholder:text-slate-400"
              type="text"
              placeholder="Name"
              name="Name"
              autoComplete="off"
              required
            />
            <input
              className="block w-[100%] md:w-[130%] mt-4 p-3 bg-grey outline-none border-solid border-[1px] border-my-border-color placeholder:text-slate-400"
              type="email"
              placeholder="Email"
              name="Email"
              autoComplete="off"
              required
            />
            <textarea
              className="w-[100%] md:w-[130%] mt-4 p-3 bg-grey outline-none border-solid border-[1px] border-my-border-color placeholder:text-slate-400"
              placeholder="Please send your Query"
              name="message "
              cols="30"
              rows="6"
              required
            ></textarea>
            <input
              className="bg-my-border-color w-[30%] p-2 mt-4 rounded-md cursor-pointer"
              type="submit"
              value="send"
            />
          </form>
          <div className="buttons-react">
            <div className="btns flex items-center h-[13vh]">
              <button className="hover:underline underline-offset-1 duration-150 ease-in-out text-white"><NavLink to="/">Go Back Home</NavLink></button>
              <BsArrowRight  className="arrow-btn ml-4 text-3xl cursor-pointer text-white"/>
            </div>
          </div>
          <Social />
        </div>
      </div>
    </>
  );
};

export default Contact;
