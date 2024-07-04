
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import React from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

const Question = () => {
  const mm = gsap.matchMedia()
  const containerRef = React.useRef(null);

  useGSAP(()=>{
    mm.add("(min-width: 768px)", () => {
      gsap.from(".left", {
        xPercent : -60,
        duration : 1,
        scrollTrigger : {
          trigger : containerRef.current,
          // markers : true,
          start : 'top bottom',
          end : 'bottom top',
          toggleActions: 'play none none reset',
        }
      })
      gsap.from(".right", {
        xPercent : 60,
        duration : 1,
        scrollTrigger : {
          trigger : containerRef.current,
          // markers : true,
          start : 'top bottom',
          end : 'bottom top',
          toggleActions: 'play none none reset',
        }
      })
    })
  })

  return (
    <div className="bg-[#434D53] py-20 px-5" ref={containerRef}>
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between w-full max-w-3xl md:max-w-6xl mx-auto space-y-6">
        <div className="w-full max-w-[33rem] space-y-4 left">
          <h1 className="text-3xl font-semibold text-white">Not Sure Which Plan is Right For You?</h1>
          <p className="text-sm font-light text-white text-opacity-40">
            If you are in doubt of which plan to opt for, subscribe to our newsletter and we will try to help you make the right decision
          </p>
        </div>
        <div className="px-6 py-3 text-md text-white transition-colors duration-300 border-2 border-white cursor-pointer hover:bg-white hover:text-[#434D53] font-medium right">
          SEND US A LETTER
        </div>
      </div>
    </div>
  );
};

export default Question;
