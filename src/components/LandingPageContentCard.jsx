import React from 'react'
import { colors } from '../data/colors'

const LandingPageContentCard = ({ index, image }) => {

  return (
    <div className=''>
      <img className=' mt-8 md:mt-0 rounded-4xl shadow-lg hover:shadow-2xl shadow-[#faa819] hover:scale-105 ease-in-out transition-all' src={image} alt="" />
    </div>
  )
}

export default LandingPageContentCard
