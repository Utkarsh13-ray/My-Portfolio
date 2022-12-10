import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons';
export default function Achievements() {
  return (
    <><div className='text-4xl text-center my-5'>Achievements & Skills</div>
    <div className='grid grid-cols-1 md:grid-cols-2 mx-9 xl:mx-24'>
        <div className=' shadow-xl space-x-8 flex p-2 m-2   items-center ' >
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' /><p>Selected in <strong> Smart India Hackathon</strong> conducted by <strong>Government of India</strong> in March 2022(Screening round). </p>
        </div>
        
        <div className='shadow-xl flex m-4 p-5 items-center '>
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' />
             <p>Working as<strong>campus Ambassador of</strong>IIIC in<strong>IIIT Allahabad</strong> </p>
        </div>
        <div className='shadow-xl flex m-4 p-5 items-center '>
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' />
             <p><strong>4⭐</strong>in<strong>Codechef</strong> </p>
        </div>
        <div className='shadow-xl flex m-4 p-5 items-center '>
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' />
             <p><strong>5⭐</strong>in<strong>HackerRank</strong> </p>
        </div>
        <div className='shadow-xl flex m-4 p-5 items-center '>
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' />
              <p ><strong>pupil(max. rating 1200+)</strong>in coeforces</p>
        </div>
        <div className='shadow-xl flex m-4 p-5 items-center '>
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' />
             <p ><strong>MERN stack Developer and Tailwind css</strong>  </p>
        </div>
        <div className='shadow-xl flex m-4 p-5 items-center '>
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' />
             <p > <strong>Data Stuctures and ALgorithms</strong></p>
        </div>
        <div className='shadow-xl flex m-4 p-5 items-center '>
        <FontAwesomeIcon icon={faAward} size='xl' className='w-10 ml-10' />
             <p><strong>Adobe Photshop(basic)</strong> </p>
        </div>
    
    </div>

    </>
  )
}
