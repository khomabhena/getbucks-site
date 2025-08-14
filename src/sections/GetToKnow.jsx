import React from 'react'
import { colors } from '../data/colors'
import { getGetToKnow } from '../data/get-to-know'

const GetToKnow = () => {
    const data = getGetToKnow
  return (
    <section className=' mt-48 pb-8 flex flex-col lg:flex-row xl:h-[500px] px-12' style={{ backgroundColor: colors.primaryColor }}>
      <div className=' basis-2/5 flex justify-center'>
        <img className=' md:h-[700px] -mt-[100px]' src="/about/phone.png" alt="" />
      </div>
      <div className=' basis-3/5 mt-12 md:pr-12'>
        <h3 className=' text-xl md:text-3xl font-semibold'>Get to know about US</h3>
        <p className=' text-sm md:text-lg mt-8'>{data.text}</p><br />
        <p className=' text-sm md:text-lg'>{data.text2}</p>
      </div>
    </section>
  )
}

export default GetToKnow
