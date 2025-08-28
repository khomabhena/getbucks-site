import React from 'react'
import PolicyContainer from '../components/PolicyContainer'
import { getPrivacyPolicy } from '../data/privacy-policy'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import { colors } from '../data/colors'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import ContactUs from '../sections/ContactUs'

const PrivacyPolicy = () => {
    const data = getPrivacyPolicy
  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={getNavigationData.landingPage} />
            <div className=' w-full mt-16 md:mt-32 flex flex-col items-center'>
                <PolicyContainer>
                    <h1 className=' text-xl md:text-2xl font-bold'>Privacy Policy</h1>
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
                <ContactUs />

            </div>
        </div>
    </Container>
  )
}

export default PrivacyPolicy
