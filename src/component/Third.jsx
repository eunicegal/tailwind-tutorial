import React from 'react'
import { assets } from '../assets/assets'

const Third = () => {
  return (
    <div  className='lg:px-[60px] px-[10px] py-[60px]'>
      <div className='flex  flex-col-reverse justify-center  lg:flex-row border-solid border-2 border-white-700 items-center lg:space-x-16 lg:space-y-7 lg:px-[20px] gap-10 py-[30px] px-[6px]'>
      <div className='lg:space-y-4 flex items-center lg:items-start flex-col'>
        <h1 className='lg:text-2xl font-bold'>Flowing conversion </h1>
        <p className='lg:w-[33vw] text-center lg:text-start'>
            Generate meaningful discussions with your audience
            and build strong, loyal community. Think of the insightful
            conversions you miss out on with a feedback form.
        </p>
      </div>
      <div>
        <img className='lg:h-[65vh]' src={assets.user} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Third
