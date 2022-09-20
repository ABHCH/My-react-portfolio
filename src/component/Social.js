import React from 'react'
import { BsArrowRight, BsGithub,BsInstagram } from "react-icons/bs";
import { TbBrandTwitter } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { SiLeetcode,SiCodechef} from "react-icons/si";

const Social = () => {
  return (
    <>
    <div className="social-icons">
            <div className="icons flex items-center h-[10vh] space-x-7">
               <TbBrandTwitter className="text-2xl text-white cursor-pointer "/>
               <GrLinkedinOption className="text-2xl text-white  cursor-pointer"/>
               <BsGithub className="text-2xl text-white  cursor-pointer"/>
               <BsInstagram className="text-2xl text-white  cursor-pointer"/>
               <SiLeetcode className=" text-2xl text-white  cursor-pointer"/>
               <SiCodechef className="text-2xl text-white  cursor-pointer"/>
            </div>
          </div>
    </>
  )
}

export default Social