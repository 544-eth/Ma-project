"use client"


import React from 'react'
import Kards from '../components/cards'


import Mains from './mains'

const Amazon = () => {
    

    return (
        <section>
          <div>
              <div className='  bg-gradient-to-bl from-blue-200 to-red-100   '>
                  <div className=' grid place-items-center w-[95%] 2xl:h-[120vh] xl:h-[100vh] lg:h-[80vh] m-auto md:h-[70vh]'>
                    <Mains/>
                  </div>
              </div>

              <div className=' bg-gradient-to-bl from-red-100 to-blue-200 '>
                <Kards/> 
              </div>
          </div>
        </section>
    )
}

export default Amazon
















