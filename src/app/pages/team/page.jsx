import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdCallEnd } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { newArrayPages } from '@/app/arrayB/nextA'

export default function Aboutteam() {
  const bArray = newArrayPages.find(abb => abb.name.split(' ').join('_'))
  const teamAbout = newArrayPages.slice(3, 7).map(abb => (
    <div>
            <div key={abb.name}>
                    <div>
                          <div className=' '>
                                <Image src={`/image/${abb.image}.jpg`} width={400} height={450} className=' rounded-lg border-[3px] border-teal-700'/>
                          </div>

                          

                          <div className='flex flex-col items-center justify-center relative   '>
                          
                          <div className=' group  flex flex-col items-center justify-center p-1 px-5 bg-teal-700 rounded-b-md overflow-hidden'>
                                     
                                      <Link href={`/pageup/${abb.name.split(' ').join('_')}`} title={abb.name}>
                                          <div className=' flex flex-col py-2 items-center transition transform'>
                                              <h2 className=' text-white font-medium text-[17px]'>{abb.name}</h2>
                                              <h2 className=' text-white font-medium text-[17px]'>{abb.position}</h2>
                                          </div>
                                      </Link> 


                                      <div className='  flex flex-col items-center justify-center p-1 px-5 bg-green-700  rounded-md absolute  translate-y-[10vh] mb-[22px] group-hover:translate-y-0 overflow-hidden opacity-0 group-hover:opacity-100 transform transition-all  duration-300 ease-in-out'>
                                       <div className=' flex items-center gap-5   '>
                                          <Link href='tel: +23490388925821'>
                                              <MdCallEnd  className=' text-[22px] text-white  '/>
                                          </Link>

                                          <Link href='tel: +23490388925821'>
                                              <FaWhatsapp  className=' text-[22px] text-white '/>
                                          </Link>
                                      </div> 
                                      <Link href={`/pageup/${abb.name.split(' ').join('_')}`} title={abb.name}>
                                          <div className=' flex flex-col py-2 items-center'>
                                              <h2 className=' text-white font-medium text-[17px]'>{abb.name}</h2>
                                              <h2 className=' text-white font-medium text-[17px]'>{abb.position}</h2>
                                          </div>
                                      </Link>      
                                
                          </div>     
                                
                          </div>


                          

                      </div>
                    </div>
            </div>
    </div>
  ))

  return (
    <div>
        <main className='flex justify-between bg-gradient-radial from-green-700 to-teal-900 h-[500px] gap-3'>
                <div className='px-10 grid '>
                  <div className='flex  text-white mt-52 '>
                      <h1 className=' font-bold text-8xl'>{bArray.tag22}</h1>
                  </div>
                  <div className='flex text-[20px] mb-32 text-white gap-2'>
                      <Link href='/Home'>
                          <p>Home</p>
                      </Link>
                      <p className='  text-white'>-</p>
                      <p >{bArray.tag23} </p>
                  </div>
                

                  
                </div>
                <div className='flex flex-col p-10'>
                    <Image src={`/image/${bArray.image4}.png`}   width={450} height={450} className='flex pt-24 ' />
                </div>
        </main>

        <div className=' bg-gradient-to-r from-gray-50 to-gray-200 h-[50vh]'>
              <div className=' flex text-[30px] font-extrabold p-20'>
                <h2>{bArray.secondH2}</h2>
              </div>
        </div>


        <div className=' flex flex-row items-center justify-between h-[100vh] gap-20 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 bg-gradient-radial from-gray-50 to-gray-200 p-20' >
            {teamAbout}
        </div >
    </div>
  )
}
