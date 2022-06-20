import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HorizontalCardRows from "./HorizontalCardRows";

function Popular(props) {
  const params = useParams();

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const getPopularMovies = async () => {
    await fetch(
      "https://api.themoviedb.org/3/discover/" +
        props.type +
        "?api_key=70d2757d5c0ee08e3b901d07aa195369&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=" +
        pageNo
    )
      .then((res) => res.json())
      .then(function (result) {
        // console.log(result.results);
        result.results.forEach((re) => {
          re.media_type = props.type;
        });
        setMovies(result.results);
      });
  };

  const getTrendingMovies = async () => {
    await fetch(
      "https://api.themoviedb.org/3/trending/" +
        props.type +
        "/week?api_key=70d2757d5c0ee08e3b901d07aa195369"
    )
      .then((res) => res.json())
      .then(function (result) {
        // console.log(result.results);
        setMovies(result.results);
      });
  };

  useEffect(() => {
    if (props.page=="popular")
    getPopularMovies();
    else
    getTrendingMovies();
  }, [props.type || props.page]);

  return (
    <>
      <section className="main-content">
        <HorizontalCardRows list={movies} type={props.type=="tv"?"series":props.type} showHeader={false} pageType={props.page}/>
      </section>
    </>
  );
}

export default Popular;
