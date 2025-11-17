import React from 'react'
import { colors } from '../data/colors'

const PolicyContainer = ({ children, title }) => {
    
  return (
    <div className=' text-gray-900 min-h-screen w-full'>
      <nav className=' flex- hidden top-0 left-0 right-0 bg-black m-auto max-w-[1080px] z-20 justify-between items-center md:px-4 h-18'>
          <a href="/">
            <img className=' cursor-pointer h-14 md:h-18 mt-4 md:mt-8 w-auto' src="/appletree-payments-logo-white.png"  alt="White Appletree logo" />
          </a>

          <ul className=' text-lg md:text-2xl font-bold lg:flex gap-8 pr-4' style={{ color: colors.primary }}>
            <li className=' hover:text-green-800 hover:scale-105'><a href="/">{ title }</a></li>
          </ul>
      </nav>
      <section className=' px-4 mx-auto mt-8 mb-24 min-h-screen max-w-[1080px]'>
        { children }
      </section>
    </div>
  )
}

export default PolicyContainer
