import React from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import ContactUs from '../sections/ContactUs'
import { getFinancialReports } from '../data/financial-reports'
import PDFCard from '../components/PDFCard'

const FinancialReports = ({ navData }) => {
  const data = getFinancialReports
  return (
    <Container>
      <div className=' min-h-screen w-full'>
        <MainNavigation data={navData} />
        <div className=' w-full mt-16 md:mt-32 flex flex-col items-center justify-center min-h-screenl'>
          <h1 className=' text-xl md:text-4xl xl:text-6xl font-semibold text-gray-700 text-center mt-24'>Financial Reports</h1>

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
