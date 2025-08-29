import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import GetToKnow from '../sections/GetToKnow'
import Footer from '../sections/Footer'
import AboutUsSection from '../sections/AboutUsSection'
import { getContactData } from '../data/contact-us'

const AboutUs = () => {
  const addressData = getContactData

  useEffect(() => {
    document.title = "About Us | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.aboutUs} />
            <AboutUsSection />
            <GetToKnow />
            <div className=' flex md:flex-col xl:flex-row gap-8 justify-evenly w-full mt-54 text-lg'>
          <div className=' shadow rounded-2xl py-4 mx-4 w-full text-center basis-1 md:basis-1/2 xl:basis-1/3 mt-8 flex flex-col text-gray-700'>
              <p className=' font-semibold text-xl md:text-2xl'>{addressData.address.line1}</p>
              <p className=' mt-4'>{addressData.address.line2}</p>
              <p>{addressData.address.line3}</p>
              <p>{addressData.address.line4}</p>
          </div>

          <div className=' shadow rounded-2xl py-4 mx-4 w-full text-center basis-1 md:basis-1/2 xl:basis-1/3 mt-8 flex flex-col text-gray-700'>
              <p className=' font-semibold text-xl md:text-2xl'>{addressData.addressGweru.line1}</p>
              <p className=' mt-4'>{addressData.addressGweru.line2}</p>
              <p>{addressData.addressGweru.line3}</p>
              <p>{addressData.addressGweru.line4}</p>
          </div>

          <div className=' shadow rounded-2xl py-4 mx-4 w-full text-center basis-1 md:basis-1/2 xl:basis-1/3 mt-8 flex flex-col text-gray-700'>
              <p className=' font-semibold text-xl md:text-2xl'>{addressData.addressMasvingo.line1}</p>
              <p className=' mt-4'>{addressData.addressMasvingo.line2}</p>
              <p>{addressData.addressMasvingo.line3}</p>
              <p>{addressData.addressMasvingo.line4}</p>
          </div>
        </div>
            <Footer />
        </div>
    </Container>
  )
}

export default AboutUs
