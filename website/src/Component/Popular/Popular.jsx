import React from 'react'
import FeaturedProducts from '../Product_JS/Feature'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <>
    
    <div className='py-16 px-5 md:px-10 bg-[#fff7f2]'>

      <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800'>
        Popular Items
      </h2>

      <div className='w-20 md:w-24 h-1 bg-red-500 mx-auto rounded-full mt-3 mb-10 md:mb-14'></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

        {FeaturedProducts.map((item) => {
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
        })}

      </div>

    </div>

    </>
  )
}