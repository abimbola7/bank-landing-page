import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Advice = () => {

  const animateFrom = (el : HTMLElement, direction? : number) => {
      direction = direction || 1;
      let x = 0
      let y = direction * 100
      if (el.classList.contains("reveal_Right")) {
        x = 100;
        y = 0;
      }

      el.style.transform = "translate(" + x + "px, " + y + "px)";
      el.style.opacity = "0";
      gsap.fromTo(el, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1, 
        ease: "expo", 
        overwrite: "auto"
      });
  }

  const hide = (elem : HTMLElement) => {
    gsap.set(elem, {
      autoAlpha : 0
    })
  }

  useGSAP(()=>{
    gsap.utils.toArray(".reveal").map((element)=>{
      const el  = element as HTMLElement;
      hide(el);
      ScrollTrigger.create({
        trigger: el,
        onEnter: function() { animateFrom(el ) }, 
        onEnterBack: function() { animateFrom(el, -1) },
        onLeave: function() { hide(el) } // assure that the element is hidden when scrolled into view
      });
    })


  })
  return (
    <div className='w-full p-3 my-10 bg-white'>
      <div className="flex flex-col-reverse items-center justify-between w-full max-w-6xl gap-6 mx-auto lg:flex-row">
        <div className='flex flex-col items-center w-full max-w-2xl text-left lg:items-start lg:max-w-full lg:w-1/2 fromleft'>
          <h1 className='text-2xl font-semibold lg:text-5xl reveal'>Financial Advice</h1>
          <p className='mt-8 font-semibold reveal'>We provide personalized financial advice</p>
          <div className='mt-3 space-y-3 text-sm font-light text-gray-400 reveal'>
            <p className=''>
            We understand that sound financial decisions are the foundation of a secure and prosperous future. That’s why we offer comprehensive financial advice tailored to your unique needs and goals. Whether you're planning for retirement, saving for a significant purchase, or simply looking to optimize your financial strategy, our experienced advisors are here to guide you every step of the way.
            </p>
            <p>
            We provide personalized solutions and actionable insights to help you make informed decisions and achieve financial success. Trust us to be your partner in navigating the complexities of the financial world with confidence and clarity.
            </p>
          </div>
          <button className='p-2 uppercase bg-[#009CFF] text-white w-fit mt-4 reveal'>read more</button>
        </div>
        <div className='flex items-end justify-center w-full lg:w-1/2 toright reveal reveal_Right'>
          <img src="https://livedemo00.template-help.com/wt_prod-20296/images/image-2-569x600.jpg" alt="banker" className='lg:h-[32rem] lg:w-[32rem]'/>
        </div>
      </div>
    </div>
  )
}

export default Advice
