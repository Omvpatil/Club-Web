import React from 'react';
import logo from '../assets/logo.png'; // Assuming the logo image is in this location

const Home = () => {
  return (
    <div className="Apps bg-dark-blue h-screen w-screen flex flex-shrink-0 items-center justify-center max-md:mt-32">
      <div className="container max-md:flex-col flex items-center justify-between"> 
        <div className="text-white px-4 flex flex-col gap-16"> 
          <h1 className="text-9xl max-md:text-7xl font-bold">PHOENIX CLUB</h1>
          <p className="text-2xl">
            Rising from the ashes in pursuit of excellence, we invite you to start your Tech journey with us to the path of Growth.
          </p>
        </div>

        <div className="flex justify-center max-md:h-[60vh]"> 
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