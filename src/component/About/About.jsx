import React from "react";
import styled from "./styleabout.module.css";
export default function About() {
  return (
    <>
      <div
        className={`container-fluid  d-flex flex-column justify-content-center align-items-center  ${styled.bgmain}`}
      >
        <h1>START FRAMEWORK</h1>
        <div className="divcontainer d-flex align-items-center">
          <span className={`m-2 ${styled.lines}`}> </span>
          <i className="fa-solid fa-star text-white m-2"></i>
          <span className={`m-2 ${styled.lines}`}> </span>
        </div>
        <h6 className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </h6>
        <div className="text-content text-white container  d-flex ">
        <p className="text-start m-4">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="text-start m-4">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
      </div>
    
    </>
  );
}
