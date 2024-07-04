import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export interface Managerr {
  index : number;
  name : string;
  profession : string;
  avatar : string;
  className? : string;
  managerRef : React.Ref<HTMLDivElement>;
}

const Manager = ({
  index,
  name,
  profession,
  avatar
} : Managerr) => {
  // const mm = gsap.matchMedia()
  const phoneRef = React.useRef<HTMLDivElement>(null);
  const timeline = React.useRef<gsap.core.Timeline | null>(null);
  
  // useGSAP(()=> {
  //   mm.add("(min-width: 800px)", () => {
  //     gsap.from(".manager", {
  //       scale : .2,
  //       opacity : 0,
  //       duration : 1,
  //       scrollTrigger : {
  //         trigger : ".managers",
  //         start : "top bottom",
  //         toggleActions : "play none none reset"
  //       }
  //     })
  //   })
  // })


  const { contextSafe } = useGSAP(() => {
      timeline.current = gsap.timeline({
        paused: true,
      }).from(phoneRef.current, {
        rotateY: 180,
        opacity: 0,
      });
    });
      
  const mouseEnter = contextSafe(() => {
    timeline.current?.play()
  })
  
  const mouseLeave = contextSafe(() => {
    timeline.current?.reverse()
  })
  return (
    <div className='flex flex-col items-center justify-center w-64 px-4 py-20 space-y-1 bg-white manage' key={index}>
      <div 
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="relative overflow-hidden">
        <div className="text-[#009CFF]  absolute flex items-center justify-center w-full h-full space-x-3 bg-black bg-opacity-50 rounded-full phone" ref={phoneRef}>
          <FaPhoneAlt size={20} className='cursor-pointer hover:text-white'/>
          <CiMail size={20} className='cursor-pointer hover:text-white'/>
        </div>
        <img src={ avatar } alt="avatar" className='w-28 h-28' />
      </div>
      <h1 className='font-semibold'>{ name }</h1>
      <p className='text-xs text-blue-500 uppercase'> { profession } </p>
      <div className='pt-3 !mt-5 border-t flex items-center space-x-3 px-3'>
        <CiInstagram size={20} color="#C0C0C3" className='cursor-pointer'/>
        <FaTwitter size={20} color="#C0C0C3" className='cursor-pointer'/>
        <TiSocialFacebook size={20} color="#C0C0C3" className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Manager
