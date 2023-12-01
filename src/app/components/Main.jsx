import Image from 'next/image'
import React from 'react'
import Picture from '../img/bg1.png'

 export default function Main() {
  return (
    <main className='flex justify-around bg-slate-200 py-60'>
        <div className='px-20'>
        <div className='flex pb-5  text-7xl text-pink-800' >
            <h1>iFEC<span className='text-green-900 font-extrabold'> Online </span> Store</h1>
        </div>
        <div className='flex pb-8'>
            <p className='text-2xl'>The home of Everything Gadgets, We Make Sure <br />You're Just A Call Away From getting your surest product</p>
        </div>
        

        <div className=''>
            <button className=' bg-pink-800 p-2 px-4 rounded-2xl text-yellow-50 hover:bg-green-900'>Shop Now</button>
        </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
            <Image src={Picture} alt='iphone 14' title='An iphone 14 with color red one of the rarest' width={400} height={400} />
        </div>
    </main>
    
  )
}
