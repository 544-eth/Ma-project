import React from 'react'
import Link from 'next/link'
import { newArrayPages } from '@/app/arrayB/nextA'
import Image from 'next/image'

export default function page() {
  const privaysee = newArrayPages.find(priva =>priva.name.split(' ').join('_'))
  const arrPri = newArrayPages.map(priva => (
    <div>

    </div>
  ))
  return (
    <div>
            <main className='flex justify-between bg-gradient-radial from-pink-700 to-pink-950 h-[500px] gap-3'>
                <div className='px-[30px] grid '>
                  <div className='flex  text-white mt-52 '>
                      <h1 className=' font-bold text-8xl'>{privaysee.introduction2}</h1>
                  </div>
                  <div className='flex text-[20px] mb-32 text-white gap-2'>
                      <Link href='/Home'>
                          <p>Home</p>
                      </Link>
                      <p className=' text-white'>-</p>
                      <p >{privaysee.introduction} </p>
                  </div>
                

                  
                </div>
                <div className='flex flex-col'>
                    <Image src={`/image/${privaysee.image4}.png`}   width={500} height={500} className='flex pt-36' />
                </div>
            </main>

            <div className=' bg-slate-100 h-[175vh]'>

              <div className=' p-20 '>

                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Why we use Privacy?</h2>
                    <h2 className=' text-slate-700'>{privaysee.introduction1}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>What are Privacy? </h2>
                    <h2 className=' text-slate-700'>{privaysee.wcookies}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Importance of Privacy?</h2>
                    <h2 className=' text-slate-700'>{privaysee.description2}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Control over Privacy?</h2>
                    <h2 className=' text-slate-700'>{privaysee.description3}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>How we update our Privacy?</h2>
                    <h2 className=' text-slate-700'>{privaysee.description4}</h2>
                  </div>
                  <div className=' flex-col py-10'>
                    <h2 className=' text-[30px]'>Feel you don't like it?</h2>
                    <h2 className=' text-slate-700'>{privaysee.description5}</h2>
                  </div>



              </div>
              
            </div>

      <div>
          {arrPri}
      </div>
    </div>
  )
}
