import React from 'react'
import { getContactData } from '../data/contact-us'
import { colors } from '../data/colors'
import FooterLinks from '../components/FooterLinks'

const ContactUs = () => {
    const data = getContactData

  return (
    <footer className=' mt-24 pb-12 flex-col justify-center items-center bg-red-600l'>
        <h2 className=' text-2xl xl:text-4xl lg:text-center font-semibold invisible'>Contact Us</h2>
        <div className=' mt-12 flex flex-col xl:flex-row w-full'>

            <div className=' basis-1/4 flex flex-col items-centerc'>
                {/* <div className=''> */}
                <p className='text-lg font-semibold text-gray-800 mb-4'>Get Our Apps</p>
                <a className=' hover:scale-105 ease-in-out transition-all' href="https://apps.apple.com/zw/app/getbucks-mobile-banking/id1437807974" target='_blank'>
                    <img className=' w-[150px] h-auto' height={'40px'} width={'80px'} src="./social-icons/app-store.png" alt="" />
                </a>
                <a className=' hover:scale-105 ease-in-out transition-all mt-3' href="https://play.google.com/store/apps/details?id=com.getbucks.banking.gb&pcampaignid=web_share" target='_blank'>
                    <img className=' w-[150px] h-auto' height={'40px'} width={'80px'} src="./social-icons/google-play.png" alt="" />
                </a>
                {/* </div> */}
            </div>

            <FooterLinks data={data?.footerLinks?.banking} heading={"Get Started"} />

            <FooterLinks data={data?.footerLinks?.company} heading={"Company"} />

            <FooterLinks data={data?.footerLinks?.policies} heading={"Policies"} />

        </div>
        <p className=' mt-24 text-lg font-semibold text-gray-800'>Connect with Us</p>
        <div className=' mt-4 flex gap-4'>
            {
                data?.socialIcons?.map(({ image, link, text }) => (
                    <a key={link} target='_blank' rel='noreferrer' href={link} className=' hover:scale-105 transition-all ease-in-out flex items-center gap-4'>
                        <img className=' w-8 h-8' src={image} alt={text} />
                    </a>
                ))
            }
        </div>
        <p className=' hidden'>+263 861257 0000</p>
        <div className=' bg-red-600l text-gray-500 flex flex-col md:flex-row text-center md:text-start gap-4 items-center mt-24 text-sm'>

            <img className=' w-18 h-18 rounded-full' src="./social-icons/dpc-logo.jpg" alt="" />
            <p>GetBucks is registered in Zimbabwe as GetBucks Bank (No. 00000263). We are a member of the Deposit Protection Scheme administered by the Deposit Protection Corporation (DPC) in terms of the DPC Act [Chapter] 24:29.<br />Head Office, 1st Floor Unity Court, No. 64 Kwame Nkrumah Ave, Harare, Zimbabwe<br />&copy; GetBucks Bank {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default ContactUs
