import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page2() {
  return (
    <div>
      <div className='flex justify-between bg-slate-200 pb-12'>
            <div className='px-10 grid pt-4'>
                    <div className='flex pt-5'>
                        <h1 className=' font-extrabold text-pink-900 text-7xl pt-20'>Blog Post</h1>
                    </div>
                    <div className='flex   '>
                        <p className='  text-2xl text-gray-500'>Help us to serve you better lay your <br />Complaints or suggestion here. </p>

                    </div>
                    <div className='flex pb-10 flex-row gap-3 '>
                        <Link href='/home'>
                            <ul >
                                <li className='text-xl text-pink-800 '>Home</li>
                            </ul>
                        </Link>
                        <p className='text-xl text-gray-500'>- Blog Post</p>
                    </div>
            
            </div>
                <div className='pt-14'>
                    <Image src='/image/ips.png' alt='iphone 6s plus ' title=' iphone 6s plus rosegold' width={300} height={300} className='' />
                </div>
        </div>
    </div>
  )
}
