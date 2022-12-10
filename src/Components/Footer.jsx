import React from 'react'
import logo from './cl.png'
import mail from './emailb.png'
import location from './location.png'
import lin from './lin.png'
import gfg from './Gfg.png'
import lc from './lc.png'
import cc from './cc.png'
import gh from './githubpng.png'
export default function Footer() {
  return (
    <div id='contact'>
    <div className='flex flex-col lg:flex-row  mt-4  w-80 sm:w-4/6 mx-auto p-2 sm:p-6 lg:p-8 bg-yellow-400 justify-center items-center space-x-10 rounded-xl' >
      <div className='flex flex-col sm:w-96 text-center justify-center lg:w-2/5 text-white  sm:text-lg xl:text-2xl'>
        <div className='sm:text-xl xl:text-3xl font-bold'>Utkarsh Dwivedi | 2020UGCS032R</div>
        <div className='line h-0.5 w-full'></div>
        <div>I am a full Stack Web Developer and Programmer."Either writing code with bugs, destroying my laptop, or trying to complete 4 months of syllabus in one week unsuccessfully with music:)"</div>
      </div>
      <div className="aspect-w-16  aspect-h-9 mt-4 pr-8">
        <iframe title='video' className='sm:h-72 sm:w-96 ' src="https://www.youtube.com/embed/zUlsrv5d5AM?start=10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    </div>
    <div className='flex my-28  flex-col lg:flex-row space-x-6 space-y-8 justify-center items-center'>

      <div className='flex flex-col justify-center pl-12'>
        <div className='w-64 h-64'><img src={logo} alt="" /></div>
        <div className='text-yellow-500 text-4xl'>Utkarsh Dwivedi</div>
        <div className='italic'>2020UGCS032R</div>
        <div className='font-semibold text-md'>Indian Institute of Information Technology Ranchi</div>
        <div className='font-semibold text-md'>JUPMI Campus,HEC Dhurwa,Ranchi, India</div>
      </div>
      <div className='flex flex-col justify-center item-center align-middle pl-12'>
        <div className='text-yellow-500 text-4xl'>Contact</div>
  
        <div className='flex  items-center'>
        <div className='w-12 h-12'><img src={mail} alt="" /></div>
        <div className='italic font-semibold text-lg hover:underline'><a href="mailto:utkarshdwivedi130903@gmail.com">@utkarshdwivedi</a></div>
        </div>
        <div className='flex justify-center  w-80'>
        <div className='w-40 h-12'><img src={location} alt="" /></div>
        <div className='font-semibold text-sm text-yellow-500'>Room No.402 Boys Hostel-2,Indian Institute of Information Technology (IIIT) Ranchi, JUPMI Campus, HEC,Dhurwa, Ranchi, Jharkhand 834010,India</div>
        </div>
       
       
      </div>
      <div className='flex flex-col justify-center space-y-4 ml-'>
        <div className='text-yellow-500 text-4xl my-4'>Find Out Me</div>
  
        <div className='flex  items-center space-x-2'>
        <div className='w-10 h-10'><img src={lin} alt="" /></div>
        <div className='italic font-semibold text-lg hover:underline'><a href="https://www.linkedin.com/in/utkarsh-dwivedi-735966200/">Linkedin</a></div>
        </div>
        <div className='flex  items-center space-x-2'>
        <div className='w-10 h-10'><img src={gh} alt="" /></div>
        <div className='italic font-semibold text-lg hover:underline'><a href="https://github.com/Utkarsh13-ray">Github</a></div>
        </div>
  
        <div className='flex  items-center space-x-2'>
        <div className='w-10 h-10 pt-3'><img src={gfg} alt="" /></div>
        <div className='italic font-semibold text-lg hover:underline'><a href="https://auth.geeksforgeeks.org/user/utkarshdwivedi130903/profile">GeeksfofGeeks</a></div>
        </div>
  
  
        <div className='flex  items-center space-x-2'>
        <div className='w-10 h-10'><img src={cc} alt="" /></div>
        <div className='italic font-semibold text-lg hover:underline'><a href="https://www.codechef.com/users/utkarshd13">CodeChef</a></div>
        </div>
        <div className='flex  items-center space-x-2'>
        <div className='w-10 h-10'><img src={lc} alt="" /></div>
        <div className='italic font-semibold text-lg hover:underline'><a href="https://leetcode.com/utkarshdwivedi130903/">Leetcode</a></div>
        </div>
  
       
       
      </div>
    </div>
    </div>
  )
}
