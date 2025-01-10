import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <div className='h-[35vh] md:h-[12vh] w-full flex items-center content-center bg-[#e0425d] border-t border-t-slate-600'>
            <div className='flex md:flex-row flex-col items-center justify-center content-center text-center w-[100%]'>
        <div className='flex ml-3 justify-between items-center flex-col md:flex-row md:w-[60%] w-[80%]  '>
         <div className='flex gap-2 content-center items-center mb-6 md:mb-0'>
         <Image
         src='/dawn.jpg'
         width={25}
         height={25}
         alt='error'
        />
         <p>English</p>
        <Image
         src='/cata.jpg'
         width={15}
         height={15}
         alt='error'
        />  
      
         </div>
         <div className='flex justify-between items-center flex-col md:flex-row gap-8'>
             <p>Terms & privacy</p>
                <p>Security</p>
                <p>Status</p>
                <p>2024 BOOK_STORE LLC.</p>
         </div>
        </div>
        <div className='flex md:justify-end justify-center  items-center content-center bg-center bg-cover w-[40%] mt-6 md:mt-0 md:mr-3'>
        <div className='flex gap-10 items-center content-center bg-center bg-cover '>
            <Image
            src='/fb.avif'
            alt='fbook'
            width={10}
            height={10}
            className='w-3 h-5 bg-center bg-cover'
            />
            <Image
            src='/twi.avif'
            alt='fbook'
            width={10}
            height={10}
            className='w-5 h-5'
            />
            <Image
            src='/i1.avif'
            alt='fbook'
            width={10}
            height={10}
            className='w-5 h-5'
            />
        </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Footer