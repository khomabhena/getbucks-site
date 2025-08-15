import React from 'react'
import { getServicesData } from '../data/services'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
    const data = getServicesData

  return (
    <section className=' mt-8 flex flex-col items-center'>
      <h2 className=' text-lg md:text-4xl text-gray-700 mt-24'>{data.heading}</h2>
      <p className=' px-4 mt-2 text-sm text-center md:text-4xl font-light mb-12 text-gray-700'>{data.subHeading}</p>
      <div className=' px-2 mt-8 md:mt-16 w-full flex flex-wrap columns-3 justify-center gap-4 md:gap-8'>
          {
            data.services?.map(({ image, title, text }) => (
                <ServicesCard image={image} title={title} text={text} />
            ))
          }
      </div>
    </section>
  )
}

export default Services
