import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { decode } from '../resources/decoder'

export const Summary = (props) => {
    const updateTime = !props.loading && (props.time)
    const displayedData = !props.loading && (props.data.filter((entry) => { return entry.code == "USD" }).length > 0 ? props.data.filter((entry) => { return entry.code == "USD" })[0] : props.data[0]);
    return (
        <div className="bg-[url('../public/bitcoinCover.jpg')] lg:h-96 h-60 w-full bg-no-repeat bg-cover bg-center mt-5 rounded-3xl shadow-lg">
            <div className='h-full w-full backdrop-brightness-25 flex'>
                {props.loading && <div className='h-auto m-auto w-auto'><ThreeDots color="#FFC35A" height="80" width="80" radius="9" /> </div>}
                {!props.loading &&
                    <div className='lg:p-20 p-4 h-full whitespace-pre-wrap overflow-hidden'>
                        <h1 className='text-white font-extrabold lg:text-2xl mt-5 text-lg '>{updateTime.updated}</h1>
                        <h1 className='text-yellow font-extrabold lg:text-7xl mt-3 text-2xl'>{decode(displayedData.symbol)}{displayedData.rate}&nbsp;&nbsp;{displayedData.code}</h1>
                        <h1 className='text-white font-extrabold lg:text-2xl mt-3 text-lg'>{displayedData.rate_float}&nbsp;&nbsp;{displayedData.description}s</h1>

                    </div>
                }
            </div></div>
    )
}
