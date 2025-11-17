
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
import { getLoginData } from './data/login'
import { getNavigationData } from './data/navigation'
import InvestorRelations from './pages/InvestorRelations'
import OurBoard from './pages/OurBoard'
import Management from './pages/Management'
import FinancialReports from './pages/FinancialReports'
import Events from './pages/Events'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ContactUsPage from './pages/ContactUsPage'
import { getAdditionalInformationData, getPrivacyPolicy, getTermsAndConditionsData } from './data/privacy-policy'

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
          <Route path='/contact-us' element={<ContactUsPage data={getLoginData.contactUs} navData={getNavigationData.aboutUs} />} />

          <Route path='/investor-relations' element={<InvestorRelations />} />
          <Route path='/board-members' element={<OurBoard navData={getNavigationData.landingPage } />} />
          <Route path='/management' element={<Management navData={getNavigationData.landingPage } />} />
          <Route path='/financial-reports' element={<FinancialReports navData={getNavigationData.landingPage } />} />
          <Route path='/events' element={<Events navData={getNavigationData.landingPage } />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy navData={getNavigationData.landingPage } title={"Privacy Policy"} data={getPrivacyPolicy} />} />
          <Route path='/terms' element={<PrivacyPolicy navData={getNavigationData.landingPage } title={"Terms and Conditions"} data={getTermsAndConditionsData} />} />
          <Route path='/info' element={<PrivacyPolicy navData={getNavigationData.landingPage } title={"Additional Information"} data={getAdditionalInformationData} />} />
        </Routes>
      </NavigationContext.Provider>
    </>
  )
}

export default App
