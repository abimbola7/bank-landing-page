import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import { useGSAP } from '@gsap/react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const timeline = React.useRef<gsap.core.Timeline | null>(null);
  const timeline1  = React.useRef<gsap.core.Timeline | null>(null)

  const { contextSafe }   = useGSAP(()=>{
    timeline.current = gsap.timeline({
      paused : true,
    }).to(".swipebutton", {
      duration : .3,
      width : "8rem",
      borderTopWidth : "2px",
      borderLeftWidth : "2px",
      borderRightWidth : "2px",
    })

    timeline1.current = gsap.timeline({
      // paused : true
    }).from(".sww", {
      duration : 1,
      opacity : 0,
      y : 100,
      ease : 'power1.out',
      stagger : .2
    })
  })

  const handleClick = contextSafe(() => {
    timeline1.current?.restart()
  })

  const mouseEnter1 = contextSafe(() => {
    timeline.current?.play()
  })
  
  const mouseLeave1 = contextSafe(() => {
    timeline.current?.reverse()
  })
  return (
    <div className="carousel-container relative swiper-container">
      <Swiper
        loop={true}
        navigation={{
          nextEl: '.custom-button-next',
          prevEl: '.custom-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper w-full h-[90vh]"
      >
        <SwiperSlide className="relative">
          <img
            src="https://img.freepik.com/free-photo/young-afro-girl-wearing-glasses-looking-happy-texting-with-frien_574295-6163.jpg?t=st=1720113758~exp=1720117358~hmac=1ff5cd56f2ee453489552d61120ffd1d3d1b3f4c6738592b4e5f450f4e90feec&w=900"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white slidee z-[10000] w-full border h-full flex items-center justify-center">
            <div className='max-w-xs sm:max-w-lg w-full text-center space-y-4 flex items-center flex-col sww'>
              <h2 className="text-2xl sm:text-4xl font-semibold">Welcome to our World</h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod, nunc nec vehicula lacinia, nunc odio ultricies elit
              </p>
              <button 
              onMouseEnter={mouseEnter1}
              onMouseLeave={mouseLeave1}
              className='flex items-center justify-center w-fit h-12 !bg-transparent border-b-2 swipebutton'>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://img.freepik.com/free-photo/caucasian-adult-paying-with-credit-card-indoors-generated-by-ai_188544-53667.jpg?t=st=1720113946~exp=1720117546~hmac=7f91e26aa6e5f8cb23ebca8a9cc14bb5e7f24b9afc453ee9f5d15a540e3deed2&w=826"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white slidee z-[10000] w-full border h-full flex items-center justify-center">
            <div className='max-w-xs sm:max-w-lg w-full text-center space-y-4 flex items-center flex-col sww'>
              <h2 className="text-2xl sm:text-4xl font-semibold">Special Family Rates</h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod, nunc nec vehicula lacinia, nunc odio ultricies elit
              </p>
              <button 
              onMouseEnter={mouseEnter1}
              onMouseLeave={mouseLeave1}
              className='flex items-center justify-center w-fit h-12 !bg-transparent border-b-2 swipebutton'>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://img.freepik.com/free-photo/golden-bitcoin-mail-hands_155003-9381.jpg?t=st=1720114117~exp=1720117717~hmac=21de02b28bfd5673e47f83e341ea75ca30a2bbb4a2b2698d296a0d66ffd4b188&w=740"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white slidee z-[10000] w-full border h-full flex items-center justify-center">
            <div className='max-w-xs sm:max-w-lg w-full text-center space-y-4 flex items-center flex-col sww'>
              <h2 className="text-2xl sm:text-4xl font-semibold">Efficient Financing</h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod, nunc nec vehicula lacinia, nunc odio ultricies elit
              </p>
              <button 
              onMouseEnter={mouseEnter1}
              onMouseLeave={mouseLeave1}
              className='flex items-center justify-center w-fit h-12 !bg-transparent border-b-2 swipebutton'>
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* Repeat for additional slides */}
      </Swiper>
      {/* Custom navigation buttons */}
      <div 
      onClick={handleClick}
      className="custom-button-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full bg-opacity-50 cursor-pointer z-10 hover:bg-gray-600 group">
        <TfiAngleRight size={20} className='text-[#b1b0b0] group-hover:text-white'/>
      </div>
      <div 
      onClick={handleClick}
      className="custom-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-600 bg-opacity-50 group">
      <TfiAngleLeft size={20} className='text-[#b1b0b0] group-hover:text-white'/>
      </div>
    </div>
  );
};

export default Carousel;
