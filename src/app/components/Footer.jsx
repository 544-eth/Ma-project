import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { MdCallEnd } from "react-icons/md";

export default function Footer() {
  return (
    <footer className=' flex  h-[70vh] bg-gradient-radial from-slate-300 to-slate-500 '>
            <div className='  p-28  '>
                <div className=' flex flex-row xl:flex-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-40'>
                    <div className=''>
                        <ul className=" text-4xl font-bold mb-4 ">
                            <li className="flex pl"><span className=" text-pink-800">i</span> FEC<span className="font-bold text-blue-800">.</span></li>
                        </ul>
                        <p className=''>
                            At iFec online store, you are one step closer to getting your 
                        </p>

                        <p className=' mt-5 text-slate-400'>Powered by <Link href='/'>iFec Store</Link></p>
                    </div>
                    <div>
                        <h2 className=' pb-5 text-3xl text-pink-900'>Contact Info </h2>
                        <p>14, Afam Okosi Street Victory Estate Iba Ojo Lagos State</p>
                        <h2 className='py-5 text-2xl'>Phone/Web: </h2>
                        <div className=' '>
                            <Link href='/+2349047271158'>
                                <p className='hover:text-green-700 transition duration-300 ease-in-out pb-3 '>+2349047271158</p>
                            </Link>

                            <Link href='/www.iFecOnStores.com'>
                                <p className='hover:text-green-700 transition duration-300 ease-in-out'>www.iFecOnStores.com</p>
                            </Link>
                        </div>
                        
                    </div>
                    <div>
                        <h1 className=' pb-5 text-3xl text-pink-900'>Information</h1>
                        <ul className=''>
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
                        <h1 className=' text-pink-900 pb-5 text-3xl'>Newsletter </h1>
                        <div className='pb-5'>
                        <input type="email" id="email" name="email" class=" px-5 w-[180px] h-12  py-2 mt-2 border border-gray-300 focus:outline-none focus:border-pink-500 transition duration-300 ease-in-out " required placeholder='Enter Your Email' />
                        </div>
                        <div>
                            <button className='bg-[black] p-2 px-[46px] text-yellow-50  hover:bg-green-800 transition duration-300 ease-in-out'>SUBSCRIBE</button>
                        </div>
                        <div className='flex flex-row mt-3 gap-4 '>
                            <ul className=' flex mt-3 gap-4'>
                                <Link href='https://www.linkedin.com' target="blank">
                                    <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <BsLinkedin />
                                    </li>
                                </Link>
                                <Link href='tel: +2349047271158'>
                                    <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <MdCallEnd />
                                    </li>
                                </Link>
                                <Link href='https://www.gmail.com' target='blank'>
                                    <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <SiGmail />
                                    </li>
                                </Link>
                                <Link href='https://www.github.com ' target='blank'>
                                    <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <IoLogoGithub />
                                    </li>
                                </Link>
                                <Link href='https://www.instagram.com ' target='blank'>
                                    <li className=' text-purple-900 hover:text-green-800 hover:translate-y-[-5px] hover:scale-125 hover:rotate-6 transform transition-all  duration-300 ease-in-out'>
                                        <GrInstagram />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className=' m-auto mt-8 flex items-center justify-center '>
                    
                        <p className=''>&copy;  <span className='text-pink-900'><Link href=''>iFec Stores</Link></span>. All rights reserved {new Date().getFullYear()}</p>                    
                    
                </div>
            </div>

    </footer>
  )
}
