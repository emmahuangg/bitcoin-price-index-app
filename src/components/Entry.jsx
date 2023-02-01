import React from 'react'
import { decode } from '../resources/decoder';
export const Entry = (props) => {
    const displayedData = props.data;

    return (
        <div className='bg-lightGrey h-52 rounded-3xl p-5 shadow-lg w-full grid hover:brightness-125 transition-all duration-200 overflow-hidden'>
            <h1 className='text-white font-extrabold text-3xl bg-green w-16 h-16 text-center rounded-full mb-5 py-3'>{props.id + 1}</h1>
          <h1 className='text-white font-extrabold lg:text-3xl md:text-3xl text-xl'>{decode(displayedData.symbol)}{displayedData.rate}&nbsp;&nbsp;{displayedData.code}</h1>
            <h1 className='text-green font-extrabold lg:text-xl md:text-xl text-lg'>{displayedData.rate_float}&nbsp;&nbsp;{displayedData.description}s</h1>
      </div>
  )
}
