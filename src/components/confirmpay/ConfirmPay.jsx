import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./ConfirmPay.css";
import myFirstContext from "../context/SearchContext";

import LoginComp from "../navbar/LoginComp";

const ConfirmPay = () => {
  
  const { searchData } = useContext(myFirstContext);
  const location = useLocation();
  const {hotel,pricePerNight, checkin, checkout, guestSummary } = location.state || {};
  if (!hotel) {
    return <p className="text-center">No hotel data available.</p>;
  }
  const [startDate, setStartDate] = useState(searchData.checkin || '1/1/2025');
  const [endDate, setEndDate] = useState(searchData.checkout || '1/2/2025');
  const [guests, setGuests] = useState(searchData.guestSummary || 1);
 
  const calculateNights = () => {
    const checkinDate = new Date(startDate);
    const checkoutDate = new Date(endDate);
    const diffTime = checkoutDate - checkinDate;

    // Check if dates are valid
    if (diffTime > 0) {
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0; // Default to 0 if dates are invalid
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const basePrice = nights * pricePerNight;
    const serviceFee = basePrice * 0.2; // 20% service fee
    return nights > 0 ? basePrice + serviceFee : 0;
  };
  const totalAmount=calculateTotal();

  const calculateServiceFee = () => {
    const nights = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const basePrice = nights * pricePerNight;
    return basePrice * 0.2; // 20% service fee
  };

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

        <h1 className="text-start mb-4">Confirm and Pay</h1>
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
            <LoginComp totalAmount={totalAmount}/>
          </div>

          <div className="col-md-5">
            <div className="card airbnb-card shadow-sm">
              <div className="d-flex p-3 align-items-start">
                <img
                  src={hotel.imageUrl || "default_image.jpg"}
                  alt="Hotel"
                  className="hotel-image"
                />
                <div className="ms-3 mt-3">
                  <h5 className="hotel-name">{hotel.name}</h5>
                  <p className="hotel-description">{hotel.description}</p>
                </div>
              </div>
              <div className="card-body border-top pt-3">
                <div className="price-summary">
                <h3>Price Details</h3>
                  <div className="d-flex justify-content-between mt-3">
                    <p>₹{pricePerNight} × {calculateNights()} nights</p>
                    <span>₹{pricePerNight * calculateNights()}</span>
                  </div>
                  <div className="d-flex justify-content-between mt-4 border-2 border-bottom ">
                    <p className="mb-3">Service Fee</p>
                    <span>₹{calculateServiceFee()}</span>
                  </div>
                  <hr/>
                  <div className="d-flex justify-content-between mt-1 ">
                    <p className="fw-bold">Total</p>
                    <span className="fw-bold">₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default ConfirmPay;

