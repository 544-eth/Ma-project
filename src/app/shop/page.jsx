"use client"


import React from 'react'
import Kards from '../components/Cards'


import Mains from './mains'

const Amazon = () => {
    

    return (
        <section>
          <div>
              <div className='  bg-gradient-to-r from-slate-200 to-slate-50   '>
                  <div className=' grid place-items-center w-[95%] 2xl:h-[120vh] xl:h-[100vh] lg:h-[80vh] m-auto md:h-[70vh]'>
                    <Mains/>
                  </div>
              </div>

              <div className='  '>
                <Kards/> 
              </div>
          </div>
        </section>
    )
}

export default Amazon
















