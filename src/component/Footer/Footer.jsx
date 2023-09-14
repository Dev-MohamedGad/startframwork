import React from "react";
import style from "./stylefooter.module.css";
export default function Footer() {
  return (
    <>
      <div
        className={`container-fluid m-0  text-white row text-center p-5 justify-content-center  ${style.footer}`}
      >
        <div className="col-md-4">
          <h2>LOCATION</h2>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h2>AROUND THE WEB</h2>
          <div className="social ">
            <i className="fa-brands border-1 border-white  rounded-circle fa-facebook-f p-3  mx-1"></i>
            <i className="fa-brands border-1 border-white rounded-circle fa-twitter mx-1 p-3  "></i>
            <i className="fa-brands border-1 border-white rounded-circle fa-linkedin-in mx-1  p-3"></i>
            <i className="fa-solid border-1 border-white rounded-circle  fa-globe mx-1  p-3"></i>
          </div>
        </div>
        <div className="col-md-4">
          <h2>ABOUT FREELANCER</h2>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <h6 className="bg-dark p-5 text-white text-center m-0 container-fluid">Copyright © Your Website 2021</h6>

    </>
  );
}
