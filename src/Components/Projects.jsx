import React from 'react'
import './Project.css'
import portfolio from './portfolio.png'
import colorPicker from './colorPicker.png'
import stadium from './stadium.png'
import SSY from './SSY.png'

export default function Projects() {
       
  return (
    <div id='project'>
        <div className='text-4xl text-center '>PROJECTS</div>
    <div className='flex justify-center items-center flex-col'>
      <div className='text-2xl mt-5'>Stadium Ticket booking portal</div>
        <div className='flex flex-col bg-gray-300 max-w-7xl m-12  lg:flex-row p-4 rounded-lg items-center justify-center'>

            <div className='flex justify-center mx-5 sm:mx-10  '>
                <img className=''src={stadium} alt="please reload" />
            </div>
            <div className=' text-lg lg:text-xl mx-10 sm:mx-10 mt-2'>
            <p><strong>Stadium ticket booking portal is fully responsive web application</strong><br />
                       Users can book/cancel thier tickets of different sports matches.
                    <br/>Techonolgies used: <br/> Frontend :Reactjs,Tailwind Css,Nodejs,ExpressJs and MongoDB</p> 
                      
                    <div className='flex space-x-4 mt-4'>
                    <div className="block button "><a href="https://stadium-ticket-booking.netlify.app/">Demo</a></div>
                    <div className="block button "><a href="https://github.com/Utkarsh13-ray/Stadium-ticket-booking">Code</a></div>
                    </div>
            </div>

        </div> 
      <div className='text-2xl mt-5'>Self Portfolio</div>
        <div className='flex flex-col bg-gray-300 max-w-7xl m-12  lg:flex-row p-4 rounded-lg items-center justify-center'>

            <div className='flex justify-center mx-5 sm:mx-10  '>
                <img className=''src={portfolio} alt="please reload" />
            </div>
            <div className=' text-lg lg:text-xl mx-10 sm:mx-10 mt-2'>
            <p><strong> My Self Portfolio is fully responsive web application</strong><br />
                    consists of details about my education,projects,contact etc.
                    <br/>Techonolgies used: Reactjs and Tailwind CSS</p> 
                      
                    <div className='flex space-x-4 mt-4'>
                    <div className="block button "><a href="/">Demo</a></div>
                    <div className="block button "><a href="https://github.com/Utkarsh13-ray/Portfolio">Code</a></div>
                    </div>
            </div>

        </div> 
      <div className='text-2xl'>Color GO</div>
        <div className='flex flex-col bg-gray-300 max-w-7xl m-12  lg:flex-row-reverse p-4 rounded-lg items-center justify-center'>

            <div className='flex justify-center mx-5 sm:mx-10 '>
                <img className=''src={colorPicker} alt="please reload"/>
            </div>
            <div className=' text-lg lg:text-xl mx-10 sm:mx-10 mt-2'>
            <p><strong>Color-GO  (Color Picker Eyedropper)</strong>
               You can pick color with help of eyedropper and copy the rgb,hsl and hex codes of any color.
                    <br/>Techonolgies used: HTML,CSS and JavaSript</p>
                    <div className='flex space-x-4 mt-4'>
                    <div className="block button "><a href="https://color-go.netlify.app">Demo </a></div>
                    <div className="block button "><a href="https://github.com/Utkarsh13-ray/Color-Go">Code</a></div>
                    </div>
            </div>

        </div> 
      <div className='text-2xl'>SSGYP</div>
        <div className='flex flex-col bg-gray-300 max-w-7xl m-12  lg:flex-row p-4 rounded-lg items-center justify-center'>

            <div className='flex justify-center mx-5 sm:mx-10'>
                <img className=''src={SSY} alt="please reload" />
            </div>
            <div className=' text-lg lg:text-xl mx-10 sm:mx-10 mt-2'>
            <p> <strong>SSGYP(Sarvya Sanyukt Gramin Yojana Portal)</strong> <br /> A prototype websolution of less knowledge of villagers about government policies .
                    <br/>Techonolgies used: HTML,CSS and JavaSript
                    <br />
                    Team project selected in SIH March 2022 in screening round </p> 
                    <div className='flex space-x-4 mt-4'>
                    <div className=" block button-disabled "><a href="/" >Demo</a></div>
                    <div className="block button "><a href="https://github.com/Utkarsh13-ray/SSGY-Me">Code</a></div>
                    </div>
            </div>
        </div> 
    </div>
          
    </div>
  )
}
