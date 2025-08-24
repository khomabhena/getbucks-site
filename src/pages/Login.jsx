import React from 'react'
import MainNavigation from '../components/MainNavigation'
import AccountHeroLayout from '../components/AccountHeroLayout'
import Container from './Container'
import { getNavigationData } from '../data/navigation'
import LoginLayout from '../components/LoginLayout'
import { getLoginData } from '../data/login'
import ContactUs from '../sections/ContactUs'

const Login = ({data, navData}) => {
  return (
    <Container>
      <div className='min-h-screen w-full'>
        <MainNavigation data={navData} />
        <div className='  w-full mt-16 md:mt-32 flex flex-row items-centerl justify-start min-h-screenf mb-64'>
          <LoginLayout data={data}  />
        </div>
        <ContactUs />
      </div>
    </Container>
  )
}

export default Login
