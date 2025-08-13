import React from 'react'
import { colors } from '../data/colors'

const Hero = () => {
    const primaryColor = colors.primaryColor

  return (
    <section className=' pt-48 lg:32 xl:pt-48 2xl:pt-56 flex flex-col gap-12 justify-center px-8 min-h-[458px] md:min-h-[524px]'>
      
        <h1 className=' text-5xl 2xl:text-6xl text-center'>
          <span className=' mx-4 text-7xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold' style={{ color: primaryColor }}>Smart Banking</span> with Instant 
          <span className=' mx-4 text-6xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold' style={{ color: primaryColor }}>Loans<br /></span> and Seamless 
          <span className=' mx-4 text-6xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold' style={{ color: primaryColor }}>Transfers</span></h1>

        <button style={{ color: primaryColor }} className=' 2xl:mt-32 pb-3 cursor-pointer rounded-2xl border-2 border-gray-200 shadow-sm shadow-gray-300 w-fit self-center px-8 py-2 text-3xl font-medium bg-gradient-to-r from-gray-100 to-gray-200'>Open an account</button>
    </section>
  )
}

export default Hero
