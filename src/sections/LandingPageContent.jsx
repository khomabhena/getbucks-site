import React from 'react'
import { getLandingPageContent } from '../data/landing-page-content'
import LandingPageContentCard from '../components/LandingPageContentCard'

const LandingPageContent = ({  }) => {
  const { heading, subHeading } = getLandingPageContent
  const data = getLandingPageContent.data

  return (
    <section className='mt-8 md:mt-24 flex flex-col gap-4 items-center'>
      <h2 className=' text-lg md:text-3xl text-gray-700 md:mt-24'>{heading}</h2>
      <p className=' mb-48 mt-2 text-sm text-center md:text-3xl font-light text-gray-700'>{subHeading}</p>
      {
        data?.map(({ index, image, title, description}) => (

          <div key={index + title} className={` ${index % 2 == 0 ? 'md:flex-row-reverse': 'md:flex-row'} gap-8 mt-12 min-h-32 w-full flex flex-col md:flex-row items-center flex-wrapp`}>  

            <div className=' basis-1 md:basis-3/5'>
              <section className={` md:mt-0 flex flex-col basis-1 md:basis-3/5 xl:px-12`}>
                <h2 className=' text-lg xl:text-2xl font-semibold'>{title}</h2>
                <p className=' text-xs xl:text-sm  text-gray-700 mt-4'>{description}</p>
              </section>
            </div>
            
            <div className=' basis-1 self-center md:basis-2/5'>
              <LandingPageContentCard index={index} image={image} />
            </div>

          </div>

        ))
      }
      

    </section>
  )
}

export default LandingPageContent
