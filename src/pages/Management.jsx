import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import BoardMembersCard from '../components/BoardMembersCard'
import { getOurBoardData } from '../data/our-board'
import Footer from '../sections/Footer'

const Management = ({ navData }) => {

  useEffect(() => {
    document.title = "Management | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className=' w-full mt-16 md:mt-24 flex flex-col items-center justify-start'>
                <BoardMembersCard title='The Management Team' data={getOurBoardData.managementTeam} />
                {/* <Footer /> */}
            </div>
        </div>
    </Container>
  )
}

export default Management
