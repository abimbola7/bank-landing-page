import  { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Affluent Banking",
    description: "Meeting the demands of our discerning clients by exceptional financial services",
    icons: "https://www.coronationmb.com/wp-content/uploads/sites/3/2021/03/International-Trade.gif"
  },
  {
    title: "Corporate Banking",
    description: "Making banking invisible to enable you focus on the things that really matter",
    icons: "https://www.coronationmb.com/wp-content/uploads/sites/3/2021/03/Corporate-Banking.gif"
  },
  {
    title: "Investment Banking",
    description: "Build and manage your wealth with our team of experts",
    icons: "https://www.coronationmb.com/wp-content/uploads/sites/3/2021/03/Investment-Banking.gif"
  },
  {
    title: "Global Markets and Treasury",
    description: "We provide liquidity Management with a variety of products",
    icons: "https://www.coronationmb.com/wp-content/uploads/sites/3/2021/03/Treasury-Global-Marketing.gif"
  },
];

const Services = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      console.log('Desktop media query activated');
      if (containerRef.current) {
        const elements = gsap.utils.toArray(".service");
        gsap.fromTo(
          elements,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay : 1,
            ease: 'power1.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              toggleActions: 'play none none none',
              // markers: true
            }
          }
        );
      }
    });

    mm.add("(max-width: 1024px)", () => {
      console.log('Mobile media query activated');
      if (containerRef.current) {
        const elements = gsap.utils.toArray(".service") as HTMLElement[];
        elements.forEach((element) => {
          gsap.fromTo(
            element,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power1.out',
              scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                toggleActions: 'play none restart none',
                // markers: true
              }
            }
          );
        });
      }
    });
  }, {
    scope : containerRef
  });

  return (
    <div className='grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 max-w-[90%] mx-auto gap-y-14 py-12' ref={containerRef}>
      {services.map((service, index) => (
        <div key={index} className='flex flex-col items-center justify-between p-3 px-6 py-12 space-y-2 text-center border-b-4 border-primary min-h-96 bg-background max-w-64 service'>
          <div className='flex flex-col items-center space-x-3'>
            <img src={service.icons} alt={service.title} className='h-12 w-14' />
            <div className='mt-5 space-y-2'>
              <h2 className='text-xl font-semibold'>{service.title}</h2>
              <p className='text-sm'>{service.description}</p>
            </div>
          </div>
          <button className='px-4 py-2 text-white bg-primary'>Learn More</button>
        </div>
      ))}
    </div>
  );
}

export default Services;
