import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { UseContext } from './Context';
import { FourSquare } from "react-loading-indicators";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <Atom color="#32cd32" size="medium" />
    </div>
  );
}

export default Loader;

export const Card = () => {
 
    
    let {News,SetNews,Fetch,Loader,SetLoader}=UseContext();

    useEffect(()=>{
      
      (async()=>{
        SetLoader(true);
        let val=await Fetch();
        SetLoader(false)
        SetNews(val.data.articles);
        
       
        
      })()
    },[])
  if (Loader) {
  return (
    <div className="flex flex-col justify-start items-center  min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col mt-40 items-center gap-4">
        
        <FourSquare color="#32cd32" size="large" />
        
        <p className="text-gray-600 font-medium text-lg">
          Loading data...
        </p>

      </div>

    </div>
  );
}
    
    
    
    

    let Cards=({item})=>{
        return(
            <>    
  <div className="card bg-base-100  shadow-xl">
  <figure>
   <img
  src={item.urlToImage}
  alt={item.description}
  className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
/>
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{item.author}</h2>
    <p className='line-clamp-2'>{item.content}</p>
    
    <p className='line-clamp-2'>{item.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{
        window.open(item.url,'_blank')
      }}>Read more</button>
    </div>
  </div>
</div>
            </>
        )
    }
  return (
    <>
    <div className='grid grid-cols-4 gap-5 mt-5'>
        {News.map((item,idx)=>{
          if(!item.urlToImage)
            return null;
         return(
          <Cards key={idx} item={item}/>
         )
        })}
    </div>
    
    </>
  )
}
