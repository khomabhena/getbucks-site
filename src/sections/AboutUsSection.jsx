import React from 'react'
import AboutUsCard from '../components/AboutUsCard'
import { getAboutData } from '../data/about-us'
import { colors } from '../data/colors'
import { getContactData } from '../data/contact-us'

const AboutUsSection = () => {
    const {heading, image} = getAboutData
    const data = getAboutData.data
    const addressData = getContactData

  return (
    <section className=' flex flex-col items-center pb-24 pt-48 justify-center'>
        <h2 className=' text-2xl xl:text-4xl self-start lg:self-center font-medium'>{heading}</h2>
        <div className=' w-full min-h-48 lmt-24 flex flex-wrap justify-center'>

          {
            data?.map(({title, subtitle, text, points}) => (
            <div className=' mt-24 w-full h-auto flex justify-center items-center 
            basis-1/1 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/3'>
              <AboutUsCard title={title} image={image} subtitle={subtitle} text={text} points={points} />
            </div> 
            ))
           }
        </div>

        <div className=' flex gap-8 justify-evenly w-full mt-48 text-lg'>
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

    </section>
  )
}

export default AboutUsSection
