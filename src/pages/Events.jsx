import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'

const Events = () => {
  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={getNavigationData.investorRelations} />
            <div className='w-full mt-16 md:mt-32 flex flex-row items-center justify-start'>
                <h1 className=' text-4xl md:text-6xl font-semibold'>Events Page will be up in a moment...</h1>
            </div>
        </div>
    </Container>
  )
}

export default Events
