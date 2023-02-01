import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

export const Header = () => {
  return (
      <header className='grid lg:flex gap-4 h-auto'>
        <RiMoneyDollarCircleLine className='font-extrabold text-yellow text-7xl my-auto' />
      <h1 className='font-extrabold text-white text-3xl font-poppins my-auto'>Bitcoin Price Index</h1>
      <h1 className='font-extrabold text-black text-lg font-poppins ml-auto my-auto bg-yellow px-6 py-2 rounded-full'>By Emma Huang: For EarthLabs</h1>
    </header>
  )
}
