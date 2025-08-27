import React, { useContext } from 'react'
import { colors } from '../data/colors'
import NavigationContext from '../context/NavigationContext'
import { getNavigationData } from '../data/navigation'

const MobileNavigation = () => {
    const data = getNavigationData.landingPage
    const textColor = colors.primaryColor
    const {mobileNavigation, setMobileNavigation} = useContext(NavigationContext)
    
    const closeNavigation = () => {
        setMobileNavigation(!mobileNavigation)
    }

  return (
   <nav style={{ backgroundColor: colors.backgroundColor }} className=' xl:hidden fixed shadow-lg px-4 top-0 z-20 left-0 right-0 md:w-[384px] bottom-0'>

      <div className=' flex justify-between h-18 items-center'>
        <img className=' cursor-pointer h-14 xl:h-18 mt-4 md:mt-8 w-auto' src="" alt="Getbucks logo" />
        <img onClick={() => {setMobileNavigation(!mobileNavigation)}} className=' cursor-pointer h-8 md:h-10' src='' alt='menu close button' width={'auto'} height={'32px'}  />
      </div>
    
      <ul className={` flex flex-col h-full mt-12 md:mt-24 md:pl-8 items-center md:items-start gap-y-8 text-base md:text-xl lg:text-2xl`} style={{color: textColor}}>
        {
          data?.map(({ active, link, name }) => (
            <a href={`${link}`}>
              <li key={name} className={` px-8 py-2 rounded-4xl text-base hover:scale-105 hover:shadow-gray-300 ${active ? 'bg-[#faa819] text-gray-50 hover:shadow-xl' : 'hover:bg-[#faa819] hover:text-gray-50 hover:shadow-xl'} ease-in-out transition-all`}>
                {name}
              </li>
            </a>
          ))
        }
        <a href={`/contact-us`}>
          <li key={'contact-us'} className={` px-8 py-2 rounded-4xl text-base hover:scale-105 hover:shadow-gray-300 ${ 'hover:bg-[#faa819] hover:text-gray-50 hover:shadow-xl'} ease-in-out transition-all`}>
            {'Contact Us'}
          </li>
        </a>

        {/* <li className=' px-4 py-1 rounded-xl text-lg hover:scale-105'><a onClick={() => closeNavigation()} href="#personal">Personal</a></li>
        <li className=' px-4 py-1 rounded-xl text-lg hover:scale-105'><a onClick={() => closeNavigation()} href="#personal">Business</a></li>
        <li className=' px-4 py-1 rounded-xl text-lg hover:scale-105'><a onClick={() => closeNavigation()} href="#personal">About Us</a></li> */}
        <li style={{ borderColor: colors.primaryColor }} className=' border-3  px-4 rounded-lg text-lg hover:scale-105'><a onClick={() => closeNavigation()} href="#internet">Internet Banking</a></li>
      </ul>

    </nav>
  )
}

export default MobileNavigation
