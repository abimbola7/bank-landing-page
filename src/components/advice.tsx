import React from 'react'

const Advice = () => {
  return (
    <div className='w-full p-3 my-10 bg-white'>
      <div className="flex flex-col-reverse items-center justify-between w-full max-w-6xl gap-6 mx-auto lg:flex-row">
        <div className='flex flex-col items-center w-full max-w-2xl text-left lg:items-start lg:max-w-full lg:w-1/2'>
          <h1 className='text-2xl font-semibold lg:text-5xl'>Financial Advice</h1>
          <p className='mt-8 font-semibold'>We provide personalized financial advice</p>
          <div className='mt-3 space-y-3 text-sm font-light text-gray-400'>
            <p className=''>
            We understand that sound financial decisions are the foundation of a secure and prosperous future. That’s why we offer comprehensive financial advice tailored to your unique needs and goals. Whether you're planning for retirement, saving for a significant purchase, or simply looking to optimize your financial strategy, our experienced advisors are here to guide you every step of the way.
            </p>
            <p>
            We provide personalized solutions and actionable insights to help you make informed decisions and achieve financial success. Trust us to be your partner in navigating the complexities of the financial world with confidence and clarity.
            </p>
          </div>
          <button className='p-2 uppercase bg-[#009CFF] text-white w-fit mt-4'>read more</button>
        </div>
        <div className='flex items-end justify-center w-full lg:w-1/2'>
          <img src="https://livedemo00.template-help.com/wt_prod-20296/images/image-2-569x600.jpg" alt="banker" className='h-[32rem] w-[32rem]'/>
        </div>
      </div>
    </div>
  )
}

export default Advice
