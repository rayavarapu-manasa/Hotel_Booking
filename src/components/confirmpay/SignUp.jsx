
// import "./ConfirmPay.css";

// import "./SignUp.css";

// const SignUp = () => {
    
// const handleSubmit = (event) => {
//         event.preventDefault();
//     };


//     return (
  
//             <div className="signup-container">
//                 <h3 className="text-start mt-1 fw-bold">Sign up to book</h3>
//                 <form onSubmit={handleSubmit} className="signup-form text-start">
//                     <h3 className="form-heading mt-3">Your details</h3>
//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             id="email"
//                             type="email"
//                             className="form-control"
//                             placeholder="Email"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="firstName">First Name</label>
//                         <input
//                             id="firstName"
//                             type="text"
//                             className="form-control"
//                             placeholder="First Name on ID"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="lastName">Last Name</label>
//                         <input
//                             id="lastName"
//                             type="text"
//                             className="form-control"
//                             placeholder="Last Name on ID"
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="dob">Date of Birth</label>
//                         <input
//                             id="dob"
//                             type="date"
//                             className="form-control w-100"
//                             placeholder="Date of Birth"
//                             required
//                         />
//                     </div>
//                     <button
//                         className="btn btn-danger w-100 signup-button"
//                         type="submit"
//                     >
//                         Sign Up
//                     </button>
//                 </form>
//             </div>
//     );
// };

// export default SignUp;

import React from "react";
import "./SignUp.css";

const SignUp = ({ switchToLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sign up successful!");
    switchToLogin(); // Switch back to login after signup
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form text-start">
        <h3 className="form-heading mt-3 mb-3">Your details</h3>
        <div className="form-group">
          <label htmlFor="email" className="mb-2">Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName" className="mb-2">First Name</label>
          <input
            id="firstName"
            type="text"
            className="form-control"
            placeholder="First Name on ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="mb-2">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="form-control"
            placeholder="Last Name on ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob" className="mb-2">Date of Birth</label>
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
  );
};

export default SignUp;
