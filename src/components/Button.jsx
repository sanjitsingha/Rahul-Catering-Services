import React from 'react'

const Button = ({btnName}) => {
  return (
    <div className='bg-[#06502B] font-nats text-xl rounded-3xl cursor-pointer text-white w-[160px] px-3 py-2 flex justify-center'>{btnName}</div>
  )
}

export default Button