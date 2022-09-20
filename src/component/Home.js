import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Social from "./Social";


const Home = () => {
  return (
    <>
      <div className="Hero container ml-10 p-5 m-auto flex justify-center items-center h-[80vh]">
        <div className="text-white">
          <h1 className="text-2xl font-['my-font'] font-bold">Hey 👋🏻 </h1>
          <h1 className="dev-name text-4xl md:text-7xl tracking-wide mt-4">
            I'm abhishek Chaturvedi
          </h1>
          <div className="about-portfolio mt-5 font-['my-font'] font-bold">
            Frontend developer, UX architect and Javascript engineer,
            Photochromic Lens enthusiast, practicing minimalist,
            <br /> and Pop Music & Jazz lover in search of flow.
          </div>
          <div className="desc-portfolio mt-5 font-['my-font'] font-bold">
            Working with my hands to make magic happen on the internet. View my{" "}
            <span>Projects</span>,<span>Resumé</span>,<span>Contact Me</span>,
            or
            <br /> send me an email at{" "}
            <span>
              <a href="mailto:chaturvedia435@gmail.com">
                chaturvedia435@gmail.com
              </a>
            </span>
          </div>
          <div className="buttons-react">
            <div className="btns flex items-center h-[13vh]">
              <button className="hover:underline underline-offset-1 duration-150 ease-in-out"><NavLink to='/About'>See More About Me </NavLink></button>
              <BsArrowRight  className="arrow-btn ml-4 text-3xl cursor-pointer"/>
            </div>
          </div>
          <Social />
        </div>
      </div>
    </>
  );
};

export default Home;
