import React, { useEffect, useState } from 'react'
import Container from './Container'
import Header from '../components/Header'
import Services from '../sections/Services'
import InvestorRelations from '../sections/InvestorRelations'
import AboutUsSection from '../sections/AboutUsSection'
import GetToKnow from '../sections/GetToKnow'
import ContactUs from '../sections/ContactUs'
import AboutUs2 from '../sections/AboutUs2'
import LandingPageContent from '../sections/LandingPageContent'

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
            {/*<InvestorRelations />
            <AboutUs />
            <GetToKnow />
            <ContactUs />
            <AboutUsSection />*/}
        </div>
    </Container>
  )
}

export default MainContent
