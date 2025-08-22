import React from 'react'
import { colors } from '../data/colors'

const LandingPageContentCard = ({ index, image }) => {

  return (
    <div className={` relative ${index % 2 == 0 ? 'justify-start' : 'justify-end'} flex w-full h-fit mx-10l`}>

      <div style={{ backgroundColor: colors.backgroundColor}} className=' relative flex flex-col justify-center mx-10l rounded-4xl top-0 left-0 xl:w-[500px] min-h-52 shadow-lg hover:shadow-2xl shadow-[#faa819] bg-gradient-to-r from-gray-100d to-gray-200d hover:scale-104 ease-in-out transition-all'>
        <div className=' absolute -mt-5 -ml-5 md:-mt-6 md:-ml-6 top-0 left-0 w-32 h-32'>
          <img className=' w-64' src="/about/icon-01.png" alt="" />
        </div>

        <div className=' z-10 absolute right-0 bottom-0 -mb-8 -mr-5 md:-mb-8 md:-mr-6 w-32 h-32'>
          <img src="/about/icon-010.png" alt="" />
        </div>

        <img className=' rounded-4xl xl:max-h-64 object-cover h-[300px]l wfu xl:h-[300px]' src={image} />
      </div>

    </div>
  )
}

export default LandingPageContentCard
