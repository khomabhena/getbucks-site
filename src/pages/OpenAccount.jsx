import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'

const OpenAccount = () => {
  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={getNavigationData.landingPage} />
        </div>
    </Container>
  )
}

export default OpenAccount
