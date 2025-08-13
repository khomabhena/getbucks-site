import React, { useContext } from 'react'
import MobileNavigation from './MobileNavigation'
import NavigationContext from '../context/NavigationContext'
import { colors } from '../data/colors'

const Container = ({ children }) => {
    const { mobileNavigation } = useContext(NavigationContext)
  return (
    <div style={{ backgroundColor: colors.backgroundColor }} className=' relative w-full min-h-screen'>
        {mobileNavigation && <MobileNavigation />}
        { children }
    </div>
  )
}

export default Container
