import React from 'react'
import Container from './Container'
import Header from '../components/Header'
import Services from '../sections/Services'
import InvestorRelations from '../sections/InvestorRelations'
import AboutUs from '../sections/AboutUs'
import GetToKnow from '../sections/GetToKnow'
import ContactUs from '../sections/ContactUs'
import AboutUs2 from '../sections/AboutUs2'

const MainContent = () => {
  return (
    <Container>
        <div className=' min-h-screen w-ful'>
            <Header />
            <Services />
            <InvestorRelations />
            <AboutUs2 />
            <GetToKnow />
            <ContactUs />
            {/*<AboutUs />*/}
        </div>
    </Container>
  )
}

export default MainContent
