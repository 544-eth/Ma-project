import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { MdCallEnd } from "react-icons/md";

export default function Footer() {
  return (
    <footer className=' bg-gradient-to-bl from-blue-500 to-blue-800 '>
            <div className=' w-[95%] m-auto '>
                <div className=' grid m-auto xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 p-5'>
                    <div className=' '>
                        <h3 className=" text-4xl font-bold pb-5 border-b-4">
                            <p className="flex pl"><span className=" text-pink-800">i</span> FEC<span className="font-bold text-blue-800">.</span></p>
                        </h3>
                        <p className=' text-[20px] font-serif text-white'>
                            At iFec online store, you are one step closer to getting your 
                        </p>

                        <p className=' mt-5 text-[20px] font-serif text-white'>Powered by <Link href='/'>iFec Store</Link></p>
                    </div>
                    <div>
                        <h2 className=' pb-5 text-4xl text-yellow-300 border-b-4'>Contact Info </h2>
                        <p className=' text-[20px] font-serif text-white'>14, Afam Okosi Street Victory Estate Iba Ojo Lagos State</p>
                        <h2 className='py-5 text-4xl text-yellow-300 border-b-4 '>Phone/Web: </h2>
                        <div className=' text-[20px] font-serif text-white '>
                            <Link href='/+2349047271158'>
                                <p className='hover:text-blue-600 transition duration-300 ease-in-out pb-3 '>+2349047271158</p>
                            </Link>

                            <Link href='/www.iFecOnStores.com'>
                                <p className='hover:text-blue-600 transition duration-300 ease-in-out'>www.iFecOnStores.com</p>
                            </Link>
                        </div>
                        
                    </div>
                    <div>
                        <h1 className=' pb-5 text-4xl text-yellow-300 border-b-4'>Information</h1>
                        <ul className=' text-[20px] font-serif text-white'>
                            <Link href='/About'>
                                <li className='pb-3 hover:text-green-700 transition duration-300 ease-in-out'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-3 hover:text-green-700 transition duration-300 ease-in-out'>Contact </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-3 hover:text-green-700 transition duration-300 ease-in-out'>Style Guide </li>
                            </Link>
                            <Link href='/'>
                                <li className='py-3 hover:text-green-700 transition duration-300 ease-in-out'>Change Log</li>
                            </Link>
                            
                            <Link href='/'>
                                <li className='py-3 hover:text-green-700 transition duration-300 ease-in-out'>Licence</li>
                            </Link>
                            
                        </ul>
                    </div>
                    <div className=' '>
                        <h1 className=' text-yellow-300 pb-5 text-4xl'>Newsletter </h1>
                        <div className='pb-5'>
                        <input type="email" id="email" name="email" class=" w-[180px] h-12  py-2 mt-2 border border-gray-300 focus:outline-none focus:border-pink-500 transition duration-300 ease-in-out " required placeholder='Enter Your Email' />
                        </div>
                        <div>
                            <button className='bg-[black] p-2 w-[180px] text-[gold] rounded-lg font-bold  hover:bg-[gold] hover:text-black transition duration-500 ease-in-out'>SUBSCRIBE</button>
                        </div>
                        <div className='flex flex-row mt-3 gap-4 '>
                            <ul className=' flex mt-3 gap-4'>
                                <Link href='https://www.linkedin.com' target="blank">
                                    <li className=' text-[gold] hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <BsLinkedin className=' text-black' />
                                    </li>
                                </Link>
                                <Link href='tel: +2349047271158'>
                                    <li className=' text-[gold] hover:text-gray-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <MdCallEnd />
                                    </li>
                                </Link>
                                <Link href='https://www.gmail.com' target='blank'>
                                    <li className=' text-[gold] hover:text-gray-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <SiGmail />
                                    </li>
                                </Link>
                                <Link href='https://www.github.com ' target='blank'>
                                    <li className=' text-[gold] hover:text-gray-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <IoLogoGithub />
                                    </li>
                                </Link>
                                <Link href='https://www.instagram.com ' target='blank'>
                                    <li className=' text-[gold] hover:text-gray-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <GrInstagram />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className=' m-auto mt-8 flex items-center justify-center '>
                    
                        <p className=' text-white'>&copy;  <span className='text-white'><Link href=''>iFec Stores</Link></span>. All rights reserved {new Date().getFullYear()}</p>                    
                    
                </div>
            </div>

    </footer>
  )
}
