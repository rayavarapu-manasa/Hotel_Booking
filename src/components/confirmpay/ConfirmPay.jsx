import React, { useState, useContext } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./ConfirmPay.css";
import myFirstContext from "../context/SearchContext";
import axios from 'axios';
const ConfirmPay = () => {
  const navigateConfirm = useNavigate();
  const { searchData } = useContext(myFirstContext);
  const location = useLocation();
  const { hotel, checkin, checkout, guestSummary } = location.state || {};
  const [startDate, setStartDate] = useState(searchData.checkin || '1/1/2025');
  const [endDate, setEndDate] = useState(searchData.checkout || '2/1/2025');
  const [guests, setGuests] = useState(searchData.guestSummary || 1);
  const [countryRegion, setCountryRegion] = useState("India (+91)");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");

  const [storeOtp,setStoreOtp] = useState()


  const handleSubmit = (event) => {
    event.preventDefault();

   
    const now = new Date();
      
    // Get the current date and time components
    const year = now.getFullYear();  // 4 digits
    const month = now.getMonth() + 1;  // Month (1-12)
    const day = now.getDate();  // Day of the month (1-31)
    const hours = now.getHours();  // Hours (0-23)
    const minutes = now.getMinutes();  // Minutes (0-59)
    const seconds = now.getSeconds();  // Seconds (0-59)
    
    // Combine these components to generate a unique number
    const combined = `${year}${month}${day}${hours}${minutes}${seconds}`;
    
    // Extract the last 4 digits of the combined string
    const ipOtpForMobile = combined.slice(-4);  // Take the last 4 digits

  setStoreOtp(ipOtpForMobile);
  console.log(storeOtp,ipOtpForMobile);
const message = `Dear customer, use this OTP ${ipOtpForMobile} to signup into your Quality Thought Next account. This OTP will be valid for the next 15 mins.` ;

// URL-encode the message
const encodedMessage = encodeURIComponent(message);

// API URL
const apiUrl = `https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF&t_id=1707170494921610008&to_mobileno=${phoneNumber}&sms_text=${encodedMessage}` ;
axios.get(apiUrl).then((res)=>{console.log(res)});
setShowOtpField(true);
    console.log("Country/Region:", countryRegion);
    console.log("Phone Number:", phoneNumber);


  };

    const handleConfirm = () => {
    navigateConfirm("/signup", {
      state: {
        hotel,
        checkin: startDate,
        checkout: endDate,
        guestSummary: guests,
      },
    });
  };
  const handleOtpSubmit = (event) => {
    event.preventDefault();

 
    if (otp.length !== 4 || !/^\d+$/.test(otp)) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    // alert("OTP verified successfully!");
   
  };

  if (!hotel) {
    return <p className="text-center">Hotel data not available.</p>;
  }


  const handleVerifyOtpForMobile=()=>{
    console.log(otp,storeOtp);
    if(otp == storeOtp)
    {
      alert('Mobile Number Verified');
    }else{
      alert('Invalid Otp');
    }
  }


//   // api for mobilr otp
//   // const phoneNumber = values1.phoneNumber; // Assuming values.phoneNumber1 is defined
// const message = "Dear customer, use this OTP 1124 to signup into your Quality Thought Next account. This OTP will be valid for the next 15 mins." ;

// // URL-encode the message
// const encodedMessage = encodeURIComponent(message);

// // API URL
// const apiUrl = `https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF&t_id=1707170494921610008&to_mobileno=${phoneNumber}&sms_text=${encodedMessage}` ;

  // const apiUrl = https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF&t_id=1707170494921610008&to_mobileno=${phoneNumber}&sms_text=${encodedMessage} ;
  return (
    <>
      <nav className="mt-3 ms-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="Airbnb Logo"
          width="100"
        />
      </nav>
      <hr />
      <div className="container mt-5">

        <h1 className="text-start mb-4">Request to book</h1>
        <h4 className="text-start mb-3 mt-5">Your Trip</h4>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="mb-3 select-dates-container">
              <div className="d-flex justify-content-between">
                <label htmlFor="dates" className="fw-bold">Dates</label>
                <a href="#" className="text-black fw-bold">Edit</a>
              </div>
              <div className="select-dates">
                <p>{startDate} - {endDate}</p>
              </div>
            </div>
            <div className="mb-3 select-dates-container">
              <div className="d-flex justify-content-between">
                <label htmlFor="guests" className="fw-bold">Guests</label>
                <a href="#" className="text-black fw-bold">Edit</a>
              </div>
              <p>{guests}</p>
            </div>

            <hr />

            <div className="">
              <h3 className="text-start mt-5">Log in or sign up to book</h3>
              <form onSubmit={showOtpField ? handleOtpSubmit : handleSubmit}>
                {!showOtpField && (
                  <>
                    <div className="mb-3 mt-4">
                      <select
                        id="countryRegion"
                        value={countryRegion}
                        onChange={(e) => setCountryRegion(e.target.value)}
                        className="form-select"
                      >
                        <option>India (+91)</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        id="phoneNumber"
                        placeholder="Phone number"
                        value={phoneNumber}
                        maxLength="10"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <button className="btn btn-danger w-100" type="submit">
                      Continue
                    </button>
                  </>
                )}

                {showOtpField && (
                  <>
                    <div className="mb-3 mt-4">
                      <label htmlFor="otp" className="fw-bold mb-3">Enter OTP</label>
                      <input
                        type="text"
                        id="otp"
                        placeholder="6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="form-control"
                      />
                    </div>
                    <button className="btn btn-danger w-100" onClick={handleVerifyOtpForMobile}>
                      Verify OTP
                    </button>
                  </>
                )}
              </form>
              <p className="mt-3">Don't have an account? <span className="text-primary" onClick={handleConfirm}>Signup Here</span></p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm rounded-lg">
              <img
                src={hotel.imageUrl || "default_image.jpg"}
                alt="Hotel Image"
                className="card-img-top rounded-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{hotel.name || "Hotel Name"}</h5>
                <p className="card-text">{hotel.description || "Room description"}</p>
               
              </div>
              <div className="card-footer text-muted">
                <p className="m-0">Location: {hotel.address || "Unknown Location"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPay;
