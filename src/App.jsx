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

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  isDesktop && useGSAP(()=>{
    
    gsap.to('.Apps',{
      scrollTrigger:{
        trigger:'.App',
        scroller:"body",
        start:"top top",
        end:"50% 50%",
        scrub:2,
        snap:{
            snapTo: [0, 0.1825, 0.42, 1],
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
    < >
      <div className=" relative h-fit w-full">
        <Header />
      </div>
      {/* <Demo/> */}
    <section className="w-full h-full relative max-md:flex-col">
      <div className="App relative flex max-md:flex-col w-full h-[300vh]">  
        <div className="flex max-md:flex-col w-full h-screen top-0 sticky overflow-hidden">
          <Home />
          <Announcement />
          <Events />
          <Members />
        </div>
      </div>
      <div className="w-full h-screen">
        <Footer/>
      </div>
    </section>

    </>
  );
};

export default App;