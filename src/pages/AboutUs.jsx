import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import InvestorRelations from '../sections/InvestorRelations'
import GetToKnow from '../sections/GetToKnow'
import ContactUs from '../sections/ContactUs'
import AboutUsSection from '../sections/AboutUsSection'

const AboutUs = () => {
  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.aboutUs} />
            <AboutUsSection />
            <InvestorRelations />
            <GetToKnow />
            <ContactUs />
        </div>
    </Container>
  )
}

export default AboutUs
