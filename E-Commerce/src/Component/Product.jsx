import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { OrbitProgress } from "react-loading-indicators";
import { useNavigate } from 'react-router-dom';

export const Product = () => {
  const Navigate=useNavigate();
  const [Data,SetData]=useState([]);
  const [Loader,SetLoader]=useState(true)
  let AddItem= async()=>{
    SetLoader(true);
    let val=await axios('https://fakestoreapi.com/products');
    SetLoader(false)
   SetData((pre)=>val.data);
   
   
      
  }
   useEffect(()=>{
    AddItem()
  },[])
 if(Loader)
 {
  return(
    <div className='flex justify-center items-center my-20'>
       <OrbitProgress 
  color="#32cd32" 
  size="medium" 
  text="Loading..." 
  textColor="#000" 
/>
    </div>
  )
 }
 let SendId=(id)=>{
   return(
    Navigate(`/Product/${id}`)
   )
  
  
 }
 let Display = ({ item }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
      
      {/* Image */}
      <div className="bg-gray-100 p-4 flex justify-center items-center">
        <img
          className="aspect-square object-contain h-50 transition-transform duration-300 group-hover:scale-105"
          src={item.image}
          alt=""
          onClick={() => {
            SendId(item.id);
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        
        <p className="text-sm font-semibold text-gray-800 line-clamp-2">
          {item.title}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-green-600">
            ₹ {item.price}
          </span>

          <span className="text-yellow-500 text-sm">
            ⭐ {item.rating.rate}
          </span>
        </div>

        <p className="text-gray-500 text-xs">
          {item.rating.count} reviews
        </p>

      </div>
    </div>
  );
};
 

  return (
    <>
         <div className="grid grid-cols-5 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1 gap-6 p-6 bg-gray-50 min-h-screen">
        {Data.map((item)=>{
          return(
            <Display key={item.id} item={item}/>
          )
        })}
      </div>
    </>
  )
}
