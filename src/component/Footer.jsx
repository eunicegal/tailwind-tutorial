import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-zinc-800 gap-6 mt-[20px] py-[95px] px-[20px] flex flex-col lg:flex-row lg:justify-between lg:py-[69px] lg:px-[30px] lg:mt-[90px]'>
      <div>
        <img src={assets.logo} alt="" />
        <h4 className='text-white'>what ever dujj hj kd</h4>
        <p className='text-white'>099-000-222-897</p>
        <p className='text-white'>justemail.@gmail.com</p>
      </div>

      <div>
        <p className='text-white'>About us</p>
        <p className='text-white'>what we do</p>
        <p className='text-white'>faq</p>
      </div>

      <div>
         <p className='text-white'>career</p>
         <p className='text-white'>what we do</p>
         <p className='text-white'>contact us</p>
      </div>

    </div>
  )
}

export default Footer
