import React from 'react'
import { getContactData } from '../data/contact-us'
import { colors } from '../data/colors'

const ContactUs = () => {
    const data = getContactData

  return (
    <section className=' mt-24 pb-12 flex-col justify-center items-center'>
        <h2 className=' text-2xl xl:text-4xl lg:text-center font-semibold invisible'>Contact Us</h2>
        <div className=' mt-12 flex flex-col xl:flex-row w-full'>

            <div className=' flex lg:px-0 flex-col mt-12 lg:mt-8 xl:mt-0 gap-2 md:gap-4 text-sm md:text-lg basis-1/4 text-gray-700'>
                
            </div>

            <div className=' basis-1/4 flex items-center flex-col gap-'>
                <p className=' font-boldl text-sm md:text-lg text-gray-700 xl:pr-8 text-center md:text-start flex justify-centerl'>Get Our Apps</p>
                <a className=' hover:scale-105 ease-in-out transition-all mt-4' href="https://apps.apple.com/zw/app/getbucks-mobile-banking/id1437807974" target='_blank'>
                    <img className=' w-[150px] h-auto' height={'40px'} width={'80px'} src="./social-icons/app-store.png" alt="" />
                </a>
                <a className=' hover:scale-105 ease-in-out transition-all mt-4' href="https://play.google.com/store/apps/details?id=com.getbucks.banking.gb&pcampaignid=web_share" target='_blank'>
                    <img className=' w-[150px] h-auto' height={'40px'} width={'80px'} src="./social-icons/google-play.png" alt="" />
                </a>
            </div>

            <div className=' flex mt-12 lg:mt-8 xl:mt-0 xl:justify-center basis-1/4'>
                <img src={data.address.image} alt="" />
                <div>
                    <div className=' flex flex-col gap-2 text-sm md:text-lg text-gray-700'>
                        <p>{data.address.line1}</p>
                        <p>{data.address.line2}</p>
                        <p>{data.address.line3}</p>
                        <p>{data.address.line4}</p>
                    </div> 
                </div>   
            </div>

            <div className=' flex lg:px-0 flex-col mt-12 lg:mt-8 xl:mt-0 gap-2 md:gap-4 text-sm md:text-lg basis-1/4 text-gray-700'>
            {
                data?.contacts.map(({ image, link, text }) => (
                    <a href={link} className=' hover:scale-105 transition-all ease-in-out flex items-center gap-4' key={link} target='_blank' rel="noreferrer">
                        {
                            image &&
                            <img className=' w-8 h-8' src={image} alt={text} />
                        }
                        {text}
                    </a>
                ))
            }
                <div className=' flex gap-4'>
                    {
                        data?.socialIcons.map(({ image, link, text }) => (
                            <a key={link} target='_blank' rel='noreferrer' href={link} className=' hover:scale-105 transition-all ease-in-out flex items-center gap-4'>
                                <img className=' w-8 h-8' src={image} alt={text} />
                            </a>
                        ))
                    }
                </div>
            </div>

        </div>
        <div className=' bg-red-600l text-gray-500 flex gap-4 items-center mt-12 text-sm'>
            <img className=' w-24 h-24 rounded-full' src="./social-icons/dpc-logo.jpg" alt="" />
            <p>GetBucks is a member of the Deposit Protection Scheme administered by the Deposit Protection Corporation (DPC) in terms of the DPC Act [Chapter] 24:29.<br />Head Office, 1st Floor Unity Court, No. 64 Kwame Nkrumah Ave, Harare, Zimbabwe<br />&copy; GetBucks Bank {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    </section>
  )
}

export default ContactUs
