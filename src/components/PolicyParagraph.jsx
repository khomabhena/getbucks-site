import React from 'react'

const PolicyParagraph = ({ paragraph }) => {
  if (!paragraph || paragraph.trim() === '') {
    return null
  }

  return (
    <p className='text-sm md:text-base leading-relaxed mb-4 text-gray-800'>
      {paragraph}
    </p>
  )
}

export default PolicyParagraph
