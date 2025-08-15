import React from 'react'
import { colors } from '../data/colors'

const Hero = () => {
    const primaryColor = colors.primaryColor

  return (
    <section className=' pt-8 lg:32 xl:pt-48 2xl:pt-56 flex flex-col gap-12 justify-center px-8 min-h-[400px] md:min-h-[524px]'>
      
        <h1 className=' ease-in-out md:pt-32 lg:pt-32 text-xl md:text-3xl 2xl:text-6xl text-center'>
          <span className=' text-2xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold' style={{ color: primaryColor }}>Smart with</span> <br className=' hidden md:invisible lg:invisible' />
          <span className=' text-2xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold' style={{ color: primaryColor }}>Money<br className=' hidden md:visible lg:block' /></span> Next-Gen Banking - Little bank, Big Love 
          <span className=' mx-2 md:mx-4 text-2xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-bold' style={{ color: primaryColor }}></span></h1>

        <button style={{ color: primaryColor }} className=' lmt-8 lg:mt-24 2xl:mt-24 md:pb-3 cursor-pointer rounded-2xl border-1 md:border-2 border-gray-200 shadow-sm shadow-gray-300 w-fit self-center px-8 py-2 lg:py-4 text-base md:text-2xl lg:text-4xl font-medium bg-gradient-to-r from-gray-100 to-gray-200'>Open an account</button>

    </section>
  )
}

export default Hero
