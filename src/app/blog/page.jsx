
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Page2 from './page2';
import { myBlogPost } from '@/blogarray/page';
import { SlCalender } from "react-icons/sl";

export default function Post() {
    const myArrayBlog = myBlogPost.map(blogg => (
        <div key={blogg.date} className=' h-[55vh] md:h-[40vh] '>
            <div className='flex-row  p-5 gap-4 '>
                <div className='w-[280px] sm:w-[280px] md:w-[350px] '>
                    <div className='rounded-xl shadow-md shadow-blue-400  overflow-hidden'>
                        <Image src={`/image/${blogg.image}.jpg`} alt={blogg.person} width={420}  height={400} className=' rounded-xl transform hover:scale-125 hover:rotate-6 cursor-zoom-in transition-transform duration-300 '/>
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
                        <Link href={`/bloggg/${blogg.person.split(' ').join('_')}`} title={blogg.person}>
                            <h2 className=' text-4xl pb-4 text-green-950'>{blogg.happening} </h2>
                        </Link>
                        <p className=' text-justify'>{blogg.event}</p>
                    </div> 
                    <div>
                        <Link href={`/bloggg/${blogg.person.split(' ').join('_')}`}>
                            <button className=' text-green-600 font-bold'>
                                {blogg.next}
                            </button>
                        </Link>
                    </div>


                        
                    


                </div>  
            </div>
        </div>


    ))
  return (
    <div>
        <Page2 />
        <div className=' bg-gradient-to-bl from-red-100 to-blue-200'>

            <div className=' grid place-items-center w-[95%] h-[459vh]  md:h-[290vh] lg:h-[120vh] xl:h-[120vh] m-auto xl:grid-cols-3 lg:grid-cols-2 py-2  md:grid-cols-2 sm:grid-cols-1 '>
            {myArrayBlog}
            </div>
            <div className=' flex items-center justify-center p-5 h-[30vh]'>
                <button className=' bg-green-600 text-white font-semibold p-1 px-10 rounded-md hover:bg-slate-600'>Next</button>
            </div>
        </div>


    </div>
    
  )
}
