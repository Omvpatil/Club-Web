import React from "react";
import poster from "../../assets/acc2.avif";

const Events = () => {
  return (
    <div className="flex gap-8 text-white p-8 min-h-screen">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-8 ">
        <h1 className="text-5xl font-bold p-4 uppercase mb-8 text-left ml-6 border-b-2 border-gray-500">Events</h1>

        {/* Upcoming Events */}
        <div className="bg-gray-900 border border-gray-700 m-6 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Upcoming
          </h2>
          <ul className="space-y-2">
            <li>PROMPT QUEST</li>
            <li>PIXEL PERFECT</li>
            <li>GEN-AI</li>
          </ul>
        </div>

        {/* Past Events */}
        <div className="bg-gray-900 border border-gray-700 m-6 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Past Events
          </h2>
          <ul className="space-y-2">
            <li>PROMPT QUEST</li>
            <li>PIXEL PERFECT</li>
            <li>GEN-AI</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center items-start">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg w-4/5 mt-32 j">
          <div className="flex justify-between items-center mb-4">
            <a
              href="#more"
              className="text-purple-400 text-sm font-medium flex items-center"
            >
              SEE MORE <span className="ml-1 text-lg">↗</span>
            </a>
            <h2 className="text-2xl font-bold">PROMPT QUEST</h2>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={poster}
              alt="Prompt Quest"
              className="w-full object-cover p-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;