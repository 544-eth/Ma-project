"use client"
import { myProducts } from '@/app/phone/page'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineNoteAlt } from "react-icons/md";
import Faq from '@/app/components/Faq'






export default function Page(props) {
    const ourProduct = myProducts.find(phones => phones.id.split(' ').join('_') == props.params.slug)
    const related = myProducts.filter(phones => phones.type == ourProduct.type && phones.id !== ourProduct.id)

    const newProduct = related.map(phones => (
        
        
        
        <div className=' py-20 grid  px-12 '>
            <div className=' bg-gray-100 overflow-hidden  w-[35vh] h-[60vh] rounded-lg shadow-lg '>
                <section className=' group relative flex bg-gray-100 py-3 pb-10 flex-col place-items-center rounded-t-xl '>
                    <div key={phones.id}  className=''  >
                        <Link href={`/products/${phones.id.split(' ').join('_')}`} title={phones.type}>
                            <Image src={`/image/${phones.image}.png`} alt={phones.id} width={200} height={200} className=' group-hover:rotate-6 group-hover:scale-105 transition-transform object-cover ' />

                            

                        </Link>
                    </div>
                    <div className=' absolute inset-0 flex flex-col items-center justify-end place-items-center px-2 text-center translate-x-[30%] group-hover:translate-x-0 transition-all duration-500'>
                            <button className=' bg-pink-950 text-white p-4 px-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'>Add to cart</button>
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
      <div>
        
            <main className='flex justify-around bg-slate-200 py-35 pb-12'>
                <div className='px-20 grid pt-10'>
                <div className='flex pt-32  text-purple-900  '>
                    <h1 className=' font-bold text-8xl'>{ourProduct.id}</h1>
                </div>
                <div className='flex '>
                    <p className='text-2xl text-gray-500'>You get 30% off Discount when you purchase <br />This December </p>
                </div>
                

                <div className=''>
                    <button className='font-bold rounded-2xl  hover:text-pink-800 transition duration-300 ease-in-out'>WATCH NOW</button>
                </div>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <Image src='/image/i12.png'   width={500} height={500} className='flex pt-20' />
                </div>
            </main>


            <div className='flex flex-row md:grid-cols-2 sm:grid-cols-1 h-[100vh] gap-4 bg-slate-50'>
                <div className='flex justify-around '>

                    <div className=' w-[450px] pb-20 bg-slate-100 border shadow-lg m-20 rounded-xl text-5xl place-items-center grid'>
                        <Image src={`/image/${ourProduct.image}.png`} alt={ourProduct.id} width={300} height={400} />
                    </div>

                    <div>
                    <div className='flex flex-col m-auto pl-2 py-10 '>
                        <div className='text-4xl text-pink-800 font-semibold '>
                            
                                <h1>{ourProduct.id}</h1>
                            </div>

                            <div className='py-3 text-green-800 text-2xl'>
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

                            <div className=' m-auto w-96 text-gray-500'>
                                <p>{ourProduct.description}</p> 
                            </div>
                        </div>

                        <div className=' m-auto pl-2 py-'>

                            <div>
                                <p className='text-green-800 py-4'>Quantity:</p>
                            </div>

                            <div className='pb-10'>
                                <input type="number" name="num" id="num" min={1} max={20} placeholder='1' className=' px-3 border text-[25px]' />
                            </div>
                            <button className='bg-green-800 text-yellow-50 px-10 rounded-lg py-2 hover:bg-gray-800 transition ease-in-out'>Add to cart</button>
                        </div>
                    </div>
                
                </div>
            </div>

            <div className=' h-[50vh] pt-16  ' >
                <Faq/>
            </div>

            <div >
                <div className='grid place-items-center text-5xl py-16  '>
                    <h2 className='border-4 border-solid border-r-emerald-800 border-l-emerald-800 rounded-xl animate-flowColors p-4 text-gray-800'>Related Product</h2>
                </div>
                <div className='grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-20 m-10 '>

                    {newProduct}
                    
                </div>
            </div>
    </div>
  )
}
