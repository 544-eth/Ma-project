"use client"
import { IoSearchOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import React, { useState } from 'react'
import Link from "next/link";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";






export default function Navbar() {
    const [isOpened, setIsOpened] = useState(false)
  return (
    <header className=" bg-[#fff]  mx-5">
        <div className=" flex items-center justify-between">
            <div className="grid  text-2xl md:text-4xl font-bold">
                <Link href='/'>
                    <h1 className=" flex"><span className=" text-pink-800">i</span> FEC<span className="font-bold text-blue-800">.</span></h1>
                </Link>
            </div>

            <nav className=" hidden lg:flex items-center justify-between 2xl:ml-16 " >
            
                    <ul className="flex flex-row  gap-20 px-40 hover:cursor-pointer ">
                        <Link href='/'>
                            <li className="hover:text-pink-800 hover:border-b-2 border-pink-700 transition duration-200 ease-in-out"><span>HOME</span></li>
                        </Link>
                        <Link href='/shop'>
                            <li className="hover:text-pink-800 hover:border-b-2 border-pink-700 transition duration-200 ease-in-out"><span>SHOP</span></li>
                        </Link>
                        <Link href='/pages'>
                            <div className=" flex items-center justify-center space-y-[3px]  mt-4 ">
                                <button onClick={() => setIsOpened((back) => !back)} className=" flex items-center gap-3  hover:border-b-2 border-pink-700 hover:text-pink-800 transition duration-700 ease-in-out">PAGES 
                                        {!isOpened ? (
                                            <AiOutlineCaretDown />
                                        ) : (
                                            <AiOutlineCaretUp className=" text-green-400 " />
                                        )}
                                </button>
                                {isOpened && (
                                    <div className=" bg-opacity-10 backdrop-filter backdrop-blur bg-white shadow-md absolute p-3 top-[47px] rounded-b-xl transition-transform transform duration-500 ease-in-out">
                                        <div className=" flex flex-col text-[17px] w-[200px] items-start  ">
                                            <Link href='/pages/about' className=" hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">About</Link>
                                            <Link href='/pages/team' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">Team</Link>
                                            <Link href='/pages/cookie' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform duration-500 ease-in-out">Cookie Policy</Link>
                                            <Link href='/pages/privacy' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">Privacy Policy</Link>
                                        </div>
                                    </div>
                                )}
                                

                            </div>
                        </Link>
                        <Link href='/blog'>
                            <li className="hover:text-pink-800 hover:border-b-2 border-pink-700 transition duration-700 ease-in-out"><span>BLOG</span></li>

                        </Link>
                        <Link href='/contact'>
                            <li className="hover:text-pink-800 hover:border-b-2 border-pink-700 transition duration-700 ease-in-out"><span>CONTACT</span></li>

                        </Link>
                        
                    </ul>
                    
            </nav>
            <div className=" ">
                    <ul className=" text-[20px] md:text-[20px] flex  gap-5"> 
                        <li>
                            <IoSearchOutline />
                        </li>
                        <li>
                            <IoBagCheckOutline />
                        </li>
                    </ul>
            </div>
        </div>
    </header>
  )
}
