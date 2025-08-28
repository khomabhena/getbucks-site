import React from 'react'
import { getServicesData } from '../data/services'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
    const data = getServicesData

  return (
    <section className=' mt-8 md:mt-24 pb-24 flex flex-col items-center'>
      <div className=' w-full justify-center flex-wrap flex'>
          {
            data.services?.map(({ image, title, text }) => (
                <ServicesCard key={title} image={image} title={title} text={text} />
            ))
          }
      </div>
    </section>
  )
}

export default Services
