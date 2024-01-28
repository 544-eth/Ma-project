'use Client'
import Image from 'next/image'
import React from 'react'

 export default function Main() {
  return (
    <main className='flex justify-between bg-gradient-to-t from-slate-300 mx-auto  lg:w-auto   py-60 pb-12 md:w-auto sm:w-auto '>
        <div className='px-10 grid pt-10 md:px-10 sm:px-1 '>
            <div className='flex pb-0 pt-1  text-7xl text-pink-800' >
                <h1>iFEC<span className='text-green-900 font-extrabold'> Online </span> Store</h1>
            </div>
            <div className='flex pb-8'>
                <p className='text-2xl'>The home of Everything Gadgets, We Make Sure <br />You are Just A Call Away From getting your surest product</p>
            </div>
            

            <div className=''>
                <button className=' bg-pink-800 p-2 px-4 rounded-2xl text-yellow-50 hover:bg-green-900 transition duration-700 ease-in-out'>Shop Now</button>
            </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
            <Image src='/image/bb1.png' alt='iphone 14' title='An iphone 14 with color red one of the rarest' width={500} height={500} className='flex pb-10' />
        </div>
    </main>

    
    
  )
}
