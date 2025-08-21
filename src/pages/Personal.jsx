import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import { getAccountHeroData } from '../data/account-hero'

const Personal = () => {
  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.personal} />
            <div className=' w-full mt-16 md:mt-32 flex flex-row items-center justify-start min-h-screen'>
              <AccountHeroLayout data={getAccountHeroData.personal} />
            </div>
        </div>
    </Container>
  )
}

export default Personal
