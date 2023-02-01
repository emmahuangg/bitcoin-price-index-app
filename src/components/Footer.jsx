import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'


export const Footer = () => {
  return (
      <div className='mt-8 grid gap-3'>
          <hr className='border-yellow'></hr>
          <div className='lg:flex grid lg:gap-4 gap-2 h-auto mt-4'>
        <RiMoneyDollarCircleLine className='font-extrabold text-yellow text-2xl my-auto' />
              <h1 className='font-extrabold text-white text-lg font-poppins my-auto'>Bitcoin Price Index</h1>
              <h1 className='font-extrabold text-black text-sm font-poppins my-auto bg-yellow px-3 py-1 rounded-full'>By Emma Huang: For EarthLabs</h1>
</div>
          <h1 className='font-extrabold text-white text-sm font-poppins my-auto'>Disclaimer: This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org</h1>
    </div>
  )
}
