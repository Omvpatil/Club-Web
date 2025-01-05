import React from "react";
import poster from "../../assets/acc2.avif";

const AnnouncementPage = () => {
  return (
    <div className="bg-dark-blue min-h-screen flex flex-col items-center mt-6">
      <div className="container mx-auto max-w-5xl text-white">
        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-left p-4 mt-8 border-b-2 border-gray-500">
            ANNOUNCEMENTS
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center h-full px-6 space-y-6">
            <h2 className="text-4xl font-semibold mb-6">Prompt Quest</h2>
            <p className="leading-relaxed text-justify p-2">
              This is a great event for learning about prompt engineering and
              adapting to AI tools which will make our life easy.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, officiis aperiam? Inventore, earum facere! Totam necessitatibus a iusto maxime sit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odit?
            </p>
            <div className="space-y-2 p-4">
              <div className="flex items-center">
                <p className="text-sm font-semibold">Date:</p>
                <p className="text-sm ml-2">[Date of Event]</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-semibold">Time:</p>
                <p className="text-sm ml-2">10:00 AM</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-800 p-6 ml-4 rounded-lg flex flex-col items-center max-w-sm">
            <h3 className="text-xl font-bold mb-2">Registration Fees:</h3>
            <p className="text-sm mb-4">Free</p>
            <img
              src={poster}
              alt="Event"
              className="w-72 rounded-lg mb-6"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;