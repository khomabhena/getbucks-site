import React from 'react'
import { getContactData } from '../data/contact-us'
import { colors } from '../data/colors'

const ContactUs = () => {
    const data = getContactData

  return (
    <section className=' mt-24 pb-32 flex flex-col justify-center items-center'>
        <h2 className=' text-5xl font-semibold'>Contact Us</h2>
        <div className=' mt-12 flex w-full'>
            <p className=' text-xl text-gray-700 px-12 flex justify-center basis-1/4'>"{data.text}"</p>

            <form className=' flex flex-col px-8 gap-6 justify-center basis-1/4' action="">
                <input className=' bg-gray-200 mx-4 py-4 px-8 text-xl rounded-xl' type="text" name="" placeholder='Full Name' id="" />
                <input className=' bg-gray-200 mx-4 py-4 px-8 text-xl rounded-xl' type="text" name="" placeholder='Email' id="" />
                <input className=' bg-gray-200 mx-4 py-4 px-8 text-xl rounded-xl' type="text" name="" placeholder='Mobile Number' id="" />
                <textarea className=' bg-gray-200 mx-4 py-4 px-8 text-xl rounded-xl' name="" placeholder='Your Message' id=""></textarea>
                <button className=' mx-4 rounded-xl py-4 text-xl font-semibold' style={{ backgroundColor: colors.primaryColor }} type="button">Send Message</button>
            </form>

            <div className=' flex justify-center basis-1/4'>
                
                    <img src={data.address.image} alt="" />
                    <div className=' flex flex-col gap-2 text-xl text-gray-700'>
                        <p>{data.address.line1}</p>
                        <p>{data.address.line2}</p>
                        <p>{data.address.line3}</p>
                        <p>{data.address.line4}</p>
                    </div> 
                
            </div>

            <div className=' flex flex-col gap-8 text-xl basis-1/4 text-gray-700'>
            {
                data?.contacts.map(({ image, link, text }) => (
                    <a href={link}>
                        <img src={image} alt="" />
                        {text}
                    </a>
                ))
            }
            </div>

        </div>
    </section>
  )
}

export default ContactUs
