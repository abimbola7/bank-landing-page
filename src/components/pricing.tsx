import { IoCheckmarkOutline } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";


gsap.registerPlugin(ScrollTrigger);

const pricing = [
  {
    popular : false,
    type : "basic",
    price : 19,
    options : [
      'FIGO score',
      'Years of credit',
    ]
  },
  {
    popular : false,
    type : "starter",
    price : 59,
    options : [
      'FIGO score',
      'Years of credit',
      'Education'
    ]
  },
  {
    popular : true,
    type : "business",
    price : 19,
    options : [
      'FIGO score',
      'Years of credit',
      'Education',
      'Area of Study',
    ]
  },
  {
    popular : false,
    type : "basic",
    price : 19,
    options : [
      'FIGO score',
      'Years of credit',
      'Education',
      'Area of Study',
      'Job History'
    ]
  },
]

const Pricing = () => {
  const containerRef  =  React.useRef(null)
  const priceRef  =  React.useRef(null)

  useGSAP(()=>{
    const elements = gsap.utils.toArray(".pricing") as HTMLElement[]
    elements.forEach((element) => {
      gsap.from(
        element,
        {
          opacity: 0,
          duration: 1.2,
          delay: .5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            toggleActions: 'play none none none',
            // markers: true
          }
        }
      );
    });
  })
  return (
    <div className='w-full min-h-[90vh] bg-background flex items-center justify-center p-3' ref={containerRef}>
      <div className='grid items-end justify-center w-full gap-20 mx-auto sm:grid-cols-2 lg:gap-6 lg:grid-cols-4 max-w-7xl justify-items-center'>
        {
          pricing.map((item) => (
            <div className='w-64 pricing' ref={priceRef}>
              {
                item.popular && (
                  <div className='w-full p-3 font-semibold bg-[#2c3236] text-white flex items-center justify-center relative'>
                    <div className='triangle1'></div>
                    MOST POPULAR
                  </div>
                )
              }
              <div className='flex flex-col items-center justify-center bg-[#009CFF] text-white font-semibold py-4 relative border'>
                <div className='triangle'></div>
                <p className='text-xl uppercase'>{ item.type }</p>
                <div className='relative font-normal text-center'>
                  <p className='absolute top-0 -left-2'>$</p>
                  <span className='text-6xl'>{ item.price }</span>
                  <sub className='text-[.7rem]'>/MO</sub>
                </div>
              </div>
              <div className='min-h-48 bg-[#434D53] w-full py-4 text-left flex items-center justify-center'>
                <div className='w-fit flex items-start justify-start flex-col'>
                  {
                    pricing[pricing.length - 1].options.map(option => (
                      <div className='flex justify-center py-2 text-left'>
                        <p className={`text-sm ${item.options.includes(option) ? 'text-white' : 'text-gray-500'}`}>
                          <IoCheckmarkOutline className={`inline-block mr-1 text-sm ${item.options.includes(option) ? 'text-[#009CFF]' : 'text-gray-500'}`}/>
                          { option }
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='bg-[#009CFF] p-3 text-white uppercase text-center transition-colors duration-200 hover: cursor-pointer'>sign up</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Pricing
