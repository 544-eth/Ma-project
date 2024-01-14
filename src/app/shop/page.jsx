import React from 'react'
import Main from './mains'
import { myProducts } from '../phone/page'
import Image from 'next/image'
import Link from 'next/link'

export default function Sop() {

    const shopProducts = myProducts.map(product => (
        <div className=' py-20 grid  px-12 '>
            <div className=' bg-gray-100 overflow-hidden rounded-lg shadow-xl shadow-inner shadow-lg'>
                    <section className=' group relative flex bg-gray-100 py-3 pb-10 flex-col place-items-center rounded-t-xl '>
                        
                        <div>
                            <Link href={`/products/${product.id.split(' ').join('_')}`} title={product.id}>
                                <Image src={`/image/${product.image}.png`} alt={product.id} width={300} height={400} className=' group-hover:rotate-6 group-hover:scale-105 transition-transform object-cover w-[70vh] h-[40vh]'/>
                            </Link>
                        </div>
                        <div className=' absolute inset-0 flex flex-col items-center justify-end place-items-center px-2 text-center translate-x-[30%] group-hover:translate-x-0 transition-all duration-500'>
                            <button className=' bg-pink-950 text-white p-4 px-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Add to cart</button>
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
        <Main />

        <section className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1'>
            {shopProducts}
        </section>

    </div>
  )
}
