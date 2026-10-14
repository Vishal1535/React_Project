import React from 'react'

export const Container = ({co}) => {

  return (
    <div style={{backgroundColor:co,}}className='h-75 w-74  mx-auto my-10 rounded-2xl border-2 text-2xl flex justify-center items-center text-[white]'>{co.toUpperCase()}</div>
  )
}
