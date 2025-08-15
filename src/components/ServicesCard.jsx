import React from 'react'
import { colors } from '../data/colors'

const ServicesCard = ({ image, title, text }) => {
  return (
    <div className=' min-h-48 mt-12 basis-1/1 md:basis-1/2 lg:basis-1/3 px-4'>
      <div style={{ backgroundColor: colors.backgroundColor }} className=' w-full h-full flex rounded-xl shadow-lg'>

        <img className=' mx-4 w-12 md:w-16 lg:w-20 self-center' src={image} alt={title} />
        <div className=' flex flex-col pb-8 justify-center pr-2'>
          <h3 className=' text-sm md:text-lg font-bold'>{title}</h3>
          <p className=' text-sm md:text-lg text-gray-700'>{text}</p>
        </div>

      </div>
    </div>
  )

  /*<section style={{ backgroundColor: colors.backgroundColor }} className=' rounded-xl py-8 shadow-sm md:shadow-lg basis-1/4 flex md:h-48 gap-8 w-full '>
      <img className=' mx-4 w-12 md:w-16 lg:w-20 self-center' src={image} alt={title} />
      <div className=' flex flex-col pb-8 w-[350px] md:w-[400px] lg:w-[450px] justify-center pr-2'>
        <h3 className=' text-sm md:text-lg font-bold'>{title}</h3>
        <p className=' text-sm md:text-lg text-gray-700'>{text}</p>
      </div>
    </section>*/
}

export default ServicesCard
