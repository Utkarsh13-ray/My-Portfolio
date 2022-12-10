

import React, { useState } from 'react'
import {IonIcon} from "react-ion-icon";
const Navbar = () => {
    let [open,setOpen]=useState(false);
  return (
    <div className=' shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        </span>
       Utkarsh Dwivedi
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <IonIcon name={open ? 'close':'menu'} />
    
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
       
          <li  className='m md:ml-8 text-xl md:my-0 my-7'>
              <a href="#home" smooth className='text-gray-800 duration-500 hover:text-yellow-400' >Home</a>
            </li>
          <li  className='md:ml-8 text-xl md:my-0 my-7'>
              <a href="#project" smooth className='text-gray-800 duration-500 hover:text-yellow-400' >Project</a>
            </li>
          <li  className=' md:ml-8 text-xl md:my-0 my-7'>
              <a href="#about" smooth className='text-gray-800 duration-500 hover:text-yellow-400'>About</a>
            </li>
          <li  className=' md:ml-8 text-xl md:my-0 my-7'>
              <a href="#education" smooth className='text-gray-800 duration-500 hover:text-yellow-400'>Education</a>
            </li>
          <li  className='md:hidden md:ml-8 text-xl md:my-0 my-7'>
              <a href="#contact" smooth className='text-gray-800 duration-500 hover:text-yellow-400'>Contact</a>
            </li>
          <li className="hidden md:block button mx-5 "><a href="/contact" smooth >Contact </a></li>
          
          </ul>
      </div>
    </div>
  )
} 

export default Navbar