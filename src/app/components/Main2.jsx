import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { PiCircleNotchThin } from "react-icons/pi";
import { myCategory } from '../top-categories/page';


export default function Main2() {
  const maintwo = myCategory.map(mainn2 => (
    <div className=' flex flex-row items-center justify-between w-[400px] h-[200px] bg-gradient-to-tr from-purple-800 to-teal-600 shadow-md shadow-black rounded-xl'>
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
            <Image src={`/image/${mainn2.image}.png`} width={100} height={100} /> 
    </div>
  ))
  return (
    <div className=' flex flex-row items-center justify-center h-[70vh] gap-16 p-5'>
          {/* <div className='flex justify-around bg-[white] py-56 pt-10 pb-24'>   
                <div className=' flex flex-row items-center justify-between w-[400px] h-[200px] bg-gradient-to-tr from-purple-800 to-teal-600 shadow-md shadow-black rounded-xl'>
                          <div className=' flex flex-col items-center justify-between gap-2 '>
                              <h1 className=' text-[20px] ml-10 text-white'>-Top Product</h1>
                              <h1 className=' text-[20px] ml-10 text-white'>-Top Product</h1>
                              <div className=' relative '>
                                <PiCircleNotchThin className=' w-[80px] h-[80px] rotate-90 text-white' />
                              </div>
                              <div className=' absolute mt-[91px] ml-[60px]'>
                                <Link href='/top-categories/top-rated'>
                                  <button className=' text-white'>SHOP NOW</button>
                                </Link>
                              </div>
                          </div>
                          <Image src='/image/gray6.png' alt='iphone 13' title='An iphone 13 with green color' width={100} height={100} className=' ' /> 
                </div>
                <div className=' flex flex-row items-center justify-between w-[400px] h-[200px] bg-gradient-to-tr from-purple-800 to-teal-600 shadow-md shadow-black rounded-xl'>
                        <div className=' flex flex-col items-center justify-between gap-2 '>
                            <h1 className=' text-[20px] ml-10 text-white'>-Top Product</h1>
                            <h1 className=' text-[20px] ml-10 text-white'>-Top Product</h1>
                            <div className=' relative '>
                              <PiCircleNotchThin className=' w-[80px] h-[80px] rotate-90 text-white' />
                            </div>
                            <div className=' absolute mt-[91px] ml-[60px]'>
                              <Link href='/top-categories/top-product'>
                                <button className=' text-white'>SHOP NOW</button>
                              </Link>
                            </div>
                        </div>
                        <Image src='/image/rosegold.png' alt='iphone 13' title='An iphone 13 with green color' width={100} height={100} className=' ' /> 
                </div>
                <div className=' flex flex-row items-center justify-between w-[400px] h-[200px] bg-gradient-to-tr from-purple-800 to-teal-600 shadow-md shadow-black rounded-xl'>
                          <div className=' flex flex-col items-center justify-between gap-2 '>
                              <h1 className=' text-[20px] ml-10 text-white'>-Top Product</h1>
                              <h1 className=' text-[20px] ml-10 text-white'>-Top Product</h1>
                              <div className=' relative '>
                                <PiCircleNotchThin className=' w-[80px] h-[80px] rotate-90 text-white' />
                              </div>
                              <div className=' absolute mt-[91px] ml-[60px]'>
                                <Link href='/top-categories/best-selling'>
                                  <button className=' text-white'>SHOP NOW</button>
                                </Link>
                              </div>
                          </div>
                          <Image src='/image/gray6.png' alt='iphone 6s' title='iphone 6s gray color' width={100} height={100} className=' ' /> 
                </div>
          </div> */}
          {maintwo}
    </div>

  )
}
