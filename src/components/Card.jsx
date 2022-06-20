import { NavLink } from "react-router-dom";

function Card(props){
    return(
        <>
        <div className="card">
            <NavLink to={"/"+props.show_type+"/"+props.show_id}>
                <img className="show-image" src={"https://image.tmdb.org/t/p/w500"+props.imagelink} alt="" />
                <span className="show-name">{props.name.length>20?props.name.slice(0,20)+"...":props.name}</span>
            </NavLink>
        </div>
        </>
    )
}
export default Card;