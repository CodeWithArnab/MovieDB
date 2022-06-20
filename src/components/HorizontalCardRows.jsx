import { NavLink } from "react-router-dom";
import Card from "./Card";

function HorizontalCardRows(props) {
  // console.log(props.list);

  return (
    <>
      <div className="horizontal-row">
          <div className="top-row">
            <span className="title">{props.pageType.slice(0,1).toUpperCase()+props.pageType.slice(1)} {props.type.slice(0,1).toUpperCase()+props.type.slice(1)}</span>
            {
              props.showHeader?<NavLink to={"/popular/"+props.type} className="view-all">
              View All
              <i className="fa-solid fa-angle-right"></i>
            </NavLink>:""
            }
            
          </div>

        <div className="cards">
          {props.list.map((movie) => {
            return (
              <Card
                key={movie.id}
                name={movie.title || movie.name}
                imagelink={movie.backdrop_path}
                show_id={movie.id}
                show_type={movie.media_type}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

HorizontalCardRows.defaultProps = {
  showHeader: true,
  pageType: "popular",
};

export default HorizontalCardRows;
