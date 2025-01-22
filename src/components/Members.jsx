import React, { memo, useState } from "react";
import Svg from "./Svg";
import PostHolders from "./PostHolders";

const Members = memo(() => {
  const wings_config =
    "ml-[26px] -mt-3 max-md:ml-0 max-md:ml-0 group-hover:scale-x-[-1] group-hover:opacity-100 group-hover:scale-110 duration-300 opacity-0 scale-x-[0] group-hover:rotate-0  origin-left -rotate-12 transition-all";
  const [clicked, setClicked] = useState(1);
  const handleClick = (e) =>{
    setClicked(parseInt(e.target.id));
  }

  return (
    <div className="Apps bg-black/5 backdrop-blur-sm flex max-md:flex-col text-white p-5 gap-10 max-md:gap-0 max-md:h-fit max-md:w-full h-screen w-full flex-shrink-0 justify-between items-end">
      {/* Left Section */}
      <div className="h-full w-full text-white flex flex-col justify-evenly py-10 gap-10">
        <div className="flex flex-col gap-20">
          <h1 className="text-7xl">
            <span className="border-b border-white/50">OUR LEADERS</span>
          </h1>
        </div>
        <div className="flex w-full h-4/5 overflow-scroll">
          {/* Member 1 */}
          <PostHolders clickedIndex={clicked} />
        </div>
      </div>

      {/* Right Section */}
      <div className="backdrop-blur-lg border  border-white/20 h-4/5 w-full text-white/50 text-4xl flex flex-col justify-evenly px-20 max-md:px-5 mt-0 items-left cursor-pointer ">
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="0" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            President
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="1" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Secretaries
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="2" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Treasurers
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="3" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Tech Team
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="4" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Creative Team
          </span>
        </div>
        <div className=" group flex hover:text-white transition-all">
          <Svg clsname={wings_config} />
          <span id="5" className="-ml-20" onClick={(e)=>{handleClick(e)}}>
            Marketing Team
          </span>
        </div>
      </div>
    </div>
  );
});

export default Members;
