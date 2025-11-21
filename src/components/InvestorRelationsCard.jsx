import React from 'react'
import { colors } from '../data/colors'

const InvestorRelationsCard = ({ title, heading, reverse, buttonLink, image, text, buttonName }) => {
  return (
    <section style={{ backgroundColord: colors.backgroundColor }} 
      className={` ${reverse ? 
      'rounded-xl flex flex-col md:gap-4 md:flex-row xl:flex-row-reverse w-full pb-12' : 
      'rounded-xl flex flex-col md:gap-4 md:flex-row'} `}>

          <img 
            className=' lg:mx-4 w-auto h-32 md:h-36 xl:h-48 self-start lg:self-center' 
            src={image} 
            alt={title}
            loading="lazy"
            decoding="async"
          />

          <div className={` flex flex-col justify-start pr-2 ${ reverse ? 'xl:text-end' : ''} `}>
            <h3 style={{ borderColor: colors.primaryColor }} className={` text-xl md:text-xl border-b-4 border-l-0 border-r-0 border-t-0 border p-2 font-medium w-fit ${ reverse ? ' text-start xl:text-end self-start xl:self-end' : ''}`}>{title}</h3>
            <h4 className={` ${heading ? '' : 'hidden'} text-sm md:text-base font-light mt-2`}>{heading}</h4>
            <p className=' mt-6 text-sm md:text-xs text-gray-700'>{text}</p>
            <a href={buttonLink}>
              <button className={` ${ reverse ? ' self-end' : ' self-start'} font-semibold px-8 py-2 text-xs rounded-3xl mt-4 shadow-lg hover:scale-95 transition-all ease-in-out cursor-pointer`} style={{ backgroundColor: colors.primaryColor}}>{buttonName}</button>
            </a>
          </div>

        </section>
  )
}

export default InvestorRelationsCard
