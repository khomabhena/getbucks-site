import React from 'react'
import LandingPageContentCard from '../components/LandingPageContentCard'
import { getLandingPageContent } from '../data/landing-page-content'

const LandingPageContent = ({  }) => {
  const { heading, subHeading } = getLandingPageContent
  const data = getLandingPageContent.data

  return (
    <section className='mt-8 md:mt-24 flex flex-col items-center'>
      <h2 className=' text-lg md:text-3xl text-gray-700 md:mt-24'>{heading}</h2>
      <p className=' mb-48 mt-2 text-sm text-center md:text-3xl font-light text-gray-700'>{subHeading}</p>
      
      {
        data?.map(({ index, image, title, description }) => (
          
          <div className={` ${index % 2 == 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'} flex flex-col items-center justify-between gap-12 xl:gap-24 mt-12`}>
            
            <section className=' flex flex-col basis-1 md:basis-2/4 xl:px-12'>
              <h2 className=' text-3xl font-semibold'>{title}</h2>
              <p className=' text-gray-700 mt-6'>{description}</p>
            </section>

            <div className=' basis-1 md:basis-2/4 xl:pl-12'>
              <LandingPageContentCard image={image} />
            </div>

          </div>

        ))
      }
    </section>
  )
}

export default LandingPageContent
