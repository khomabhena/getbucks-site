import React, { useContext } from 'react'
import MobileNavigation from './MobileNavigation'
import NavigationContext from '../context/NavigationContext'
import { colors } from '../data/colors'
import Footer from '../sections/Footer'

const Container = ({ children }) => {
    const { mobileNavigation } = useContext(NavigationContext)
  return (
    <>
    <div style={{ backgroundColor: colors.backgroundColor }} className=' px-8 md:px-12 lg:px-24 xl:px-24 2xl:px-32 relative w-full min-h-screen'>
        {mobileNavigation && <MobileNavigation />}
        { children }
    </div>
    <div style={{ backgroundColor: colors.primaryColor }} className=' hiddenl px-8 md:px-12 lg:px-24 xl:px-24 2xl:px-32'>
      <Footer white={true} />
    </div>
    <div style={{ backgroundColor: "black" }} className=' hidden px-8 md:px-12 lg:px-24 xl:px-24 2xl:px-32'>
      <Footer white={true} />
    </div>

    </>
  )
}

export default Container
