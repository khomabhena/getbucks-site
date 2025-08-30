import React from 'react'

const FooterLinks = ({ white, heading, data }) => {
  return (
    <div className=' mt-8 xl:mt-0 flex flex-col justify-center items-centerp basis-1/4'>
        <div className=''>
        <p className={` text-base md:text-lg font-semibold ${ white ? ' text-gray-200' : 'text-gray-800'}`}>{heading}</p>
        <div className={` mt-4 flex flex-col gap-2 text-sm md:text-base xl:text-lg ${ white ? ' text-gray-200' : 'text-gray-700'}`}>
            {
                data?.map(({ link, text }) => (
                    <a href={link} className=' text-sm hover:underline w-fit transition-all ease-in-out flex items-center gap-4' key={link} target='_blank' rel="noreferrer">
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
