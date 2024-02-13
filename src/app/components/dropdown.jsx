'use client'
import { useState } from 'react'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";



export default function Appdrop({title, answer}) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div> 
        <div className=' py-2'>
                <button onClick={() => setIsOpen(!isOpen)} className=' flex justify-between tracking-wider w-full text-2xl'>
                    <span className=' text-green-900 font-bold'>{title}</span>
                    {isOpen ? <span><IoIosArrowUp /></span> : <span><IoIosArrowDown /></span>}
                    
                </button>

                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 ${
                    isOpen ? ' grid-rows-[1fr] opacity-100' : ' grid-rows-[0fr] opacity-0'
                }`}>
                    <div className=' overflow-hidden'>
                        {answer}
                    </div>
                </div>
        </div>
           
    </div>
    
  )
} 