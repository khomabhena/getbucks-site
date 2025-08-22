import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import RegisterLayout from '../components/RegisterLayout'

const Register = ({data, navData}) => {
  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className='  w-full mt-16 md:mt-32 flex flex-row items-centerl justify-start min-h-screen'>
                <RegisterLayout data={data} />
            </div>
        </div>
    </Container>
  )
}

export default Register
