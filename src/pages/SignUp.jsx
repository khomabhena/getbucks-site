import React from 'react'
import MainNavigation from '../components/MainNavigation'

const SignUp = () => {
  return (
    <Container>
        <div className='min-h-screen w-full'>
            <MainNavigation data={getNavigationData.business} />
            <div className=' w-full mt-16 md:mt-32 flex flex-row items-center justify-start min-h-screen'>
                <h1>Sign Up</h1>
            </div>
        </div>
    </Container>
  )
}

export default SignUp
