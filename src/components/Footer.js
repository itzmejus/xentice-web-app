import React from "react";
import "../styles/HomePage.css";

function Footer() {
  return (
    <div className="container-fluid bgColor text-muted pb-4">
      <div className="row ms-3 me-3 ">
        <div className="xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
          <h2 className="pb-3 text-white">ABOUT</h2>
          <h5 className="fs-6">How Xentice works</h5>
          <h5 className="fs-6">Founders Letter</h5>
          <h5 className="fs-6">Newsroom</h5>
          <h5 className="fs-6">Investors</h5>
          <h5 className="fs-6">Xentice Gold</h5>
          <h5 className="fs-6">Xentice Platinum</h5>
          <h5 className="fs-6">Startup Support</h5>
          <h5 className="fs-6">Careers</h5>
        </div>
        <div className="xl-3 col-lg-3 col-md-6 col-sm-12  mt-4">
          <h2 className="pb-3 text-white">EXPLORE</h2>
          <h5 className="fs-6">Diversity & Discrimination</h5>
          <h5 className="fs-6">Accessibility</h5>
          <h5 className="fs-6">Xentice Associates</h5>
          <h5 className="fs-6">Xentice Team</h5>
          <h5 className="fs-6">Xentice Mall</h5>
          <h5 className="fs-6">Xstudio</h5>
          <h5 className="fs-6">Xmoney</h5>
          <h5 className="fs-6">Entice Spaces</h5>
        </div>
        <div className="xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
          <h2 className="pb-3 text-white">SERVICES</h2>
          <h5 className="fs-6">Buttons & Badges</h5>
          <h5 className="fs-6">Mobile Apps</h5>
          <h5 className="fs-6">For Companies</h5>
          <h5 className="fs-6">Mobile Apps</h5>
          <h5 className="fs-6">Review Professionals</h5>
          <h5 className="fs-6">Suggested Professionals</h5>
          <h5 className="fs-6">Resource Centre</h5>
          <h5 className="fs-6">Community Centre</h5>
        </div>
        <div className="xl-3 col-lg-3 col-md-6 col-sm-12 mt-4">
          <h2 className="pb-3 text-white">SUPPORT</h2>
          <h5 className="fs-6">Our COVID-19 Response</h5>
          <h5 className="fs-6">Help Centre</h5>
          <h5 className="fs-6">Cancellation options</h5>
          <h5 className="fs-6">Neighbourhood Support</h5>
          <h5 className="fs-6">Corporate contact</h5>
          <h5 className="fs-6">Trust & Safety</h5>
          <h5 className="fs-6">FAQ</h5>
          <h5 className="fs-6">Payment gateway</h5>
        </div>
      </div>
      <hr className="bg-white" />
 
      <div className="row ">
        <div className="col-lg-8">
          <h5 className="fs-6 text-white">
            © Xentice Group of Companies 2022 . All Rights Reserved
          </h5>
        </div>
        <div className="col-lg-4 d-flex text-white">
          <h6 className="ps-2">About Us</h6>
          <h6 className="ps-2">Contact Us</h6>
          <h6 className="ps-2">Privacy Policy</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
