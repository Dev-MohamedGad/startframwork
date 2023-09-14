import axios from "axios";
import React, { useEffect, useState } from "react";
import $ from "jquery";
export default function LibraryApi() {
  const [movies, setmovies] = useState([]);
  async function getapi() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=9996035720a53e13bb05d3736ae64865`
    );

    setmovies(data.results);
  }
  useEffect(() => {
    getapi();
  }, []);
  function onentered(id) {
    $(` #${id}`).on("mouseenter", () => {
      $(`#${id} .layer`).animate({ height: "100%" });
    });
  }
  function onleaved(id) {
    $(`#${id}`).on("mouseleave", () => {
      $(`#${id} .layer`).animate({ height: "0px" });
    });
  }
  return (
    <>
      <div className="row vh-50  m-5 g-2">
        <h1 className="text-center bg-body p-5">Movies Api</h1>

        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="  col-md-4 "
            id={`${index}`}
            onMouseEnter={() => onentered(index)}
            onMouseLeave={() => onleaved(index)}
          >
            <div className="itemapi position-relative ">
              {" "}
              <div className="layer position-absolute w-100 opacity-50 bottom-0 bg-white"></div>
              <img
                className="img-fluid rounded-3"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
