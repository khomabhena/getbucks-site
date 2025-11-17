import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import { getAccountHeroData } from '../data/account-hero'
import Footer from '../sections/Footer'
import { getBusinessExtraData } from '../data/accountExtraData'

const Business = () => { 
  const hero = getAccountHeroData.business
  
  useEffect(() => {
    document.title = "Business Account | GetBucks Bank"
    // Add meta tags using hero data
    const metaDescription = document.createElement('meta')
    const metaDescriptionOG = document.createElement('meta')
    metaDescription.name = "description"
    metaDescription.content = hero.subtitle
    metaDescription.content = hero.subtitle
    metaDescriptionOG.name = "og:description"
    metaDescriptionOG.title = "og:title"
    metaDescriptionOG.content = hero.subtitle
    document.head.appendChild(metaDescription)
    document.head.appendChild(metaDescriptionOG)

    const metaKeywords = document.createElement('meta')
    metaKeywords.name = "keywords"
    metaKeywords.content = [
      "GetBucks Bank",
      "Business Account",
      "Banking",
      "Zimbabwe",
      "Corporate",
      "SME",
      hero.title,
      hero.title2,
      ...hero.buttons.map(btn => btn.text)
    ].join(', ')
    document.head.appendChild(metaKeywords)

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaDescription)
      document.head.removeChild(metaKeywords)
    }
  }, [hero])

  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.business} />
            <div className=' w-full mt-16 md:mt-24 flex flex-row items-center justify-start min-h-screen'>
              <AccountHeroLayout data={getAccountHeroData.business} extraData={getBusinessExtraData} />
            </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}
export default Business

