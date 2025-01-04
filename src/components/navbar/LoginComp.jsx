import React, { useState } from 'react';
import axios from 'axios';
import SignUp from '../confirmpay/SignUp';
// import { GoogleLogin } from 'react-google-login';

function LoginComp() {
  const [countryRegion, setCountryRegion] = useState("India (+91)");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [otp, setOtp] = useState("");
  const [storeOtp, setStoreOtp] = useState("");
  const [isLogin, setIsLogin] = useState(false);

 {/*const clientId = '523536851143-rarl2hk2a0lats3cvddo2dlt70at0oc3.apps.googleusercontent.com';
}
  const onSuccess = (response) => {
    console.log('Login Success:', response.profileObj);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };*/}

  const handleSubmit = (event) => {
    event.preventDefault();

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const combined = `${year}${month}${day}${hours}${minutes}${seconds}`;
    const ipOtpForMobile = combined.slice(-4);

    setStoreOtp(ipOtpForMobile);
    setShowOtpField(true);

    const message = `Dear customer, use this OTP ${ipOtpForMobile} to signup into your Quality Thought Next account. This OTP will be valid for the next 15 mins.`;
    const encodedMessage = encodeURIComponent(message);

    const apiUrl = `https://login4.spearuc.com/MOBILE_APPS_API/sms_api.php?type=smsquicksend&user=qtnextotp&pass=987654&sender=QTTINF&t_id=1707170494921610008&to_mobileno=${phoneNumber}&sms_text=${encodedMessage}`;
    
    axios.get(apiUrl).then((res) => {
      console.log("API Response:", res);
    });

    console.log("Country/Region:", countryRegion);
    console.log("Phone Number:", phoneNumber);
    console.log("Generated OTP:", ipOtpForMobile);
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();

    if (otp.length !== 4 || !/^\d+$/.test(otp)) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }
  };

  const handleVerifyOtpForMobile = () => {
    console.log("Entered OTP:", otp, "Stored OTP:", storeOtp);
    if (otp === storeOtp) {
      setIsLogin(true);
      alert('Mobile Number Verified');
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div>
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
                required
              />
            </div>
            <button className="btn btn-danger w-100" type="submit">
              Continue
            </button>
          </>
        )}

        {showOtpField && (
          <>
            {!isLogin ? (
              <div>
                <div className="mb-3 mt-4">
                  <label htmlFor="otp" className="fw-bold mb-3">Enter OTP</label>
                  <input
                    type="text"
                    id="otp"
                    placeholder="4-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button
                  className="btn btn-danger w-100"
                  type="button"
                  onClick={handleVerifyOtpForMobile}
                >
                  Verify OTP
                </button>
              </div>
            ) : (
              <div>
                <SignUp />
              </div>
            )}
          </>
        )}
      </form>

      {/*<div>
      
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>*/}
    </div>
  );
}

export default LoginComp;
