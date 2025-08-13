import React from 'react'
import { getServicesData } from '../data/services'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
    const data = getServicesData

  return (
    <section className=' mt-32 flex flex-col items-center'>
      <h2 className=' text-4xl text-gray-700 mt-24'>{data.heading}</h2>
      <p className=' mt-2 text-4xl font-light mb-12 text-gray-700'>{data.subHeading}</p>
      <div className=' mt-16 w-full flex flex-wrap justify-center gap-4'>
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
