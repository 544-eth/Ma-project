import React from 'react'
import { SlCalender } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialSkype } from "react-icons/sl";
import { SlSocialSpotify } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import Link from 'next/link'
import Image from 'next/image'
import { myBlogPost } from '@/blogarray/page' 



export default function Blo(props) {
    const toBlog = myBlogPost.find(blogs => blogs.person.split(' ').join('_') == props.params.slu)
    const toRelated = myBlogPost.filter(blogs => blogs.happening == toBlog.happening && blogs.person !== toBlog.person)

    const recentRelated = myBlogPost.slice(3, 6).map(blogs => (

// ****************A slug for the blog****************\\

            <div className='   '>
                <div className=' flex pb-4 gap-5'>
                    
                    <section className=' overflow-hidden rounded-lg '>
                                <Link href={`/bloggg/${blogs.person.split(' ').join('_')}`} title={blogs.office}>
                                    <Image src={`/image/${blogs.image}.jpg`} alt={blogs.person} width={150} height={150} className=' hover:rotate-6 hover:scale-125 transition-transform  ' />                          
                                </Link>
                    </section>

                    <div className=' '>
                            <div className=' flex gap-6 items-center'> 
                                <SlCalender className='text-gray-400'/>

                                <h3 className=' italic text-gray-400'>{blogs.date}</h3>
                            </div>
                            <Link href={`/bloggg/${blogs.person.split(' ').join('_')}`}>

                                <h2 className=' text-2xl hover:font-semibold hover:underline text-teal-600'>{blogs.happening}</h2>
                            </Link>
                    </div>
                </div> 
            </div>
    ))
  return (
    <div>
            <main className='flex justify-around bg-slate-200 py-35 pb-12'>
                <div className='px-20 grid pt-10'>
                <div className='flex pt-32  text-purple-900  '>
                    <h1 className=' font-bold text-8xl tracking-wide'>{toBlog.happening}</h1>
                </div>
               
                

                <div className=' pt-3'>
                    <button className=' pt-3 font-bold rounded-2xl  hover:text-pink-800 transition duration-300 ease-in-out'>WATCH NOW</button>
                </div>
                </div>
                <div className='flex flex-col items-center gap-5 '>
                    <Image src='/image/blog1.png'   width={400} height={400} className='flex pt-20 ' />
                </div>
            </main>

            <div className='flex flex-col  md:grid-cols-2 sm:grid-cols-1 h-[300vh]  gap-4 bg-slate-50'>
                <div className='flex justify-around py-20'>

                    <div className=' w-[50%]    '>
                        <div className='  m-auto bg-contain '>
                            <Image src={`/image/${toBlog.image}.jpg`}  width={500} height={400} className=' rounded-md w-full'/>
                        </div>

                        <div className=' flex items-center justify-between py-3'>
                            <Image src='/image/boy.png' width={37} height={37} />
                            <p className=' italic text-gray-500'>{toBlog.names}</p>
                        </div>

                        <div className=' py-1'>
                            <h1 className=' text-purple-950 text-[45px]'>{toBlog.happening}</h1>
                        </div>
                        <div>
                            
                            <p className='  line-h-9 tracking-wide text-[16px] text-slate-600'>{toBlog.event1}</p>
                            

                        </div>

                            <div className=' flex pt-5 items-center justify-center  '>
                                <h2 className=' text-purple-950 text-[45px] border shadow-md shadow-inner bg-slate-100 px-10 rounded-xl'>
                                    Mac Book Air 
                                </h2>
                            </div>
                            <div className=' flex justify-between py-10'>
                                <div className='  w-[300px] rounded-lg shadow-md shadow-inner   bg-slate-100  h-[150px] flex justify-center items-center '>
                                    <Image src='/image/ine.png' width={200} height={200} className=' '/>
                                </div>
                                <div className='  w-[300px] rounded-lg shadow-md shadow-inner  bg-slate-100  h-[150px] flex justify-center items-center'>
                                    <Image src='/image/ime.png' width={200} height={200} />
                                </div>
                            </div>

                            <div>
                                <p className='  tracking-wide text-[16px] text-slate-600 '>{toBlog.event2}</p>
                                <div className=' border-b-2 py-10'> </div>

                                <div className=' py-5 flex  ' >
                                    <div className=' flex gap-5 items-center' >
                                    <h3 className=' text-purple-700 font-bold text-3xl'>Tag: </h3>
                                    <ul className=' flex flex-row text-[16px] text-slate-600 gap-5'>
                                        <li>{toBlog.person}</li>
                                        <li>{toBlog.company}</li>
                                        <li>{toBlog.office}</li>
                                    </ul>

                                    <div className='flex flex-row gap-5 pl-20'>
                                        <h3 className=' text-purple-700 font-bold text-3xl'>Share: </h3>
                                        <ul className=' flex items-center text-[16px] text-slate-600 gap-10'>
                                        
                                            <li href=''><SlSocialSpotify /></li>
                                            

                                            <li><SlSocialSkype />
                                                                    </li>
                                            <li><TiSocialTwitter />
                                                                    </li>
                                            <li><SlSocialYoutube />
                                                                    </li>
                                        </ul>
                                    </div>


                                    </div>
                                
                                    
                                 </div>
                            </div>

                            
                    </div>

                    
                

                    <div className=''>
                        <div className='grid place-items-center rounded-xl border-2 p-10  '>
                            <div>
                                <h2 className=' pb-3 text-purple-800 text-3xl'>Search Here</h2>
                            </div>
                            <div className=' flex items-center border rounded-xl  '>
                                
                                
                                    <form >
                                        <input type="search" name="search" id="search" placeholder='Search. . .' className=' bg-transparent w-[400px]  rounded-xl p-2 border-none focus:shadow-xl outline-none  focus:border-green-900 border-2 transition duration-700 ease-in-out ' />
                                    </form>
                                
                                

                            </div>
                        </div>
                        <div className=' py-3'>

                        </div>

                        <div className=' rounded-xl border-2 '>
                            <div className=' p-5  '> 
                                <h1 className=' text-teal-900 font-bold text-[25px]'>Recent</h1>
                                {recentRelated}
                            </div>
                        </div>

                        <div className=' py-5'>

                        </div>
                    
                        <div className=' border-2 rounded-lg p-5'>
                        
                                <h1 className=' text-2xl text-emerald-800 font-bold'>Category</h1>
                                <div>
                                    
                                </div>

                        </div>

                        <div className=' py-5'> 

                        </div>
                        <div className=' border-2 rounded-lg p-5'>
                        
                                <h1 className=' text-2xl text-emerald-800 font-bold'>Tags</h1>
                                <div>
                                    
                                </div>

                        </div>
                        
                    </div>
                    

                    
                </div>
                
            </div>


            


            <div>
                
            </div>
    </div>
  )
}
