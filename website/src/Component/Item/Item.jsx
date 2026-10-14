import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddToCart } from '../../ConText/Slice'


export const Item = (props) => {
  let Navigate=useNavigate()
  let dispatch=useDispatch()
  return (
    <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">

      {/* Image */}
      <div className="rounded-xl overflow-hidden bg-gray-50 aspect-3/4 flex items-center justify-center">
        <img
          src={props.img}
          alt=""
          className="w-full h-full object-contain hover:scale-105 duration-300"
        />
      </div>

      {/* Name */}
      <p className="mt-3 text-sm md:text-base font-medium text-gray-800 line-clamp-2">
        {props.name}
      </p>

      {/* Price */}
      <div className="flex items-center justify-between mt-2">

        <p className="text-xs text-gray-400 line-through">
          {props.old_price}
        </p>

        <p className="text-sm font-semibold text-red-500">
          {props.new_price}
        </p>

      </div>

      {/* Small Info */}
      <p className="text-xs text-gray-500 mt-2">
        Free delivery • Easy return
      </p>

      {/* Buttons */}
      <div className='flex gap-2 mt-3'>

        <button className="w-full py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-red-500 hover:text-white hover:border-red-500 cursor-pointer transition" onClick={()=>{
          Navigate(`/${props.id}`)

        }}>
          Read More
        </button>

        <button className="w-full py-2 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-red-500 hover:text-white hover:border-red-500 cursor-pointer transition" onClick={()=>{
          dispatch(AddToCart(props))
        }}>
          Add to Cart
        </button>

      </div>

    </div>
  )
}