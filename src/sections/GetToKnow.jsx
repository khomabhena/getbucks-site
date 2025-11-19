import React from 'react'
import { colors } from '../data/colors'
import { getGetToKnow } from '../data/get-to-know'

const GetToKnow = () => {
    const data = getGetToKnow
  return (
    <section className=' mt-48 pb-8 flex flex-col xl:flex-row xl:h-[500px] -mx-8 px-8 md:px-12 lg:px-24 2xl:px-32' style={{ backgroundColor: colors.primaryColor }}>
      <div className=' basis-2/5 flex justify-center'>
        <img className=' h-[350px] md:h-[700px] -mt-[100px]' src="/about/phone.png" alt="" />
      </div>
      <div className=' basis-3/5 mt-8 md:pr-8 pb-12'>
        <h3 className=' text-xl md:text-2xl font-semibold'>Get to know about us</h3>
        <p className=' text-xs xl:text-sm 2xl:text-sm mt-8'>{data.text}</p><br />
        <p className=' text-xs xl:text-sm 2xl:text-sm pb-4'>{data.text2}</p>
        <p className=' text-xs xl:text-sm 2xl:text-sm pb-4'>{data.text3}</p>
      </div>
    </section>
  )
}

export default GetToKnow
