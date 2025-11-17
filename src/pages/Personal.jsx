import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import { getAccountHeroData } from '../data/account-hero'
import Footer from '../sections/Footer'
import { getPersonalExtraData } from '../data/accountExtraData'

const Personal = () => {

  useEffect(() => {
    document.title = "Personal Account | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.personal} />
            <div className=' w-full mt-16 md:mt-24 flex flex-row items-center justify-start min-h-screen'>
              <AccountHeroLayout data={getAccountHeroData.personal} extraData={getPersonalExtraData} />
            </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default Personal
