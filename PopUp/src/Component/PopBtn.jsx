import React from 'react'

export const PopBtn = ({title,func1}) => {
  let FalseFun=()=>{
   func1((pre)=>true);
   
    
  }
  return (
   <>
   <button className='border-2  bg-amber-600 p-3 text-[20px] ' onClick={()=>{
     FalseFun();
   }}>{title}</button>
   </>
  )
}

