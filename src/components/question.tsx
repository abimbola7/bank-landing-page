const Question = () => {
  return (
    <div className='bg-[#434D53] py-20 px-5'>
      <div className='flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between w-full max-w-3xl md:max-w-6xl mx-auto space-y-6'>
        <div className='w-full max-w-[33rem] space-y-4'>
          <h1 className='text-3xl font-semibold text-white'>Not Sure Which Plan is Right For You?</h1>
          <p className="text-sm font-light text-white text-opacity-40">If you are in doubt of which plan to opt for, subscribe to our newsletter and we will try to help you make the right decision</p>
        </div>

        <div className='px-6 py-3 text-md text-white transition-colors duration-300 border-2 border-white cursor-pointer hover:bg-white hover:text-[#434D53] font-medium'>
          SEND US A LETTER
        </div>
      </div>
    </div>
  )
}

export default Question
