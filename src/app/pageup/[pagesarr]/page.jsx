import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { newArrayPages } from '@/app/arrayB/nextA'
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane,FaFacebookMessenger } from "react-icons/fa";


export default function page(props) {
    const abtArray = newArrayPages.find(abt => abt.name.split(' ').join('_') == props.params.pagesarr)

    const bArray = newArrayPages.map(abt => (
      <div key={abt.name}>
        <div>
          {/* <Link href={`/pageup/${abt.name.split(' ').join('_')}`} title={abt.name} >
              <Image src={`/image/${abt.image}.jpg`} title={abt.position} width={400} height={500} />
          </Link> */}
        </div>
      </div>
    ))


  return (
    <div>
            <main className='  bg-gradient-to-br from-red-100 to-blue-200  '>
                <div className=' grid place-items-center md:flex md:justify-between md:gap-32 w-[95%] m-auto h-[70vh]'>
                    <div className=' mt-36 md:mt-0'>
                          <h1 className=' font-bold text-7xl text-green-400 2xl:text-8xl'>{abtArray.name}</h1>
                    </div>
                    <div className='  mb-36 md:mb-0 '>
                        <Image src={`/image/${abtArray.image4}.png`}   width={500} height={500} className='' />
                    </div>
                </div>
            </main>

            
            <div className=' bg-gradient-to-br from-blue-200 to-red-100'>
                  <div className=' grid py-32 h-[150vh] sm:h-[145vh] md:h-[120vh] lg:h-[120vh] xl:h-[100vh] w-[95%] m-auto  '>
                      <div className='grid place-items-center md:grid-cols-2 md:place-items-start'>

                          <div className=' w-[300px] lg:w-[400px] xl:w-[700px] pb-5 grid place-items-center'>
                              <Image src={`/image/${abtArray.image}.jpg`}  width={450} height={400} className=' rounded-lg' />
                          </div>

                          
                              <div className='grid font-serif'>

                                        <div className='  text-gray-600'>
                                          <p className=' text-[29px] md:text-4xl lg:text-5xl 2xl:text-7xl '>{abtArray.name}</p>
                                          <div className='py-3 '>
                                              <p className=' text-[25px] md:text-2xl 2xl:text-3xl text-black'>Position: <span className=' lg:text-2xl text-gray-500 text-[20px]'> {abtArray.position} </span></p>
                                              <p className=' text-[25px] md:text-2xl 2xl:text-3xl text-black'>Level: <span className=' lg:text-2xl text-gray-500 text-[20px]'>{abtArray.level}  </span></p>
                                              <p className=' text-[25px] md:text-2xl 2xl:text-3xl text-black'>Phone Number: <span className=' lg:text-2xl text-gray-500 text-[20px]'> {abtArray.phone} </span></p>
                                              <p className=' text-[25px] md:text-2xl 2xl:text-3xl text-black'>Email: <span className=' lg:text-2xl text-gray-500 text-[20px]'>{abtArray.email}  </span></p>
                                          </div>

                                          <div className=' flex  text-[25px] '>
                                            <ul className=' flex gap-5  '>
                                              <Link href='tel:+2349047271158'>
                                                  <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'><FaTelegramPlane /></li>
                                              </Link>
                                              <Link href='tel:+2349047271158'>
                                                  <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'><FaWhatsapp /></li>
                                              </Link>
                                              <Link href='https://www.facebook.com' target="blank">
                                                  <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'><FaFacebookMessenger /></li>
                                              </Link>
                                            </ul>
                                            
                                            
                                            
                                          </div>
                                          
                                      </div>
                                      <div className=' text-gray-500 py-5 text-justify '>
                                          <p className=' text-[20px] lg:text-2xl'>{abtArray.description1}</p>
                                      </div>
                              </div>
                          
                      
                      </div>
                  </div>
            </div>
          {bArray}  
    </div>
  )
}
