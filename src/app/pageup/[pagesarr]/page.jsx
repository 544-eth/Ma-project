import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { newArrayPages } from '@/app/arrayB/nextA'
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane,FaFacebookMessenger } from "react-icons/fa";


export default function page(props) {
    const abtArray = newArrayPages.find(abt => abt.name.split(' ').join('_') == props.params.pagesarr)

    const bArray = newArrayPages.map(abt => (
      <div>
        <div>
          {/* <Link href={`/pageup/${abt.name.split(' ').join('_')}`} title={abt.name} >
              <Image src={`/image/${abt.image}.jpg`} title={abt.position} width={400} height={500} />
          </Link> */}
        </div>
      </div>
    ))


  return (
    <div>
            <main className='flex justify-around bg-gradient-radial from-purple-700 to-purple-950 h-[500px] py-35 pb-12'>
                <div className='px-20 grid pt-10'>
                  <div className='flex pt-32  text-white  '>
                      <h1 className=' font-bold text-8xl'>{abtArray.name}</h1>
                  </div>
                 
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <Image src={`/image/${abtArray.image4}.png`}   width={500} height={500} className='flex pt-20' />
                </div>
            </main>

            
            <div className=' h-[170vh] bg-slate-50'>
                  <div className='flex flex-row md:grid-cols-2 sm:grid-cols-1  '>
                      <div className='flex justify-around gap-32 p-32 '>

                          <div className=''>
                              <Image src={`/image/${abtArray.image}.jpg`}  width={450} height={400} className='rounded-xl shadow-md' />
                          </div>

                          <div>
                          <div className='flex flex-col '>

                                    <div className=' m-auto w-96 text-gray-500 gap-5 pb-5'>
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
                                  <div className=' m-auto w-96 text-gray-500'>
                                      <p>{abtArray.description1}</p>
                                  </div>
                              </div>

                          </div>
                      
                      </div>
                  </div>
            </div>
          {bArray}  
    </div>
  )
}
