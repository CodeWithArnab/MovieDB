import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar">
        <NavLink className="logo" to="/">
          <div className="stie-logo">
            <i className="fa fa-video-camera" aria-hidden="true"></i>
          </div>
          <div className="stie-name">MovieDB</div>
        </NavLink>

        <ul>
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
