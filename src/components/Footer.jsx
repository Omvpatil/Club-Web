import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(()=>{
    gsap.to('span .ThisText',{
      scrollTrigger:{
        trigger:'.ThisText',
        start:'start start',
        scrub:1
      },
      y:1000
    })
  })

  return (
    <div className='flex flex-col flex-shrink-0 w-full h-full text-white justify-center items-center'>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='w-full h-full flex flex-col items-start justify-center gap-10 border-b border-white/50'>
          <div>
            <LinkedInIcon/>
            <span className='p-5'>Linkden</span>
          </div>
          <div>
            <InstagramIcon/>
            <span className='p-5'>Instagram</span>
          </div>
          <div>
            <XIcon/>
            <span className='p-5'>Twitter</span>
          </div>
        </div>
        <span>

        </span>
      </div>
      <div className=' flex w-full h-full justify-center items-center text-[25vw] font-extrabold overflow-hidden '>
        <span className='ThisText'>
        Phoenix
        </span>
      </div>
    </div>
  )
}

export default Footer