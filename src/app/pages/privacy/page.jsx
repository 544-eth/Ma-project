import React from 'react'
import Link from 'next/link'
import { newArrayPages } from '@/app/arrayB/nextA'
import Image from 'next/image'

export default function page() {
  const privaysee = newArrayPages.find(priva =>priva.name.split(' ').join('_'))
  const arrPri = newArrayPages.map(priva => (
    <div key={priva.email}>

    </div>
  ))
  return (
    <div>
            <main className=' bg-gradient-to-br from-red-100 to-blue-200'>
                <div className=' grid place-items-center md:flex md:justify-between  w-[95%] m-auto  h-[120vh] md:h-[120vh] '>
                    <div className=' grid '>
                      <div className='flex  text-blue-800 mt-52 md:mt-0 '>
                          <h1 className=' font-bold text-8xl'>{privaysee.introduction2}</h1>
                      </div>
                      <div className='flex text-[20px] md:text-[30px] py-4 text-blue-800 gap-2'>
                          <Link href='/Home'>
                              <p>Home</p>
                          </Link>
                          <p className=' text-white'>-</p>
                          <p >{privaysee.introduction} </p>
                      </div>
                    

                      
                    </div>
                    <div className='flex flex-col'>
                        <Image src={`/image/${privaysee.image4}.png`}   width={500} height={500} className='pb-24 md:pb-0' />
                    </div>
                </div>
            </main>

            <div className='bg-gradient-to-bl from-blue-200 to-red-100 '>
              <div className=' grid place-items-center h-[190vh] md:h-[120vh] lg:h-[110vh]'>
                
                  <div className=' p-20 '>

                      <div className=' flex-col py-10'>
                        <h2 className=' text-[30px]'>Why we use Privacy?</h2>
                        <h2 className=' text-slate-700 text-justify'>{privaysee.introduction1}</h2>
                      </div>
                      <div className=' flex-col py-10'>
                        <h2 className=' text-[30px]'>What are Privacy? </h2>
                        <h2 className=' text-slate-700 text-justify'>{privaysee.wcookies}</h2>
                      </div>
                      <div className=' flex-col py-10'>
                        <h2 className=' text-[30px]'>Importance of Privacy?</h2>
                        <h2 className=' text-slate-700 text-justify'>{privaysee.description2}</h2>
                      </div>
                      <div className=' flex-col py-10'>
                        <h2 className=' text-[30px]'>Control over Privacy?</h2>
                        <h2 className=' text-slate-700 text-justify'>{privaysee.description3}</h2>
                      </div>
                      <div className=' flex-col py-10'>
                        <h2 className=' text-[30px]'>How we update our Privacy?</h2>
                        <h2 className=' text-slate-700 text-justify'>{privaysee.description4}</h2>
                      </div>
                      <div className=' flex-col py-10'>
                        <h2 className=' text-[30px]'>Feel you don't like it?</h2>
                        <h2 className=' text-slate-700 text-justify'>{privaysee.description5}</h2>
                      </div>



                  </div>
              </div>

              
            </div>

      <div>
          {arrPri}
      </div>
    </div>
  )
}
