import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import ContactForm from '../components/ContactForm'
import Footer from '../sections/Footer'

const ContactUsPage = ({ data, navData }) => {

  useEffect(() => {
    document.title = "Contact Us | GetBucks Bank"
  }, [])

  const formSubmit = (e, formData) => {
    e.preventDefault()
    console.log('Form submitted', formData)
  }

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className='w-full mt-16 md:mt-24 flex flex-row items-centerl justify-start min-h-screenf mb-64'>
                <ContactForm formSubmit={formSubmit} data={data} />
            </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default ContactUsPage
