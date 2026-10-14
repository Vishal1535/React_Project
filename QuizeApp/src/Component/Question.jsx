import React, { useState } from 'react'
import Q from './Question.json'
export const Question = ({SetScore,Settime,SetReset}) => {
   
   let [CurrIdx,SetCurrentIdx]=useState(0) ;
   
   function Check(item){
    if(item===Q[CurrIdx].answer)
    {
        SetScore((pre)=>{
            console.log(pre);
            
            return(
                pre=pre+1
            )
        })
    }
    SetCurrentIdx((pre)=>{
        if(pre==Q.length-1)
        {
           return(
            SetReset((pre)=>{
                return(pre=true)
            })
           )
        }
        return(
            pre=pre+1
        )
    })
    Settime((pre)=>{
        return(
            pre=10
        )
    })
    
   }
   
  return (
    <>
    <h1>{Q[CurrIdx].question}</h1>
    <div className='flex flex-col gap-2 justify-center items-center'>
        {Q[CurrIdx].options.map((item)=>{
            return(
                <p className='border-2 border-[black] min-w-20 cursor-pointer active:scale-[0.9] transition-all duration-[0.2] linear'  key={item} onClick={()=>{
                    Check(item)
                }}>{item}</p>
            )
        })}
    </div>
   </>
  )
}
