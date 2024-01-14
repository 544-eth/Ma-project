import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdCallEnd } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { newArrayPages } from '@/app/arrayB/nextA'

export default function Aboutus() {
  const eArray = newArrayPages.find(abt => abt.name.split(' ').join('_'))
  const arrayAbout = newArrayPages.slice(0, 3).map(abt => (
    <section key={abt.position} >
         <div className=' '>
                  <div className='  '>
                      <Image src={`/image/${abt.image}.jpg`} width={300} height={350} className=' rounded-lg border-[3px] border-teal-700'/>
                  </div>
              
                  
                      <div className='flex flex-col items-center justify-center relative   '>
                          
                          <div className=' group  flex flex-col items-center justify-center p-1 px-5 bg-teal-700 rounded-b-md overflow-hidden'>
                                     
                                      <Link href={`/pageup/${abt.name.split(' ').join('_')}`} title={abt.name}>
                                          <div className=' flex flex-col py-2 items-center transition transform'>
                                              <h2 className=' text-white font-medium text-[17px]'>{abt.name}</h2>
                                              <h2 className=' text-white font-medium text-[17px]'>{abt.position}</h2>
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
                                      <Link href={`/pageup/${abt.name.split(' ').join('_')}`} title={abt.name}>
                                          <div className=' flex flex-col py-2 items-center'>
                                              <h2 className=' text-white font-medium text-[17px]'>{abt.name}</h2>
                                              <h2 className=' text-white font-medium text-[17px]'>{abt.position}</h2>
                                          </div>
                                      </Link>      
                                
                          </div>     
                                
                          </div>


                          

                      </div>
                  
              
         </div>

    </section> 
 ))
  return (
    <div>
            <main className='flex justify-between bg-gradient-radial from-blue-700 to-blue-950 h-[500px] gap-3'>
                <div className='px-10 grid '>
                  <div className='flex  text-white mt-52 '>
                      <h1 className=' font-bold text-8xl'>{eArray.tag}</h1>
                  </div>
                  <div className='flex text-[20px] mb-32 text-white gap-2'>
                      <Link href='/Home'>
                          <p>Home</p>
                      </Link>
                      <p className=' text-neutral-900'>-</p>
                      <p >{eArray.tag} </p>
                  </div>
                

                  
                </div>
                <div className='flex flex-col'>
                    <Image src={`/image/${eArray.image4}.png`}   width={500} height={500} className='flex pt-36' />
                </div>
            </main>

            <div className=' flex flex-col items-center justify-center'>
                <div className=' pt-20'>
                    <Image src={`/image/${eArray.image}.jpg`} width={500} height={500}  className=' rounded-2xl' />
                </div>
                <div className=' py-10'>
                    <div className=' border-gradient-moving py-3 px-20'>
                      <p className=' text-2xl'>{eArray.name}</p>
                    </div>
                </div>

                <div className=' pb-3 '>
                  <p className=' text-6xl text-green-700'>{eArray.welcome}</p>
                </div>

                <div className=' m-auto w-[50%]'>
                  <p className=' text-[15px] text-teal-800'>{eArray.firstH1}</p>
                </div>
            </div>

            <div className=' flex items-center justify-center py-10 overflow-hidden '>
              <div className=' group relative items-center justify-center overflow-hidden rounded-3xl cursor-zoom-in '>
                  <div className=' flex  transition transform  group-hover:scale-125 group-hover:rotate-6 w-full h-full bg-cover  ' >
                    <Image src={`/image/${eArray.backgroundImage}.png`} width={900} height={700} />
                  </div>
                  <div className=' absolute inset-0 inset-y-0   bg-gradient-radial from-transparent via-transparent to-black'></div>
                  <div className=' absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[40vh] mt-20 group-hover:translate-y-0 transition-all ease-in-out duration-300'>
                      <h1 className=' text-8xl  text-yellow-50 font-extrabold pb-20 '>{eArray.tag2}</h1>
                      <p className=' italic mb-3 text-yellow-50 text-2xl'>{eArray.tag4}</p>
                      <p className=' italic mb-3 text-yellow-50 text-2xl'>{eArray.tag5}</p>
                      <p className=' italic mb-3 text-yellow-50 text-2xl'>{eArray.tag6}</p>

                  </div>
              </div>
            </div>


        <section className=' flex flex-row items-center justify-between h-[100vh] md:grid-cols-2 sm:grid-cols-1 bg-gradient-radial from-gray-50 to-gray-200 p-20' >
            {arrayAbout}
        </section>
    </div>
  )
}