// import React, { useState, useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./ConfirmPay.css";
// import myFirstContext from "../context/SearchContext";
// import "./SignUp.css";

// const SignUp = () => {
//     const navigateConfirm = useNavigate();
//     const { searchData } = useContext(myFirstContext);
//     const location = useLocation();
//     const { hotel, checkin, checkout, guestSummary } = location.state || {};
//     const [startDate, setStartDate] = useState(searchData.checkin || '1/1/2025');
//     const [endDate, setEndDate] = useState(searchData.checkout || '2/1/2025');
//     const [guests, setGuests] = useState(searchData.guestSummary || 1);


//     const handleSubmit = (event) => {
//         event.preventDefault();

//     };


//     return (
//         <>
//             <nav className="mt-3 ms-5">
//                 <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
//                     alt="Airbnb Logo"
//                     width="100"
//                 />
//             </nav>
//             <hr />
//             <div className="container mt-5">

//                 <h1 className="text-start mb-4">Request to book</h1>
//                 <h4 className="text-start mb-3 mt-5">Your Trip</h4>

//                 <div className="row">

//                     <div className="col-md-6 mb-4">
//                         <div className="mb-3">
//                             <div className="d-flex justify-content-between">
//                                 <label htmlFor="dates" className="fw-bold">Dates</label>
//                                 <a href="#" className="text-black fw-bold">Edit</a>
//                             </div>
//                             <div className="select-dates">
//                                 <p>{startDate} - {endDate}</p>
//                             </div>
//                         </div>
//                         <div className="mb-3">
//                             <div className="d-flex justify-content-between">
//                                 <label htmlFor="guests" className="fw-bold">Guests</label>
//                                 <a href="#" className="text-black fw-bold">Edit</a>
//                             </div>
//                             <p>{guests}</p>
//                         </div>

//                         <hr />



//                     </div>

//                     <div className="signup-container">
//                         <h3 className="text-start mt-2 fw-bold">Sign up to book</h3>
//                         <form onSubmit={handleSubmit} className="signup-form">
//                             <h3 className="form-heading">Your details</h3>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email</label>
//                                 <input
//                                     id="email"
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Email"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="firstName">First Name</label>
//                                 <input
//                                     id="firstName"
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="First Name on ID"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="lastName">Last Name</label>
//                                 <input
//                                     id="lastName"
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Last Name on ID"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="dob">Date of Birth</label>
//                                 <input
//                                     id="dob"
//                                     type="date"
//                                     className="form-control"
//                                     placeholder="Date of Birth"
//                                     required
//                                 />
//                             </div>
//                             <button
//                                 className="btn btn-danger w-100 signup-button"
//                                 type="submit"
//                             >
//                                 Sign Up
//                             </button>
//                         </form>
//                     </div>

//                     <div className="col-md-6 cardview">
//                         <div className="card shadow-sm rounded-lg">
//                             <img
//                                 src={hotel.imageUrl || "default_image.jpg"}
//                                 alt="Hotel Image"
//                                 className="card-img-top rounded-top"
//                                 style={{ height: "250px", objectFit: "cover" }}
//                             />
//                             <div className="card-body">
//                                 <h5 className="card-title">{hotel.name || "Hotel Name"}</h5>
//                                 <p className="card-text">{hotel.description || "Room description"}</p>
//                             </div>
//                             <div className="card-footer text-muted">
//                                 <p className="m-0">Location: {hotel.address || "Unknown Location"}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>



//             </div>
//         </>
//     );
// };

// export default SignUp;


import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmPay.css";
import myFirstContext from "../context/SearchContext";
import "./SignUp.css";

const SignUp = () => {
    const navigateConfirm = useNavigate();
    const { searchData } = useContext(myFirstContext);
    const location = useLocation();
    const { hotel, checkin, checkout, guestSummary } = location.state || {};
    const [startDate, setStartDate] = useState(searchData.checkin || '1/1/2025');
    const [endDate, setEndDate] = useState(searchData.checkout || '2/1/2025');
    const [guests, setGuests] = useState(searchData.guestSummary || 1);

    const handleSubmit = (event) => {
        event.preventDefault();
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
                <h1 className="text-start mb-4">Request to book</h1>
                <h4 className="text-start mb-3 mt-5">Your Trip</h4>
                <div className="row">
                    <div className="col-md-7">
                        <div className="trip-details mb-4">
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <label htmlFor="dates" className="fw-bold">Dates</label>
                                    <a href="#" className="text-black fw-bold">Edit</a>
                                </div>
                                <p>{startDate} - {endDate}</p>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <label htmlFor="guests" className="fw-bold">Guests</label>
                                    <a href="#" className="text-black fw-bold">Edit</a>
                                </div>
                                <p>{guests}</p>
                            </div>
                        </div>

                        <hr />

                        <div className="signup-container">
                            <h3 className="text-start mt-1 fw-bold">Sign up to book</h3>
                            <form onSubmit={handleSubmit} className="signup-form text-start">
                                <h3 className="form-heading mt-3">Your details</h3>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name on ID"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name on ID"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dob">Date of Birth</label>
                                    <input
                                        id="dob"
                                        type="date"
                                        className="form-control w-100"
                                        placeholder="Date of Birth"
                                        required
                                    />
                                </div>
                                <button
                                    className="btn btn-danger w-100 signup-button"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </form>
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

export default SignUp;

