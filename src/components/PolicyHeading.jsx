import React from 'react'

const PolicyHeading = ({title, titleNumber}) => {
  return (
    <div className=' text-lg md:text-xl mt-8 font-medium flex gap-8'>
      <p className=' min-w-4 md:min-w-8'>{titleNumber}</p>
      <h1 className=' text-lg md:text-xl font-medium md:font-bold'>{title}</h1>
    </div>
  )
}

export default PolicyHeading
