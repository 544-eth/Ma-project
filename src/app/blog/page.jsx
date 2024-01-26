
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Page2 from './page2';
import { myBlogPost } from '@/blogarray/page';
import { SlCalender } from "react-icons/sl";

export default function Post() {
    const myArrayBlog = myBlogPost.map(blogg => (
        <div className=' h-[100vh] '>

            <div className='flex-row  p-5 gap-4 '>
            <div className=' '>
                <div className='rounded-xl shadow-xl overflow-hidden'>
                    <Image src={`/image/${blogg.image}.jpg`} alt={blogg.person} width={420}  height={400} className=' rounded-xl transform hover:scale-125 hover:rotate-6 cursor-zoom-in transition-transform duration-300 translate-x bg-contain'/>
                </div>
                
                <div className='flex flex-row m-auto py-6 items-center justify-between'>
                    <div className='flex flex-row items-center gap-3 text-gray-500'>
                        <Image src='/image/boy.png' width={40} height={40} />
                        <p className=' italic'>{blogg.names}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 text-gray-500'>
                        <SlCalender />  <p className=' italic'>{blogg.date}</p>
                    </div>
                </div>
                <div className=' grid grid-cols-1 py-5  '>
                    <Link href={`bloggg/${blogg.person.split(' ').join('_')}`} title={blogg.person}>
                        <h2 className=' text-4xl pb-4 text-green-950'>{blogg.happening} </h2>
                    </Link>
                    <p>{blogg.event}</p>
                </div> 
                <div>
                    <button className=' text-green-600 font-bold'>
                        {blogg.next}
                    </button>
                </div>


                    
                


            </div>  
            
            </div>

            

    </div>


    ))
  return (
    <div>
        <Page2 />

        <div className=' grid grid-cols-3 p-5 gap-4'>
           {myArrayBlog}
        </div>

        <div className=' flex items-center justify-center p-5'>
            <button className=' bg-green-600 text-white font-semibold p-1 px-10 rounded-md hover:bg-slate-600'>Next</button>
        </div>

    </div>
    
  )
}