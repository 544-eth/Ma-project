import React from 'react'

 export default function Mains() {
  return (
    <main className='flex justify-around bg-gradient-to-r from-slate-100 to-slate-200 py-36 pt-20'>
        <div className='px-20 grid pt-10 place-items-center'>
        <div className='flex pb-2 pt-2 font-extrabold text-8xl text-gray-800' >
            <h1>iFEC<span className='text-pink-900 font-extrabold'> Online </span> Store</h1>
        </div>
        <div className='text-2xl grid pb-8 place-items-center'>
            <p>The home of Everything Gadgets We Make Sure </p>
            <p>You are Just A Call Away From getting your surest product</p>
        </div>
        

        <div className='grid place-items-center'>
            <button className=' bg-gray-800 p-2 px-4 rounded-2xl text-yellow-50 hover:bg-green-900 transition duration-700 ease-in-out animate-bounce'>Shop Now</button>
        </div>
        </div>
        
    </main>

    
    
  )
}