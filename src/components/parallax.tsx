import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)



const interest = [
  {
    name : "Exceptional Financial Services",
    description : "From affluent banking to investment banking, our comprehensive solutions are designed to help you achieve your financial goals."
  },
  {
    name : "Expert Team of Professionals",
    description : "Our professionals are committed to providing you with personalized advice and strategies."
  },
  {
    name : "Innovative Banking Solutions",
    description : "Experience the future of banking with innovative solutions that make banking seamless and convenient."
  },
]


const Parallax = () => {
  useGSAP(()=>{
    gsap.to(".parallax-image", {
      yPercent: -40,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });
    
    gsap.to(".interest", {
      yPercent : 20,
      ease : 'none',
      scrollTrigger : {
        trigger :  ".parallax-section",
        start : "top bottom",
        end : "bottom top",
        scrub : 2
      }
    });
  })
  // useGSAP(()=>{
  // })
  return (
    <div className="container mx-auto mt-20 w-full h-[130vh] sm:h-[80vh] !p-0">
      <div className="relative parallax-section">
        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full py-2">
          <div className='grid items-center justify-center w-full max-w-5xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 justify-items-center lg:interest'>
            {
              interest.map((items, index)=>(
                <div className='relative p-3 w-72 min-h-48'>
                  <span className='absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2'></span>
                  <span className='absolute !top-0 right-0 w-10 h-10 border-t-2 border-r-2'></span>
                  <span className='absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2'></span>
                  <span className='absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2'></span>
                  <span className='text-4xl font-bold'>
                    0{index + 1}
                  </span>
                  <h1 className='mt-2 text-lg font-semibold text-white '>{items.name}</h1>
                  <p className='mt-2 text-sm text-white text-opacity-90'>{items.description}</p>
                </div>
              ))
            }
          </div>
        </div>
        <img src="https://www.coronationmb.com/wp-content/uploads/sites/3/2020/01/Coronation-Merchant-Bank-Careers.jpg" alt="Parallax Image" className="parallax-image brightness-50" />
      </div>
    </div>
  )
}

export default Parallax
