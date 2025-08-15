import React, { useContext } from 'react'
import MobileNavigation from './MobileNavigation'
import NavigationContext from '../context/NavigationContext'
import { colors } from '../data/colors'

const Container = ({ children }) => {
    const { mobileNavigation } = useContext(NavigationContext)
  return (
    <div style={{ backgroundColor: colors.backgroundColor }} className=' px-8 md:px-12 lg:px-24 xl:px-24 2xl:px-32 relative w-full min-h-screen'>
        {mobileNavigation && <MobileNavigation />}
        { children }
    </div>
  )
}

export default Container
