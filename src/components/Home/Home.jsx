import React from 'react';
import logo from '../../assets/logo.png'; // Assuming the logo image is in this location

const Home = () => {
  return (
    <div className="bg-dark-blue min-h-screen flex items-center justify-center ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between"> 
        <div className="md:w-1/2 text-white px-4"> 
          <h1 className="text-6xl font-bold mb-20">PHOENIX CLUB</h1>
          <p className="text-3xl mb-6">
            Rising from the ashes in pursuit of excellence, we invite you to start your Tech journey with us to the path of Growth.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center"> 
          <img
            src={logo}
            alt="Phoenix Club Logo"
            className="h-96 w-96" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;