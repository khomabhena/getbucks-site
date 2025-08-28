import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import InvestorRelationsSection from '../sections/InvestorRelationsSection'
import ContactUs from '../sections/ContactUs'

const InvestorRelations = () => {

  useEffect(() => {
    document.title = "Investor Relations | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.investorRelations} />
            <div className=' w-full mt-16 md:mt-32 flex flex-col items-center justify-start min-h-screenl'>
              <InvestorRelationsSection />
              <ContactUs />
            </div>
        </div>
    </Container>
  )
}

export default InvestorRelations
