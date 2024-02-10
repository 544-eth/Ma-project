'use Client'
import Image from 'next/image'
import React from 'react'

 export default function Main() {
  return (
    <main className=' bg-slate-200   '>
        <div className=' flex flex-col justify-between 2xl:w-[96%] 2xl:m-auto m-auto p-5 py-0 xl:grid-cols-2 xl:h-[80vh]  lg:grid-cols-2 lg:h-[70vh] md:grid md:place-items-center md:w-[95%] md:m-auto md:h-[90vh] sm:h-[105vh] 2xl:gap-[30vw]'>

            <div className='px-10 grid pt-2  '>
                <div className='flex pb-0 pt-20  text-7xl text-gray-800' >
                    <h1 className=' font-serif'>iFEC<span className=' text-green-600 font-extrabold'> Online </span> Store</h1>
                </div>
                <div className='flex py-4'>
                    <p className='text-2xl font-serif'>The home of Everything Gadgets, We Make Sure <br />You are Just A Call Away From getting your surest product</p>
                </div>
                


            </div>
            <div className=' sm:mb-32  '>
                <Image src='/image/bb1.png' alt='iphone 14' title='An iphone 14 with color red one of the rarest' width={500} height={500}  className=' object-contain' />
            </div>
        </div>
    </main>

    
    
  )
}
