import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Card from "./components/card/Card";
import Footer from './components/footer/Footer';
import PrivacyPolicy from './components/footer components/privacy/PrivacyPolicy';
import TermsOfService from './components/footer components/terms/TermsOfService';
import CompanyDetails from './components/footer components/company/CompanyDetails';
import CustomerResources from './components/footer components/resources/CustomerResources';
import PropertyDetails from './components/detailspage/PropertyDetails';
import ConfirmPay from './components/confirmpay/ConfirmPay';
import Homepage from './components/homepage/Homepage';


function App() {
  return (
    <>
    <div className='main-content'>
    <Router>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/card" element={<Card/>}/>
    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route path="/terms" element={<TermsOfService/>}/>
    <Route path="/company-details" element={<CompanyDetails/>}/>
    <Route path="/customer-resources" element={<CustomerResources/>}/>
    <Route path="/rooms" element={<PropertyDetails/>}/>
    <Route path="/book" element={<ConfirmPay/>}/>
    </Routes>
    </Router>
    </div>
    <Footer/>
   </>
  )
}

export default App
