import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialSkype, SlSocialSpotify, SlSocialYoutube, SlCalender } from "react-icons/sl";
import Link from 'next/link'
import Image from 'next/image'
import { myBlogPost } from '@/blogarray/page' 



export default function Blo(props) {
    const toBlog = myBlogPost.find(blogs => blogs.person.split(' ').join('_') == props.params.slu)
    const toRelated = myBlogPost.filter(blogs => blogs.happening == toBlog.happening && blogs.person !== toBlog.person)

    const recentRelated = myBlogPost.slice(3, 6).map(blogs => (

// ****************A slug for the blog****************\\

            <div key={blogs.person} className='   '>
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
            <div className='bg-gradient-to-br from-red-200 to-blue-200 '>
                <main className=' grid place-items-center font-serif sm:grid-cols-1 md:grid-cols-2 h-[80vh]  w-[95%] m-auto py-35 xl:gap-[35vw] '>
                        <div className='flex text-gray-900 mt-32 md:mt-0 '>
                            <h1 className=' font-bold text-3xl sm:text-4xl md:text-4xl lg:text-6xl tracking-wide'>{toBlog.happening}</h1>
                        </div>
                        <div className=' flex mb-20 md:mb-0 md:w-[200px]  lg:w-[300px]'>
                            <Image src='/image/gray6.png'   width={300} height={300} className=' ' />
                        </div>
                </main>
            </div>

            <div className=' bg-gradient-to-bl from-green-200 to-yellow-200'>
                <div className=' grid  w-[90%] m-auto gap-20 md:grid-cols-2 py-20 sm:grid-cols-1'>

                    <div className=' font-serif '>
                        <div className='  m-auto bg-contain  '>
                            <Image src={`/image/${toBlog.image}.jpg`}  width={200} height={200} className=' rounded-md w-full'/>
                        </div>

                        <div className=' flex items-center justify-between py-3'>
                            <Image src='/image/boy.png' width={37} height={37} />
                            <p className=' italic text-gray-500'>{toBlog.names}</p>
                        </div>

                        <div className=' py-1'>
                            <h1 className=' text-purple-950 text-[45px]'>{toBlog.happening}</h1>
                        </div>
                        <div>
                            
                            <p className=' text-justify tracking-wide text-[16px] text-slate-600'>{toBlog.event1}</p>
                            
                        </div>

                            <div className=' grid place-items-center pt-5 '>
                                <h2 className=' text-purple-950 text-2xl sm:text-3xl border shadow-md  bg-slate-100 px-10 rounded-xl'>
                                    Mac Book Air 
                                </h2>
                            </div>
                            <div className=' grid place-items-center gap-5 md:grid-cols-1  lg:grid-cols-2 py-10'>
                                <div className='  w-[300px] lg:w-[200px] lg:p-4 rounded-lg shadow-md shadow-blue-700    bg-slate-100  h-[150px] flex justify-center items-center '>
                                    <Image src='/image/ine.png' width={200} height={200} className=' '/>
                                </div>
                                <div className='  w-[300px] lg:w-[200px] lg:p-4 rounded-lg shadow-md shadow-blue-700   bg-slate-100  h-[150px] flex justify-center items-center'>
                                    <Image src='/image/ime.png' width={200} height={200} />
                                </div>
                            </div>

                            <div>
                                <p className='  tracking-wide text-justify text-[16px] text-slate-600 '>{toBlog.event2}</p>
                                <div className=' border-b-2 py-10'> </div>

                                <div className=' py-5  ' >
                                    <div className='  gap-5  grid place-items-start xl:place-items-center' >
                                            <h3 className=' text-purple-700 font-bold text-3xl'>Tag: </h3>
                                            <ul className=' grid xl:flex  text-[16px] text-slate-600 gap-5'>
                                                <li>{toBlog.person}</li>
                                                <li>{toBlog.company}</li>
                                                <li>{toBlog.office}</li>
                                            </ul>

                                        <div className=' grid place-items-start xl:place-items-center  gap-5'>
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

                    
                

                    <div className=' '>
                        <div className='grid place-items-center w-full rounded-xl border-2 border-black p-10  '>
                            <div>
                                <h2 className=' pb-3 text-purple-800 text-3xl'>Search Here</h2>
                            </div>
                            <div className=' flex items-center border border-black rounded-xl  '>
                                
                                
                                    <form >
                                        <input type="search" name="search" id="search" placeholder='Search. . .' className=' bg-transparent w-full  rounded-xl p-2 border-none focus:shadow-xl outline-none  focus:border-green-900 border-2 transition duration-700 ease-in-out ' />
                                    </form>
                                
                                

                            </div>
                        </div>
                        <div className=' py-3'>

                        </div>

                        <div className=' rounded-xl border-2 border-black '>
                            <div className=' p-5  '> 
                                <h1 className=' text-teal-900 font-bold text-[25px]'>Recent</h1>
                                {recentRelated}
                            </div>
                        </div>

                        <div className=' py-5'>

                        </div>
                    
                        <div className=' border-2 border-black rounded-lg p-5'>
                        
                                <h1 className=' text-2xl text-emerald-800 font-bold'>Category</h1>
                                <div>
                                    
                                </div>

                        </div>

                        <div className=' py-5'> 

                        </div>
                        <div className=' border-2 border-black rounded-lg p-5'>
                        
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
