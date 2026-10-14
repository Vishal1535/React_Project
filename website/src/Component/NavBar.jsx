import React from 'react'
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { Hero } from './Hero/Hero';
import { Footer } from './Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { OpenCart } from '../ConText/Slice';

export const NavBar = () => {
  let data=useSelector((state)=>state.SliceReducer.data)
  let dispatch=useDispatch();
  
  return (
    <>
    
    <div className='flex items-center justify-between px-10 py-4 bg-zinc-900/90 backdrop-blur-lg border-b border-zinc-700 shadow-2xl sticky top-0 z-50'>

      {/* Logo */}
      <div className='flex items-center gap-3 cursor-pointer'>
        <img
          className='w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg hover:scale-110 transition duration-300'
          src="data:image/png;base64,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"
          alt=""
        />

        <h1 className='text-3xl font-extrabold text-white tracking-wide drop-shadow-lg'>
          FashionHub
        </h1>
      </div>

      {/* Nav Links */}
      <div className='flex items-center gap-6 text-lg font-semibold'>

        {[
          { path: "/", name: "Home" },
        
          { path: "/mens", name: "Mens" },
          { path: "/women", name: "Womens" },
            { path: "/kids", name: "Kids" },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-white text-orange-600 shadow-lg scale-110"
                  : "text-white hover:bg-white hover:text-orange-600 hover:scale-105"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Cart */}
      <div className='relative cursor-pointer group'>
        <div className='bg-white p-3 rounded-full shadow-lg group-hover:scale-110 transition duration-300'>
          <FaCartPlus className='text-3xl text-orange-600' onClick={()=>{
            dispatch(OpenCart())
            
          }}/>
        </div>

        {/* Cart Count */}
        <span className='absolute -top-1 -right-1 bg-black text-white text-xs px-2 py-1 rounded-full'>
          {data.length}
        </span>
      </div>

    </div>

    <Outlet />
  
    
    </>
  )
}