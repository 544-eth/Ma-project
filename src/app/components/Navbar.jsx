"use client"
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import React, { useState } from 'react'
import Link from "next/link";
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { myProducts } from "../phone/kite";
import ShoppingCart from "./ShoppingCart";










export default function Navbar({data}) {

    const [cartVisibility, setCartVisibility] = useState(false)
    const [productsInCart, setProduct] = useState([])

    const addProductToCart = (product) => {
    const newProduct = {
            ...product,
            count: 1,
        }
        setProduct([...productsInCart, newProduct])
    }
    


    const [isOpened, setIsOpened] = useState(false)
    
    const [activeSearch, setActiveSearch] = useState([])

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

      const handleSearch = (event) => {
          const searchWord = event.target.value
          const newFilter = myProducts.filter((value) => {
            return value.id.toLowerCase().includes(searchWord.toLowerCase())
          })

          if (searchWord === '') {
            setActiveSearch([])
          } else {
              setActiveSearch(newFilter)
          }
      }


  return (
    
        <div className=" bg-gradient-to-r from-blue-700 to-blue-400  border-b py-2  ">

            <ShoppingCart
            
                 visibility={cartVisibility}
                  myProducts={productsInCart}
                 onClose={() => setCartVisibility(false)}

            />

         <div className=" flex items-center w-[95%] m-auto justify-between sm:px-[50px]">
             <div className="grid  text-2xl md:text-4xl sm:text-2xl font-bold">
                 <Link href='/'>
                     <h1 className=" flex"><span className=" font-serif text-green-400">i</span><span className=" font-serif text-yellow-300">FEC</span> <span className="font-bold text-white">.</span></h1>
                 </Link>
             </div>
                {/* NAVBAR FOR LARGER SCREENS */}
             <nav className=" hidden lg:flex items-center justify-between 2xl:ml-16 absolute xl:ml-32 lg:ml-5 md:ml-3" >
             
                     <ul className="flex flex-row text-white font-bold 2xl:gap-40 xl:gap-28 lg:gap-16  gap-10 2xl:pl-72 xl:pl-20 lg:pl-20   ">

                     <Link href='/testanimation'>
                        <li>
                            
                        </li>
                     </Link>
                         <Link href='/'>
                             <li className="hover:text-green-400 hover:border-b-2  border-white transition duration-200 ease-in-out"><span>HOME</span></li>
                         </Link>
                         <Link href='/shop'>
                             <li className="hover:text-green-400 hover:border-b-2 border-white transition duration-200 ease-in-out"><span>SHOP</span></li>
                         </Link>
                         <Link href='/pages'>
                             <div className=" flex items-center justify-center space-y-[3px]  mt-4 ">
                                 <button onClick={() => setIsOpened((back) => !back)} className=" flex items-center gap-3 ">PAGES 
                                         {!isOpened ? (
                                             <AiOutlineCaretDown />
                                         ) : (
                                             <AiOutlineCaretUp className=" text-green-400 " />
                                         )}
                                 </button>
                                 {isOpened && (
                                     <div className=" bg-opacity-10 backdrop-filter backdrop-blur bg-white shadow-md absolute p-3 top-[47px] rounded-b-xl transition-transform transform duration-500 ease-in-out">
                                         <div className=" flex flex-col text-[17px] w-[200px] items-start  ">
                                             <Link href='/pages/about' className=" hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">About</Link>
                                             <Link href='/pages/team' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">Team</Link>
                                             <Link href='/pages/cookie' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform duration-500 ease-in-out">Cookie Policy</Link>
                                             <Link href='/pages/privacy' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">Privacy Policy</Link>
                                         </div>
                                     </div>
                                 )}
                                 
 
                             </div>
                         </Link>
                         <Link href='/blog'>
                             <li className="hover:text-green-400 hover:border-b-2 border-white transition duration-700 ease-in-out"><span>BLOG</span></li>
 
                         </Link>
                         <Link href='/contact'>
                             <li className="hover:text-green-400 hover:border-b-2 border-white transition duration-700 ease-in-out"><span>CONTACT</span></li>
                         </Link>
                         
                     </ul>
                     
             </nav>
             <div className=" text-[20px] md:text-[20px] flex  gap-5 ">

                     {/* SEARCH BOTTON IMPLEMENTATION */}
                 <div className=" relative    ">
                     <div className=" mx-auto max-w-md  "> 
                            <form action="" className=" relative w-max mx-auto ml-12">
                                <input type="search" name="search" id="search"  className=" border peer z-10   h-10  outline-none cursor-pointer 2xl:pl-32 xl:pl-28 lg:pl-20 md:pl-24 sm:pl-14 pl-16  rounded-full w-10  focus:border-lime-400 focus:pl-[40px] 2xl:focus:w-[380px] xl:focus:w-[200px] lg:focus:w-[200px] md:focus:w-[380px] sm:focus:w-[300px] focus:w-[200px] focus:cursor-text focus:pr-4 transition duration-300 ease-in-out " onChange={handleSearch} />
                                <IoSearchOutline className=" absolute inset-y-0 my-auto h-8 w-12 px-3.5 stroke-gray-500  border-transparent peer-focus:border-lime-400"  /> 

                                
                                 {
                                    activeSearch.length != 0 && (
                                        <div className=" absolute top-16 bg-gradient-to-bl z-50 from-blue-400 to-blue-800 rounded-lg text-slate-800 w-full flex flex-col left-1/2 -translate-x-1/2">
                                            <div className=" flex flex-col p-3 gap-3 text-white font-bold tracking-wider">
                                                {
                                                    activeSearch.slice(0, 4).map((value, key) => {
                                                        return (
                                                        <Link href={`/products/${value.id.split(' ').join('_')}`}>
                                                            <span>{value.id}</span>
                                                        </Link>
                                                        
                                                        )
                                                    })
                                                }
                                    
                                            </div>
                                        </div>
                                    )
                                } 
                                
                                
                            </form>
                     </div>


                     
                </div> 
 
                     {/* SHOPPING CART */}
                     <div className=" relative cursor-pointer flex place-items-center">
                         
                             <div className=" ">
                                     <button onClick={() => setCartVisibility(true)} >
                                         <LuShoppingCart className=" text-white"/>
                                     </button>
                             </div>
                         
                     </div>
                     <div onClick={handleNav}  className=" lg:hidden grid place-items-center  cursor-pointer ">
                        <AiOutlineMenu className=" text-[white] font-bold"/>
                     </div>
             </div>
                {/* NAVBAR FOR SMALLER SCREEN */}
            <div className={
                menuOpen ? 'fixed z-50 left-0 top-0 w-[50%] sm:w-[35%] md:w-[250px]  lg:hidden h-[600px] rounded-br-xl bg-gradient-to-br from-blue-500 to-blue-800 ease-in-out duration-500' : 'fixed  left-[-100%] top-0 p-10  ease-in-out duration-500  '
            }
            
            >

                <div className=" flex w-full items-center justify-end pt-4 pr-4">
                    <div onClick={handleNav} className=" cursor-pointer">
                        <AiOutlineClose className=" text-[25px] text-white "/>
                    </div>
                </div>

                    <nav className=" flex-col py-10 " >
                        <ul className=" px-10 text-white text-[20px] gap-5">
                            <Link href='/'>
                                <li className="hover:text-green-400 transition duration-200 ease-in-out"><span>HOME</span></li>
                            </Link>
                            <Link href='/shop'>
                                <li className="hover:text-green-400 transition duration-200 ease-in-out"><span>SHOP</span></li>
                            </Link>
                            <Link href='/pages'>
                                <div className=" absolute items-center justify-center mt-28 transition duration-500 ease-in-out">
                                    <span onClick={() => setIsOpened((back) => !back)} className=" flex  items-center pb-10 gap-3 pr-[60px] ">PAGES 
                                            {!isOpened ? (
                                                <AiOutlineCaretDown />
                                            ) : (
                                                <AiOutlineCaretUp className=" text-green-400 " />
                                            )}
                                    </span>
                                    {isOpened && (
                                        <div className=" bg-opacity-10 backdrop-filter backdrop-blur bg-green-700 shadow-md absolute p-3 right-[%] rounded-xl transition duration-500 ease-in-out">
                                            <div className=" flex flex-col text-[17px] w-[150px] items-start  ">
                                                <Link href='/pages/about' className=" hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">About</Link>
                                                <Link href='/pages/team' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">Team</Link>
                                                <Link href='/pages/cookie' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform duration-500 ease-in-out">Cookie Policy</Link>
                                                <Link href='/pages/privacy' className=" py-2 hover:bg-slate-700 w-full p-2 hover:text-white rounded-r-xl transition-transform  duration-500 ease-in-out">Privacy Policy</Link>
                                            </div>
                                        </div>
                                    )}
                                    
    
                                </div>
                            </Link>
                            <Link href='/blog'>
                                <li className="hover:text-green-400  transition duration-700 ease-in-out"><span>BLOG</span></li>
    
                            </Link>
                            <Link href='/contact'>
                                <li className="hover:text-green-400  transition duration-700 ease-in-out"><span>CONTACT</span></li>
                            </Link>
                            
                        </ul>
                    </nav>


             <div>

            </div>

            </div>
         </div>

        </div>
    
  )
}
