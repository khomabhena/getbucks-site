import React from 'react'

const AccountHeroExtraData = ({ data }) => {
  return (
    <div className=' w-full min-h-64 mt-24 flex flex-wrap '>
        {
            data?.map(({ text, subText}) => (
            <div key={text} className=' w-full flex flex-col gap-8 min-h-32 basis-full xl:basis-1/2'>
                <div className=' mx-8'>
                <h3 className=' mt-4 text-xl font-semibold'>{text}</h3>
                <p className=' mt-4 text-sm md:text-base'>{subText}</p>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default AccountHeroExtraData
