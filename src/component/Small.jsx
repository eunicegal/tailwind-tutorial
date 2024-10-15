import React from 'react'

const Small = () => {
  return (
    <div className='flex bg-white rounded  items-center justify-center absolute bottom-[-1830px] sm:bottom-[1890px] left-[60px] lg:absolute lg:bottom-[-1930px] lg:left-[490px]'>
      <div className='flex flex-col  items-center lg:gap-[5px] border-solid border-2 border-white-300 lg:py-[28px] lg:px-[19px] py-[13px] px-[20px] '>
        <h1 className='lg:font-bold lg:text-[20px] font-bold'>
            Ready to build your community
        </h1>
        <button className='bg-pink-500 lg:w-[15vw] lg:py-[6px] rounded-full py-[9px] px-[11px] ' >Get started for free</button>
      </div>
    </div>
  )
}

export default Small
