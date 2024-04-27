import { NavLink } from "react-router-dom";
import "./styles.js";
import PropTypes from "prop-types";
import { NavBarStyles, NavBarLink } from "./styles.js";

const NavBar = ({ bg, pages }) => {
  return (
    <NavBarStyles bg={bg}>
      {pages.map(({ page, route, id }) => (
        <NavLink to={route} key={id}>
          <NavBarLink>{page}</NavBarLink>
        </NavLink>
      ))}
    </NavBarStyles>
  );
};

export default NavBar;

NavBar.propTypes = {
  bg: PropTypes.oneOf(["purple", "light-purple"]),
  pages: PropTypes.array.isRequired,
};

NavBar.defaultProps = {
  bg: "light-purple",
  pages: [],
};
