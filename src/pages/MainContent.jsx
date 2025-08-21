import React from 'react'
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
  return (
    <Container>
        <div className=' min-h-screen w-ful'>
            <Header />
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
