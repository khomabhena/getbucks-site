import React from 'react'
import { colors } from '../data/colors'

const LoginLayout = ({ data }) => {
  return (
    <div className=' w-full flex flex-col items-center'>
      <h1 className=' mt-12 text-xl xl:text-4xl text-gray-700'>{data.title}</h1>
      <p className=' mt-2 text-2xl xl:text-5xl font-semibold text-gray-800'>{data.title2}</p>
      <p className=' mt-12 text-xs xl:text-sm font-semibold text-gray-500'>{data.subtitle}</p>
      <form className=' w-full max-w-[800px] px-4 xl:px-24 pt-12 shadow-xl rounded-3xl mt-12 md:mt-2 flex flex-col items-center justify-center min-h-56' style={{ backgroundColor: colors.primaryColor }}>
        {
          data.inputs.map((input, index) => (
            <input
              key={index}
              id={input.id}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              required={input.required}
              className=' py-4 px-4 xl:py-2 max-w-[500px] xl:px-12 shadow-lg rounded-2xl xl:text-xl bg-[#f7f2ec]/60 w-full xl:w-[800px] mt-4'
            />
          ))
        }
        
        <div className=' mt-8 flex w-full flex-col-reverse xl:flex-row justify-center gap-4'>
          <a className=' min-w-56 text-sm text-center xl:text-lg font-semibold text-gray-50 border-gray-50 xl:border-3 px-8 py-4 rounded-2xl' href="#">Forgot Password</a>
          <a className=' min-w-56 text-sm text-center xl:text-lg' href="#">
            <button className=' w-full cursor-pointer font-semibold border-gray-50 border-3 bg-white text-black px-8 py-4 rounded-2xl' type="submit">Login</button>
          </a>
        </div>

        <p className='mt-4 mb-12 text-sm xl:text-xl text-gray-700'>Don't have an account? <a href={data.registerLink} className='underline'>Register</a></p>
      </form>
    </div>
  )
}

export default LoginLayout
