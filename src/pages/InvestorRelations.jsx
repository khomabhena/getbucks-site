import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import InvestorRelationsSection from '../sections/InvestorRelationsSection'

const InvestorRelations = () => {
  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.investorRelations} />
            <div className=' w-full mt-16 md:mt-32 flex flex-row items-center justify-start min-h-screenl'>
              <InvestorRelationsSection />
            </div>
        </div>
    </Container>
  )
}

export default InvestorRelations
