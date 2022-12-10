import React from 'react'
import inst from './iig.png'
import git from './gglogo.png'
import link from './link.png'
import mail from './b.png'
import self from './selfimg.jpeg'
export default function About() {
  return (
    <div id='about'>
    <div className='text-4xl text-center my-10'>And, this is ME</div>
    <div className='flex  items-center justify-center  relative'>
    <div className='flex flex-col max-w-xs group shadow-lg shadow-purple-500/50'>
        <div className="p-4"><img src={self} alt=""  className='h-72 group-hover:opacity-60'/></div>
        <div className='m-4 text-center text-2xl font-semibold'>Utkarsh Dwivedi</div>
        <div className='flex justify-center space-x-2 items-center'>
        <div className='line inline-block h-0.5 w-4 bg-orange-400'></div>
        <div className='line inline-block h-2 w-2 bg-orange-400 rounded-full'></div>
        <div className='line inline-block h-0.5 w-4 bg-orange-400'></div>
        </div>
        <div className='my-5 text-center text-lg text-bold leading-6'>
        <div>2020UGCS032R</div>
        <div>B-Tech(CSE)</div>
        <div>IIIT Ranchi</div>
        </div>
        <div className='absolute space-y-6 mt-12'>
          <div className='h-10 w-10  bg-yellow-400 opacity-0 rounded-lg shadow-xl transfrom group-hover:opacity-100 group-hover:translate-x-64 transition ease-in-out duration-700'><a href="https://www.instagram.com/utkarsh_dwivedi13/" target="_blank" rel='noreferrer'><img src={inst} alt="" /></a></div>
          <div className='h-10 w-10 bg-yellow-400 opacity-0 rounded-lg shadow-xl transfrom group-hover:opacity-100 group-hover:translate-x-64 transition ease-in-out duration-700 delay-100'><a href="https://www.linkedin.com/in/utkarsh-dwivedi-735966200/" target="_blank" rel='noreferrer'><img src={link} alt="" /></a></div>
          <div className='h-10 w-10 bg-yellow-400 opacity-0 rounded-lg shadow-xl transfrom group-hover:opacity-100 group-hover:translate-x-64 transition ease-in-out duration-700 delay-200'><a href="https://github.com/Utkarsh13-rayhttps://github.com/Utkarsh13-ray" target="_blank" rel='noreferrer'><img src={git} alt="" /></a></div>
          <div className='h-10 w-10 bg-yellow-400 opacity-0 rounded-lg shadow-xl transfrom group-hover:opacity-100 group-hover:translate-x-64 transition ease-in-out duration-700 delay-300'><a href="mailto:utkarshdwivedi130903@gmail.com" target="_blank" rel='noreferrer'><img src={mail} alt="" /></a></div>
          </div>
    </div>
    </div>


    
    </div>
  )
}
