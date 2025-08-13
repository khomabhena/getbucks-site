import React from 'react'
import AboutUsCard from '../components/AboutUsCard'
import { getAboutData } from '../data/about-us'
import { colors } from '../data/colors'

const AboutUs = () => {
    const {heading, image} = getAboutData
    const data = getAboutData.data

  return (
    <section className=' flex flex-col items-center mb-24 mt-32 justify-center'>
        <h2 className=' text-5xl font-medium'>{heading}</h2>
        <div className=' w-full flex flex-wrap justify-center gap-8 px-8'>
           {
            data?.map(({title, subtitle, text, points}) => (
                <AboutUsCard title={title} image={image} subtitle={subtitle} text={text} points={points} />
            ))
           }
        </div>
        <div className=' mt-24 w-full flex flex-wrap justify-center gap-8 px-8'>
           <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-3xl rounded-xl cursor-pointer '>Our Board</button>
           <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-3xl rounded-xl cursor-pointer '>Our Management</button>
        </div>
    </section>
  )
}

export default AboutUs
