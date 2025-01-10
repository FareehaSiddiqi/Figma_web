import React from 'react'
import Image from 'next/image'

const Sec2 = () => {
  return (
    <div>
        <div className='w-full h-screen flex items-center justify-center bg-[#4fe042]'>
            <div className='relative w-[90%] flex flex-col-reverse md:flex-row justify-evenly items-center'>
                <div>
                  <Image
                  src='/wealth.jpg'
                  alt='error'
                  width={500}
                  height={491}
                  className='mt-10'
                  />
                </div>
                <div className='md:w-[527px] md:h-[314] text-black flex flex-col text-center md:items-start items-center mb-10'>
                  <h1 className='relative font-bold md:text-[64px] text-[34px] my-6 z-20'>Work <span className='relative z-30'>together</span>
                  <Image
                 alt=''
                 src="/pray.jpg"
                 width={150}
                 height={150}
                 className=' absolute bottom-100 left-[100%] z-20'
                 />
                  </h1>
                  <p className='text-[18px] font-normal'>
                    Join the journey through **"In the Adventure of Imagination"**, where you'll uncover endless tales of wonder and excitement. Work with fellow readers, sharing ideas and collaborating on these epic adventures.
                  </p>
                  <button className='flex gap-2 items-center font-medium px-[40px] py-[20px] rounded-lg bg-[#f94f6b] text-white mt-10'>
                    Start your adventure now
                    <Image
                      src='/blow.jp'
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

export default Sec2
