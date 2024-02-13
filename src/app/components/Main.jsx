'use client'
import Image from 'next/image'
import React from 'react'



 export default function Main() {
  return (
    
        <div className=' bg-gradient-to-bl from-blue-200 to-red-100  '>
            <section  className=' grid place-items-center  md:flex  md:justify-between w-[96%]  m-auto  h-[90vh] md:h-[90vh] '>

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
            </section>
        </div>
    

    
    
  )
}
