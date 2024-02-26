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
                  <div className=' grid place-items-center '>
                      <Image src={`/image/${abt.image}.jpg`} width={300} height={350} className=' rounded-lg border-[3px] border-teal-700'/>


                      <div className=' grid place-items-center   relative   '>
                          
                          <div className=' group  flex flex-col w-[175px] sm:w-[200px]  p-1 px-5 bg-teal-700 rounded-b-md overflow-hidden'>
                                     
                                      
                                        <div className=' flex flex-col py-2 items-center transition transform'>
                                          <Link href={`/pageup/${abt.name.split(' ').join('_')}`} title={abt.name}>
                                              <h2 className=' text-white text-nowrap font-medium  text-[17px]'>{abt.name}</h2>
                                          </Link>
                                              <h2 className=' text-white font-medium text-[17px]'>{abt.position}</h2>
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
                                                <Link href={`/pageup/${abt.name.split(' ').join('_')}`} title={abt.name}>
                                                    <h2 className=' text-white font-medium  text-nowrap text-[17px]'>{abt.name}</h2>
                                                </Link>
                                                    <h2 className=' text-white font-medium text-[17px]'>{abt.position}</h2>
                                          </div>
                                            
                                
                          </div>     
                                
                          </div>


                          

                      </div>



                  </div>
              
                  
                  
              
         </div>

    </section> 
 )) 
  return (
    <div>
            <main className='  bg-gradient-to-bl from-red-100 to-blue-200'>
                <div className=' grid place-items-center w-[95%] m-auto  md:flex md:justify-between h-[120vh] md:h-[120vh]' >
                            <div className='px-10 grid  '>
                                <div className='flex text-blue-800 mt-48 md:mt-0 '>
                                    <h1 className=' font-bold text-8xl'>{eArray.tag}</h1>
                                </div>
                                <div className='flex text-[20px] md:text-[30px]  text-blue-800 gap-2'>
                                    <Link href='/'>
                                        <p>Home</p>
                                    </Link>
                                    <p className=' t'>-</p>
                                    <p >{eArray.tag}</p>
                                </div>  
                            </div>
                            <div className=' pb-20'>
                                <Image src={`/image/${eArray.image4}.png`}   width={500} height={500} className=' '  />
                            </div>
                </div>
                        
            </main>

            <div className=' flex flex-col w-[95%] m-auto items-center justify-center'>
                <div className=' py-10 w-[300px] md:w-[500px] md '>
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

                <div className=' m-auto '>
                  <p className=' text-[15px] text-teal-800'>{eArray.firstH1}</p>
                </div>
            </div>

            <div className=' flex items-center justify-center py-10 overflow-hidden w-[95%] m-auto '>
              <div className=' group relative items-center justify-center overflow-hidden rounded-3xl cursor-zoom-in  '>
                  <div className=' flex  transition transform  group-hover:scale-125 group-hover:rotate-6  h-full bg-cover w-[500px] lg:w-full ' >
                    <Image src={`/image/${eArray.backgroundImage}.png`} width={800} height={700} />
                  </div>
                  <div className=' absolute inset-0 inset-y-0   bg-gradient-radial from-transparent via-transparent to-black'></div>
                  <div className=' absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[10vh] lg:translate-y-[-5vh] xl:translate-y-[-6vh] 2xl:translate-y-[-30vh] lg:mt-[70vh] mt-[40vh]  md:mt-[40vh] md:group-hover:translate-y-[-20vh]  group-hover:translate-y-[-19vh] lg:group-hover:translate-y-[-46vh] xl:group-hover:translate-y-[-40vh] 2xl:group-hover:translate-y-[-49vh] transition-all ease-in-out duration-300'>
                      <h1 className=' text-2xl md:text-4xl lg:text-8xl  text-yellow-50 font-extrabold pb-10 lg:pb-16 xl:pb-20 '>{eArray.tag2}</h1>
                      <p className=' italic mb-3 text-yellow-50 text-[20px] md:text-2xl'>{eArray.tag4}</p>
                      <p className=' italic mb-3 text-yellow-50 text-[20px] md:text-2xl'>{eArray.tag5}</p>
                      <p className=' italic mb-3 text-yellow-50 text-[20px] md:text-2xl'>{eArray.tag6}</p>

                  </div>
              </div>
            </div>


        <section className=' grid gap-28 md:grid-cols-2 lg:grid-cols-3 bg-gradient-radial from-gray-50 to-gray-200 p-20' >
            {arrayAbout}
        </section>
    </div>
  )
}