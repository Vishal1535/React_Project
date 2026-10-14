import React from 'react'

export const NewsLetter = () => {
  return (
    <>
    
    <div className='bg-[#fff7f2] mx-5 md:mx-10 my-20 px-6 md:px-16 py-14 rounded-[3rem] text-center'>

      <h1 className='text-3xl md:text-5xl font-bold text-gray-800 leading-tight'>
        Get Exclusive Offer on your Email
      </h1>

      <p className='text-gray-500 mt-5 text-base md:text-lg'>
        Subscribe to Our newsLetter and Stay Updated
      </p>

      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-10'>

        <input
          className='w-full sm:w-[70%] lg:w-[45%] bg-white px-6 py-4 rounded-full outline-none border border-[#ececec] text-gray-700'
          type="email"
          placeholder='Your Email Id'
        />

        <button className='w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium duration-300'>
          Subscribe
        </button>

      </div>

    </div>

    </>
  )
}