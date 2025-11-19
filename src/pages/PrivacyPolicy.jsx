import React, { useEffect } from 'react'
import PolicyContainer from '../components/PolicyContainer'
import PolicyHeading from '../components/PolicyHeading'
import PolicyParagraph from '../components/PolicyParagraph'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'

const PrivacyPolicy = ({ navData, title, data }) => {
    useEffect(() => {
        document.title = "Privacy Policy | GetBucks Bank"
    }, [])

    return (
        <Container>
            <div className='min-h-screen w-full'>
                <MainNavigation data={navData} />
                <div className='w-full mt-16 md:mt-24 flex flex-col items-center'>
                    <PolicyContainer>
                        <h1 className='text-xl md:text-2xl font-bold mb-8 pb-4'>{title}</h1>
                        {data?.map(({ title, titleNumber, paragraphs }, sectionIndex) => {
                            // Filter out empty paragraphs
                            const validParagraphs = paragraphs?.filter(({ paragraph }) => paragraph && paragraph.trim() !== '') || []
                            
                            // Skip entire section if no title and no valid paragraphs
                            if (!title && validParagraphs.length === 0) {
                                return null
                            }

                            return (
                                <div key={`${title || 'section'}-${sectionIndex}`} className='mb-8 last:mb-0'>
                                    {title && (
                                        <PolicyHeading title={title} titleNumber={titleNumber} />
                                    )}
                                    {validParagraphs.length > 0 && (
                                        <div className='mt-4'>
                                            {validParagraphs.map(({ paragraph }, paragraphIndex) => (
                                                <PolicyParagraph 
                                                    key={`paragraph-${sectionIndex}-${paragraphIndex}`}
                                                    paragraph={paragraph} 
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </PolicyContainer>
                </div>
            </div>
        </Container>
    )
}

export default PrivacyPolicy
