import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { myCategory } from '../page'
import { myProducts } from '@/app/phone/kite'


const dbest = myCategory.find(bestD => (

                    <div className=''>
                                <Link href={`/top-categories/${bestD.id.split(' ').join('_')}`} >
                                    <h2>{bestD.id}</h2>
                                </Link>
                                
                    </div>
) )


export default function page() {

    const bestpage = myProducts.filter(selling => selling.category =='Pro Max' )
    const sellPage = bestpage.map(selling => (

            <div key={selling.id} className=' py-20 grid px-12'>
                <div className=' bg-gray-100 overflow-hidden rounded-lg  shadow-lg hover:transform hover:duration-500 hover:ease-in-out hover:translate-y-2 hover:shadow-blue-300'>
                    <section className=' group relative flex bg-gray-100 py-3 px-5 pb-10 flex-col place-items-center rounded-t-xl '>
                        
                        <div>
                            <Link href={`/products/${selling.id.split(' ').join('_')}`} title={selling.id}>
                                <Image src={`/image/${selling.image}.png`} alt={selling.id} width={200} height={250} className=' group-hover:rotate-6 group-hover:scale-105 transition-transform'/>
                            </Link>
                        </div>
                        <div className=' absolute inset-0 flex flex-col items-center justify-end place-items-center px-2 text-center translate-x-[30%] group-hover:translate-x-0 transition-all duration-500'>
                            <button className=' bg-gradient-to-r  from-violet-800 to-pink-900 text-white py-2 px-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Add to cart</button>
                        </div>
                    
                    </section>
                    <div className='bg-white p-2 grid place-items-center border-x border-b text-green-600 font-bold '>
                                <Link href={`/products/${selling.id.split(' ').join('_')}`} title={selling.id}>
                                    <h2>{selling.id}</h2>
                                </Link>
                                <h2>&#8358;{selling.price}</h2>
                    </div>
                </div>
            </div>
    )) 
  return (
    <div>
        <main className=' bg-gradient-to-br from-blue-200 to-red-200'>

                <div className=' grid place-items-center md:flex-col 2xl:gap-[40vw]  lg:grid-cols-2  w-[95%] m-auto  h-[90vh]'>
                    <div className='  pt-64 lg:pt-0'>
                        <div className='flex  text-purple-900  '>
                            <h1 className=' font-bold text-8xl xl:text-9xl'>{dbest.id}</h1>
                        </div>
                        <div className='flex '>
                            <p className='text-2xl text-gray-500'>You get 30% off Discount when you purchase <br />This December </p>
                        </div>
                    
                    </div>
                    <div className=' pl-0 lg:pl-56 '>
                        <Image src='/image/i12.png'   width={500} height={500} className='' />
                    </div>
                </div>
        </main>
            
        <div className=' bg-gradient-to-tr from-red-200 to-blue-100'>
            <div className=' grid place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-[95%] m-auto '>
                {sellPage}
            </div>
        </div>
    </div>
  )
}
