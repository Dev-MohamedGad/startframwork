import React from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import Style from "./style.module.css";
export default function Navbar() {
  $(window).on("scroll", () => {
    if ($(window).scrollTop()<= 5) {
      $(".navbar").animate({ height: "70px" });
    }
  });

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-light ${Style.bgnav}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand  text-white ps-5 fs-3 fw-bold" to="#">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler bi bi-list fs-3 text-white border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto p-4  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link  fw-bold  fs-5 text-white"
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 fw-bold  text-white"
                  to="LibraryApi"
                >
                  LibraryApi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  fs-5 fw-bold text-white"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link  fs-5 fw-bold text-white"
                  to="notfound"
                >
                  NotFound
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
