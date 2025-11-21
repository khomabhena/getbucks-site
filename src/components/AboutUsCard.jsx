import React from 'react'
import { colors } from '../data/colors'

const AboutUsCard = ({ title, subtitle, text, points }) => {

  return (
    <div className=' relative w-full min-h-48 mx-10 hover:scale-104 ease-in-out transition-all'>
      <div className=' absolute -mt-5 -ml-5 md:-mt-6 md:-ml-6 top-0 left-0 w-32 h-32'>
        <img 
          className=' w-64' 
          src="/about/icon-01.png" 
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className=' absolute right-0 bottom-0 -mb-6 -mr-4 md:-mb-8 md:-mr-6 w-32 h-32'>
        <img 
          src="/about/icon-02.png" 
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className=' pl-6 pr-6 pt-6 absolute flex flex-col rounded-4xl top-0 left-0 w-full min-h-48 shadow-lg hover:shadow-2xl shadow-[#faa819] bg-gradient-to-r from-[#f7f2ec] to-gray-100'>
        <h3 className=' text-lg font-semibold' style={{ color: colors.primaryColor }}>{title}</h3>
        <h4 className=' mt-3 text-base'>"{subtitle}"</h4>
        <p className=' text-xs md:text-xs mt-4'>{text}</p>
        <div className=' grid grid-cols-2'>
            {
                points?.map(name => (
                        <p key={name} className=' text-xs md:text-sm flex basis-1/2'>&bull;{name}</p>  
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
