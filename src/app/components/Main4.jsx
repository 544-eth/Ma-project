'use Client'
import React from 'react'
import Image from 'next/image' 

export default function Main4() {
  return (
    <main className='flex justify-around bg-slate-200 py-40 pb-12'>
        <div className='px-20 grid pt-2'>
        <div className='flex pb-4 pt-1    ' >
            <h1 className='font-light text-7xl'>Qualilty and Assurance </h1>
        </div>
        <div className='flex pb-4'>
            <p className='text-2xl text-gray-500'>You get 30% off Discount when you purchase <br />This December </p>
        </div>
        

        <div className=''>
            <button className='font-bold rounded-2xl  hover:text-pink-800 transition duration-300 ease-in-out'>WATCH NOW</button>
        </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
            <Image src='/image/main3bg.png' alt='iphone 14' title='An iphone 14 with color red one of the rarest' width={500} height={500} className='flex pb-10' />
        </div>
    </main>
  )
}
