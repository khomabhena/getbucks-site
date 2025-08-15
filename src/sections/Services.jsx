import React from 'react'
import { getServicesData } from '../data/services'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
    const data = getServicesData

  return (
    <section className=' mt-8l flex flex-col items-center'>
      <h2 className=' text-lg md:text-3xl text-gray-700 md:mt-24'>{data.heading}</h2>
      <p className=' mt-2 text-sm text-center md:text-3xl font-light mb-12 text-gray-700'>{data.subHeading}</p>
      <div className=' w-full justify-center flex-wrap flex'>
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
