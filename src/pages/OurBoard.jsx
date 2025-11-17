import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import Footer from '../sections/Footer'
import BoardMembersCard from '../components/BoardMembersCard'
import { getOurBoardData } from '../data/our-board'

const OurBoard = ({ navData }) => {

  useEffect(() => {
    document.title = "Our Board | GetBucks Bank"
  }, [])

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className=' w-full mt-16 md:mt-24 flex flex-col items-center justify-start min-h-screenl'>
                <BoardMembersCard title='Our Board Members' data={getOurBoardData.boardMembers} />
                {/* <Footer /> */}
            </div>
        </div>
    </Container>
  )
}

export default OurBoard
