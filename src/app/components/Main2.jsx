'use Client'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { PiCircleNotchThin } from "react-icons/pi";
import { myCategory } from '../top-categories/page';


export default function Main2() {
  const maintwo = myCategory.map(mainn2 => (
    <div key={mainn2.id} className=' flex flex-row items-center justify-between w-[400px] h-[200px] bg-gradient-to-tr from-purple-800 to-teal-600 shadow-md shadow-black rounded-xl'>
          <div className=' flex flex-col items-center justify-between gap-2 '>
                <h1 className=' text-[20px] ml-10 text-white'>{mainn2.id}</h1>
                <h1 className=' text-[15px] ml-10 text-white'>{mainn2.title}</h1>
                <div className=' relative '>
                  <PiCircleNotchThin className=' w-[80px] h-[80px] rotate-90 text-white' />
                </div>
                <div className=' absolute mt-[91px] ml-[60px]'>
                  <Link href={`/top-categories/${mainn2.folder}`}>
                    <button className=' text-white'>{mainn2.buttun}</button>
                  </Link>
                </div>
          </div>
            <Image src={`/image/${mainn2.image}.png`} alt='' width={100} height={100} /> 
    </div>
  ))
  return (
    <div className=' flex flex-row items-center justify-center h-[70vh] gap-16 p-5'>
          
          {maintwo}
    </div>

  )
}
