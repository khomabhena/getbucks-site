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
        <h2 className=' text-xl xl:text-3xl self-start lg:self-center font-medium'>{heading}</h2>
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

    </section>
  )
}

export default AboutUsSection
