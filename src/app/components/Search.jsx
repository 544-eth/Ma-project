'use client'
import Link from "next/link"
import Image from "next/image"
import { IoSearchOutline } from "react-icons/io5";
import { myProducts } from "../phone/page"
import React, { useState } from 'react'

export default function Searc() {
    const [searcPhones, setsearchPones] = useState('')
    const filterPhones = myProducts.filter(phones => phones.id.toLowerCase().includes(searcPhones.toLowerCase()) || phones.price.toLowerCase().includes(searcPhones.toLowerCase()))

    function onSubmit(e){
        e.preventDefault()
        setsearchPones(e.target.search.value)
    }

    const shopProducts = filterPhones.map(product => (
        <div className=' py-20 grid  px-12 ' key={product.id}>
            <div className=' bg-gray-100 overflow-hidden rounded-lg shadow-sm'>
                    <section className=' group relative flex bg-gray-100 py-3 pb-10 flex-col place-items-center rounded-t-xl '>
                      
                        <div>
                            <Link href={`/products/${product.id.split(' ').join('_')}`} title={product.id}>
                                <Image src={`/image/${product.image}.png`} alt={product.id} width={300} height={400} className=' group-hover:rotate-6 group-hover:scale-105 transition-transform object-cover w-[70vh] h-[40vh]'/>
                            </Link>
                        </div>
                        <div className=' absolute inset-0 flex flex-col items-center justify-end place-items-center px-2 text-center translate-x-[30%] group-hover:translate-x-0 transition-all duration-500'>
                            <button className=' bg-gradient-to-r  from-violet-800 to-pink-900 text-white py-2 px-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' >Add to cart</button>
                        </div>
                  
                    </section>
                    <div className='bg-white p-2 grid place-items-center border-x border-b text-green-600 font-bold '>
                                <Link href={`/products/${product.id.split(' ').join('_')}`} title={product.id}>
                                    <h2>{product.id}</h2>
                                </Link>
                                <h2>&#8358;{product.price}</h2>
                    </div>
            </div>
        </div>
   ))
 return (
   <div>
        <div className=" relative bg-white py-1 rounded-lg shadow-sm sm:mx-auto sm:max-w-lg xl:px-6 lg:px-4 md:px-3 sm:px-4  ">
                     <div className=" mx-auto max-w-md"> 
                            <form action="" className=" relative w-max mx-auto">
                                <input type="search" name="search" id="search" className=" relative peer z-10 bg-transparent w-10 h-10  cursor-pointer outline-none focus:cursor-text pl-12 focus:pl-16 focus:pr-4 rounded-full focus:w-full focus:border-lime-400" defaultValue={searcPhones}  />

                                <Link href='/search'>
                                        <IoSearchOutline onClick={onSubmit}  className=" absolute peer-focus:cursor-pointer inset-y-0 my-auto px-3.5 h-8 w-12 border-transparent border-lime-400 stroke-gray-500 peer-focus:border-lime-400 peer-focus:stroke-lime-400" /> 
                                </Link>
                            </form>
                     </div>
                </div>

     
       <section className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1'>
            {shopProducts} 
       </section>

   </div>
 )



}