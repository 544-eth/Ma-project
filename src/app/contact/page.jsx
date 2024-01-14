import React from 'react'
import Link from 'next/link' 
import Image from 'next/image'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";





export default function Contact() {
  return (
    <div>
        <div className='flex justify-between bg-slate-200 py-30 pb-12'>
        <div className='px-10 grid pt-2'>
        <div className='flex pt-5' >
            <h1 className='font-light text-7xl pt-20'>Contact Us</h1>
        </div>
        <div className='flex pt-1  '>
            <p className='text-2xl text-gray-500'>Help us to serve you better lay your <br />Complaints or suggestion here. </p>

        </div>
        <div className='flex pb-10 flex-row gap-3 '>
            <Link href='/'>
                <ul >
                    <li className='text-xl text-pink-800 '>Home</li>
                </ul>
            </Link>
            <p className='text-xl text-gray-500'>-   Contact Us</p>
        </div>
        
        </div>
        <div className='pt-14'>
            <Image src='/image/i12.png' alt='iphone 15pro max' title='An iphone 15pro max with the titanium color one of the rarest' width={500} height={500} className='' />
        </div>
    </div>
    <div className=' py-52 bg-slate-50  '>
        <div className='flex flex-col place-items-center px-10'>
            <h2 className=' py-4 text-2xl text-pink-800'>Contact Us</h2>
            <h1 className=' py-4 text-6xl font-bold'>Our Contact Details</h1>
            
            <p className=' text-gray-600'>Get in contact with us for more informations about our product </p> 
            <p className=' text-gray-600'>incase of a software issue we will make sure you are refunded in full</p>
            <p className=' text-gray-600'>if you are still under the warrantee period</p>
           
        </div>
        <div className='h-[150vh] py-28 '>
            <div className='flex flex-row items-center justify-around'>
                <div className=' border-r-4 pr-40 '>
                
                    <h2 className='text-2xl text-gray-700 pb-3'><IoCall className=' text-pink-900 text-5xl'/>Phone</h2>
                     <ul>
                        <Link href='/2349047271158'><li className='text-[18px] text-gray-500' typeof='tel'>(+234) 9047271158</li></Link>
                        <Link href='/2349047271158'><li className='text-[18px] text-gray-500' typeof='tel'>(+234) 9047271158</li></Link>
                    </ul>
                </div>
                

                <div className=' border-r-4  pr-40 '>
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

            <div className=''>
                <div className=' flex flex-col items-center pt-28'>
                    <p className=' pb-5 items-center text-3xl text-green-600'>Send Us A Message</p>
                    <p className=' text-pink-900 text-5xl pb-10'>Get In Touch With Us</p>
                </div>

                <div className='grid grid-cols-2 place-items-center'>
                    <div className='pb-7'>
                        <input type="text" name="name" id="name" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out w-[600px] h-[70px] pb-2  rounded-xl ' placeholder=' Firstname *'/>
                    </div>
                    <div className='pb-7'>
                        <input type="text" name="name" id="name" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out w-[600px] h-[70px] pb-2  rounded-xl ' placeholder=' Lastname *'/>
                    </div>
                    <input type="email" name="email" id="email" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out  w-[600px] h-[70px] pb-2 rounded-xl ' placeholder=' Your Email Address *'/>
                    <input type="tel" name="subject" id="subject" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 transition duration-700 ease-in-out  w-[600px] h-[70px] pb-2 rounded-xl ' placeholder=' Your Number *'/>
                </div>
                <div className='grid place-items-center pt-10'>
                    <input type="text" name="message" id="message" className=' focus:shadow-xl outline-none focus:border-green-900 border-2 rounded-xl  transition duration-700 ease-in-out w-[1200px] pb-60' placeholder=' Your Message *'/>


                    <div className=' pt-10'>
                        <button className=' bg-gray-700 py-2 px-10 rounded-lg hover:bg-pink-900 text-white transition duration-700 ease-in-out '>Send Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    
  )
}
