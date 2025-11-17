import React, { useState } from 'react'
import { colors } from '../data/colors'

const ContactForm = ({ formSubmit, data }) => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(prev => ({...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmit(e, inputs)
    // Reset form after submission
    setInputs({})
    const form = e.target
    form.reset()
  }

  return (
    <div className=' w-full flex flex-col items-center'>
      <h1 className=' mt-12 text-xl xl:text-3xl text-gray-700'>{data.title}</h1>
      <p className=' mt-2 text-2xl xl:text-4xl font-semibold text-gray-800'>{data.title2}</p>
      <p className=' mt-12 text-xs xl:text-sm font-semibold text-gray-500'>{data.subtitle}</p>
      
      <form onSubmit={handleSubmit} className=' w-full max-w-[800px] px-4 xl:px-24 pt-12 shadow-xl rounded-3xl mt-12 md:mt-2 flex flex-col items-center justify-center min-h-56' style={{ backgroundColor: colors.primaryColor }}>
        {
          data.inputs.map((input, index) => (
            input.type == 'textarea' 
            ?
            <textarea 
              key={input.key || index}
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              onChange={handleChange}
              required={input.required}
              className=' py-4 px-4 xl:py-4 max-w-[500px] xl:max-w-[600px] xl:px-12 shadow-lg rounded-2xl text-sm xl:text-base bg-[#f7f2ec]/60 w-full xl:w-[800px] mt-4'
            >
            </textarea> 
            :
            <input
              key={index}
              id={input.id}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
              onChange={handleChange}
              className=' py-4 px-4 xl:py-4 max-w-[500px] xl:max-w-[600px] xl:px-12 shadow-lg rounded-2xl text-sm xl:text-base bg-[#f7f2ec]/60 w-full xl:w-[800px] mt-4'
            />
          ))
        }
        
        <div className=' mt-12 flex w-full flex-col-reverse xl:flex-row justify-center items-center gap-4'>
          {
            data.buttons[1].text && 
            <a className=' hover:scale-95 hover:shadow-lg w-full max-w-[500px] lg:max-w-[300px] shadow-xl ease-in-out transition-all min-w-56 text-sm text-center xl:text-base font-semibold text-gray-50 border-gray-50l xl:border-3l px-8 py-4 rounded-2xl' href="#">{data.buttons[1].text}</a>
          }
          <button 
            type='submit'
            className=' hover:scale-95 hover:shadow-lg w-full max-w-[500px] lg:max-w-[300px] shadow-xl ease-in-out transition-all min-w-56 text-sm text-center xl:text-base font-semibold border-gray-50 border-3 bg-white text-black px-8 py-4 rounded-2xl cursor-pointer'
          >
            {data.buttons[0].text}
          </button>
        </div>

        {data.registerText && (
          <p className='mt-4 mb-12 text-sm xl:text-xl text-gray-700'>{data.registerText}<a href={data.registerLink} className='underline'>{data.registerLinkText}</a></p>
        )}
      </form>
    </div>
  )
}

export default ContactForm

