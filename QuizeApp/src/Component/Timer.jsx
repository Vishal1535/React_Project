import React, { useEffect, useState } from 'react'

export const Timer = ({time,Settime,SetReset}) => {
    
    let [format ,SetFormat]=useState(0);
    
    useEffect(()=>{
        let id=setInterval(()=>{
            
            Settime((pre)=>{
                if(pre<=0)
            {
                SetReset((pre)=>{
                    return(
                        pre=true
                    )
                })
                clearInterval(id);
                return 0;
            }
            
            
                return pre-1;
            })
        },1000)
        return ()=>clearInterval(id)
    },[])
    useEffect(()=>{
      SetFormat((pre)=>{ 
        return(
         pre=`${Math.floor(time/60).toString().padStart(2,0)}:${Math.floor(time%60).toString().padStart(2,0)}`
            
            
        )
      })
        
    },[time])
  return (
   <>   
    <div className='mt-16 text-2xl font-bold'>Time:{format}</div>
   </>
  )
}
