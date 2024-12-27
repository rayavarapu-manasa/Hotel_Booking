import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./ConfirmPay.css";

const ConfirmPay = () => {
  const location = useLocation();
  const { checkin, checkout, guestSummary } = location.state || {};
  const [countryRegion, setCountryRegion] = useState("India (+91)");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Country/Region:", countryRegion);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div>
      <nav className="mt-1 ms-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="error while fetching.."
          width="120"
        />
      </nav>
      <hr />
      <div className="container">
        <h1>Request to book</h1>

        <h4 className="text-center mb-4 d-flex flex-start mt-5">Your Trip</h4>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <div className="d-flex flex-row justify-content-between">
                <label htmlFor="dates">Dates</label>
                <a href="#" className="text-black fw-bold">Edit</a>
              </div>
              <p>
                {checkin && checkout
                  ? `${checkin} - ${checkout}`
                  : "Dates not selected"}
              </p>
            </div>
            <div className="mb-3">
              <div className="d-flex flex-row justify-content-between">
                <label htmlFor="guests">Guests</label>
                <a href="#" className="text-black fw-bold">Edit</a>
              </div>
              <p>{guestSummary || "No guests selected"}</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <Image
                src="hostel-image.jpg"
                alt="Hostel Image"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Zostel Shangri | Standard Private Room
                </h5>
                <p className="card-text">Room in hostel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5">
            <h3>Log in or sign up to book</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 mt-5">
                <Form.Select
                  id="countryRegion"
                  value={countryRegion}
                  onChange={(e) => setCountryRegion(e.target.value)}
                >
                  <option>India (+91)</option>
                  {/* Add more country options here */}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>

              <Button className="continuebtn" type="submit">
                Continue
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPay;
