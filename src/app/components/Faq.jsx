import React from 'react'
import Appdrop from './dropdown'

export default function Faq() {
  return (
    <div className=' p-4 m-auto w-[70%] bg-slate-50 rounded-xl shadow-lg '>
        <Appdrop title='Detail' answer='We are located at Computer Village Ikeja, Branch Office at Iyana-School Victory Estate Iba Ojo Lagos State.' />
        <Appdrop title='Shipping' answer='A shipping address is the specific location where a package or parcel is intended to be delivered. It typically includes the recipients name street address city state or region postal or ZIP code and sometimes additional details like the country' />
        <Appdrop title='Return Policy' answer='A return policy is a set of rules and guidelines established by a retailer or business that outlines the terms under which customers can return purchased products for a refund, exchange, or store credit.' />
    </div>
  )
}
