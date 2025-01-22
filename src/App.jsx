import React, { memo, useEffect } from "react";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Events from "./components/Events";
import Members from "./components/Members";
import Announcement from "./components/Announcement";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isDesktop, isMobile } from 'react-device-detect';
import ParticlesComponent from "./components/ParticlesComponent";

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  isDesktop && useGSAP(()=>{
    
    gsap.to('.Apps',{
      scrollTrigger:{
        trigger:'.App',
        scroller:"body",
        start:"top top",
        end:"50% 50%",
        scrub:0.5,
        snap:{
            snapTo: 1/3,
            duration: 0.3,
            superSnap:true,
            delay: 0,
            inertia:false,
            ease: "power3.inOut",
          }
      },
      x:'-300%'

    })
  },[])
  return (
    <>
      {/* <div className=" relative h-fit w-full order-1">
      </div> */}
      {/* <Demo/> */}
    <section className="w-full h-fit relative flex-col px-32 from-black to-slate-900">
      <div className="App relative flex max-md:flex-col w-full h-full">  
        <div className="flex flex-col sticky w-full h-screen max-md:h-full top-0 max-md:overflow-scroll">
        <Header />
          <ParticlesComponent/>
          <Home />
          <Announcement />
          <Events />
          <Members />
        </div>
      </div>
    </section>
          <Footer/>

    </>
  );
};

export default App;