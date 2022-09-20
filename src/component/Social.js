import React from "react";
import { BsArrowRight, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { TbBrandTwitter } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Social = () => {
  return (
    <>
      <div className="social-icons">
        <div className="icons flex items-center h-[10vh] space-x-7">
          <a href="https://twitter.com/Shiba2153">
            <TbBrandTwitter className="text-2xl text-white cursor-pointer " />
          </a>

          <a href="https://www.linkedin.com/in/abhishek1949/">
            <GrLinkedinOption className="text-2xl text-white  cursor-pointer" />
          </a>
          <a href="https://github.com/ABHCH">
            <BsGithub className="text-2xl text-white  cursor-pointer" />
          </a>
          <a href="">
            <BsInstagram className="text-2xl text-white  cursor-pointer" />
          </a>
          <a href="https://leetcode.com/Abhishek_Chaturvedi/">
            <SiLeetcode className=" text-2xl text-white  cursor-pointer" />
          </a>
          <a href="https://www.codechef.com/users/abhch_123">
            <SiCodechef className="text-2xl text-white  cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
