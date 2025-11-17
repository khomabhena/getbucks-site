import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import { getAccountHeroData } from '../data/account-hero'
import Footer from '../sections/Footer'

const Diaspora = () => {

  const hero = getAccountHeroData.diaspora

  useEffect(() => {
    document.title = `Diaspora Account | GetBucks Bank`
    // Add meta tags using hero data
    const metaDescription = document.createElement('meta')
    metaDescription.name = "description"
    metaDescription.content = hero.subtitle
    document.head.appendChild(metaDescription)

    const metaKeywords = document.createElement('meta')
    metaKeywords.name = "keywords"
    metaKeywords.content = [
      "GetBucks Bank",
      "Diaspora Account",
      "Banking",
      "Zimbabwe",
      hero.title,
      hero.title2,
      ...(hero.buttons ? hero.buttons.map(btn => btn.text) : [])
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
            <MainNavigation data={getNavigationData.landingPage} />
            <div className=' w-full pt-16 xl:pt-32 flex flex-row items-center justify-start min-h-screen'>
              <AccountHeroLayout data={getAccountHeroData.diaspora} />
            </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default Diaspora
