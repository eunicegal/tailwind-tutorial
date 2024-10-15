import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Second from './component/Second'
import Third from './component/Third'
import Small from './component/Small'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='px-1 sm:px-[5vw] md:px-[7vw] lg:px-[2vw] py-1' >
      <Navbar/>
      <Hero/>
      <Second/>
      <Third/>
      <Small/>
      <Footer/>
    </div>
  )
}

export default App
