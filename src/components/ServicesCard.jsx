import React from 'react'
import { colors } from '../data/colors'

const ServicesCard = ({ image, title, text }) => {
  return (
    <section style={{ backgroundColor: colors.backgroundColor }} className=' rounded-xl shadow-xl basis-1/4 flex h-48 gap-8 w-full border-2 border-gray-200 '>
      <img className=' mx-4 h-16 self-center' src={image} alt={title} />
      <div className=' flex flex-col w-[350px] justify-center pr-2'>
        <h3 className=' font-bold'>{title}</h3>
        <p className=' text-sm text-gray-700'>{text}</p>
      </div>
    </section>
  )
}

export default ServicesCard
