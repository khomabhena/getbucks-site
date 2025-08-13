import React from 'react'
import { colors } from '../data/colors'

const InvestorRelationsCard = ({ title, heading, reverse, image, text }) => {
  return (
    <section style={{ backgroundColor: colors.backgroundColor }} className={` ${reverse ? 'rounded-xl shadow-lg flex flex-row-reverse w-full pb-12' : 'rounded-xl shadow-lg flex flex-row pb-12'} `}>
          <img className=' mx-4 w-auto h-86 self-center' src={image} alt={title} />
          <div className={` flex flex-col justify-center pr-2 ${ reverse ? 'text-end' : ''} `}>
            <h3 style={{ borderColor: colors.primaryColor }} className={` text-3xl border-b-4 border-l-0 border-r-0 border-t-0 border p-2 font-medium w-fit ${ reverse ? 'text-end self-end' : ''}`}>{title}</h3>
            <h4 className=' text-2xl font-light mt-8'>{heading}</h4>
            <p className=' mt-12 text-xl text-gray-700'>{text}</p>
          </div>
        </section>
  )
}

export default InvestorRelationsCard
