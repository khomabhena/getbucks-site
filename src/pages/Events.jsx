import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import ContactUs from '../sections/ContactUs'
import { getEventsData } from '../data/events'
import PDFCard from '../components/PDFCard'
import { colors } from '../data/colors'

const Events = ({ navData }) => {
    const data = getEventsData

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className='w-full mt-16 md:mt-32 flex flex-col items-center justify-start'>
                <h1 className=' text-xl md:text-4xl xl:text-6xl font-semibold text-gray-700 text-center mt-24'>Events</h1>
                
                <div className=' w-full flex gap-4l flex-wrap mt-24 mb-48'>  
                    {
                    data?.map(({name, link}) => (
                        <PDFCard name={name} link={link} />
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
