import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";
// import HorizontalCardRows from "./HorizontalCardRows";


function formatNumbers(number){
  if (number>=1000000) return Math.ceil(number/1000000)+"M";
  if (number>=1000) return Math.ceil(number/1000)+"K";
  if (number<1000) return number;
}

const SinglePage = () => {
  const params = useParams();

  const [movie, setMovie] = useState([]);

  const getMoviedetails = async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/" +
        params.type +
        "/" +
        params.id +
        "?api_key=70d2757d5c0ee08e3b901d07aa195369&language=en-US"
    )
      .then((res) => res.json())
      .then(function (result) {
        console.log(result);
        setMovie(result);
      });
  };

  useEffect(() => {
    getMoviedetails();
  }, []);

  return (
    <>
      <Header />

      <div className="movie-details">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt=""
          className="blurred-bg"
        />
        <div className="contents">
          <div className="movie-img">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt="Doctor Strange"
            />
          </div>
          <div className="desc">
            <h2 className="title-name">{movie.name||movie.original_title}</h2>
            <p className="description">{movie.tagline}</p>
            <ul className="tags">
               {
                movie.genres == undefined?[]:movie.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}

            </ul>
            <div className="btnArea">
              <span className="rating">
                <i className="fa-solid fa-star"></i>
                {movie.vote_average + " (" +formatNumbers(movie.vote_count)+")"}
              </span>
              <a href="#" className="btn">
                <i className="fa-solid fa-plus"></i> Add to Watchlist
              </a>
            </div>

            {/* <button className="watch">
              <a href="https://www.imdb.com/title/tt9419884/" target="_blank">
                Watch Now
              </a>
            </button> */}
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="title">Overview</h2>
        <p className="long-description">{movie.overview}</p>
      </div>

      {/* <section className="main-content">
        <h2>Recently Viewed</h2>
        <div className="left">
          <HorizontalCardRows />
        </div>
      </section> */}
    </>
  );
};

export default SinglePage;
