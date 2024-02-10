import React from 'react'
import { FaBookmark } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'

const OurTeam = () => {
  return (
    <div className='bg-gray-200'>
        <div className='flex md:p-[40px] p-[20px] justify-center gap-[10px] md:gap-[50px] flex-col md:flex-row items-center md:items-start '> 
            <div className='relative '>
                <div className='absolute -top-3 left-2 text-[40px] text-primary-0'>
                <FaBookmark />
                </div>
                <img className='w-[400px] h-[450px] md:h-[550px] object-cover rounded-lg' src="https://images.unsplash.com/photo-1532498551838-b7a1cfac622e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="our team photo" />
            </div>
            <div className='md:w-1/2 text-center md:text-start'>
                <h1 className='text-primary-0 font-mig text-[60px]'>Our Team.</h1>
                <p className='font-nats text-[20px] text-primary-0 leading-6'>Rahul Singha Catering Services is more than just a culinary venture; it is a tight-knit family of passionate individuals dedicated to making every celebration a memorable and gastronomic experience. At the heart of this flourishing enterprise is a team of dynamic and hardworking individuals, each contributing their unique skills and talents to create a harmonious and efficient working environment.</p>
                <br />
                <p className='font-nats text-[20px] text-primary-0 leading-6'>Rahul Singha, the driving force behind the catering service, has carefully handpicked a group of individuals who share his vision for culinary excellence and impeccable service. The team comprises seasoned chefs, diligent servers, and meticulous event coordinators, all working in unison to transform ordinary events into extraordinary celebrations.</p>

                <div className='mt-10 bg-primary-0 md:w-[150px] h-[40px] rounded-3xl text-white font-mig text-[18px] cursor-pointer flex items-center justify-center'>
                <NavLink to={'our-team'}>
                Read More
                </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam