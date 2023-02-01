import React from 'react'

export const LeftNav = (props) => {
  return (
      <div className='w-full bg-none h-full rounded-xl'>
          <button onClick={props.handleUpdate} className='w-full bg-green shadow-lg rounded-full p-4 lg:outline text-black font-bold text-2xl lg:outline-green hover:bg-black hover:text-green transition-all duration-200'>Update Data</button>
          <div className='w-full rounded-3xl bg-grey p-6 mt-6 grid gap-3'>
              <h1 className="text-white font-bold text-xl">Filters</h1>
              <button onClick={() => props.setFilter(null)} className='bg-lightGrey rounded-full py-1 px-2 my-auto font-bold hover:brightness-125 transition-all duration-200'>- REMOVE ALL -</button>
              <button onClick={() => props.setFilter("USD")} className='bg-purple rounded-full py-1 px-2 my-auto font-bold hover:brightness-125 transition-all duration-200'>USD</button>
              <button onClick={() => props.setFilter("EUR")} className='bg-purple rounded-full py-1 px-2 my-auto font-bold hover:brightness-125 transition-all duration-200'>EUR</button>
              <button onClick={() => props.setFilter("GBP")} className='bg-purple rounded-full py-1 px-2 my-auto font-bold hover:brightness-125 transition-all duration-200'>GBP</button>

          </div>
    </div>
  )
}
