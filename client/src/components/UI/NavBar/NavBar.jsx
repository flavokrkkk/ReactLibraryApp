import { NavLink } from "react-router-dom";
import "./styles.js";
import PropTypes from "prop-types";
import * as S from "./styles.js";

const NavBar = ({ pages, bg }) => {
  return (
    <S.NavBarStyles bg={bg}>
      {pages.map(({ page, route, id }) => (
        <NavLink to={route} key={id}>
          <S.NavBarLink>{page}</S.NavBarLink>
        </NavLink>
      ))}
    </S.NavBarStyles>
  );
};

export default NavBar;

NavBar.propTypes = {
  pages: PropTypes.array.isRequired,
  bg: PropTypes.oneOf(["purple", "light-purple"]),
};

NavBar.defaultProps = {
  bg: "light-purple",
  pages: [],
};
