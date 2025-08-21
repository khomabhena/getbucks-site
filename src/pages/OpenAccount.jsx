import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'

const OpenAccount = () => {
  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={getNavigationData.landingPage} />
            <div className=' w-full mt-16 md:mt-32 flex flex-col items-center justify-start min-h-screen'>
                <h1 className=' text-xl md:text-4xl xl:text-6xl font-semibold text-gray-700 text-center mt-24'>Start your application for a<br />Getbucks account</h1>
                
                <div className=' flex flex-col xl:flex-row gap-24 xl:gap-32 mt-24 mb-32 xl:mt-48'>

                  <a href="/personal" className=' basis-1/2'>
                    <div>
                      <img className=' w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] rounded-4xl' src="./accounts/personal.png" alt="" />
                      <p className=' xl:text-center mt-6 xl:text-2xl text-gray-800 font-semibold'>PERSONAL ACCOUNT</p>
                    </div>
                  </a>
                  
                  <a href="/diaspora" className=' basis-1/2'>
                    <div>
                      <img className=' w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] rounded-4xl' src="./accounts/diaspora.png" alt="" />
                      <p className=' xl:text-center mt-6 xl:text-2xl text-gray-800 font-semibold'>DIASPORA ACCOUNT</p>
                    </div>
                  </a>

                </div>
            </div>
        </div>
    </Container>
  )
}

export default OpenAccount
