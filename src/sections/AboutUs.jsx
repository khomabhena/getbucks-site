import React from 'react'
import AboutUsCard from '../components/AboutUsCard'
import { getAboutData } from '../data/about-us'
import { colors } from '../data/colors'

const AboutUs = () => {
    const {heading, image} = getAboutData
    const data = getAboutData.data

  return (
    <section className=' flex flex-col items-center mb-24 mt-24 justify-center'>
        <h2 className=' text-4xl self-start lg:self-center font-medium'>{heading}</h2>
        <div className=' w-full min-h-48 lmt-24 flex flex-wrap justify-center'>

          {
            data?.map(({title, subtitle, text, points}) => (
            <div className=' mt-24 w-full h-auto flex justify-center items-center 
            basis-1/1 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/3'>
              <AboutUsCard title={title} image={image} subtitle={subtitle} text={text} points={points} />
            </div> 
            ))
           }
        </div>

        <div className=' mt-24 w-full flex flex-wrap justify-center gap-8 px-8'>
           <button style={{ backgroundColor: colors.primaryColor }} 
            className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-2xl rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Our Board</button>
           <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-2xl rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Our Management</button>
        </div>

    </section>
  )
}

export default AboutUs
