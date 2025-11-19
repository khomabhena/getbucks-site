import React, { useContext } from 'react'
import { colors } from '../data/colors'
import NavigationContext from '../context/NavigationContext'
import { getNavigationData } from '../data/navigation'

const MainNavigation = ({ scrollPosition, data, prefix = '' }) => {
    const {mobileNavigation, setMobileNavigation}= useContext(NavigationContext)
   const primaryColor = colors.primaryColor
    if (!data) {
      data = getNavigationData.landingPage
    }

  return ( 
    <nav style={{ boxShadow: colors.primaryColor, backgroundColor: colors.backgroundColor }} className={` fixed ${scrollPosition > 82 ? ' shadow-xl shadow-[#faa819]/10' : ' shadow-lg' } shadow-[#faa819]/30l shadow-lgk sha top-0 left-0 right-0 m-auto w-full max-w-[1920px] z-20 flex justify-between items-center px-8 md:px-12 lg:px-24 2xl:px-32 h-16 md:h-24 ease-in-out transition-all`}>

      <a href="/">
        <img className=' cursor-pointer h-8 md:h-10 xl:h-14 w-auto hover:scale-105 ease-in-out transition-all' src="/logo.png" height={'auto'}  alt="White Appletree logo" />
      </a>

      <ul className=' hidden z-30 xl:flex gap-2 text-base pr-4' style={{ color: primaryColor }}>
        {
          data.map(({ active, link, name, subMenu }) => (
            <>
              <li key={name} className={`group relative hover:scale-105 hover:shadow-gray-300  ease-in-out transition-all`}>
            <a key={name} className={` px-8 py-2 rounded-4xl text-sm ${active ? 'bg-[#faa819] text-gray-50 hover:shadow-xl' : 'hover:bg-[#faa819] hover:text-gray-50 hover:shadow-xl'}`} href={`${prefix}${link}`}>
                {name}
            </a>
              {
              subMenu[0] && 
            <div className={` ${subMenu[0] ? 'flex' : ' hidden'} hidden group-hover:flex absolute top-0 flex-col gap-8 h-fit pt-14 pb-12 font-semiboldl text-xl left-0`}>
              <div style={{ backgroundColor: colors.backgroundColor }} className=' rounded-bl-2xl rounded-br-2xl flex flex-col shadow-2xl px-8 py-8 gap-8'>
              {
                subMenu.map(({name, link}) => (
                    <a key={name} href={link} style={{ backgroundColor: colors.backgroundColor }}><li className=' text-sm w-24 hover:underline'>{name}</li></a>
                ))
              }
              </div>
            </div>}
              </li>
            </>
          ))
        }
        <li style={{ borderColor: primaryColor }} className=' border-3 -mt-1  px-4 py-1 rounded-4xl text-sm hover:scale-105 hover:shadow-gray-300 hover:border-green-900 hover:bg-[#faa819] hover:text-gray-50 hover:shadow-xl ease-in-out transition-all'><a target='_blank' href={`https://getbucksonline.com/login`}>Internet Banking</a></li>
      </ul>

      {!mobileNavigation && <img onClick={() => {setMobileNavigation(!mobileNavigation)}} className=' xl:hidden cursor-pointer h-8 w-8 md:h-10 md:w-10' src='/menu.svg' width={'auto'} height={'24px'} alt='menu close icon'  />}
      {mobileNavigation && <img onClick={() => {setMobileNavigation(!mobileNavigation)}} className=' xl:hidden cursor-pointer h-10 w-10' src='/close.svg' width={'auto'} height={'32px'} alt='menu close icon'  />}
    </nav>
  )
}

export default MainNavigation
