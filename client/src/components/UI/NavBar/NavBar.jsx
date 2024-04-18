import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavBar = ({ pages, bg }) => {
  const navbarClass = classNames("navbar", bg);

  return (
    <div className={navbarClass}>
      {pages.map(({ page, route, id }) => (
        <div key={id}>
          <NavLink className="navbar__links" to={route}>
            {page}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  pages: PropTypes.array.isRequired,
  bg: PropTypes.oneOf(["purple", "light-purple"]),
};

NavBar.defaultProps = {
  bg: "light-purple",
};
