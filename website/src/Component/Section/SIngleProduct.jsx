import React from 'react'
import { useParams } from 'react-router-dom'
import AllItem from '../Product_JS/AllItems'

export const SIngleProduct = () => {

  let { id } = useParams()

  return (
    <>

      <div className='bg-[#fff7f2] min-h-screen py-10 px-4 md:px-10'>

        {AllItem.map((item) => {

          if (item.id == id) {
            return (

              <div
                key={item.id}
                className='bg-white rounded-4xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2'
              >

                {/* Left Side */}
                <div className='bg-linear-to-br from-[#fff1eb] to-[#fef6f3] p-5 md:p-8 flex items-center justify-center min-h-120 relative'>

                  {/* Tag */}
                  <div className='absolute top-5 left-5 bg-red-500 text-white text-xs md:text-sm px-4 py-2 rounded-full shadow'>
                    New Arrival
                  </div>

                  {/* Image */}
                  <img
                    src={item.img}
                    alt=""
                    className='rounded-3xl w-full h-full object-contain hover:scale-105 duration-500'
                  />

                </div>

                {/* Right Side */}
                <div className='p-6 md:p-10 flex flex-col justify-center'>

                  {/* Category */}
                  <p className='text-sm font-semibold uppercase tracking-widest text-red-500'>
                    {item.category}
                  </p>

                  {/* Name */}
                  <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mt-3 leading-tight'>
                    {item.name}
                  </h1>

                  {/* Rating */}
                  <div className='flex items-center gap-2 mt-5'>

                    <div className='flex text-yellow-400 text-lg'>
                      ★★★★★
                    </div>

                    <p className='text-gray-500 text-sm'>
                      (4.9 Reviews)
                    </p>

                  </div>

                  {/* Price */}
                  <div className='flex items-center flex-wrap gap-5 mt-6'>

                    <p className='text-gray-400 line-through text-xl'>
                      {item.old_price}
                    </p>

                    <p className='text-4xl font-bold text-red-500'>
                      {item.new_price}
                    </p>

                    <span className='bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium'>
                      50% OFF
                    </span>

                  </div>

                  {/* Description */}
                  <p className='text-gray-500 leading-8 mt-7 text-base'>
                    Upgrade your fashion style with this premium quality outfit.
                    Designed for comfort, trendy look and daily wear. Perfect fit
                    with soft fabric and modern style.
                  </p>

                  {/* Features */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>

                    <div className='bg-[#fff7f2] rounded-2xl p-4 border border-[#f3e6df]'>

                      <p className='text-gray-800 font-semibold'>
                        Free Delivery
                      </p>

                      <p className='text-sm text-gray-500 mt-1'>
                        On all orders
                      </p>

                    </div>

                    <div className='bg-[#fff7f2] rounded-2xl p-4 border border-[#f3e6df]'>

                      <p className='text-gray-800 font-semibold'>
                        Easy Returns
                      </p>

                      <p className='text-sm text-gray-500 mt-1'>
                        7 Days Return
                      </p>

                    </div>

                  </div>

                  {/* Buttons */}
                  <div className='flex flex-col sm:flex-row gap-4 mt-10'>

                    <button className='flex-1 py-3 rounded-2xl bg-red-500 text-white font-medium hover:bg-red-600 duration-300 cursor-pointer shadow-md hover:shadow-lg'>
                      Add To Cart
                    </button>

                    <button className='flex-1 py-3 rounded-2xl border border-gray-200 text-gray-700 font-medium hover:bg-red-500 hover:text-white hover:border-red-500 duration-300 cursor-pointer'>
                      Buy Now
                    </button>

                  </div>

                  {/* Extra Info */}
                  <div className='mt-10 flex flex-wrap gap-3'>

                    <span className='bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full'>
                      Premium Quality
                    </span>

                    <span className='bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full'>
                      Trending Style
                    </span>

                    <span className='bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full'>
                      Secure Payment
                    </span>

                  </div>

                </div>

              </div>

            )
          }

        })}

      </div>

    </>
  )
}