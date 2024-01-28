"use client"
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import React, { useState } from 'react'
import Link from "next/link";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";








export default function Navbar({size}) {
    


    const [isOpened, setIsOpened] = useState(false)


  return (
    
        <div className=" bg-[yellow] mx-auto border-b shadow-sm py-2 rounded-bl-xl ">
         <div className=" flex items-center justify-between sm:px-[50px]">
             <div className="grid  text-2xl md:text-4xl sm:text-2xl font-bold">
                 <Link href='/'>
                     <h1 className=" flex"><span className=" text-pink-800">i</span> FEC<span className="font-bold text-blue-800">.</span></h1>
                 </Link>
             </div>
 
             <nav className=" hidden lg:flex items-center justify-between 2xl:ml-16 absolute xl:ml-32 lg:ml-5 md:ml-3" >
             
                     <ul className="flex flex-row  gap-20 px-40 hover:cursor-pointer ">
                         <Link href='/'>
                             <li className="hover:text-pink-800 hover:border-b-2 border-pink-700 transition duration-200 ease-in-out"><span>HOME</span></li>
                         </Link>
                         <Link href='/shop'>
                             <li className="hover:text-pink-800 hover:border-b-2 border-pink-700 transition duration-200 ease-in-out"><span>SHOP</span></li>
                         </Link>
                         <Link href='/pages'>
                             <div className=" flex items-center justify-center space-y-[3px]  mt-4 ">
                                 <button onClick={() => setIsOpened((back) => !back)} className=" flex items-center gap-3 ">PAGES 
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
             <div className=" text-[20px] md:text-[20px] flex  gap-5 ">
                <div className=" relative bg-white py-1 rounded-lg shadow-sm sm:mx-auto sm:max-w-lg xl:px-6 lg:px-4 md:px-3 sm:px-4  ">
                     <div className=" mx-auto max-w-md"> 
                            <form action="" className=" relative w-max mx-auto">
                                <input type="search" name="search" id="search" className=" relative peer z-10 bg-transparent w-10 h-10  cursor-pointer outline-none focus:cursor-text pl-12 focus:pl-16 focus:pr-4 rounded-full focus:w-full focus:border-lime-400"  />
                                 <IoSearchOutline className=" absolute inset-y-0 my-auto px-3.5 h-8 w-12 border-transparent border-lime-400 stroke-gray-500 peer-focus:border-lime-400 peer-focus:stroke-lime-400" /> 
                            </form>
                     </div>
                </div>
 
                     <div className=" relative cursor-pointer flex place-items-center">
                         
                             <div className=" ">
                                 <Link href='/'>
                                     
                                         <LuShoppingCart/>
                                     <span className=" absolute top-1 -right-2 text-[13px] bg-gradient-to-r from-blue-600 to-red-700 h-[18px] w-[18px] rounded-full grid place-items-center text-white">{size}</span>
                                     
                                     
                                 </Link>
                             </div>
                         
                     </div>
             </div>
         </div>
        </div>
    
  )
}
