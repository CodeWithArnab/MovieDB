import { NavLink } from "react-router-dom";
import Card from "./Card";

function VerticalCardRows(props) {
  return (
    <>
      <div className="vertical-row">
        <div className="top-row">
          <span className="title">Trending</span>
          <NavLink to={"/trending/"+props.type} className="view-all">
            View All
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </div>
        <div className="cards">
        {
            props.list.map((movie)=>{
              return <Card key={movie.id} name = {movie.title||movie.name} imagelink={movie.backdrop_path} show_id={movie.id} show_type={movie.media_type}/>
            })
          }
        </div>
      </div>
    </>
  );
}

export default VerticalCardRows;
