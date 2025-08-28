import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import { getAccountHeroData } from '../data/account-hero'
import ContactUs from '../sections/ContactUs'

const Diaspora = () => {

  useEffect(() => {
    document.title = "Diaspora | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.landingPage} />
            <div className=' w-full pt-16 xl:pt-32 flex flex-row items-center justify-start min-h-screen'>
              <AccountHeroLayout data={getAccountHeroData.diaspora} />
            </div>
            <ContactUs />
        </div>
    </Container>
  )
}

export default Diaspora
