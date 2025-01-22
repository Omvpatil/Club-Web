import React, { useState } from "react";
import { useLocation } from "react-router";
import axios from 'axios';

export default function Register() {
  const location = useLocation()
  const eventName = location.state?.event;
  const [formData, setFormData] = useState({});


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
      
    const name = formData.get('name');
    const email = formData.get('email');
    const setFormData = {
      "name":name,
      "email":email,
      "event":eventName,
    }
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="Login h-screen p-28 flex flex-col bg-black items-center justify-center w-full">
      {/* Main Content */}
      <div className="flex gap-64 ">
        {/* Left Section */}
        <div className="w-1/2 p-10 text-left text-white">
          <h2 className="text-xl font-light tracking-tight">PHOENIX CLUB</h2>
          <h1 className="p-5 text-7xl "><span className="text-nowrap border-b border-white/50">WELCOMES YOU!</span></h1>
        </div>

        {/* Right Section */}
        <div className="w-1/2  bg-white/5 rounded-lg border-white/50 py-16 px-10">
          <div className="flex justify-between mb-8">
            <h3 className="text-xl font-semibold text-purple-400 border-b-2 pb-1">
              REGISTER to {eventName}
            </h3>
          </div>

          {/* Login Form */}
          <form>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Password"
              />
            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-purple-600/50 rounded-lg hover:bg-purple-700"
              onClick={()=>{setFormData()}}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}