import React from 'react'

 export default function Mains() {
  return (
    <main className=' '>

        <div className=' grid px-20 py-32 place-items-center'>
            <div className='flex pb-2 pt-2  font-serif text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-gray-800' >
                <h1>iFEC<span className='text-green-400 font-extrabold'> Online </span> Store</h1>
            </div>
            <div className='text-2xl font-serif grid pt-6 place-items-center text-start text-gray-500'>
                <p>The home of Everything Gadgets We Make Sure </p>
                <p>You are Just A Call Away From getting your surest product</p>
            </div>
            

            <div className='grid place-items-center pt-10'>
                <button className=' bg-gray-800 p-2 px-4 rounded-2xl text-yellow-50 hover:bg-green-900 transition duration-700 ease-in-out animate-bounce '>Shop Now</button>
            </div>
        </div>
        
    </main>

    
    
  )
}