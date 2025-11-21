import React from 'react'
import { getPersonalExtraData } from '../data/accountExtraData'
import AccountHeroExtraData from './AccountHeroExtraData'

const AccountHeroLayout = ({ data, extraData }) => {

  return (
    <section className=' w-full -mt-16 md:-mt-24 xl:mt-4 mb-16 md:mb-32 min-h-screen flex flex-col px-4 md:px-0'>
      <div className=' w-full flex flex-col-reverse xl:flex-row mt-4 gap-4 md:gap-8'>
      <article className=' basis-1 xl:basis-3/5'>
        <h1 className=' text-xl md:text-2xl xl:text-4xl mt-8 md:mt-12 xl:mt-32 font-semibold text-gray-800'><span>{data.title}</span><br />{data.title2}</h1>
        <p className=' text-sm md:text-base xl:text-lg mt-4 md:mt-6 xl:mt-12 text-gray-800'>
            {data.subtitle}
        </p>
        
        <div className=' flex flex-col xl:flex-row mt-8 md:mt-12 gap-3 md:gap-4 flex-wrap'>
            {
                data?.buttons?.map((button, index) => (
                    <a key={index} href={button.link}>
                        <button className=' text-xs md:text-sm xl:text-xs cursor-pointer border-3 py-2 md:py-2.5 px-3 md:px-4 xl:px-4 rounded-2xl border-[#faa818] shadow-xl hover:scale-95 hover:shadow-[#faa818] hover:shadow-sm ease-in-out transition-all'>
                            {button.text}
                        </button>
                    </a>
                ))
            }
        </div>
        <a 
            href={data.mainButton.link || '#'} 
            target={data.mainButton.link ? "_blank" : undefined} 
            rel={data.mainButton.link ? "noopener noreferrer" : undefined} 
            onClick={(e) => {
                if (!data.mainButton.link) {
                    e.preventDefault();
                }
            }}
            className=''
        >
            <button className=' mt-8 md:mt-12 xl:mt-24 cursor-pointer bg-[#faa818] px-5 md:px-6 py-3 md:py-4 text-gray-50 rounded-2xl text-sm xl:text-sm shadow-xl hover:scale-95 hover:shadow-gray-300 hover:shadow-sm ease-in-out transition-all'>{data.mainButton.text}</button>
        </a>
        {
            data.mainButton2 && 
            <a 
                href={data.mainButton2.link || '#'} 
                target={data.mainButton2.link ? "_blank" : undefined} 
                rel={data.mainButton2.link ? "noopener noreferrer" : undefined} 
                onClick={(e) => {
                    if (!data.mainButton2.link) {
                        e.preventDefault();
                    }
                }}
                className=''
            >
                <button className=' ml-0 md:ml-4 mt-4 md:mt-8 xl:mt-24 cursor-pointer bg-[#faa818] px-5 md:px-6 py-3 md:py-4 text-gray-50 rounded-2xl text-xs md:text-sm xl:text-sm shadow-xl hover:scale-95 hover:shadow-gray-300 hover:shadow-sm ease-in-out transition-all'>{data.mainButton2.text}</button>
            </a>
        }
      </article>

      <div className=' basis-1 xl:basis-2/5 flex justify-center xl:justify-start'>
        <img 
          className=' rounded-4xl xl:mt-8 w-full max-w-xs md:max-w-sm xl:max-w-none scale-75 md:scale-80 xl:scale-100 hover:scale-95 hover:shadow-[#faa819] shadow-lg hover:shadow-2xl ease-in-out transition-all' 
          src={data.image} 
          alt={data.title || 'Account illustration'}
          loading="eager"
          decoding="async"
        />
      </div>
      </div>

      <AccountHeroExtraData data={extraData} />

    </section>
  )
}

export default AccountHeroLayout
