import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import Home from './Home'
import Announcement from './Announcement'
import Events from './Events'
import Members from './Members'
import Footer from './Footer'
import { snap } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(snap)


const Demo = () => {

    useGSAP(()=>{
      gsap.to('.s1',{
        scrollTrigger:{
          trigger:'.main',
          scroller:"body",
          start:"top top",
          end:"50% 50%",
          markers:true,
          scrub:1,
          snap:{
            snapTo: [0, 0.33, 0.66, 1],
            duration: 0.5,
            delay: 0,
            ease: "power3.inOut"
          }
        },
        x:'-300%',
      
  
      })
    })


  return (
    <section>
        <div className='main w-full relative h-[400vh] '>
            <div className='w-full h-screen  sticky top-0 flex'>
                <div className='s1 w-full h-full flex-shrink-0'>
                  <Home/>
                </div>
                <div className='s1 w-full h-full flex-shrink-0'>
                  <Announcement />
                </div>
                <div className='s1 w-full h-full flex-shrink-0'>
                  <Events />
                </div>
                <div className='s1 w-full h-full flex-shrink-0'>
                  <Members />
                </div>
            </div>
        </div>

        <div className='w-full h-screen'><Footer/> </div>
    </section>
  )
}

export default Demo