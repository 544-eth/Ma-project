import React from 'react'
import Link from 'next/link'
import { newArrayPages } from '@/app/arrayB/nextA'
import Image from 'next/image'

export default function page() {
  const bcookie = newArrayPages.find(cookies =>cookies.name.split(' ').join('_'))
  const cookieArr = newArrayPages.map(cookies => (
   <div key={cookies.introduction}>
      
   </div>
  ))
  return (
    <div>
            <main className=' bg-gradient-radial from-purple-700 to-purple-950 gap-3'>
                <div className=' grid place-items-center md:flex md:justify-between  w-[95%] m-auto  h-[70vh] md:h-[70vh]'>

                    <div className=' font-serif '>
                      <div className='flex  text-white mt-48 md:mt-0'>
                          <h1 className=' font-bold text-8xl'>{bcookie.introduction}</h1>
                      </div>
                      <div className='flex text-[20px] py-4 text-white gap-2'>
                          <Link href='/Home'>
                              <p>Home</p>
                          </Link>
                          <p className=' text-white'>-</p>
                          <p >{bcookie.cookie1} </p>
                      </div>
                    

                      
                    </div>
                      <div className=' '>
                          <Image src={`/image/${bcookie.image4}.png`}   width={500} height={500} className='pb-36 md:pb-0' />
                      </div>
                </div>
            </main>

            <div className=' bg-gradient-to-bl from-blue-200 to-red-100 '>
                <div className=' grid place-items-center h-[190vh] md:h-[120vh] lg:h-[110vh]'>

                    <div className=' p-20 '>

                        <div className=' flex-col py-10'>
                          <h2 className=' text-[30px]'>Why we use cookie?</h2>
                          <h2 className=' text-slate-700 text-justify '>{bcookie.introduction1}</h2>
                        </div>
                        <div className=' flex-col py-10'>
                          <h2 className=' text-[30px]'>What are cookies? </h2>
                          <h2 className=' text-slate-700 text-justify'>{bcookie.wcookies}</h2>
                        </div>
                        <div className=' flex-col py-10'>
                          <h2 className=' text-[30px]'>Importance of cookie?</h2>
                          <h2 className=' text-slate-700 text-justify '>{bcookie.description2}</h2>
                        </div>
                        <div className=' flex-col py-10'>
                          <h2 className=' text-[30px]'>Control over cookie?</h2>
                          <h2 className=' text-slate-700  text-justify'>{bcookie.description3}</h2>
                        </div>
                        <div className=' flex-col py-10'>
                          <h2 className=' text-[30px]'>How we update our cookie?</h2>
                          <h2 className=' text-slate-700 text-justify'>{bcookie.description4}</h2>
                        </div>
                        <div className=' flex-col py-10'>
                          <h2 className=' text-[30px]'>Feel you don't like it?</h2>
                          <h2 className=' text-slate-700 text-justify'>{bcookie.description5}</h2>
                        </div>



                    </div>
                </div>
              
            </div>

            <div>
              {cookieArr}
            </div>
    </div>
  )
}
