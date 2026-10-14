import React from 'react'

export const Footer = () => {
  return (
    <>
    
    <div className='bg-[#fff7f2] px-6 md:px-16 py-14 mt-20'>

      <div className='flex flex-col md:flex-row items-center justify-between gap-10'>

        {/* Logo */}
        <div className="footer-logo text-center md:text-left">
          <p className='text-3xl font-bold text-gray-800'>
            Shopify
          </p>
        </div>

        {/* Links */}
        <ul className='flex flex-wrap justify-center gap-6 text-gray-600 font-medium'>
          <li className='hover:text-red-500 cursor-pointer'>About</li>
          <li className='hover:text-red-500 cursor-pointer'>Products</li>
          <li className='hover:text-red-500 cursor-pointer'>Office</li>
          <li className='hover:text-red-500 cursor-pointer'>Company</li>
          <li className='hover:text-red-500 cursor-pointer'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className="Footer_Social_Icon flex gap-4">

          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 duration-300 cursor-pointer'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
              alt="facebook"
              className="w-5 h-5"
            />
          </div>

          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 duration-300 cursor-pointer'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png" 
              alt="instagram"
              className="w-5 h-5"
            />
          </div>

          <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 duration-300 cursor-pointer'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
              alt="twitter"
              className="w-5 h-5"
            />
          </div>

        </div>

      </div>

      <div className='text-center text-gray-500 text-sm mt-10'>
        © 2026 Shopify. All rights reserved.
      </div>

    </div>

    </>
  )
}