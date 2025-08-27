import React from 'react'
import { getPersonalExtraData } from '../data/personalExtraData'

const AccountHeroLayout = ({ data }) => {

  return (
    <section className=' w-full -mt-24 md:-mt-32 xl:mt-4 mb-32 min-h-screenl flex flex-col'>
      <div className=' w-full flex flex-col-reverse xl:flex-row mt-4'>
      <article className=' basis-1 xl:basis-3/5'>
        <h1 className=' text-xl xl:text-5xl mt-12 xl:mt-32 font-semibold text-gray-800'><span>{data.title}</span><br />{data.title2}</h1>
        <p className=' text-sm xl:text-2xl mt-4 xl:mt-12 text-gray-800'>
            {data.subtitle}
        </p>
        
        <div className=' flex flex-coll xl:flex-row mt-12 gap-4 flex-wrap'>
            {
                data?.buttons?.map((button, index) => (
                    <a key={index} href={button.link}>
                        <button className=' text-xs xl:text-lg cursor-pointer border-3 py-2 px-2 xl:px-4 rounded-2xl border-[#faa818] shadow-xl hover:scale-95 hover:shadow-[#faa818] hover:shadow-sm ease-in-out transition-all'>
                            {button.text}
                        </button>
                    </a>
                ))
            }
        </div>
        <a href={data.mainButton.link} className=''>
            <button className=' mt-12 xl:mt-24 cursor-pointer bg-[#faa818] px-6 py-4 text-gray-50 rounded-2xl text-sm xl:text-xl shadow-xl hover:scale-95 hover:shadow-gray-300 hover:shadow-sm ease-in-out transition-all'>{data.mainButton.text}</button>
        </a>
        {
            data.mainButton2 && 
            <a href={data.mainButton2.link} className=''>
                <button className=' ml-0 md:ml-4 mt-12 xl:mt-24 cursor-pointer bg-[#faa818] px-6 py-4 text-gray-50 rounded-2xl text-sm xl:text-xl shadow-xl hover:scale-95 hover:shadow-gray-300 hover:shadow-sm ease-in-out transition-all'>{data.mainButton2.text}</button>
            </a>
        }
      </article>

      <div className=' basis-1 xl:basis-2/5'>
        <img className=' rounded-4xl xl:mt-8 scale-60 md:scale-70 xl:scale-80  hover:scale-95 hover:shadow-[#faa819] shadow-lg hover:shadow-2xl ease-in-out transition-all' src={data.image} alt="" />
      </div>
      </div>

      <div className=' w-full min-h-64 mt-24 flex flex-wrap flex-col xl:flex-row '>
        {
          getPersonalExtraData?.map(({ text, subText}) => (
            <div className=' w-full flex flex-col gap-8 min-h-32 basis-1 xl:basis-1/2'>
              <div className=' mx-8'>
                <h3 className=' mt-4 text-xl font-semibold'>{text}</h3>
                <p className=' mt-4 text-sm md:text-base'>{subText}</p>
              </div>
            </div>
          ))
        }

        <div className=' hidden bg-green-600 min-h-32 basis-1 xl:basis-1/2'></div>

      </div>
    </section>
  )
}

export default AccountHeroLayout
