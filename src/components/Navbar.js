import React from "react";
import logo from "../images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light  fixed-top py-2">
      <div class="container-fluid">
        <div className="logo d-flex">
          <a
            class="btn text-dark mt-2 bi bi-list fs-3"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          ></a>
          <img src={logo} className="logo" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5 text-center  ">
            <li class="nav-item pe-5">
              <a
                class="nav-link active text-primary"
                aria-current="page"
                href="#"
              >
                <i class="bi bi-megaphone me-2"></i>
                Post Ad
              </a>
            </li>
            <li class="nav-item pe-5">
              <a
                class="nav-link active  text-primary"
                aria-current="page"
                href="#"
              >
                <i class="bi bi-geo-alt-fill me-2"></i>
                Near Me
              </a>
            </li>
            <li class="nav-item pe-5">
              <a
                class="nav-link active  text-primary"
                aria-current="page"
                href="#"
              >
                <i class="bi bi-box-arrow-in-right me-2"></i>
                Login/Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
