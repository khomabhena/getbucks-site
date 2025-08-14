import React from 'react'
import AboutUsCard2 from '../components/AboutUsCard2'
import { getAboutData } from '../data/about-us'
import { colors } from '../data/colors'

const AboutUs2 = () => {
    const { heading } = getAboutData
    const data = getAboutData.data
  return (

    <section className=' flex flex-col px-24 w-full items-center pb-24 mt-32 justify-center'>
        <h2 className=' text-4xl font-medium'>{heading}</h2>
        <div className=' w-full flex flex-wrapl mt-12 md:gap-0 flex-col xl:flex-row justify-center'>
          {
            data?.map(({ title, subtitle, text, points }) => (
                <AboutUsCard2 title={title} subtitle={subtitle} text={text} points={points} />
            ))
          }
        </div>

        <div className=' mt-12 md:mt-24 w-full flex flex-wrap justify-center gap-8 px-8'>
            <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-lg md:text-2xl rounded-xl cursor-pointer '>Our Board</button>
            <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-lg md:text-2xl rounded-xl cursor-pointer '>Our Management</button>
        </div>

    </section>
  )
}

export default AboutUs2
