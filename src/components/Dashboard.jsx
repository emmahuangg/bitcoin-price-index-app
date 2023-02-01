import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { LeftNav } from './LeftNav'
import { useState } from 'react'
import { Entry } from './Entry'

export const Dashboard = (props) => {
    const data = !props.loading && props.data;
    const [filter, setFilter] = useState(null);
    const entries = !props.loading && data.map((entry, idx) => { 
        if (filter) {
            if (entry.code == filter) {
                return <Entry data={entry} key={idx} id={idx} />
            } else {
                return "";
            }
        } else {
            return <Entry data={entry} key={idx} id={idx} />
        }
    })

    return (
        <div className='mt-12'>
            <div className='w-full h-auto p-5 rounded-3xl bg-grey lg:flex grid gap-3 shadow-lg'>
                <MdDashboard className='text-2xl font-bold text-white my-auto'/>
                <h1 className='text-white font-extrabold text-2xl my-auto'>Overview</h1>
                <h1 className='text-white font-lg text-2xl my-auto'>|&nbsp;&nbsp;&nbsp;Last updated at:</h1>
                <h1 className='text-green font-lg text-2xl my-auto'>{!props.loading && ((props.time.updated))}</h1>
                <div className='my-auto text-white ml-auto flex text-lg'>
                    <p className='font-bold text-lg my-auto'>Sort by:&nbsp;&nbsp;</p>
                    <button onClick={ () => props.setSort("alpha") } className='bg-blue rounded-full py-1 px-2 my-auto font-bold hover:brightness-125 transition-all duration-200'>Alphabetical</button>&nbsp;&nbsp;
                    <button onClick={() => props.setSort("rate")} className='bg-blue rounded-full py-1 px-2 my-auto font-bold hover:brightness-125 transition-all duration-200'>Rate</button>&nbsp;&nbsp;
                </div>
            </div>
            <div className='grid lg:grid-cols-4 mt-5 gap-5'>
                <LeftNav className='lg:col-span-1' handleUpdate={props.handleUpdate} setFilter={setFilter} />
                <span className='lg:col-span-3 bg-grey shadow-3xl rounded-3xl w-full p-5 grid lg:grid-cols-2 gap-3'>
                    {!props.loading && entries}
                </span>
            </div>
        </div>
    )
}
