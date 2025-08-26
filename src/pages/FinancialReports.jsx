import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import ContactUs from '../sections/ContactUs'
import { getFinancialReports } from '../data/financial-reports'
import PDFCard from '../components/PDFCard'
import { colors } from '../data/colors'

const FinancialReports = ({ navData }) => {
  const data = getFinancialReports
  return (
    <Container>
      <div className=' min-h-screen w-full'>
        <MainNavigation data={navData} />
        <div className=' w-full mt-16 md:mt-32 flex flex-col items-center justify-center min-h-screenl'>
          <h1 className=' text-xl md:text-4xl xl:text-6xl font-semibold text-gray-700 text-center mt-24'>Financial Reports</h1>
          <div className=' mt-24 mb-24 w-full flex flex-wrap justify-center gap-8 px-8'>
            <a href="/financial-reports">
              <button style={{ backgroundColor: colors.primaryColor }} 
              className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-sm xl:text-2xl rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Financial Reports</button>
            </a>
            <a href="/events">
              <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-sm xl:text-2xl rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Key Events</button>
            </a>
          </div>
          <div className=' w-full flex gap-4l flex-wrap mt-24 mb-48'>
            
            {
              data?.map(({name, link}) => (
                <PDFCard name={name} link={link} />
              ))
            }

          </div>

        </div>
        <ContactUs />
      </div>
    </Container>
  )
}

export default FinancialReports
