import React, { useState } from "react";
import Svg from "./Svg";
import PostHolders from "./PostHolders";

const Members = () => {
  const wings_config =
    "ml-[26px] -mt-3 max-md:ml-0 max-md:ml-0 group-hover:scale-x-[-1] group-hover:opacity-100 group-hover:scale-110 duration-300 opacity-0 scale-x-[0] group-hover:rotate-0  origin-left -rotate-12 transition-all";
  const [clicked, setClicked] = useState(1);
  const handleClick = (e) =>{
    setClicked(parseInt(e.target.id));
    console.log(clicked)
  }

  return (
    <div className="Apps flex max-md:flex-col text-white p-28 max-md:p-5 gap-16 max-md:gap-5 h-screen w-screen flex-shrink-0 justify-center items-end">
      {/* Left Section */}
      <div className="h-5/6 w-full text-white flex flex-col justify-evenly gap-10">
        <div className="flex flex-col gap-20">
          <h1 className="text-7xl">
            <span className="border-b border-white/50">OUR LEADERS</span>
          </h1>
        </div>
        <div className="flex w-full h-full scroll-smooth overflow-x-scroll">
          {/* Member 1 */}
          <PostHolders clickedIndex={clicked} />
        </div>
      </div>

      {/* Right Section */}
      <div className="backdrop-blur-lg border  border-white/20 h-5/6 w-full text-white/50 text-4xl flex flex-col justify-evenly px-20 max-md:px-5  items-left cursor-pointer ">
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="0" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            President
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="1" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Post Holders
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="2" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Tech Team
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="3" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Creative Team
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="4" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Marketing Team
          </span>
        </div>
      </div>
    </div>
  );
};

export default Members;
