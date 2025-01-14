import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollToPlugin);

const Test = () => {

        const handleClick=(ele)=>{
            gsap.to('.container',{
                duration:1,
                scrollTo:{
                    x:(ele*100),   
                },
                ease:'power4.inOut'
            })
        }
  return (
    <div className='w-full h-full flex flex-col bg-black'>
        <div className='w-full h-full bg-white'>
            <h1>Test Component</h1>
            <ul className='text-white'>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>1</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>2</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>3</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>4</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>5</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>6</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>7</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>8</li>
                <li className='w-full h-12 bg-black' onClick={(e)=>handleClick(e.target.innerText)}>9</li>
            </ul>
        </div>
        <div className='container w-full h-full bg-blue-500 flex gap-5 p-5 overflow-x-scroll'>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='1'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='2'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='3'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='4'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='5'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='6'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='7'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='8'>this is div 1</div>
            <div className='w-[50vh] h-full bg-slate-500 flex-shrink-0' id='9'>this is div 1</div>
        </div>

    </div>
  )
}

export default Test