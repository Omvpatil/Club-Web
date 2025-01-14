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
        "position2":"Voice-President"
      },
      {
        "id":1,
        "leader1":"Vidhi Patwa",
        "leader2":"Aryan",
        "position1":"President",
        "position2":"Voice-President"
      },
      {
        "id":2,
        "leader1":"Riddhi Singhvi",
        "leader2":"Ashish Nagmoti",
        "position1":"President",
        "position2":"Voice-President"
      },
      {
        "id":3,
        "leader1":"Riddhi Singhvi",
        "leader2":"Ashish Nagmoti",
        "position1":"President",
        "position2":"Voice-President"
      },
      {
        "id":4,
        "leader1":"Riddhi Singhvi",
        "leader2":"Ashish Nagmoti",
        "position1":"President",
        "position2":"Voice-President"
      },
    ]

useGSAP(()=>{ 
    gsap.to('.container',{
        duration:1,
        scrollTo:{
          x:(clickedIndex*810),
          y:(clickedIndex*555),
        },
        ease:'Power4.easeOut',
      })
    },[clickedIndex]);
  
  return (
  <div className='container flex max-md:flex-col w-full h-full overflow-x-scroll'>        
  {
    positions.map((position,index)=>(
      <React.Fragment key={`position-${index}`}>
      <div id={position.id} key={`leader1-${index}`} className="rounded-lg flex flex-col gap-6 h-1/2 flex-shrink-0">
        <div className="h-3/4 w-1/2 max-md:w-full bg-gray-700 object-cover"> <img className=" " src="../src/assets/acc.jpg" alt="" /></div>
        <h3 className="text-xl">{position.leader1}</h3>
        <p className="text-sm text-gray-400">{position.position1}</p>
      </div>
      <div id={`${position.id}2`} key={`leader2-${index}`} className="rounded-lg flex flex-col gap-6 h-1/2 flex-shrink-0">
        <div className="h-3/4 w-1/2 max-md:w-full bg-gray-700 object-cover"> <img className=" " src="../src/assets/acc.jpg" alt="" /></div>
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