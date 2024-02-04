import React from 'react'
import {NavLink} from 'react-router-dom'

const anmatedBtn = () => {
  return (
   <div className='bg-[#155e3a] text-white font-nats text-[20px] px-3 py-1 rounded-2xl   border-white/60'>
    <NavLink to={'contact'} className={``}>Contact Now</NavLink>
   </div>
  )
}

export default anmatedBtn