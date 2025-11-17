import React from 'react'

const PDFCard = ({ name, link }) => {
  return (
    <a className=' basis-1 lg:basis-1/2 xl:basis-1/3 w-full px-4 bg-red-600l' href={link} target='_blank'>
        <div className=' flex justify-between w-full px-8 py-4 rounded-2xl hover:shadow-[#faa818] hover:scale-95 transition-all ease-in-out cursor-pointer shadow-lg items-center gap-4'>
            <img className=' w-12 rounded-2xl h-12 bg-[#faa818] px-1 py-1' src="./icon-docu.svg" alt="" />
            <h1 className=' text-lg w-full font-semibold'>{name}</h1>
            <img className=' w-12 rounded-2xl h-12 bg-[#faa818] px-2 py-2' src="./icon-download.svg" alt="" />
        </div>
    </a>
  )
}

export default PDFCard
