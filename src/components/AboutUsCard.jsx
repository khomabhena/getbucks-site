import React from 'react'
import { colors } from '../data/colors'

const AboutUsCard = ({ image, title, subtitle, text, points }) => {

  return (
    <div className=' relative flex flex-col basis-1/4 h-[300px] mt-24'>
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
    </div>
  )
}

export default AboutUsCard
