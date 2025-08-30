import React from 'react'
import InvestorRelationsCard from '../components/InvestorRelationsCard'
import { getInvestorRelations } from '../data/investor'
import { colors } from '../data/colors'

const InvestorRelationsSection = () => {
    const data = getInvestorRelations

  return (
    <section className=' mt-32 flex flex-col items-center'>
        <h2 className=' text-xl mt-12l self-start lg:self-center md:text-3xl font-medium'>Investor Relations</h2>
        
        <div className=' mt-24 mb-24 w-full flex flex-wrap justify-center gap-8 px-8'>
          <a href="/board-members">
           <button style={{ backgroundColor: colors.primaryColor }} 
            className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-sm xl:text-base rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Our Board</button>
          </a>
          <a href="/management">
           <button style={{ backgroundColor: colors.primaryColor }} className=' font-semibold text-gray-50 min-w-64 px-8 py-2 text-sm xl:text-base rounded-xl cursor-pointer hover:scale-105 hover:shadow-lg transition-all ease-in-out '>Our Management</button>
          </a>
        </div>

        <div className=' mt-12 flex flex-col gap-24 '>
            {
                data.data?.map(({ image, reverse, title, heading, text, buttonLink, buttonName }) => (
                <InvestorRelationsCard key={title} reverse={reverse} image={image} title={title} heading={heading} buttonName={buttonName} text={text} buttonLink={buttonLink} />
                ))
            }
        </div>
    </section>
  )
}

export default InvestorRelationsSection
