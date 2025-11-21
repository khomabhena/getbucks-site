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
            <div className=' w-full mt-16 md:mt-24 flex flex-col items-center justify-start min-h-screen px-4 md:px-0'>
                <h1 className=' text-xl md:text-3xl xl:text-4xl font-semibold text-gray-700 text-center mt-12 md:mt-24 px-4'>Start your application for a<br />Getbucks account</h1>
                
                <div className=' flex flex-col xl:flex-row gap-12 md:gap-16 xl:gap-32 mt-12 md:mt-24 mb-16 md:mb-32 xl:mt-48'>

                  <a href="/personal" className=' basis-1/2 flex flex-col items-center'>
                    <div className=' hover:scale-105 ease-in-out transition-all flex flex-col items-center'>
                      <img className=' shadow-lg hover:shadow-xl w-[120px] h-[120px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] rounded-4xl' src="./accounts/personal.png" alt="" />
                      <p className=' text-center mt-4 md:mt-6 text-base md:text-lg xl:text-xl text-gray-800 font-semibold'>PERSONAL ACCOUNT</p>
                    </div>
                  </a>
                  
                  <a href="/business" className=' basis-1/2 flex flex-col items-center'>
                    <div className=' hover:scale-105 ease-in-out transition-all flex flex-col items-center'>
                      <img className=' shadow-lg hover:shadow-xl w-[120px] h-[120px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] rounded-4xl' src="./accounts/business.png" alt="" />
                      <p className=' text-center mt-4 md:mt-6 text-base md:text-lg xl:text-xl text-gray-800 font-semibold'>BUSINESS ACCOUNT</p>
                    </div>
                  </a>

                </div>
            </div>
        </div>
    </Container>
  )
}

export default OpenAccount
