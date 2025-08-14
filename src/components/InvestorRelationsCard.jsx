import React from 'react'
import { colors } from '../data/colors'

const InvestorRelationsCard = ({ title, heading, reverse, image, text }) => {
  return (
    <section style={{ backgroundColord: colors.backgroundColor }} 
      className={` ${reverse ? 
      'rounded-xl flex flex-col lg:flex-row-reverse w-full pb-12' : 
      'rounded-xl flex flex-col lg:flex-row'} `}>

          <img className=' lg:mx-4 w-auto h-32 md:h-48 lg:h-64 self-start lg:self-center' src={image} alt={title} />

          <div className={` flex flex-col justify-center pr-2 ${ reverse ? 'lg:text-end' : ''} `}>
            <h3 style={{ borderColor: colors.primaryColor }} className={` text-xl md:text-3xl border-b-4 border-l-0 border-r-0 border-t-0 border p-2 font-medium w-fit ${ reverse ? ' text-start lg:text-end self-start lg:self-end' : ''}`}>{title}</h3>
            <h4 className={` ${heading ? '' : 'hidden'} text-lg md:text-2xl font-light mt-8`}>{heading}</h4>
            <p className=' mt-12 text-sm md:text-xl text-gray-700'>{text}</p>
          </div>

        </section>
  )
}

export default InvestorRelationsCard
