import React from 'react'
import FAQ from './faq'

const main = () => {
  return (
    <div className=' flex flex-col justify-center items-center p-8 text-center '>
        <h1 className='font-mig text-[40px] md:text-[60px] text-primary-0'>FAQ</h1>
        <p className='font-nats text-xl leading-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, repudiandae!</p>
        <div className='w-full  mt-10 md:px-60 '>
        <FAQ />
        </div>
    </div>
  )
}

export default main