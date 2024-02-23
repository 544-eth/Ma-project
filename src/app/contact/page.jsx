'use client'
import React from 'react'
import Link from 'next/link' 
import Image from 'next/image'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";






export default function Contact() {
  return (
    <div>
        <div className='  bg-gradient-to-bl from-red-100 to-blue-100 '>
            <div className=' md:flex md:justify-between grid place-items-center h-[105vh] sm:h-[105vh xl:h-[90vh]  py-30 pb-12'>
                    <div className='px-10 grid pt-20'>
                            <div className='flex pt-5' >
                                <h1 className='  text-7xl xl:text-9xl text-blue-800  pt-20'>Contact Us</h1>
                            </div>
                            <div className='flex pt-1  '>
                                <p className='text-2xl text-gray-600 font-serif'>Help us to serve you better lay your <br />Complaints or suggestion here. </p>

                            </div>
                            <div className='flex pb-10 flex-row gap-3 '>
                                <Link href='/'>
                                    <ul >
                                        <li className=' text-[23px] font-serif text-blue-800 '>Home</li>
                                    </ul>
                                </Link>
                                <p className=' text-[23px] font-serif text-blue-800 '>-</p>
                                <p className='text-[23px] font-serif text-gray-600'>Contact Us</p>
                            </div>
                            
                    </div>
                    <div className=''>

                        <Image src='/image/i12.png'  width={500} height={500}/>
                        
                    </div>
            </div>  
        </div>
        <div className='  bg-slate-50  '>
            <div className=' grid w-[95%] place-items-center h-[300vh] sm:h-[270vh] md:h-[190vh] lg:h-[190vh] xl:h-[210vh] 2xl:h-[150vh] m-auto py-28'>
                <div className=' w-[95%] grid place-items-center md:place-items-center lg:place-items-center font-serif'>
                    <h2 className=' py-4 text-2xl sm:text-2xl md:text-4xl lg:text-3xl text-blue-800'>Contact Us</h2>
                    <h1 className=' py-4 text-3xl md:text-4xl lg:text-5xl text-blue-800 font-bold'>Our Contact Details</h1>
                    <p className=' text-gray-600 text-2xl text-justify'>Get in contact with us for more informations about our product incase of a software issue we will make sure you are refunded in full
                    if you are still under the warrantee period
                    </p> 
                </div>
                <div className=' w-[95%] m-auto py-28 '>
                    <div className=' grid md:place-items-center md:grid-cols-3 place-items-start gap-16'>
                        <div className=' lg:border-r-4 border-red-800 lg:pr-16 xl:pr-16 2xl:pr-20 '>
                        
                            <h2 className='text-2xl text-gray-700 pb-3'><IoCall className=' text-pink-900 text-5xl'/>Phone</h2>
                            <ul>
                                <Link href='/2349047271158'><li className='text-[18px] text-gray-500' typeof='tel'>(+234) 9047271158</li></Link>
                                <Link href='/2349047271158'><li className='text-[18px] text-gray-500' typeof='tel'>(+234) 9047271158</li></Link>
                            </ul>
                        </div>
                        

                        <div className=' lg:border-r-4 border-red-800  lg:pr-16 xl:pr-28 2xl:pr-40 '>
                            <h2 className='text-2xl text-gray-700 pb-3'><FaLocationDot className=' text-pink-900 text-5xl' /> Address</h2>
                            <p className='text-[18px] text-gray-500'>Our address is </p>
                            <p className='text-[18px] text-gray-500'>242, Afam Okosi Iba</p>
                        </div>
                        
                        <div className=''>
                            <h2 className='text-2xl text-gray-700 pb-3'><AiOutlineMessage className=' text-pink-900 text-5xl' />Email</h2>
                            <Link href='/elioku20@gmail.com'><p className='text-[18px] text-gray-500'>Elioku20@gmail.com</p></Link>
                            <Link href='/elioku18@gmail.com'><p className='text-[18px] text-gray-500'>Elioku18@gmail.com</p></Link>
                        </div>
                    </div>



                    <div className=' grid w-[95%]  m-auto font-serif'>
                        <div className=' grid place-items-center md:place-items-center pt-28'>
                            <p className=' pb-5 items-center text-3xl md:text-4xl lg:text-5xl text-blue-800'>Send Us A Message</p>
                            <p className=' text-blue-800 sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-10'>Get In Touch With Us</p>
                        </div>

                        <div className='grid place-items-center md:place-items-center md:grid-cols-2 '>
                            <div className='pb-7'>
                                <input type="text" name="name" id="name" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out w-[350px] md:w-[270px] lg:w-[400px] xl:w-[550px] h-[70px] pb-2  rounded-xl ' placeholder=' Firstname *'/>
                            </div>
                            <div className='pb-7'>
                                <input type="text" name="name" id="name" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out w-[350px] md:w-[270px] lg:w-[400px] xl:w-[550px] h-[70px] pb-2  rounded-xl ' placeholder=' Lastname *' required/>
                            </div>
                            <div className='pb-7'>
                                <input type="email" name="email" id="email" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out  w-[350px] md:w-[270px] h-[70px] lg:w-[400px] xl:w-[550px] pb-2 rounded-xl ' placeholder=' Your Email Address *' required/>
                            </div>
                            <div className='pb-7'>
                                <input type="tel" name="subject" id="subject" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out  w-[350px] md:w-[270px] h-[70px] lg:w-[400px] xl:w-[550px] pb-2 rounded-xl ' placeholder=' Your Number *' required/>
                            </div>   
                        </div>

                        <div className='grid place-items-center md:place-items-center pt-10'>
                            <input type="text" name="message" id="message" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 rounded-xl  transition duration-700 ease-in-out w-[350px] md:w-[450px] lg:w-[600px] xl:w-[700px] 2xl:w-[1000px] pb-60' placeholder=' Your Message *'/>

                        </div>
                        <div className=' py-10 grid place-items-center'>
                                <button className=' bg-red-700 py-2 px-10 rounded-lg hover:bg-pink-900 text-white transition duration-700 ease-in-out '>Send Now</button>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}
