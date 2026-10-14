import React from 'react'
import { Item } from '../Item/Item'

export const ShopItem = ({ Product, category }) => {
  return (
    <div className='bg-[#fffaf7] min-h-screen py-10 px-4 md:px-8'>

      {/* Heading */}
      <div className='text-center mb-10'>

        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 capitalize'>
          {category} Collection
        </h1>

        <p className='text-gray-500 mt-2 text-sm md:text-base'>
          Explore latest trending styles for {category}
        </p>

        <div className='w-24 h-1 bg-red-500 mx-auto rounded-full mt-4'></div>

      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

        {Product.map((item) => {
          if (item.category === category) {
            return (
              <Item
                key={item.id}
                img={item.img}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
                id={item.id}
              />
            )
          }
        })}

      </div>

    </div>
  )
}