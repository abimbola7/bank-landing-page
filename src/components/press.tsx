import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Press = () => {
  useGSAP(()=>{
    gsap.to(".parallax-img", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-sect",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  })
  return (
    <div className="h-[60vh] w-full cont overflow-hidden relative">
      <div className="parallax-sect relative w-full h-[100vh] overflow-hidden">
        <div className="absolute top-0 left-0 z-50 flex w-full h-full py-2 text-white px-3">
          <div className="flex flex-col space-y-4 w-full h-[60vh] items-center justify-center">
            <div className="w-full max-w-lg flex flex-col space-y-4">
              <h1 className="text-4xl font-semibold">Financial News and Update</h1>
              <p className="font-light text-sm text-center">Sign up to our newsletter and be the first to know about latest news, special offers, events, and discounts from our company.</p>
            </div>
            <form className="flex items-center space-x-3 max-w-3xl w-full">
              <input type="text" placeholder="Enter your email" className="focus:outline-none px-4 py-2 bg-opacity-30 bg-white text-white placeholder:text-white flex-1" />
              <button className="text-black bg-white py-2 px-5 text-sm transition-colors duration-300 hover:bg-[#3d3d3d] hover:text-white">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <img src="https://img.freepik.com/free-photo/one-person-typing-laptop-night-generated-by-ai_188544-27872.jpg?t=st=1720041997~exp=1720045597~hmac=330e0364489be5eef0fcaf9a7de159d35efc6b29beaab70ecfdd54bea0b1e715&w=826" alt="cam" className="brightness-50 w-full h-full object-cover object-bottom parallax-img absolute top-0 left-0 " />
      </div>
    </div>
  )
}

export default Press
