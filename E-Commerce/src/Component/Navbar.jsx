import React from 'react'
import {NavLink,Outlet} from "react-router-dom";

export const Navbar = () => {
  return (
   <>
  <div className='flex gap-3 mx-auto w-50'>
     <NavLink to={'/'} className={({isActive})=>isActive?'text-[red]':""}>About</NavLink>
   <NavLink to={'/Product'} className={({isActive})=>isActive?'text-[red]':""}>Product</NavLink>
  </div>
   <Outlet/>
   </>
  )
}
