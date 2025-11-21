import React, { useEffect } from 'react'
import Container from './Container'
import MainNavigation from '../components/MainNavigation'
import { getNavigationData } from '../data/navigation'
import Footer from '../sections/Footer'
import { getEventsData } from '../data/events'
import PDFCard from '../components/PDFCard'
import { colors } from '../data/colors'

const Events = ({ navData }) => {
    const data = getEventsData

    useEffect(() => {
        document.title = "Events | GetBucks Bank"
        // Add meta tags
        const metaDescription = document.createElement('meta')
        metaDescription.name = "description"
        metaDescription.content = "See upcoming and past events from GetBucks Bank. Download event documents and stay updated."
        document.head.appendChild(metaDescription)

        const metaKeywords = document.createElement('meta')
        metaKeywords.name = "keywords"
        metaKeywords.content = [
            "GetBucks Bank",
            "Events",
            "Banking",
            "Zimbabwe",
            ...data.map(event => event.name)
        ].join(', ')
        document.head.appendChild(metaKeywords)

        // Cleanup on unmount
        return () => {
            document.head.removeChild(metaDescription)
            document.head.removeChild(metaKeywords)
        }
    }, [data])

  return (
    <Container>
        <div className=' min-h-screen w-full'>
            <MainNavigation data={navData} />
            <div className='w-full mt-16 md:mt-24 flex flex-col items-center justify-start px-4 md:px-0'>
                <h1 className=' text-xl md:text-3xl xl:text-6xl font-semibold text-gray-700 text-center mt-12 md:mt-24'>Events</h1>
                
                <div className=' w-full flex gap-4 flex-wrap mt-12 md:mt-24 mb-16 md:mb-48 justify-center md:justify-start'>  
                    {
                    data?.map(({name, link}) => (
                        <PDFCard key={name} name={name} link={link} />
                    ))
                    }
                </div>

            </div>
            {/* <Footer /> */}
        </div>
    </Container>
  )
}

export default Events
