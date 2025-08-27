import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import LoginLayout from '../components/LoginLayout'
import { data } from 'react-router-dom'
import ContactUs from '../sections/ContactUs'

const ContactUsPage = ({ data, navData }) => {
  const clicked = (obj) => {
    console.log('Clicked Contact US', obj)
  }

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className='w-full mt-16 md:mt-32 flex flex-row items-centerl justify-start min-h-screenf mb-64'>
                <LoginLayout clicked={clicked} data={data} />
            </div>
            <ContactUs />
        </div>
    </Container>
  )
}

export default ContactUsPage
