// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../navbar/Navbar";
// import "./Card.css";
// import myFirstContext from "../context/SearchContext";

// const Card = () => {
//   const { searchData } = useContext(myFirstContext);
//   const locationData = useLocation();
//   const navigateView = useNavigate();
//   const { state } = locationData || {};
//   const { destination, checkin, checkout, guestSummary } = state || {};
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         `http://183.82.106.55:9103/city/search?destination=${destination}&maxPersons=2`
//       )
//       .then((res) => {
//         console.log("API Response Data:", res.data);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, [searchData.destination]);

//   const handleView = (hotel) => {
//     // Passing hotel data including pricePerNight
//     navigateView("/rooms", { state: { hotel, pricePerNight: hotel.pricePerNight } });
//   };

//   return (
//     <>
//       <Navbar
//         initialDestination={searchData.destination}
//         initialCheckin={searchData.checkin}
//         initialCheckout={searchData.checkout}
//         initialGuests={searchData.guestSummary}
//       />
//       <div className="container" style={{ marginBottom: "60px" }}>
//         {data.length > 0 ? (
//           <div className="row">
//             {dataata.map((city) =>
//               city.hotels.map((hotel) => (
//                 <div className="col-lg-4" key={hotel.id}>
//                   <div className="card shadow-sm mt-4">
//                     <img
//                       src={
//                         hotel.imageUrl ||
//                         "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=1200&im_format=avif"
//                       }
//                       className="card-img-top"
//                       alt="Property"
//                       style={{ height: "200px", objectFit: "cover" }}
//                     />
//                     <div className="card-body">
//                       <p className="text-muted fs-6 mb-1">
//                         {city.cityName || "Unknown Location"}
//                       </p>
//                       <h6 className="card-title">
//                         {hotel.name || "Beautiful Property"}
//                       </h6>
//                       <p className="card-text">
//                         {hotel.description
//                           ? hotel.description.slice(0, 50) +
//                             (hotel.description.length > 50 ? "..." : "")
//                           : "Enjoy a cozy stay at our place."}
//                       </p>
//                       <div className="d-flex justify-content-between align-items-center">
//                         <span className="text-dark fw-bold">
//                           ₹{hotel.pricePerNight || "0"}{" "}
//                           <span className="text-muted">/ night</span>
//                         </span>
//                         <a
//                           className="btn btn-outline-primary btn-sm"
//                           onClick={() => handleView(hotel)}
//                         >
//                           View
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         ) : (
//           <p className="text-center">No data available</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Card;


import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import myFirstContext from "../context/SearchContext";
import "./Card.css";

const Card = () => {
  const { searchData } = useContext(myFirstContext); // Access context here
  const { destination, checkin, checkout, guestSummary } = searchData; // Get searchData from context
  const navigateView = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://183.82.106.55:9103/city/search?destination=${destination}&maxPersons=2`
      )
      .then((res) => {
        console.log("API Response Data:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [destination]);

  const handleView = (hotel) => {
    navigateView("/rooms", { state: { hotel, pricePerNight: hotel.pricePerNight } });
  };

  return (
    <>
      <Navbar
        initialDestination={destination}
        initialCheckin={checkin}
        initialCheckout={checkout}
        initialGuests={guestSummary}
      />
      <div className="container" style={{ marginBottom: "60px" }}>
        {data.length > 0 ? (
          <div className="row">
            {data.map((city) =>
              city.hotels.map((hotel) => (
                <div className="col-lg-4" key={hotel.id}>
                  <div className="card shadow-sm mt-4">
                    <img
                      src={hotel.imageUrl || "default_image_url"}
                      className="card-img-top"
                      alt="Property"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="text-muted fs-6 mb-1">
                        {city.cityName || "Unknown Location"}
                      </p>
                      <h6 className="card-title">
                        {hotel.name || "Beautiful Property"}
                      </h6>
                      <p className="card-text">
                        {hotel.description
                          ? hotel.description.slice(0, 50) +
                            (hotel.description.length > 50 ? "..." : "")
                          : "Enjoy a cozy stay at our place."}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-dark fw-bold">
                          ₹{hotel.pricePerNight || "0"}{" "}
                          <span className="text-muted">/ night</span>
                        </span>
                        <a
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleView(hotel)}
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <p className="text-center">No data available</p>
        )}
      </div>
    </>
  );
};

export default Card;
