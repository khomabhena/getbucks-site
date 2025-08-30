import React, { useEffect, useState } from 'react'
import Container from './Container'
import Header from '../components/Header'
import Services from '../sections/Services'
import LandingPageContent from '../sections/LandingPageContent'
import Footer from '../sections/Footer'

const MainContent = () => {

  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container>
        <div className=' min-h-screen w-ful'>
            <Header scrollPosition={scrollPosition}  />
            <LandingPageContent />
            <Services />
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default MainContent
