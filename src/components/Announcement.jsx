import React from "react";
import poster from "../assets/acc2.avif";
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';
import { Link, NavLink, useNavigate } from "react-router";

const Announcement = () => {
  return (
    <div className="Apps bg-dark-blue w-screen h-screen gap-16 flex max-md:flex-col items-end p-10 max-md:p-5 justify-center flex-shrink-0">
      {/* Left Side */}
      <div className=" h-5/6 w-3/4 max-md:w-full text-white flex flex-col justify-evenly gap-28 max-md:gap-8 ">
        <h1 className="text-7xl max-md:text-5xl"> <span className="border-b border-white/60">Announcements</span></h1>
        <h2 className="text-2xl"><span className="border-b border-white/60">Events Name</span></h2>
        <p className="px-16 max-md:px-0 font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam corporis aut nihil architecto corrupti, illum fuga voluptates molestiae pariatur assumenda voluptas placeat blanditiis, odit id aspernatur consequatur et! Consequatur, similique!</p>
        <div className="flex w-full h-full gap-5 font-bold">
          <section>
            <h3>Time</h3>
            <h3>Venue</h3>
          </section>
          <section className="border-l border-white/50 h-1/3 px-5">
            <p>5:30 PM</p>
            <p>JVN Hall 4th floor</p>
          </section>
        </div>
      </div>
      {/* Right Side */}
      <div className="h-fit w-fit border border-white/20 backdrop-blur-xl bg-white/5 flex flex-col justify-between items-center">
        <div className="border-b border-white/50 h-full w-[95%]">
          <div className="text-white text-2xl p-4">
            <div>
              Registration Fees
            </div>
            Free
          </div>
          <div className="text-2xl p-5 flex flex-col text-wrap gap-2">
            <div className="text-purple-500">
              Register Now
            </div>
            <button className="rounded-full bg-purple-500/10 h-[50px] w-[50px] flex items-center justify-center">
              <ArrowOutwardSharpIcon style={{ color:"white" }}/>
            </button>
          </div>

        </div>
        <div className="h-full object-contain p-5 ">
          <img src="./src/assets/acc2.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Announcement;