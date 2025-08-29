import React from 'react'

const FooterLinks = ({ heading, data }) => {
  return (
    <div className=' flex flex-col justify-center items-centerc basis-1/4'>
        <div className=''>
        <p className='text-lg font-semibold text-gray-800'>{heading}</p>
        <div className=' mt-4 flex flex-col gap-2 text-lg text-gray-700'>
            {
                data?.map(({ link, text }) => (
                    <a href={link} className=' hover:underline transition-all ease-in-out flex items-center gap-4' key={link} target='_blank' rel="noreferrer">
                        {text}
                    </a>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default FooterLinks
