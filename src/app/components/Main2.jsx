'use client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { PiCircleNotchThin } from "react-icons/pi";
import { myCategory } from '../top-categories/page';


export default function Main2() {
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
    <div className=' bg bg-gradient-to-br from-slate-100 to-blue-100   '>
          <div className=' place-items-center w-[90%] m-auto p-10 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-16 2xl:h-[70vh] xl:h-[60vh]'>
            {maintwo}
          </div>
    </div>

  )
}
