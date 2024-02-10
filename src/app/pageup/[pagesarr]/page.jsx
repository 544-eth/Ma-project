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
            <main className='  bg-gradient-radial from-purple-700 to-purple-950  '>
                <div className=' grid place-items-center md:flex md:justify-between w-[95%] m-auto h-[65vh]'>
                          <h1 className=' font-bold text-6xl text-white 2xl:text-8xl'>{abtArray.name}</h1>
                    <div className=''>
                        <Image src={`/image/${abtArray.image4}.png`}   width={500} height={500} className='' />
                    </div>
                </div>
            </main>

            
            <div className=' bg-yellow-500'>
                  <div className='h-[150vh] md:h-[100vh] w-[95%] m-auto  place-items-center'>
                      <div className=' grid place-items-center md:grid-cols-2 '>

                          <div className=' w-[300px] lg:w-[400px] py-10'>
                              <Image src={`/image/${abtArray.image}.jpg`}  width={450} height={400} className=' rounded-lg' />
                          </div>

                          
                              <div className='grid'>

                                        <div className='  text-gray-500 gap-5 '>
                                          <p className=' text-[29px]'>{abtArray.name}</p>
                                          <div className=' py-3'>
                                              <p className=' text-[25px] text-black'>Position: <span className=' text-gray-500 text-[20px]'> {abtArray.position} </span></p>
                                              <p className=' text-[25px] text-black'>Level: <span className=' text-gray-500 text-[20px]'>{abtArray.level}  </span></p>
                                              <p className=' text-[25px] text-black'>Phone Number: <span className=' text-gray-500 text-[20px]'> {abtArray.phone} </span></p>
                                              <p className=' text-[25px] text-black'>Email: <span className=' text-gray-500 text-[20px]'>{abtArray.email}  </span></p>
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
                                      <div className=' text-gray-500 text-justify '>
                                          <p>{abtArray.description1}</p>
                                      </div>
                              </div>
                          
                      
                      </div>
                  </div>
            </div>
          {bArray}  
    </div>
  )
}
