import React from 'react'
import { getContactData } from '../data/contact-us'
import { colors } from '../data/colors'

const ContactUs = () => {
    const data = getContactData

  return (
    <section className=' mt-24 pb-32 flex-col justify-center items-center'>
        <h2 className=' text-2xl xl:text-4xl lg:text-center font-semibold'>Contact Us</h2>
        <div className=' mt-12 flex flex-col xl:flex-row w-full'>
            <p className=' text-sm md:text-lg text-gray-700  text-center md:text-start flex justify-center basis-1/4'>"{data.text}"</p>

            <form className=' flex flex-col max-w-[450px] mt-12 xl:mt-0 lg:mt-8 gap-6 justify-center basis-1/4' action="">
                <input className=' bg-gray-200 py-4 px-8 text-sm xl:text-lg rounded-xl' type="text" name="" placeholder='Full Name' id="" />
                <input className=' bg-gray-200 py-4 px-8 text-sm xl:text-lg rounded-xl' type="text" name="" placeholder='Email' id="" />
                <input className=' bg-gray-200 py-4 px-8 text-sm xl:text-lg rounded-xl' type="text" name="" placeholder='Mobile Number' id="" />
                <textarea className=' bg-gray-200 py-4 px-8 text-sm xl:text-lg rounded-xl' name="" placeholder='Your Message' id=""></textarea>
                <button className=' hover:shadow-xl hover:scale-105 transition-all ease-in-out cursor-pointer rounded-xl py-4 text-sm xl:text-xl font-semibold' style={{ backgroundColor: colors.primaryColor }} type="button">Send Message</button>
            </form>

            <div className=' flex mt-12 lg:mt-8 xl:mt-0 xl:justify-center basis-1/4'>
                
                    <img src={data.address.image} alt="" />
                    <div className=' flex flex-col gap-2 text-sm md:text-lg text-gray-700'>
                        <p>{data.address.line1}</p>
                        <p>{data.address.line2}</p>
                        <p>{data.address.line3}</p>
                        <p>{data.address.line4}</p>
                    </div> 
                
            </div>

            <div className=' flex lg:px-0 flex-col mt-12 lg:mt-8 xl:mt-0 gap-2 md:gap-8 text-sm md:text-lg basis-1/4 text-gray-700'>
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
