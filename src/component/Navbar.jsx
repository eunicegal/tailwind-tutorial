import React from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
  return (
    <div className='space-y-9 bg-cover h-screen bg-custom-image bg-no-repeat'>
      <div className='flex justify-between items-center'>
      <img className='h-[4vh] lg:h-[7vh] md:h-[5vh]' src={assets.logo} alt="" />
      <button className='bg-black text-white w-[30vw] py-[6px] md:w-[30vw] md:py-[7px] md:text-2xl rounded-full lg:w-[22vw] ' >Try it free</button>

      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-center lg:justify-center lg:space-x-8 space-y-11'>
        <div className='space-y-5 flex flex-col items-center lg:items-start'>
          <h1 className='text-black md:w-[55vw] md:text-4xl font-bold lg:text-2xl lg:w-[20vw] text-3xl text-center lg:text-start' >Build the community your fan will love</h1>
          <p className='font-semibold md:w-[55vw] md:text-2xl lg:w-[35vw] text-center sm:text-start'>
            Huddles re-imagine the way we build communities.You have a voice but so does your audience.
            Create connection with your users as you engage in genuine discussions.
          </p>
          <button className='bg-pink-500 lg:w-[23vw] lg:py-[6px] md:py-[10px] md:w-[30vw] md:text-2xl rounded-full text-white w-[59vw] py-[9px] '> Get started for free</button>
        </div>

        <div>
          <img className='lg:h-[71vh] h-[35vh] md:h-[40vh]' src={assets.mockups} alt="" />
        </div>

      </div>

      
      
    </div>
  )
}

export default Navbar
