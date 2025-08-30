import React from 'react'
import { colors } from '../data/colors'

const Hero = () => {
    const primaryColor = colors.primaryColor

  return (
    <section className=' pt-8 lg:32 xl:pt-48 2xl:pt-56 flex flex-col gap-12 justify-center px-8 min-h-[400px] md:min-h-[524px]'>
      
        <h1 className=' ease-in-out md:pt-32 lg:pt-32 text-xl md:text-2xl 2xl:text-2xl text-slate-500 font-semibold text-center'>
          <span className=' text-2xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-7xl font-bold' 
          >Smart with <span style={{ color: primaryColor }}>Money</span></span><br /><br />
          <span className=' text-sm md:text-lg hidden'>Next-Gen Banking - Little bank, Innovative to the Core</span>
          <span className=' text-sm md:text-lg'>Game-Changing Banking - Little bank - Tech-Savvy</span>
        </h1>

        <a className=' self-center' href="/open-account">
          <button style={{ color: primaryColor }} 
            className=' lg:mt-24 2xl:mt-24 md:pb-3 cursor-pointer rounded-2xl border-1 md:border-2 border-gray-200 shadow-lg shadow-[#faa819]l w-fit self-center px-8 py-2 lg:py-4 text-sm md:text-xl lg:text-xl font-medium bg-gradient-to-r from-gray-100 to-gray-200 hover:scale-95 shadow-[#faa819] hover:shadow-gray-400 hover:shadow-sm ease-in-out transition-all'>Open an account</button>
        </a>

    </section>
  )
}

export default Hero
