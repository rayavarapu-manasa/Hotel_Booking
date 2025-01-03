import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import Footer from './components/footer/Footer';
import PrivacyPolicy from './components/footer components/privacy/PrivacyPolicy';
import TermsOfService from './components/footer components/terms/TermsOfService';
import CompanyDetails from './components/footer components/company/CompanyDetails';
import CustomerResources from './components/footer components/resources/CustomerResources';
import PropertyDetails from './components/detailspage/PropertyDetails';
import ConfirmPay from './components/confirmpay/ConfirmPay';
import Homepage from './components/homepage/Homepage';
import SignUp from "./components/confirmpay/SignUp";
import myFirstContext from './components/context/SearchContext';

function App() {
  const [searchData, setSearchData] = useState({
    destination: "",
    checkin: null,
    checkout: null,
    guestSummary: "Add guests"
  });

  return (
    <div className="main-content">
      <myFirstContext.Provider value={{ searchData, setSearchData }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/company-details" element={<CompanyDetails />} />
          <Route path="/customer-resources" element={<CustomerResources />} />
          <Route path="/rooms" element={<PropertyDetails />} />
          <Route path="/book" element={<ConfirmPay />} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </myFirstContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
