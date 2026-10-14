import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OrbitProgress } from "react-loading-indicators";
import axios from 'axios';


export const SingleProduct = () => {
    const {id}=useParams();
  
    const [Data,SetData]=useState([]);
  const [Loader,SetLoader]=useState(true)
  let AddItem= async()=>{
    SetLoader(true);
    let val=await axios(`https://fakestoreapi.com/products/${id}`);
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
 let Display = ({ item }) => {
  return (
    <div className="max-w-5xl mx-auto my-10 bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-8">
      
      {/* Image */}
      <div className="flex justify-center items-center bg-gray-100 rounded-xl p-6">
        <img
          className="aspect-square object-contain w-full max-h-[350px] transition-all duration-300 hover:scale-105"
          src={item.image}
          alt=""
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          {item.title}
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>

        <div className="flex items-center gap-4 mt-2">
          <span className="text-2xl font-semibold text-green-600">
            ₹ {item.price}
          </span>

          <span className="text-yellow-500 font-medium">
            ⭐ {item.rating.rate}
          </span>

          <span className="text-gray-500 text-sm">
            ({item.rating.count} reviews)
          </span>
        </div>

        <button className="mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
          Add to Cart
        </button>

      </div>
    </div>
  );
};
  return (
  <>
  <Display item={Data}/>
  </>
  )
}
