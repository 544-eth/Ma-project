import React from 'react'
import Link from 'next/link'
import { newArrayPages } from '@/app/arrayB/nextA'
import Image from 'next/image'

export default function page() {
  const bcookie = newArrayPages.find(cookies =>cookies.name.split(' ').join('_'))
  const cookieArr = newArrayPages.map(cookies => (
   <div>
      {/* <div key={cookies.introduction}>
                <div className=' '>
                      <div className='flex flex-col items-center justify-center relative   '>
                          <div className=' group  flex flex-col items-center justify-center p-1 px-5 bg-teal-700 rounded-b-md overflow-hidden'>
                                     
                                      <Link href={`/pageup/${cookies.introduction.split(' ').join('_')}`} >
                                          
                                      </Link> 


                                  <div className='  flex flex-col items-center justify-center p-1 px-5 bg-green-700  rounded-md absolute  translate-y-[10vh] mb-[22px] group-hover:translate-y-0 overflow-hidden opacity-0 group-hover:opacity-100 transform transition-all  duration-300 ease-in-out'>
                                       <div className=' flex items-center gap-5   '>
                                         
                                      </div> 
                                      <Link href={`/pageup/${cookies.introduction.split(' ').join('_')}`}>

                                      </Link>      
                                
                                  </div>     
                                
                          </div>
                      </div>
                </div>
      </div> */}
   </div>
  ))
  return (
    <div>
            <main className='flex justify-between bg-gradient-radial from-purple-700 to-purple-950 h-[500px] gap-3'>
                <div className='px-[30px] grid '>
                  <div className='flex  text-white mt-52 '>
                      <h1 className=' font-bold text-8xl'>{bcookie.introduction}</h1>
                  </div>
                  <div className='flex text-[20px] mb-32 text-white gap-2'>
                      <Link href='/Home'>
                          <p>Home</p>
                      </Link>
                      <p className=' text-white'>-</p>
                      <p >{bcookie.cookie1} </p>
                  </div>
                

                  
                </div>
                <div className='flex flex-col'>
                    <Image src={`/image/${bcookie.image4}.png`}   width={500} height={500} className='flex pt-36' />
                </div>
            </main>

            <div className=' bg-slate-100 h-[175vh]'>

              <div className=' p-20 '>

                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Why we use cookie?</h2>
                    <h2 className=' text-slate-700'>{bcookie.introduction1}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>What are cookies? </h2>
                    <h2 className=' text-slate-700'>{bcookie.wcookies}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Importance of cookie?</h2>
                    <h2 className=' text-slate-700'>{bcookie.description2}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Control over cookie?</h2>
                    <h2 className=' text-slate-700'>{bcookie.description3}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>How we update our cookie?</h2>
                    <h2 className=' text-slate-700'>{bcookie.description4}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Feel you don't like it?</h2>
                    <h2 className=' text-slate-700'>{bcookie.description5}</h2>
                  </div>



              </div>
              
            </div>

            <div>
              {cookieArr}
            </div>
    </div>
  )
}
