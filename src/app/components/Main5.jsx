'use client'
import React from 'react'
import Image from 'next/image'
 
export default function Main5() {
  return (
    <main className='bg-[white] py-20 pt-20 '>
        <div className='grid place-items-center w-[95%] m-auto pb-10'>
            <h1 className='text-5xl'>Our Best Selling iPhones</h1>
            <ul className='flex flex-row justify-between w-[80%] m-auto gap-2 py-10  '>
                <li className='border-r-4 pr-3 text-2xl text-pink-800 font-semibold'>All Phones</li>
                <li className='border-r-4 pr-3 text-2xl hover:text-pink-800 font-semibold transition duration-300 ease-in-out'>New Arrivals</li>
                <li className=' text-2xl hover:text-pink-800 font-semibold transition duration-300 ease-in-out'>Sales</li>
            </ul>
        </div>
        <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 p-16   '>
            <section className='bg-[#eee] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg '>
                <Image src='/image/oi1.png' alt='iphone 15' width={200} height={350} />
            </section>
            <section className='bg-[#eee] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg'>
                <Image src='/image/oi2.png' alt='iphone 15' width={200} height={350} />
            </section>
            <section className='bg-[#eee] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg'>
                <Image src='/image/oi2.png' alt='iphone 15' width={200} height={350} />
            </section>

            <section className='bg-[#eee] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg'>
                <Image src='/image/oi1.png' alt='iphone 15' width={200} height={350} />
            </section>
        </div>
        
    </main>
    
  )
}
