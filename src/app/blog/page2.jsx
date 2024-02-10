import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page2() {
  return (
    <div className=' bg-slate-200'>
      <div className=' grid place-items-center h-[115vh] md:h-[90vh] md:grid-cols-2 lg:grid-cols-2 lg:gap-80 xl:grid-cols-2 xl:gap-[600px]'>
            <div className='px-10 grid pt-4 gap-8 '> 
                    <div className=' pt-5 text-6xl md:text-5xl lg:text-6xl xl:text-6xl'>
                        <h1 className=' font-extrabold font-serif text-red-600  pt-20'>Blog Post</h1>
                    </div>
                    <div className='flex   '>
                        <p className='  text-2xl font-serif text-gray-500'>Help us to serve you better lay your <br />Complaints or suggestion here. </p>

                    </div>
                    <div className='flex  flex-row gap-3 font-serif '>
                        <Link href='/'>
                            <ul>
                                <li className='  text-2xl text-green-400 '>Home</li>
                            </ul>
                        </Link>
                        <p>-</p>
                        <p className='text-xl text-gray-500'> Blog Post</p>
                        
                    </div>
            
            </div>
                <div className=' mb-50 sm:mb-1 w-[200px] sm:w-[200px]'>
                    <Image src='/image/ips.png' alt='iphone 6s plus ' title=' iphone 6s plus rosegold' width={300} height={300} className='' />
                </div>
        </div>
    </div>
  )
}
