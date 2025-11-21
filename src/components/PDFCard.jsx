import React from 'react'

const PDFCard = ({ name, link }) => {
  return (
    <a className=' basis-full sm:basis-[calc(50%-0.5rem)] lg:basis-1/2 xl:basis-1/3 w-full px-2 md:px-4' href={link} target='_blank'>
        <div className=' flex justify-between w-full px-4 md:px-6 xl:px-8 py-3 md:py-4 rounded-2xl hover:shadow-[#faa818] hover:scale-95 transition-all ease-in-out cursor-pointer shadow-lg items-center gap-2 md:gap-4'>
            <img 
              className=' w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#faa818] px-1 py-1 flex-shrink-0' 
              src="./icon-docu.svg" 
              alt="Document icon"
              loading="lazy"
              decoding="async"
            />
            <h1 className=' text-sm md:text-base xl:text-lg w-full font-semibold text-center md:text-left'>{name}</h1>
            <img 
              className=' w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#faa818] px-2 py-2 flex-shrink-0' 
              src="./icon-download.svg" 
              alt="Download icon"
              loading="lazy"
              decoding="async"
            />
        </div>
    </a>
  )
}

export default PDFCard
