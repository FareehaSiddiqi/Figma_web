import React from 'react'
import Image from 'next/image'

const Sec4 = () => {
  return (
    <div>
      <div className='w-full h-screen flex items-center justify-center bg-[#c3da45]'>
        <div className='relative w-[90%] flex flex-col md:flex-row justify-evenly items-center'>
          <div className='bg-[#C4DEFD] md:w-[534px] md:h-[397px] w-[350px] h-[200px]'></div>
          <div className='md:w-[527px] md:h-[314] text-black flex flex-col mt-10 md:mt-0 text-center md:items-start items-center mb-10'>
            <h1 className='relative font-bold md:text-[64px] text-[34px] my-6 z-20'>
              A Vacation Gone Wrong: <span className='flex justify-center md:justify-start relative z-30'>A Twist of Fate</span>
              <Image
                src="/sooth.jpg"
                alt=''
                width={400}
                height={400}
                className='absolute  right-[150%]  z-50'
              />
            </h1>
            <p className='text-[18px] font-normal'>
              A peaceful vacation takes a dark turn when unexpected events begin to unfold. What started as a break from the ordinary becomes a journey into the unknown. Can the characters overcome the chaos, or will they be trapped in the shadows forever?
            </p>
            <button className='flex gap-2 items-center font-medium px-[40px] py-[20px] rounded-lg bg-[#f94f90] text-white mt-10'>
              Unravel the mystery
              <Image
                src="VectorR.svg"
                alt='right'
                width={7}
                height={7}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec4
