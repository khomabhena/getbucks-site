import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import LoginLayout from '../components/LoginLayout'
import { data } from 'react-router-dom'
import Footer from '../sections/Footer'

const ContactUsPage = ({ data, navData }) => {

  useEffect(() => {
    document.title = "Contact Us | GetBucks Bank"
  }, [])

  const formSubmit = (e, data) => {
    e.preventDefault()
    console.log('Form submitted', data)
  }

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className='w-full mt-16 md:mt-24 flex flex-row items-centerl justify-start min-h-screenf mb-64'>
                <LoginLayout formSubmit={formSubmit} data={data} />
            </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default ContactUsPage
