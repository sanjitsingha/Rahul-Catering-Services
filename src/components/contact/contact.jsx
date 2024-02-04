import React from 'react'
import ContactLeft from './contactform'
import ContactRight from './contactdetails'

const contact = () => {
  return (
    <div className='w-full pt-5 flex flex-col items-center p-4'>
        <div className='w-full flex flex-col items-center text-center'>
        <h1 className='text-[50px] md:text-[70px] font-mig text-primary-0'>Get in Touch</h1>
        <p className='text-primary-0 font-nats leading-3 text-md uppercase '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, voluptas?</p>
        </div>
        <div className='md:flex md:flex-row flex-col justify-between p-10 md:gap-20'>
            <ContactLeft />
            <ContactRight />
        </div>
    </div>
  )
}

export default contact;