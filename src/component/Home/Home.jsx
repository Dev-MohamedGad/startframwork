import React from "react";
import style from "../Home/stylehome.module.css";
import img from "../Asstes/avataaars.svg";
export default function Home() {
  return (
    <>
      <div
        className={`container-fluid  d-flex flex-column justify-content-center align-items-center  ${style.bgmain}`}
      >
        <img src={img} className="w-25 " alt="" />
        <h1>START FRAMEWORK</h1>
        <div className="divcontainer d-flex align-items-center">
          <span className={`m-2 ${style.lines}`}> </span>
          <i className="fa-solid fa-star text-white m-2"></i>
          <span className={`m-2 ${style.lines}`}> </span>
        </div>
        <h6 className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </h6>
      </div>
    </>
  );
}
