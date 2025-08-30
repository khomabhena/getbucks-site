import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'

const OpenAccount = () => {

  useEffect(() => {
    document.title = "Open Account | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={getNavigationData.landingPage} />
            <div className=' w-full mt-16 md:mt-24 flex flex-col items-center justify-start min-h-screen'>
                <h1 className=' text-xl md:text-4xl xl:text-4xl font-semibold text-gray-700 text-center mt-24'>Start your application for a<br />Getbucks account</h1>
                
                <div className=' flex flex-col xl:flex-row gap-24 xl:gap-32 mt-24 mb-32 xl:mt-48'>

                  <a href="/personal" className=' basis-1/2'>
                    <div className=' hover:scale-105 ease-in-out transition-all'>
                      <img className=' shadow-lg hover:shadow-xl w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] rounded-4xl' src="./accounts/personal.png" alt="" />
                      <p className=' xl:text-center mt-6 xl:text-xl text-gray-800 font-semibold'>PERSONAL ACCOUNT</p>
                    </div>
                  </a>
                  
                  <a href="/business" className=' basis-1/2'>
                    <div className=' hover:scale-105 ease-in-out transition-all'>
                      <img className=' shadow-lg hover:shadow-xl w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] rounded-4xl' src="./accounts/business.png" alt="" />
                      <p className=' xl:text-center mt-6 xl:text-xl text-gray-800 font-semibold'>BUSINESS ACCOUNT</p>
                    </div>
                  </a>

                </div>
            </div>
        </div>
    </Container>
  )
}

export default OpenAccount
