import React from 'react'
import InvestorRelationsCard from '../components/InvestorRelationsCard'
import { getInvestorRelations } from '../data/investor'

const InvestorRelations = () => {
    const data = getInvestorRelations

  return (
    <section className=' mt-32 flex flex-col items-center'>
        <h2 className=' text-5xl font-medium'>Investor Relations</h2>
        <div className=' mt-12 flex flex-col gap-24 px-12'>
            {
                data.data?.map(({ image, reverse, title, heading, text }) => (
                    <InvestorRelationsCard reverse={reverse} image={image} title={title} heading={heading} text={text} />
                ))
            }
        </div>
    </section>
  )
}

export default InvestorRelations
