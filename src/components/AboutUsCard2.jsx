import React from 'react'
import { colors } from '../data/colors'

const AboutUsCard2 = ({ title, subtitle, text, points }) => {
  return (
    <div className=' basis-full md:basis-1/2 lg:basis-1/3 md:min-h-[350px] h-fit flex justify-center items-center my-2 mx-2'>

      <div className=' relative w-full min-w-[300px] md:w-[400px] lg:w-[400px] xl:w-[400px] min-h-[250px] md:min-h-[250px] rounded-4xl shadow-lg shadow-[#faa819] bg-gradient-to-r from-gray-100 to-gray-200 pb-8'>
        <img className=' hidden lg:block w-32 absolute -mt-8 -ml-8 top-0 left-0' src="/about/icon-01.png" alt="" />
        <img className=' hidden lg:blockk w-32 absolute -mb-8 -mr-8 bottom-0 right-0' src="/about/icon-02.png" alt="" />
        <div className=' absolute top-0 left-0 flex flex-col px-8 py-4'>
            <h3 className=' text-2xl md:text-3xl font-semibold' style={{ color: colors.primaryColor }}>{title}</h3>
            <h4 className=' mt-3 text-lg md:text-xl'>"{subtitle}"</h4>
            <p className=' text-sm md:text-lg mt-4'>{text}</p>
            <div className=' grid grid-cols-2'>
                {
                    points?.map(name => (
                            <p className=' text-sm md:text-lg flex basis-1/2'>&bull;{name}</p>  
                    ))
                }
            </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUsCard2
