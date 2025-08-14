import React, { useContext } from 'react'
import { colors } from '../data/colors'
import NavigationContext from '../context/NavigationContext'

const MobileNavigation = () => {
     const textColor = colors.primaryColor
    const {mobileNavigation, setMobileNavigation} = useContext(NavigationContext)
    
    const closeNavigation = () => {
        setMobileNavigation(!mobileNavigation)
    }

  return (
   <nav style={{ backgroundColor: colors.backgroundColor }} className=' lg:hidden fixed px-4 top-0 z-20 left-0 right-0 md:w-[384px] bottom-0'>

      <div className=' flex justify-between h-18 items-center'>
        <img className=' cursor-pointer h-14 md:h-18 mt-4 md:mt-8 w-auto' src="" alt="Getbucks logo" />
        <img onClick={() => {setMobileNavigation(!mobileNavigation)}} className=' cursor-pointer h-8 md:h-10' src='' alt='menu close button' width={'auto'} height={'32px'}  />
      </div>
    
      <ul className={` flex flex-col h-full mt-12 md:pl-8 items-center md:items-start gap-y-8 text-base md:text-xl lg:text-2xl`} style={{color: textColor}}>
        <li className=' px-4 py-1 rounded-xl text-lg hover:scale-105'><a onClick={() => closeNavigation()} href="#personal">Personal</a></li>
        <li style={{ backgroundColor: colors.primaryColor }} className=' text-white px-4 py-1 rounded-lg text-lg hover:scale-105'><a onClick={() => closeNavigation()} href="#business">Business</a></li>
        <li style={{ borderColor: colors.primaryColor }} className=' border-3  px-4 rounded-lg text-lg hover:scale-105'><a onClick={() => closeNavigation()} href="#internet">Internet Banking</a></li>
      </ul>

    </nav>
  )
}

export default MobileNavigation
