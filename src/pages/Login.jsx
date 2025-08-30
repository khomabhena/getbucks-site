import React, { useEffect } from 'react'
import MainNavigation from '../components/MainNavigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import Container from './Container'
import { getNavigationData } from '../data/navigation'
import LoginLayout from '../components/LoginLayout'
import { getLoginData } from '../data/login'
import Footer from '../sections/Footer'

const Login = ({data, navData}) => {

  useEffect(() => {
    document.title = "Login | GetBucks Bank"
    // Add meta tags
    const metaDescription = document.createElement('meta')
    metaDescription.name = "description"
    metaDescription.content = "Login to your GetBucks Bank account to access personal and business banking services securely."
    document.head.appendChild(metaDescription)

    const metaKeywords = document.createElement('meta')
    metaKeywords.name = "keywords"
    metaKeywords.content = "GetBucks Bank, Login, Online Banking, Zimbabwe, Personal Account, Business Account"
    document.head.appendChild(metaKeywords)

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaDescription)
      document.head.removeChild(metaKeywords)
    }
  }, [])

  const formSubmit = (e, data) => {
    e.preventDefault()
    console.log('form submitted')
    console.log(data)
  }

  return (
    <Container>
      <div className='min-h-screen w-full'>
        <MainNavigation data={navData} />
        <div className='w-full mt-16 md:mt-24 flex flex-row items-centerl justify-start min-h-screenf mb-64'>
          <LoginLayout formSubmit={formSubmit} data={data}  />
        </div>
        {/* <Footer /> */}
      </div>
    </Container>
  )
}

export default Login
