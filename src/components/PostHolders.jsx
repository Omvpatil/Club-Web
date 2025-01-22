import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin)

const PostHolders = ({clickedIndex}) => {
  const positions = [
      {
        "id":0,
        "leader1":"Riddhi Singhvi",
        "leader2":"Ashish Nagmoti",
        "position1":"President",
        "position2":"Voice-President",
        "pic1":"../src/photos/Ashish.png",
        "pic2":"../src/photos/Ashish.png",
      },
      {
        "id":1,
        "leader1":"Vidhi Patwa",
        "leader2":"Aryan Suryawanshi",
        "position1":"Secretary",
        "position2":"Joint-secretary",
        "pic1":"../src/photos/Vidhee.jpg",
        "pic2":"../src/photos/Aryan Suryavanshi.jpg",
      },
      {
        "id":2,
        "leader1":"Uday Shah",
        "leader2":"Atharva Jadhav",
        "position1":"Treasurer",
        "position2":"Co-Treasurer",
        "pic1":"../src/photos/Uday.png",
        "pic2":"../src/photos/Ashish.jpg",
      },
      {
        "id":3,
        "leader1":"Lulwa Anif",
        "leader2":"Om Patil",
        "position1":"Tech Lead",
        "position2":"Co-tech Lead",
        "pic1":"../src/photos/Lulwa shabbir Anif.jpg",
        "pic2":"../src/photos/om patil.jpg",
      },
      {
        "id":4,
        "leader1":"Pratiksha Khandbahale",
        "leader2":"Siddhi Bramhankar",
        "position1":"Creative Head",
        "position2":"Co-Creative Head",
        "pic1":"../src/photos/Pratiksha Khandbahale.jpg",
        "pic2":"../src/photos/image.png",
      },
      {
        "id":4,
        "leader1":"Riyaan Attar",
        "position1":"Social Media Manager",
        "pic1":"../src/photos/Riann Attar.jpg",
        "pic2":"../src/photos/",
      },
    ]

useGSAP(()=>{ 
    gsap.to('.container',{
        duration:1,
        scrollTo:{
          x:(clickedIndex*923),
      
        },
        ease:'power3.out',
      })
    },[clickedIndex]);
  
  return (
  <div className='container flex max-md:flex-col w-[50vw] h-full overflow-hidden'>        
  {
    positions.map((position,index)=>(
      <React.Fragment key={`position-${index}`}>
      <div id={position.id} key={`leader1-${index}`} className="rounded-lg flex flex-col w-1/2 gap-6 h-1/2 flex-shrink-0">
        <div className=" h-[460px] w-[460px] bg-gray-700 object-cover relative"> <img className=" object-cover w-full h-full" src={position.pic1} alt="" /></div>
        <h3 className="text-xl">{position.leader1}</h3>
        <p className="text-sm text-gray-400">{position.position1}</p>
      </div>

      <div id={`${position.id}2`} key={`leader2-${index}`} className="rounded-lg flex flex-col gap-6 h-1/2 flex-shrink-0">
        <div className=" h-[460px] w-[460px] bg-gray-700  relative"> <img className=" w-full object-cover h-full" src={position.pic1} alt="" /></div>
        <h3 className="text-xl">{position.leader2}</h3>
        <p className="text-sm text-gray-400">{position.position2}</p>
      </div>
      </React.Fragment> 
    ))
  }    
    
  </div>
  )
}

export default PostHolders