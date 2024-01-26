'use Client'
import React from 'react'
import Image from 'next/image'
 
export default function Main5() {
  return (
    <main className='bg-[white] py-20 pt-20 '>
        <div className='grid place-items-center px-20 pb-10'>
            <h1 className='text-5xl'>Our Best Selling iPhones</h1>
            <ul className='flex flex-row justify-between gap-10 py-10 '>
                <li className='border-r-4 pr-10 text-2xl text-pink-800 font-semibold'>All Phones</li>
                <li className='border-r-4 pr-10 text-2xl hover:text-pink-800 font-semibold transition duration-300 ease-in-out'>New Arrivals</li>
                <li className=' text-2xl hover:text-pink-800 font-semibold transition duration-300 ease-in-out'>Sales</li>
            </ul>
        </div>
        <div className='flex flex-row'>
            <section className='bg-[#eee] p-5 pt-15 border mx-10 rounded-lg pb-32'>
                <Image src='/image/oi1.png' alt='iphone 15' width={500} height={650} />
            </section>
            <section className='bg-[#eee] p-5 pt-15 border mx-10 rounded-lg'>
                <Image src='/image/oi2.png' alt='iphone 15' width={500} height={650} />
            </section>
            <section className='bg-[#eee] p-5 pt-15 border mx-10 rounded-lg'>
                <Image src='/image/oi2.png' alt='iphone 15' width={500} height={650} />
            </section>

            <section className='bg-[#eee] p-5 pt-15 border mx-10 rounded-lg'>
                <Image src='/image/oi1.png' alt='iphone 15' width={500} height={650} />
            </section>
        </div>
        
    </main>
    
  )
}
