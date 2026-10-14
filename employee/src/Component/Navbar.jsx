import React from 'react'
import { Layout } from './Layout'
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { OpenEmployee } from './PopUp/popupslice';
export const Navbar = () => {
  let dispatch=useDispatch();
  return (
    <>
    <Layout>
      
   <div className="navbar bg-neutral text-neutral-content shadow-sm rounded-2xl">
  <div className="navbar-start">
  <div className="navbar-center">
  <a className="btn btn-ghost hover:bg-transparent border-none shadow-none text-xl">
 Employee
</a>
  </div> 
  </div>
  
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <FaPlus onClick={()=>{
        return(
          dispatch(OpenEmployee())
        )
        
      }}/>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <FaRegHeart/>
       
      </div>
    </button>
  </div>
</div>
    </Layout>
    


    
    </>
  )
}
