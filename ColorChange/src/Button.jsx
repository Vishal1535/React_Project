import React from 'react'

export const Button = ({children,func}) => {
   
    function Change(){
      func(children);
      
      
    }
  return (
   <>
   
         <button  style={{backgroundColor:children}} className='p-2 text-2xl text-[white] cursor-pointer active:scale-[0.9] transition-all duration-200 linear' onClick={Change}>{children}</button>
   
   </>
  ) 
}
