import React from "react";

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        {/* Left Section */}
        <div className="w-1/2 px-10 text-left text-white">
          <h2 className="text-lg font-semibold tracking-wide">PHOENIX CLUB</h2>
          <h1 className="mt-5 text-5xl font-bold">WELCOMES YOU!</h1>
          <div className="mt-2 border-t border-gray-600 w-96"></div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 max-w-md bg-gray-800/60 rounded-lg shadow-lg p-10">
          <div className="flex justify-between mb-8">
            <h3 className="text-xl font-semibold text-purple-400 border-b-2 border-purple-400 pb-1">
              LOGIN
            </h3>
            <h3 className="text-xl font-semibold text-white">SIGN UP</h3>
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
                className="w-full px-4 py-2 bg-gray-700/80 text-white rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
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
                className="w-full px-4 py-2 bg-gray-700/80 text-white rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Password"
              />
            </div>

            {/* Forgot Password */}
            <div className="mb-4 text-right">
              <a
                href="#"
                className="text-sm text-gray-400 hover:underline hover:text-white"
              >
                Forget password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}