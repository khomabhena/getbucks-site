import React from 'react'
import { colors } from '../data/colors'
import { getOurBoardData } from '../data/our-board'

const BoardMembersCard = ({title = 'Board Members', data}) => {

  return (
    <div className=' w-full flex items-center flex-col mt-12'>
        <h2 className=' text-2xl mt-12l self-start lg:self-center md:text-5xl font-medium'>{title}</h2>
        <div className=' mt-24 mb-24 w-full flex flex-wrap justify-center gap-8 px-8'>
          <a href="/board-members">
            <button style={{ backgroundColor: colors.primaryColor }} 
            className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-sm xl:text-2xl rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Our Board</button>
          </a>
          <a href="/management">
            <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-sm xl:text-2xl rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Our Management</button>
          </a>
        </div>
        <div className=' relative w-full flex flex-col xl:flex-row flex-wrap mt-48 min-h-screen rounded-2xl'>
      
            {
              data?.map(({name, position, image, text }) => (
                  <div key={name} className=' -mt-24 mb-24 lg:px-4 basis-1 xl:basis-1/3 flex items-center flex-col minh'>
                    <div style={{ backgroundColor: colors.primaryColor}} className=' hover:scale-105 hover:shadow-2xl ease-in-out transition-all mt-48 w-ful shadow-xl flex flex-col items-center py-12 lg:px-4 rounded-2xl text-gray-800'>
                      <img className=' -mt-24 lg:-mt-36 w-24 h-24 lg:w-48  lg:h-48 rounded-xl bg-cover object-cover shadow-xl' src={image} alt={name} />
                      <h3 className=' text-sm lg:text-xl mt-8 font-semibold'>{name}</h3>
                      <h4 className=' text-xs lg:text-base text-center font-semibold mt-4 px-8'>{position}</h4>
                      <p className=' text-justify text-xs lg:text-base min-h-[200px] xl:min-h-[300px] px-8 mt-12'>{text}</p>
                    </div>
                  </div>
              ))
            }

        </div>
    </div>
  )
}

export default BoardMembersCard
