import React from 'react'
import { UseContext } from './Context';
export const Categories = () => {
    let {News,SetNews,Fetch,Loader,SetLoader}=UseContext();
    let FetchData=async(item)=>{
        SetLoader(true);
        let val=await Fetch(item)
         SetNews(val.data.articles);
         SetLoader(false)
    }
    
    

    let arr=['business','entertainment','general','health','science','sports','technology']
  return (
    
   <>
   <div className='flex gap-4 mt-1 w-fit mx-auto'>

    {arr.map((item)=>{
        return(
            <button key={item}className="btn btn-primary" onClick={()=>{FetchData(item)}}>{item}</button>
        )
    })}
   </div>
   </>

  )
}
