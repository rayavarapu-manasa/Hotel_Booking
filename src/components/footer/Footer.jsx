import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-light text-dark border-top">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 d-flex flex-column flex-md-row align-items-md-center gap-3">
            <p className="mb-0">&copy; 2024, Airbnb, Inc.</p>
            <a href="/privacy-policy" className="text-decoration-none text-dark">Privacy</a>
            <a href="/terms" className="text-decoration-none text-dark">Terms</a>
            <a href="" className="text-decoration-none text-dark">Sitemap</a>
            <a href="/company-details" className="text-decoration-none text-dark">Company Details</a>
          </div>
          {/* Right Section */}
          <div className="col-md-6 d-flex justify-content-md-end flex-column flex-md-row align-items-md-center gap-5">
            <a href="#" className="text-decoration-none text-dark fw-bold">English (IN)</a>
            <a href="#" className="text-decoration-none text-dark fw-bold">INR</a>
            <a href="/customer-resources" className="text-decoration-none text-dark fw-bold">Support & Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
