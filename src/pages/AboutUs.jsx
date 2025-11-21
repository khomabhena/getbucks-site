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
          <div className=' flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-8 justify-center items-center xl:justify-evenly w-full mt-16 md:mt-24 xl:mt-54 pb-12 md:pb-16 xl:pb-24 px-4 md:px-8'>
            <div className=' shadow rounded-2xl py-6 md:py-4 w-full max-w-sm md:max-w-none text-center md:basis-1/2 xl:basis-1/3 flex flex-col text-gray-700'>
                <p className=' font-semibold text-base md:text-lg'>{addressData.address.line1}</p>
                <p className=' mt-3 md:mt-4 text-sm md:text-base'>{addressData.address.line2}</p>
                <p className=' text-sm md:text-base'>{addressData.address.line3}</p>
                <p className=' text-sm md:text-base'>{addressData.address.line4}</p>
            </div>

            <div className=' shadow rounded-2xl py-6 md:py-4 w-full max-w-sm md:max-w-none text-center md:basis-1/2 xl:basis-1/3 flex flex-col text-gray-700'>
                <p className=' font-semibold text-base md:text-lg'>{addressData.addressGweru.line1}</p>
                <p className=' mt-3 md:mt-4 text-sm md:text-base'>{addressData.addressGweru.line2}</p>
                <p className=' text-sm md:text-base'>{addressData.addressGweru.line3}</p>
                <p className=' text-sm md:text-base'>{addressData.addressGweru.line4}</p>
            </div>

            <div className=' shadow rounded-2xl py-6 md:py-4 w-full max-w-sm md:max-w-none text-center md:basis-1/2 xl:basis-1/3 flex flex-col text-gray-700'>
                <p className=' font-semibold text-base md:text-lg'>{addressData.addressMasvingo.line1}</p>
                <p className=' mt-3 md:mt-4 text-sm md:text-base'>{addressData.addressMasvingo.line2}</p>
                <p className=' text-sm md:text-base'>{addressData.addressMasvingo.line3}</p>
                <p className=' text-sm md:text-base'>{addressData.addressMasvingo.line4}</p>
            </div>
          </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default AboutUs
