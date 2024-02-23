'use client'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { PiCircleNotchThin } from "react-icons/pi";
import { myCategory } from '../top-categories/page';
import Example from './floating'



 export default function Main() {
    const maintwo = myCategory.map(mainn2 => (
        <div key={mainn2.id} >
                      <div  className=' flex flex-row items-center justify-between  h-[200px] 2xl:w-[400px] lg:w-[300px] bg-gradient-to-tr from-purple-800 to-teal-600 shadow-md shadow-black rounded-xl'>
                            <div className=' flex flex-col items-center justify-between gap-2  '>
                                  <h1 className=' text-[20px] ml-10 text-white'>{mainn2.id}</h1>
                                  <h1 className=' text-[15px] ml-10 text-white'>{mainn2.title}</h1>
                                  <div className=' flex'>
    
                                      <div className='  relative z-10'>
                                         <PiCircleNotchThin className=' w-[80px] h-[80px] rotate-90 text-white    ' /> 
                                      </div>
                                      <div className=' absolute mt-[27px] ml-[60px]'>
                                        <Link href={`/top-categories/${mainn2.folder}`}>
                                          <button className=' text-white mb-[250px] flex'>{mainn2.buttun}</button>
                                        </Link>
                                      </div>
                                  </div>
                            </div>
                              <Image src={`/image/${mainn2.image}.png`} alt='' width={100} height={100} /> 
                      </div>
        </div>
      ))

  return (
    
        <div  className=' bg-gradient-to-bl from-blue-200 to-red-100  '>
            

                <div className=' grid place-items-center  md:flex  md:justify-between w-[96%]  m-auto  h-[165vh]  md:h-[90vh] '>

                    <div className='px-10 grid pt-2  '>
                        <div className='flex pb-0 pt-20  text-8xl 2xl:text-9xl text-gray-800' >
                            <h1 className=' '>iFec<span className=' text-green-600 font-extrabold'> Online </span> Store</h1> 
                        </div>
                        <div className='flex text-2xl 2xl:text-4xl py-4'>
                            <p className=' '>The home of Everything Gadgets, We Make Sure <br />You are Just A Call Away From getting your surest product</p>
                        </div>
                        


                    </div>
                    <div className=''>

                        <Example/>
                        
                    </div>
                </div>
            
                <div className=' bg-gradient-to-tr from-blue-200 to-red-50'>
                    <div  className=' place-items-center w-[90%] m-auto p-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-16 2xl:h-[70vh] xl:h-[90vh]'>
                        {maintwo}
                    </div>
                </div>


                <div className=' bg-gradient-to-bl from-blue-200 to-red-50'>

                        <div className=' grid place-items-center w-[95%] m-auto p-5 xl:grid-cols-2 lg:grid-cols-2 lg:h-[70vh] xl:h-[90vh] md:grid md:place-items-center '>

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
                </div>

            <div className='bg-gradient-to-tr from-blue-200 to-red-50 '>
                <div className='grid place-items-center w-[95%] m-auto py-8'>
                    <h1 className='text-5xl'>Our Best Selling iPhones</h1>
                    <ul className='flex flex-row justify-between w-[80%] m-auto gap-2 py-10  '>
                        <li className='border-r-4 border-green-600 pr-3 text-2xl text-pink-800 font-semibold'>All Phones</li>
                        <li className='border-r-4 border-green-600 pr-3 text-2xl hover:text-pink-800 font-semibold transition duration-300 ease-in-out'>New Arrivals</li>
                        <li className=' text-2xl hover:text-pink-800 font-semibold transition duration-300 ease-in-out'>Sales</li>
                    </ul>
                </div>
                <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 p-16   '>
                    <section className='bg-[rgb(184,184,184)] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg '>
                        <Image src='/image/oi1.png' alt='iphone 15' width={200} height={350} />
                    </section>
                    <section className='bg-[rgb(207,205,205)] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg'>
                        <Image src='/image/oi2.png' alt='iphone 15' width={200} height={350} />
                    </section>
                    <section className='bg-[rgb(207,205,205)] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg'>
                        <Image src='/image/oi2.png' alt='iphone 15' width={200} height={350} />
                    </section>

                    <section className='bg-[rgb(207,205,205)] p-5 pt-15 border flex flex-col items-center  mx-10 rounded-lg'>
                        <Image src='/image/oi1.png' alt='iphone 15' width={200} height={350} />
                    </section>
                </div>
        
            </div>

        </div>
    

    
    
  )
}
