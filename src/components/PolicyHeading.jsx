import React from 'react'

const PolicyHeading = ({ title, titleNumber }) => {
  if (!title) {
    return null
  }

  return (
    <div className='text-lg md:text-xl mt-8 mb-4 font-medium flex gap-4'>
      {titleNumber && (
        <p className='min-w-4 md:min-w-8'>{titleNumber}</p>
      )}
      <h2 className='text-lg md:text-xl font-semibold md:font-bold text-gray-900'>
        {title}
      </h2>
    </div>
  )
}

export default PolicyHeading
