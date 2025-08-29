import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import RegisterLayout from '../components/RegisterLayout'
import Footer from '../sections/Footer'

const Register = ({data, navData}) => {

  useEffect(() => {
    document.title = "Sign Up | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className='min-h-screenl w-full'>
            <MainNavigation data={navData} />
            <div className='  w-full mt-16 md:mt-32 flex flex-row items-centerl justify-start min-h-screenl mb-32'>
                <RegisterLayout data={data} />
            </div>
            <Footer />
        </div>
    </Container>
  )
}

export default Register
