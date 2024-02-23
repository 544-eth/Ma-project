import React from 'react'
import { AiFillClockCircle, AiFillCloseCircle } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import Image from 'next/image'

 


function ShoppingCart({
    visibility,
    myProducts,
    onProductRemove,
    onClose,
    OnQuantityChange,
}) {
  return (
    <div>
        <div className=' fixed top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-[#00000055] z-10 ' style={{display: visibility ? 'block' : 'none',}}>

            <div className=' flex relative flex-col w-[60%] h-[90%] bg-[#eee] rounded-xl m-auto my-8 p-4 ' >
                <div >
                    <div className=' flex justify-between bg-[#ccc] py-5 px-5 rounded-xl'>
                        <h2 className=' text-[25px] font-extrabold'>Shopping Cart</h2>
                        <button className=' text-[25px] text-red-400 ' onClick={onClose}>
                            <AiFillCloseCircle />
                        </button>
                    </div>
                </div>
                    <div className=' flex flex-col items-start p-4 px-0 overflow-y-scroll'>
                        {myProducts.length === 0 && <span className=' block p-8 m-auto'> Try adding an item in your cart</span>}
                        {myProducts.map(product => (
                            <div  key={product.id}>
                                <Image src={product.Image} width={150} height={150} alt={product.id} />
                                <div>
                                    <h3>{product.brand}</h3>
                                    <span>{product.price * product.count}</span>
                                </div>
                                <select value={product.count} onChange={(event) => {
                                    OnQuantityChange(product.id, event.target.value)
                                }}> 
                                
                                    {
                                        [...Array(23).keys(),].map(number => {
                                            const num = number + 1
                                            return <option value={num} key={num}>
                                                        {num}
                                                </option>
                                        })
                                    }
        
                                </select>
        
                                <button className=' text-[24px]' onClick={() => onProductRemove(product)}> 
                                    <AiFillDelete/>
                                </button>
                            </div>
                        ))}
                    {myProducts.length > 0 && (
                        <button> Proceed to checkout </button>
                    )}
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default ShoppingCart