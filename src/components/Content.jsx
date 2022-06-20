import HorizontalCardRows from "./HorizontalCardRows";
import VerticalCardRows from "./VerticalCardRows";
import { useState, useEffect } from "react";

function Content(props) {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
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
        setTrendingMovies(result.results.slice(0, 7));
      });
  };

  useEffect(() => {
    getPopularMovies();
    getTrendingMovies();
  }, [props.type]);

  // handleScroll = (e) => {
  //   const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  //   if (bottom) {

  //   }
  // }

  return (
    <section className="main-content">
      <div className="left">
        <HorizontalCardRows list={movies} type={props.type=="tv"?"series":props.type}/>
      </div>

      <div className="right">
        <VerticalCardRows list={trendingMovies} type={props.type=="tv"?"series":props.type}/>
      </div>
    </section>
  );
}
export default Content;
