import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import InvestorRelationsSection from '../sections/InvestorRelationsSection'
import Footer from '../sections/Footer'
import { getInvestorRelations } from '../data/investor'

const InvestorRelations = () => {

  const investor = getInvestorRelations

  useEffect(() => {
    document.title = `${investor.heading || "Investor Relations"} | GetBucks Bank`
    // Add meta tags using investor.js data
    const metaDescription = document.createElement('meta')
    metaDescription.name = "description"
    metaDescription.content = investor.data.map(item => item.text).join(' ')
    document.head.appendChild(metaDescription)

    const metaKeywords = document.createElement('meta')
    metaKeywords.name = "keywords"
    metaKeywords.content = [
      "GetBucks Bank",
      "Investor Relations",
      "Banking",
      "Zimbabwe",
      investor.heading,
      ...investor.data.map(item => item.title),
      ...investor.data.map(item => item.buttonName)
    ].join(', ')
    document.head.appendChild(metaKeywords)

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaDescription)
      document.head.removeChild(metaKeywords)
    }
  }, [investor])

  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.investorRelations} />
            <div className=' w-full mt-16 md:mt-24 flex flex-col items-center justify-start min-h-screenl'>
              <InvestorRelationsSection />
              {/* <Footer /> */}
            </div>
        </div>
    </Container>
  )
}

export default InvestorRelations
