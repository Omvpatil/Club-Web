import React from 'react';
import logo from '../assets/logo.png'; // Assuming the logo image is in this location

const Home = () => {
  return (
    <div className="Apps h-screen max-md:h-full max-md:w-full w-full flex flex-shrink-0 items-center justify-center max-md:mt-32">
      <div className="container max-md:flex-col flex items-center justify-center w-full h-full"> 
        <div className="text-white px-4 flex flex-col"> 
          <h1 className="text-9xl leading-none max-md:text-7xl font-bold">PHOENIX </h1>
          <h1 className="text-5xl leading-none max-md:text-7xl font-bold">CLUB </h1>
          <p className="text-2xl pt-10 w-2/3">
            Rising from the ashes in pursuit of excellence, we invite you to start your Tech journey with us to the path of Growth.
          </p>
        </div>

        <div className="flex justify-start w-full h-full items-center "> 
          <img
            src={logo}
            alt="Phoenix Club Logo"
            className="object-contain h-[30vh] " 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;