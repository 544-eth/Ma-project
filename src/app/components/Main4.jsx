'use Client'
import React from 'react'
import Image from 'next/image' 

export default function Main4() {
  return (
    <main className='  bg-slate-200 '>
    <div className=' grid place-items-center w-[95%] m-auto p-5 xl:grid-cols-2 lg:grid-cols-2 lg:h-[70vh] md:grid md:place-items-center '>

        <div className='grid pt-2'>
            <div className='flex pb-4 pt-1    ' >
                <h1 className='font-light text-7xl '>Qualilty and Assurance </h1>
            </div>
            <div className='flex pb-4'>
                <p className='text-2xl text-gray-500'>You get 30% off Discount when you purchase <br />This December </p>
            </div>
        
        </div>
        <div className='flex flex-col items-center gap-5'>
            <Image src='/image/main3bg.png' alt='iphone 14' title='An iphone 14 with color red one of the rarest' width={500} height={500} className='flex pb-10' />
        </div>
    </div>
    </main>
  )
}
