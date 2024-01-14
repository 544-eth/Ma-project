import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { myCategory } from '../page'
import { myProducts } from '@/app/phone/page'




const abest = myCategory.splice(2).find(beste => (

    <div className=''>
                <Link href={`/top-categories/${beste.id.split(' ').join('_')}`} >
                    <h2>{beste.id}</h2>
                </Link>
                
    </div>
) )

export default function page() {
    const ratedpage = myProducts.filter(selling => selling.category =='Fold' )
    const sellRPage = ratedpage.map(selling => (

        <div className=' py-20 grid px-12'>
                <div key={selling.category} className=' bg-gray-100 overflow-hidden rounded-lg  shadow-lg'>
                    <section className=' group relative flex bg-gray-100 py-3 px-5 pb-10 flex-col place-items-center rounded-t-xl '>
                        
                        <div>
                            <Link href={`/products/${selling.id.split(' ').join('_')}`} title={selling.id}>
                                <Image src={`/image/${selling.image}.png`} alt={selling.id} width={200} height={250} className=' group-hover:rotate-6 group-hover:scale-105 transition-transform'/>
                            </Link>
                        </div>
                        <div className=' absolute inset-0 flex flex-col items-center justify-end place-items-center px-2 text-center translate-x-[30%] group-hover:translate-x-0 transition-all duration-500'>
                            <button className=' bg-pink-950 text-white p-4 px-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Add to cart</button>
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
        <main className='flex justify-around bg-slate-200 py-35 pb-12'>
                <div className='px-20 grid pt-10'>
                <div className='flex pt-32  text-purple-900  '>
                    <h1 className=' font-bold text-8xl'>{abest.id}</h1>
                </div>
                <div className='flex '>
                    <p className='text-2xl text-gray-500'>You get 30% off Discount when you purchase <br />This December </p>
                </div>
            
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <Image src='/image/i12.png'   width={500} height={500} className='flex pt-20' />
                </div>
        </main>
            
        <div className='flex flex-row items-center justify-around  '>
            {sellRPage}
        </div>
    </div>
  )
}
