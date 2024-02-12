import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdCallEnd } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { newArrayPages } from '@/app/arrayB/nextA'

export default function Aboutteam() {
  const bArray = newArrayPages.find(abb => abb.name.split(' ').join('_'))
  const teamAbout = newArrayPages.slice(3, 7).map(abb => (
    <div key={abb.name}>
            <div className=' '>
                  <div className=' grid place-items-center '>
                      <Image src={`/image/${abb.image}.jpg`} width={300} height={350} className=' rounded-lg border-[3px] border-teal-700'/>


                      <div className=' grid place-items-center   relative   '>
                          
                          <div className=' group  flex flex-col w-[175px] sm:w-[200px]  p-1 px-5 bg-teal-700 rounded-b-md overflow-hidden'>
                                     
                                      
                                        <div className=' flex flex-col py-2 items-center transition transform'>
                                          <Link href={`/pageup/${abb.name.split(' ').join('_')}`} title={abb.name}>
                                              <h2 className=' text-white text-nowrap font-medium  text-[17px]'>{abb.name}</h2>
                                          </Link>
                                              <h2 className=' text-white font-medium text-[17px]'>{abb.position}</h2>
                                        </div>
                                       


                                      <div className='  flex flex-col w-[175px] sm:w-[200px]  items-center justify-center left-0 p-1 bg-green-700  rounded-md absolute  translate-y-0 mb-[22px] group-hover:translate-y-[-27px] overflow-hidden opacity-0 group-hover:opacity-100 transform transition-all  duration-300 ease-in-out '>
                                       <div className=' flex items-center gap-5   '>
                                          <Link href='tel: +23490388925821'>
                                              <MdCallEnd  className=' text-[22px] text-white  '/>
                                          </Link>

                                          <Link href='tel: +23490388925821'>
                                              <FaWhatsapp  className=' text-[22px] text-white '/>
                                          </Link>
                                      </div> 
                                      
                                          <div className=' flex flex-col py-2 items-center'>
                                                <Link href={`/pageup/${abb.name.split(' ').join('_')}`} title={abb.name}>
                                                    <h2 className=' text-white font-medium  text-nowrap text-[17px]'>{abb.name}</h2>
                                                </Link>
                                                    <h2 className=' text-white font-medium text-[17px]'>{abb.position}</h2>
                                          </div>
                                            
                                
                          </div>     
                                
                          </div>


                          

                      </div>



                  </div>
         </div>

            {/* <div >
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
            </div> */}
    </div>
  ))

  return (
    <div>
        <main className='  bg-gradient-radial from-blue-700 to-blue-900 '>
            <div className='  grid place-items-center md:flex md:justify-between w-[95%] m-auto h-[70vh] md:h-[70vh] lg:h-[90vh] xl:h-[70vh] 2xl:h-[80vh] '>
                    <div className='grid font-serif  '>
                    <div className='flex  text-white mt-52 md:mt-0 '>
                        <h1 className=' font-bold text-8xl'>{bArray.tag22}</h1>
                    </div>
                    <div className='flex text-[20px]  text-white gap-2'>
                        <Link href='/Home'>
                            <p>Home</p>
                        </Link>
                        <p className='  text-white'>-</p>
                        <p >{bArray.tag23} </p>
                    </div>
                    

                    
                    </div>
                    <div className=''>
                        <Image src={`/image/${bArray.image4}.png`}   width={450} height={450} className=' pb-24 sm:pb-0 ' />
                    </div>
            </div>
        </main>

        <div className=' bg-gradient-to-tl from-teal-100 to-purple-200 '>
              <div className=' grid place-items-center h-[50vh] md:h-[70vh] lg:h-[100vh]  font-thin w-[95%] m-auto'>
                <h2 className=' font-serif text-gray-600 lg:text-[30px]  '>{bArray.secondH2}</h2>
              </div>
        </div>


        <div className=' grid gap-28 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:h-[70vh] bg-gradient-radial from-gray-50 to-gray-200 p-20' >
            {teamAbout}
        </div>
    </div>
  )
}
