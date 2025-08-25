import React from 'react'
import { colors } from '../data/colors'
import { getOurBoardData } from '../data/our-board'

const BoardMembersCard = ({title = 'Board Members', data}) => {

  return (
    <div className=' w-full flex items-center flex-col mt-12'>
        <h2 className=' text-2xl mt-12l self-start lg:self-center md:text-5xl font-medium'>{title}</h2>
        <div className=' relative w-full flex flex-wrap mt-48 min-h-screen shadow-xl rounded-2xl' style={{ backgroundColor: colors.primaryColor}}>
      
            {
              data?.map(({name, position, image, text }) => (
                  <div className=' -mt-24 mb-24 bg-red-600l px-4 basis-1/3 flex items-center flex-col minh'>
                      <img className=' w-48 h-48 rounded-xl bg-cover object-cover shadow-xl' src={image} alt={name} />
                      <h3 className=' text-xl mt-8 font-semibold'>{name}</h3>
                      <h4 className=' text-base font-semibold mt-4'>{position}</h4>
                      <p className=' text-justify text-lg min-h-[350px] px-8 mt-12'>{text}</p>
                  </div>
              ))
            }



        </div>
    </div>
  )
}

export default BoardMembersCard
