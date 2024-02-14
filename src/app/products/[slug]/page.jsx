"use client"
import { myProducts } from '@/app/phone/kite'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { MdOutlineStar } from "react-icons/md";
import { FaMinus,FaPlus } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import Faq from '@/app/components/Faq'







export default function Page(props) {
    const  [count, setCount] = useState(0)
    
    function increaseCount(){
        setCount(count + 1)
    }

    function decreaseCount() {
        setCount(count - 1)
    }



    const ourProduct = myProducts.find(phones => phones.id.split(' ').join('_') == props.params.slug)
    const related = myProducts.filter(phones => phones.type == ourProduct.type && phones.id !== ourProduct.id)

    const newProduct = related.map(phones => (
        
        
        
        <div className=' py-20 grid place-items-center   ' key={phones.id}>
            <div className=' bg-gray-100 lg:w-[300px] md:w-[300px] w-[300px] overflow-hidden  rounded-lg shadow-md shadow-green-400'>
                <section className=' group relative flex bg-gray-100 py-3 pb-10 flex-col place-items-center rounded-t-xl '>
                    <div key={phones.id}  className=''  >
                        <Link href={`/products/${phones.id.split(' ').join('_')}`} title={phones.type}>
                            <Image src={`/image/${phones.image}.png`} alt={phones.id} width={200} height={200} className=' group-hover:rotate-6 group-hover:scale-105 transition-transform object-cover  ' />

                            

                        </Link>
                    </div>
                    <div className=' absolute inset-0 flex flex-col items-center justify-end place-items-center px-2 text-center translate-x-[30%] group-hover:translate-x-0 transition-all duration-500'>
                            <button className=' bg-gradient-to-tr from-blue-800 to-blue-400 text-white p-4 px-8 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500'>Add to cart</button>
                    </div>

                    
                </section>

                <div className='bg-white p-4  grid place-items-center border-x border-b text-green-600 font-bold '>
                        <Link href={`/products/${phones.id.split(' ').join('_')}`} title={phones.type}>
                            <h2>{phones.id}</h2>
                        </Link>
                        
                        <h2>&#8358; {phones.price}</h2>
                    
                </div>
            </div> 
        </div>
    ))
  return (
      <div className=' '>
            <div className=' bg-slate-200'>
                <main className='grid place-items-center w-[95%] m-auto 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  md:h-[100vh] md:justify-between sm:h-[130vh] sm:grid sm:place-items-center h-[100vh] '>
                    <div className=' pt-36 sm:pt-28'>
                        <div className='  text-purple-900 sm:mb-5'>
                            <h1 className=' font-t font-serif 2xl:text-8xl xl:text-7xl lg:text-7xl md:text-6xl sm:text-6xl text-5xl'>{ourProduct.id}</h1>
                        </div>
                        <div className=''>
                            <p className='text-2xl text-gray-500'>You get 30% off Discount when you purchase <br />This December </p>
                        </div>
                    </div>
                    <div className=' lg:pl-52 md:pl-44 md:w-[600px]'>
                        <Image src='/image/i12.png' alt=''  width={500} height={500} className=' ' />
                    </div>
                </main>
            </div>


            <div className='  bg-slate-50'>
                <div className='grid place-items-center w-[95%] m-auto 2xl:justify-between xl:justify-between lg:justify-around md:grid-cols-2  sm:grid-cols-1 h-[160vh] md:h-[100vh]  '>

                    <div className='grid place-items-center w-[280px] sm:w-[320px] md:w-[300px] h-[450px] lg:w-[380px]  bg-slate-100 border shadow-md shadow-green-400  rounded-xl   '>
                        <Image src={`/image/${ourProduct.image}.png`} alt={ourProduct.id} width={300} height={400} />
                    </div>

                    <div>
                        <div className='flex flex-col m-auto pl-2  '>
                            <div className='text-4xl text-slate-600 font-serif font-semibold '>
                                
                                    <h1>{ourProduct.id}</h1>
                                </div>

                                <div className='py-3 font-serif text-gray-800 text-2xl'>
                                    <h2>&#8358;{ourProduct.price}</h2>
                                </div>

                                <div className='flex flex-row gap-5 py-3'>
                                    <ul className='flex flex-row '>
                                        <li className='text-[gold]'><MdOutlineStar /></li>
                                        <li className='text-[gold]'><MdOutlineStar /></li>
                                        <li className='text-[gold]'><MdOutlineStar /></li>
                                        <li className='text-[gold]'><MdOutlineStar /></li>
                                        <li className='text-[gold]'><MdOutlineStar /></li>
                                    </ul>

                                    <div>
                                        <p>5 Reviews</p>
                                    </div>

                                    <div className='text-[25px]'>
                                        <Link href='/'><MdOutlineNoteAlt />

                                        </Link>
                                    </div>

                                    <div>
                                        <p>Write a review</p>
                                    </div>
                                </div>

                                <div className=' w-[85%]   text-gray-500'>
                                    <p className=' font-serif text-justify'>{ourProduct.description}</p> 
                                </div>
                        </div>

                        <div className=' m-auto pl-2 py-'>

                            <div>
                                <p className='text-green-800 py-4'>Quantity:</p>
                            </div>

                            <div className='  bg-green-100 w-fit border rounded-lg shadow-lg'>
                                <div className=' flex items-center px-[36px] py-2 gap-4'>
                                        <button className=' '  onClick={decreaseCount}>
                                            <FaMinus/>
                                        </button>
                                        <span className=' font-bold text-[17px]' >
                                            {count}
                                        </span>
                                        <button className=' ' onClick={increaseCount}>
                                            <FaPlus/>
                                        </button>
                                </div>
                            </div>

                            <div className=' pb-4'>

                            </div>
                            
                            <button className='  bg-gradient-to-tr from-blue-900 to-blue-500 text-yellow-50 px-10 rounded-lg py-2  hover:scale-95 transition-transform duration-300 ease-in-out'>Add to cart</button>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className='  bg-slate-50 '>
                <div className=' grid place-items-center w-[95%] m-auto h-[80vh]   ' >
                    <Faq/>
                </div>
            </div>

            <div >
                <div className='grid place-items-center text-5xl py-16  '>
                    <h2 className='border-4 border-solid border-r-emerald-800 border-l-emerald-800 rounded-xl animate-flowColors p-4 text-gray-800'>Related Product</h2>
                </div>
                <div className='grid 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-1 w-[95%] m-auto'>

                    {newProduct}
                    
                </div>
            </div>
    </div>
  )
}
