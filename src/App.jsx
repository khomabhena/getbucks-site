
import { useState } from 'react'
import './App.css'
import NavigationContext from './context/NavigationContext'
import { Route, Routes } from 'react-router-dom'
import Container from './pages/Container'
import MainContent from './pages/MainContent'
import Business from './pages/Business'
import AboutUs from './pages/AboutUs'
import OpenAccount from './pages/OpenAccount'
import Personal from './pages/Personal'
import Diaspora from './pages/Diaspora'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { getLoginData } from './data/login'

function App() {

  const [mobileNavigation, setMobileNavigation] = useState(false)

  return (
    <>
      <NavigationContext.Provider value={{ mobileNavigation, setMobileNavigation }}>
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/business' element={<Business />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/open-account' element={<OpenAccount />} />
          <Route path='/diaspora' element={<Diaspora />} />
          <Route path='/login' element={<Login data={getLoginData.personal} />} />
          <Route path='/login-diapora' element={<Login data={getLoginData.diaspora} />} />
          <Route path='/login-business' element={<Login data={getLoginData.business} />} />
        </Routes>
      </NavigationContext.Provider>
    </>
  )
}

export default App
