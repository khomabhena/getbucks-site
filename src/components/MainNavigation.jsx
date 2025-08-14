import React, { useContext } from 'react'
import { colors } from '../data/colors'
import NavigationContext from '../context/NavigationContext'

const MainNavigation = ({ prefix = '' }) => {
    const {mobileNavigation, setMobileNavigation} = useContext(NavigationContext)
   const primaryColor = colors.primaryColor

  return ( 
    <nav style={{ backgroundColor: colors.backgroundColor }} className=' fixed top-0 left-0 right-0 m-auto w-full max-w-[1920px] z-20 flex justify-between items-center px-4 lg:px-24 h-16 md:h-32'>
      <a href="/">
        <img className=' cursor-pointer h-12 md:h-18 w-auto' src="/logo.png" height={'auto'}  alt="White Appletree logo" />
      </a>

      <ul className=' hidden lg:flex gap-8 text-base pr-4' style={{ color: primaryColor }}>
        <li className=' px-4 py-1 rounded-xl text-lg hover:scale-105'><a href={`${prefix}#personal`}>Personal</a></li>
        <li style={{ backgroundColor: primaryColor }} className=' text-white px-4 py-1 rounded-lg text-lg hover:scale-105'><a href={`${prefix}#business`}>Business</a></li>
        <li style={{ borderColor: primaryColor }} className=' border-3  px-4 rounded-lg text-lg hover:scale-105'><a href={`${prefix}#internet-banking`}>Internet Banking</a></li>
      </ul>

      {!mobileNavigation && <img onClick={() => {setMobileNavigation(!mobileNavigation)}} className=' lg:hidden cursor-pointer h-8 w-8' src='/menu.svg' width={'auto'} height={'24px'} alt='menu close icon'  />}
      {mobileNavigation && <img onClick={() => {setMobileNavigation(!mobileNavigation)}} className=' lg:hidden cursor-pointer h-10 w-10' src='/close.svg' width={'auto'} height={'32px'} alt='menu close icon'  />}
    </nav>
  )
}

export default MainNavigation
