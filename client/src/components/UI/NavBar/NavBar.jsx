import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = ({ pages }) => {
  return (
    <div className="NavBar">
      <div className="NavBar__content">
        {pages.map(({ pages, route, id }) => (
          <div key={id} className=".NavBar__content-center">
            <NavLink className="NavBar__links" to={route}>
              {pages}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
