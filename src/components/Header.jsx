import React from 'react'
import MainNavigation from './MainNavigation'
import Hero from './Hero'
import { getNavigationData } from '../data/navigation'

const Header = ({ scrollPosition }) => {
  return (
    <header id='hero' className=''>
        <MainNavigation scrollPosition={scrollPosition} data={getNavigationData.landingPage} />
        <Hero />
    </header>
  )
}

export default Header
