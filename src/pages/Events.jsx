import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import ContactUs from '../sections/ContactUs'
import { getEventsData } from '../data/events'

const Events = () => {
    const data = getEventsData

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={getNavigationData.investorRelations} />
            <div className='w-full mt-16 md:mt-32 flex flex-col items-center justify-start'>
                <h1 className=' text-xl md:text-4xl xl:text-6xl font-semibold text-gray-700 text-center mt-24'>Events</h1>

                <div className=' w-full flex gap-4 flex-wrap mt-24 mb-48'>  
                    {
                    data?.map(({name, link}) => (
                        <a href={link} target='_blank'>
                        <div className=' flex justify-center w-fit px-8 py-4 rounded-2xl hover:shadow-[#faa818] hover:scale-95 transition-all ease-in-out cursor-pointer shadow-lg items-center gap-4'>
                            <img className=' w-12 rounded-2xl h-12 bg-[#faa818] px-1 py-1' src="./icon-docu.svg" alt="" />
                            <h1 className=' text-lg font-semibold'>{name}</h1>
                            <img className=' w-12 rounded-2xl h-12 bg-[#faa818] px-2 py-2' src="./icon-download.svg" alt="" />
                        </div>
                        </a>
                    ))
                    }
                </div>

            </div>
            <ContactUs />
        </div>
    </Container>
  )
}

export default Events
