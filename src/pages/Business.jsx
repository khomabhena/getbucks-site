import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import { getAccountHeroData } from '../data/account-hero'
import ContactUs from '../sections/ContactUs'
import { getBusinessExtraData } from '../data/accountExtraData'

const Business = () => {

  useEffect(() => {
    document.title = "Business Account | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.business} />
            <div className=' w-full mt-16 md:mt-32 flex flex-row items-center justify-start min-h-screen'>
              <AccountHeroLayout data={getAccountHeroData.business} extraData={getBusinessExtraData} />
            </div>
            <ContactUs />
        </div>
    </Container>
  )
}
export default Business

