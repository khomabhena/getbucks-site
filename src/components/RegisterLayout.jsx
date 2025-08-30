import React, { useState } from 'react'
import { colors } from '../data/colors'

const RegisterLayout = ({ data }) => {

  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
    <div className=' w-full flex flex-col items-center'>
      <h1 className=' mt-12 text-xl xl:text-3xl text-gray-700'>{data.title}</h1>
      <p className=' mt-2 text-xl xl:text-4xl font-semibold text-gray-800'>{data.title2}</p>
      <p className=' mt-12 text-xs xl:text-sm font-semibold text-gray-500'>{data.subtitle}</p>
      <form className=' xl:px-24 mb-12 w-full xl:w-7xl pt-12 w-fitl shadow-xl rounded-3xl mt-2 flex flex-col items-center justify-center min-h-56' style={{ backgroundColor: colors.primaryColor }}>
        
        <div className=' flex flex-col xl:flex-row flex-wrap w-full'>
          {
            data.inputs.map((input, index) => (
              <div key={index} className='  w-full text-center basis-1 xl:basis-1/2 px-2 py-2'>
                <input
                  id={input.id}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  required={input.required}
                  onChange={handleChange}
                  className=' py-4 xl:py-4 px-4 xl:px-12 max-w-[500px] shadow-lg rounded-2xl text-sm xl:text-sm bg-[#f7f2ec]/60 w-full'
                />
              </div>
            ))
          }
        </div>

        <div className=' mt-8 mb-12 max-w-[500px] w-full'>
          <a href="#">
            <button className=' w-full hover:scale-95 shadow-xl hover:shadow-lg ease-in-out transition-all min-w-56 text-sm xl:text-sm cursor-pointer font-semibold border-gray-50 border-3 mt-4 bg-white text-black px-8 py-4 rounded-2xl' type="submit">Create Account</button>
          </a>
        </div>

        <p className='mt-4 mb-12 text-sm xl:text-xl text-gray-700'>Already have an account? <a href={data.loginLink} className='underline'>Login</a></p>
      </form>
    </div>
  )
}

export default RegisterLayout
