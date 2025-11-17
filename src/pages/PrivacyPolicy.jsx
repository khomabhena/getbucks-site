import React, { useEffect } from 'react'
import PolicyContainer from '../components/PolicyContainer'
import { getPrivacyPolicy } from '../data/privacy-policy'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import { colors } from '../data/colors'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import Footer from '../sections/Footer'

const PrivacyPolicy = ({ navData, title, data }) => {

    useEffect(() => {
        document.title = "Privacy Policy | GetBucks Bank"
    }, [])

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className=' w-full mt-16 md:mt-24 flex flex-col items-center'>
                <PolicyContainer>
                    <h1 className=' text-xl md:text-2xl font-bold'>{title}</h1>
                    {
                        data?.map(({ title, titleNumber, paragraphs }) => (
                            <>
                                <PolicyHeading key={title} title={title} titleNumber={titleNumber} />
                                {
                                    paragraphs?.map(({paragraph, index}) => (
                                        <>
                                        <PolicyParagraph paragraph={paragraph} key={index} />
                                        </>
                                    ))
                                }
                            </>
                        ))
                    }
                </PolicyContainer>
                {/* <Footer /> */}

            </div>
        </div>
    </Container>
  )
}

export default PrivacyPolicy
