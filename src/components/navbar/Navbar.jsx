import React, { useState, useEffect } from "react";
import Guest from "../guest/Guest";
import { OverlayTrigger } from "react-bootstrap";
import CalenderInput from "../calender/CalenderInput";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import dayjs from "dayjs";

const Navbar = ({
  initialDestination = "",
  initialCheckin = null,
  initialCheckout = null,
  initialGuests = "Add guests",
}) => {
  const navigate = useNavigate();
  
  const [guestData, setGuestData] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [dates, setDates] = useState([
    dayjs(initialCheckin).isValid() ? dayjs(initialCheckin) : null,
    dayjs(initialCheckout).isValid() ? dayjs(initialCheckout) : null,
  ]);

  useEffect(() => {
    // Populate guestData if props exist
    if (initialGuests) {
      const [adults, children, infants, pets] = parseGuestSummary(initialGuests);
      setGuestData({ adults, children, infants, pets });
    }
  }, [initialGuests]);

  // Parsing guests
  const parseGuestSummary = (summary) => {
    const matches = summary.match(/\d+/g);
    return matches ? matches.map(Number) : [0, 0, 0, 0];
  };

 
 
  const handleGuestUpdate = (data) => setGuestData(data);
  const getGuestSummary = () => {
    const { adults, children, infants, pets } = guestData;
    const summary = [];

    if (adults) summary.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
    if (children) summary.push(`${children} Child${children > 1 ? "ren" : ""}`);
    if (infants) summary.push(`${infants} Infant${infants > 1 ? "s" : ""}`);
    if (pets) summary.push(`${pets} Pet${pets > 1 ? "s" : ""}`);

    return summary.length > 0 ? summary.join(", ") : "Add guests";
  };

  const handleSearch = () => {
    const destination = document.querySelector("input[type='text']").value;
    let [checkin, checkout] = dates;
    if (checkin && !checkout) {
      checkout = checkin.add(1, "day");
      setDates([checkin, checkout]);
    }
    const guestSummary = getGuestSummary();
    navigate("/card", {
      state: {
        destination,
        checkin: checkin?.format("YYYY-MM-DD"),
        checkout: checkout?.format("YYYY-MM-DD"),
        guestSummary,
      },
    });
  };

  return (
    <>
      <header className="container-fluid bg-light py-3 sticky-top">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mt-2">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt="Airbnb Logo"
                width="120"
              />
            </div>
            <div className="d-flex gap-4">
              <a href="/" className="text-dark text-decoration-none fw-bold">
                Stays
              </a>
              <a href="/" className="text-muted text-decoration-none fw-bold">
                Experiences
              </a>
            </div>
            <div className="nav-last">
              <a href="/" className="text-dark text-decoration-none fw-bold">
                Airbnb your home
              </a>
            </div>
          </div>

          <div className="mt-4">
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="d-flex align-items-center border rounded-pill shadow-sm px-4 py-3 bg-white w-100"
                style={{ maxWidth: "1070px", height: "8 0px" }}
              >
                {/* Search criteria */}
                <div className="text-center me-4 border-end pe-3 d-flex flex-column align-items-start">
                  <small className="fw-bold">Where to?</small>
                  <input
                    type="text"
                    className="bg-transparent text-start border-0 p-0"
                    placeholder="Search Destinations" style={{
                      backgroundColor: "transparent",
                      outline: "none",
                    }}
                    defaultValue={initialDestination}
                  />
                </div>

                {/* Calendar Input */}
                <div className="text-center me-4 border-end pe-3 d-flex flex-column align-items-start">
                  <CalenderInput value={dates} onChange={setDates} />
                </div>

                {/* Guest */}
                <div className="text-center me-4 d-flex flex-column align-items-start position-relative"
                  style={{
                    width: "150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={
                      <div className="popover-content p-3 rounded-3">
                        <Guest onGuestUpdate={handleGuestUpdate} />
                      </div>
                    }
                  >
                    <button className="bg-transparent d-block p-0 text-start no-focus-border">
                      <span className="fw-bold">Who?</span> <br />
                      <small className="form-control bg-transparent text-start border-0 p-0">
                        {getGuestSummary()}
                      </small>
                    </button>
                  </OverlayTrigger>
                </div>

                {/* Search button */}
                <div>
                  <button
                    className="btn text-white fw-bold py-2"
                    style={{
                      backgroundColor: "#ff385c",
                      borderRadius: "50px",
                      width: "100px",
                    }}
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </header>
      
    </>
  );
};

export default Navbar;
