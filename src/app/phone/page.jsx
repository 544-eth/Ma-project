'use Client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'







export const myProducts = [
    {
        id: 'iPhone 11Pro max',
        brand: 'Apple',
        category: 'Pro Max',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '380,000',
        image: 'iqqw',
        description: `
        
        The iPhone 11 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
            },
    {
        id: 'iphone 14 Pro',
        brand: 'Apple',
        category: 'pro',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '850,000',
        image: 'i2',
        description: `
        
        The iPhone 14 pro is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 13 Pro Max',
        brand: 'Apple',
        category: 'Pro Max',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '980,000',
        image: 'sim',
        description: `
        
        The iPhone 13 pro max is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 14 Pro Max',
        brand: 'Apple',
        category: 'Pro Max',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '950,000',
        image: 'i4',
        description: `
        
        The iPhone 14 pro max is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 13 Pro',
        brand: 'Apple',
        category: 'pro',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '550,000',
        image: 'i5',
        description: `
        
        The iPhone 13 pro is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 12 Pro',
        brand: 'Apple',
        category: 'pro',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '550,000',
        image: 'i6',
        description: `
        
        The iPhone 12 pro is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 15 Pro max',
        brand: 'Apple',
        category: 'Pro Max',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '1,500,000',
        image: 'i7',
        description: `
        
        The iPhone 15 pro max is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 15 Plus',
        brand: 'Apple',
        category: 'pro',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '900,450',
        image: 'i8',
        description: `
        
        The iPhone 15 plus is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 13',
        brand: 'Apple',
        category: 'Oridinary',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '500,000',
        image: 'i9',
        description: `
        
        The iPhone 13 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 15',
        brand: 'Apple',
        category: 'Oridinary',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '950,000',
        image: 'i10',
        description: `
        
        The iPhone 15 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone 11',
        brand: 'Apple',
        category: 'Oridinary',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '380,000',
        image: 'oi1',
        description: `
        
        The iPhone 11 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'iPhone X',
        brand: 'Apple',
        category: 'Oridinary',
        Opsystem: 'iOS',
        type: 'iphone',
        price: '180,000',
        image: 'X1',
        description: `
        
        The iPhone X is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },

    {
        id: 'Samsung S23 Ultra',
        brand: 'Samsung',
        category: 'Ultra',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '750,000',
        image: 'S22',
        description: `
        
        The Samsung S23 Ultra is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung A52 ',
        brand: 'Samsung',
        category: 'Oridinary',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '450,000',
        image: 'A52',
        description: `
        
        The Samsung A52 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung A55 ',
        brand: 'Samsung',
        category: 'Oridinary',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '350,000',
        image: 'A55',
        description: `
        
        The Samsung A55 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung G-fold',
        brand: 'Samsung',
        category: 'Fold',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '750,000',
        image: 'Gf',
        description: `
        
        The Samsung G-fold is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Google Pixel 5',
        brand: 'Google',
        category: 'Oridinary',
        Opsystem: 'Google OS',
        type: 'Android',
        price: '450,000',
        image: 'gp5',
        description: `
        
        The Google pixel 5 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Google Pixel 6',
        brand: 'Google',
        category: 'Oridinary',
        Opsystem: 'Google OS',
        type: 'Android',
        price: '550,000',
        image: 'Gp6',
        description: `
        
        The Google pixel 6 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung S9',
        brand: 'Samsung',
        category: 'Oridinary',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '130,000',
        image: 's9',
        description: `
        
        The Samsung S9 is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung S10 Plus',
        brand: 'Samsung',
        category: 'Plus',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '200,000',
        image: 's10',
        description: `
        
        The Samsung S10 Plus is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung S22 Ultra',
        brand: 'Samsung',
        category: 'Ultra',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '750,000',
        image: 's22I',
        description: `
        
        The Samsung S22 Ultra is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung S20 Ultra',
        brand: 'Samsung',
        category: 'Ultra',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '250,000',
        image: 'S20Ultra',
        description: `
        
        The Samsung S20 Ultra is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung S21 4G',
        brand: 'Samsung',
        category: 'Oridinary',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '350,000',
        image: 'S21',
        description: `
        
        The Samsung S21 4G is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },
    {
        id: 'Samsung S21 5G',
        brand: 'Samsung',
        category: 'Oridinary',
        Opsystem: 'Android OS',
        type: 'Android',
        price: '380,000',
        image: 's215g',
        description: `
        

        The Samsung S21 5G is powered by the A13 Bionic chip, which Apple claimed to be the fastest chip ever in a smartphone at the time of its release. The A13 Bionic chip improves overall performance, including faster app launches, smoother graphics, and efficient power management.`
    },

]

// const Kate = ({item}) => {
//     const { image, id, price } = item
//     return (
//         <div>
//             <div>
//                 <Image src={image} alt='Iphone'/>
//             </div>

//             <div>
//                 <p>{id}</p>
//                 <p>{price}</p>
                
//             </div>

//         </div>
//     )
// }

// export default Kate



//  export default function Page() {

//      const toyGroup = myProducts.map(phones => (
//          <div className=' py-20 grid  px-12 ' key={phones.id}>
//          <div className=' bg-gray-100 overflow-hidden rounded-lg shadow-xl shadow-inner shadow-lg'>
//                  <section className=' group relative flex bg-gray-100 py-3 pb-10 flex-col place-items-center rounded-t-xl '>
                    
//                      <div>
//                          <Link href={`/products/${phones.id.split(' ').join('_')}`} title={phones.id}>
//                              <Image src={`/image/${phones.image}.png`} alt={phones.id} width={300} height={400} className=' group-hover:rotate-6 group-hover:scale-105 transition-transform object-cover w-[70vh] h-[40vh]'/>
//                          </Link>
//                      </div>
//                      <div className=' absolute inset-0 flex flex-col items-center justify-end place-items-center px-2 text-center translate-x-[30%] group-hover:translate-x-0 transition-all duration-500'>
//                          <button className=' bg-pink-950 text-white p-4 px-8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Add to cart</button>
//                      </div>
                
//                  </section>
//                  <div className='bg-white p-2 grid place-items-center border-x border-b text-green-600 font-bold '>
//                              <Link href={`/products/${phones.id.split(' ').join('_')}`} title={phones.id}>
//                                  <h2>{phones.id}</h2>
//                              </Link>
//                              <h2>&#8358;{phones.price}</h2>
//                  </div>
//          </div>
//      </div>  







//  ))
//  return (
    
//      <div>
//          <section className='grid md:grid-cols-4 shadow-inner sm:grid-cols-1 gap-[50px] w-4/5 m-auto'>
//              {toyGroup}
//          </section>
//        </div>

//    )
//  }
//<section key={phones.id} className='flex flex-col place-items-center bg-white p-4 rounded-xl'>
          //         <Link href={`/products/${phones.id}`} title={phones.id}>
          //             <Image src={`/image/${phones.image}.png`} alt={phones.id} width={200} height={250} />
          
          //             <h2>{phones.id}</h2>
          //             <h2>&#8358;{phones.price}</h2>
          //         </Link>
          
//</section>