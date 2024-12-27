import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./PropertyDetails.css";
import Navbar from "../navbar/Navbar";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BathtubIcon from "@mui/icons-material/Bathtub";
import YardIcon from "@mui/icons-material/Yard";
import PetsIcon from "@mui/icons-material/Pets";
import WifiIcon from "@mui/icons-material/Wifi";

function PropertyDetails() {
  const navigate=useNavigate();
  const location = useLocation();
  const { state } = location || {};
  const { hotel } = state || {};

  if (!hotel) {
    return <p className="text-center">No hotel data available.</p>;
  }

  const handleReserve=()=>{
    navigate("/book");
  }
  return (
    <>

      <Navbar />
      <div className="container property">

        <div>
          <h4>{hotel.description || "Beautiful Hotel Stay"}</h4>
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {hotel.extraImgs?.length >= 4 ? (
            <div className="grid-container">
              {/* Large image on the left */}
              <div className="image-item large-image">
                <img src={hotel.imageUrl} alt="Hotel Main Image" />
              </div>

              {/* Four smaller images on the right */}
              <div className="small-images">
                {hotel.extraImgs.slice(0, 4).map((img, index) => (
                  <div className="image-item small-image" key={index}>
                    <img src={img} alt={`Hotel Extra Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="image-item large-image">
              <img
                src={hotel.imageUrl}
                alt="Main Hotel Image"
                className="img-fluid"
              />
            </div>
          )}
        </div>

        <div className="container ms-5">
          <h4>{hotel.name}</h4>
          <div className="hotel-details">
            <p><strong>Guests:</strong> {hotel.maxPersons || "Not Available"}</p>
            <p><strong>Bedrooms:</strong> {hotel.bedrooms || "Not Available"}</p>
            <p><strong>Beds:</strong> {hotel.beds || "Not Available"}</p>
            <p><strong>Bathrooms:</strong> {hotel.bathrooms || "Not Available"}</p>
          </div>

        </div>

        <hr />

        {/* Amenities */}
        <div className="hotel-layout">
          <div className="left-content">
            <h5>
              <strong>What this place offers</strong>
            </h5>
            <div className="amenities">
              <div className="amenities-left">
                <p><WifiIcon /> Wifi</p>
                <p><PetsIcon /> Pets allowed</p>
                <p><YardIcon /> Garden View</p>
              </div>
              <div className="amenities-right">
                <p><BathtubIcon /> Bathing Products</p>
                <p><LibraryBooksIcon /> Books and Reading material</p>
                <p><BreakfastDiningIcon /> Breakfast</p>
              </div>
            </div>
          </div>

          <div className="right-content">
            <div className="container mt-4">
              <h3>Book Your Stay</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="checkIn" className="form-label">Check-in</label>
                  <input type="date" className="form-control" id="checkIn" />
                </div>
                <div className="mb-3">
                  <label htmlFor="checkOut" className="form-label">Check-out</label>
                  <input type="date" className="form-control" id="checkOut" />
                </div>
                <div className="mb-3">
                  <label htmlFor="guests" className="form-label">Guests</label>
                  <input type="number" className="form-control" id="guests" placeholder="1" />
                </div>
                <button onClick={handleReserve} className="Reserve-btn">Reserve</button>

                <p className="d-flex justify-content-center mt-2">You wont be charged yet</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
