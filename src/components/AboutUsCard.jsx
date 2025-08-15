import React from 'react'
import { colors } from '../data/colors'

const AboutUsCard = ({ title, subtitle, text, points }) => {

  return (
    <div className=' relative w-full min-h-64 mx-12'>
      <div className=' absolute -mt-6 -ml-6 top-0 left-0 w-32 h-32'>
        <img className=' w-64' src="/about/icon-01.png" alt="" />
      </div>

      <div className=' absolute right-0 bottom-0 -mb-8 -mr-6 w-32 h-32'>
        <img src="/about/icon-02.png" alt="" />
      </div>

      <div className=' pl-8 pt-8 absolute flex flex-col rounded-4xl top-0 left-0 w-full h-64 shadow-lg shadow-amber-600 bg-gradient-to-r from-gray-100 to-gray-200'>
        <h3 className=' text-xl font-semibold' style={{ color: colors.primaryColor }}>{title}</h3>
        <h4 className=' mt-3 text-lg'>"{subtitle}"</h4>
        <p className=' text-sm mt-4'>{text}</p>
        <div className=' grid grid-cols-2'>
            {
                points?.map(name => (
                        <p className=' text-lg flex basis-1/2'>&bull;{name}</p>  
                ))
            }
        </div>
      </div>

      

    </div>
    /*<div className=' relative flex flex-col basis-1/4 h-[300px] mt-24'>
        <div className=' z-10 px-16 py-14'>
            <h3 className=' text-xl font-semibold' style={{ color: colors.primaryColor }}>{title}</h3>
            <h4 className=' mt-3 text-lg'>"{subtitle}"</h4>
            <p className=' text-sm mt-4'>{text}</p>
            <div className=' grid grid-cols-2'>
            {
                points?.map(name => (
                        <p className=' flex basis-1/2'>&bull;{name}</p>  
                ))
            }
                    </div>
        </div>
        <img src={image} className=' absolute top-0 left-0 w-full h-full' alt="" />
    </div>*/
  )
}

export default AboutUsCard
