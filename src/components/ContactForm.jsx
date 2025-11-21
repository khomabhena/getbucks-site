import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { colors } from '../data/colors'
import { RECAPTCHA_SITE_KEY } from '../config/recaptcha'

const ContactForm = ({ formSubmit, data }) => {
  const [inputs, setInputs] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })
  const [recaptchaToken, setRecaptchaToken] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(prev => ({...prev, [name]: value }))
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  const handleCaptchaChange = (token) => {
    setRecaptchaToken(token)
  }

  const handleCaptchaExpired = () => {
    setRecaptchaToken(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setSubmitStatus({ type: 'error', message: 'Please complete the reCAPTCHA verification.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Create FormData object
      const formData = new FormData()
      formData.append('fullname', inputs.fullname || '')
      formData.append('email', inputs.email || '')
      formData.append('number', inputs.number || '')
      formData.append('message', inputs.message || '')
      formData.append('recaptcha_token', recaptchaToken)

      // Send to PHP endpoint
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        body: formData
      })

      // Check if response is actually JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        // If not JSON, the PHP file might not be executing
        const text = await response.text()
        console.error('Non-JSON response:', text.substring(0, 200))
        throw new Error('Server returned non-JSON response. Make sure the PHP file is uploaded and accessible on your server.')
      }

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        // Reset form after successful submission
        setInputs({})
        setRecaptchaToken(null)
        e.target.reset()
        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
        // Call the parent formSubmit handler if provided
        if (formSubmit) {
          formSubmit(e, inputs)
        }
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' })
        // Reset reCAPTCHA on error so user can try again
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
        setRecaptchaToken(null)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=' w-full flex flex-col items-center px-4 md:px-0'>
      <h1 className=' mt-8 md:mt-12 text-xl md:text-2xl xl:text-3xl text-gray-700 text-center'>{data.title}</h1>
      <p className=' mt-2 text-xl md:text-2xl xl:text-4xl font-semibold text-gray-800 text-center'>{data.title2}</p>
      <p className=' mt-6 md:mt-12 text-xs md:text-sm xl:text-sm font-semibold text-gray-500 text-center px-4'>{data.subtitle}</p>
      
      <form onSubmit={handleSubmit} className=' w-full max-w-[800px] px-4 md:px-8 xl:px-24 pt-8 md:pt-12 pb-8 md:pb-12 shadow-xl rounded-3xl mt-8 md:mt-12 flex flex-col items-center justify-center min-h-56' style={{ backgroundColor: colors.primaryColor }}>
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
              value={inputs[input.name] || ''}
              onChange={handleChange}
              required={input.required}
              className=' py-3 md:py-4 px-4 xl:py-4 max-w-[500px] xl:max-w-[600px] xl:px-12 shadow-lg rounded-2xl text-sm xl:text-base bg-[#f7f2ec]/60 w-full xl:w-[800px] mt-4'
            >
            </textarea> 
            :
            <input
              key={index}
              id={input.id}
              type={input.type}
              name={input.name}
              value={inputs[input.name] || ''}
              placeholder={input.placeholder}
              required={input.required}
              onChange={handleChange}
              className=' py-3 md:py-4 px-4 xl:py-4 max-w-[500px] xl:max-w-[600px] xl:px-12 shadow-lg rounded-2xl text-sm xl:text-base bg-[#f7f2ec]/60 w-full xl:w-[800px] mt-4'
            />
          ))
        }
        
        {/* reCAPTCHA */}
        <div className='mt-6 flex justify-center'>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
            onExpired={handleCaptchaExpired}
            theme="light"
            size="normal"
          />
        </div>
        
        <div className=' mt-8 md:mt-12 flex w-full flex-col-reverse xl:flex-row justify-center items-center gap-4'>
          {
            data.buttons[1].text && 
            <a className=' hover:scale-95 hover:shadow-lg w-full max-w-[500px] lg:max-w-[300px] shadow-xl ease-in-out transition-all text-sm text-center xl:text-base font-semibold text-gray-50 border-gray-50l xl:border-3l px-6 md:px-8 py-3 md:py-4 rounded-2xl' href="#">{data.buttons[1].text}</a>
          }
          <button 
            type='submit'
            disabled={isSubmitting || !recaptchaToken}
            className={` hover:scale-95 hover:shadow-lg w-full max-w-[500px] lg:max-w-[300px] shadow-xl ease-in-out transition-all text-sm text-center xl:text-base font-semibold border-gray-50 border-3 bg-white text-black px-6 md:px-8 py-4 md:py-6 rounded-2xl cursor-pointer ${(isSubmitting || !recaptchaToken) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : data.buttons[0].text}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus.type && (
          <div className={`mt-4 px-4 py-3 rounded-lg text-sm font-medium ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {data.registerText && (
          <p className='mt-4 mb-12 text-sm xl:text-xl text-gray-700'>{data.registerText}<a href={data.registerLink} className='underline'>{data.registerLinkText}</a></p>
        )}
      </form>
    </div>
  )
}

export default ContactForm

