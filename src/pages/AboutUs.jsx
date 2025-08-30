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
          <div className=' flex md:flex-col xl:flex-row gap-8 justify-evenly w-full mt-54 pb-24 text-lg'>
            <div className=' shadow rounded-2xl py-4 mx-4 w-full text-center basis-1 md:basis-1/2 xl:basis-1/3 mt-8 flex flex-col text-gray-700'>
                <p className=' font-semibold text-sm md:text-lg'>{addressData.address.line1}</p>
                <p className=' mt-4 text-sm'>{addressData.address.line2}</p>
                <p className=' text-sm'>{addressData.address.line3}</p>
                <p className=' text-sm'>{addressData.address.line4}</p>
            </div>

            <div className=' shadow rounded-2xl py-4 mx-4 w-full text-center basis-1 md:basis-1/2 xl:basis-1/3 mt-8 flex flex-col text-gray-700'>
                <p className=' font-semibold text-sm md:text-lg'>{addressData.addressGweru.line1}</p>
                <p className=' mt-4 text-sm'>{addressData.addressGweru.line2}</p>
                <p className=' text-sm'>{addressData.addressGweru.line3}</p>
                <p className=' text-sm'>{addressData.addressGweru.line4}</p>
            </div>

            <div className=' shadow rounded-2xl py-4 mx-4 w-full text-center basis-1 md:basis-1/2 xl:basis-1/3 mt-8 flex flex-col text-gray-700'>
                <p className=' font-semibold text-sm md:text-lg'>{addressData.addressMasvingo.line1}</p>
                <p className=' mt-4 text-sm'>{addressData.addressMasvingo.line2}</p>
                <p className=' text-sm'>{addressData.addressMasvingo.line3}</p>
                <p className=' text-sm'>{addressData.addressMasvingo.line4}</p>
            </div>
          </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default AboutUs
