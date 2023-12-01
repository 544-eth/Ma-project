import { IoSearchOutline } from "react-icons/io5";


import { IoBagCheckOutline } from "react-icons/io5";




import React from 'react'




export default function Navbar() {
  return (
    <nav className="flex items-center justify-evenly bg-[#fff] h-[13vh]" >
        <ul className="grid m-1 text-4xl font-bold">
            <li className="flex pl"><span className=" text-pink-800">i</span> FEC<span className="font-bold text-blue-800">.</span></li>
        </ul>
        
        <ul className="flex flex-row gap-20 px-40 hover:cursor-pointer ">
            <li><span>HOME</span></li>
            <li><span>SHOP</span></li>
            <li><span>PAGES</span></li>
            <li><span>BLOG</span></li>
            <li><span>CONTACT</span></li>
        </ul>
        <ul className="flex  gap-5"> 
            <li>
                <IoSearchOutline />
            </li>
            <li>
                <IoBagCheckOutline />
            </li>
        </ul>
    </nav>
  )
}
