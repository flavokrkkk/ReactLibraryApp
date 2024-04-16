import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import PropTypes from "prop-types";

const NavBar = ({ pages }) => {
  return (
    <div className="NavBar">
      <div className="NavBar__content">
        {pages.map(({ page, route, id }) => (
          <div key={id} className=".NavBar__content-center">
            <NavLink className="NavBar__links" to={route}>
              {page}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  pages: PropTypes.array.isRequired,
};
