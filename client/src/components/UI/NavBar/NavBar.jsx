import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { AUTH, CATALOG, MYBOOKS } from "../../../utils/const";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__content">
        <div className="NavBar__content-leftSide">
          <NavLink className="NavBar__Content-LeftSide-Title" to={AUTH}>
            <div className="NavBar-logo">Sbook</div>
          </NavLink>
        </div>
        <div className="NavBar__content-center">
          <NavLink
            to={CATALOG}
            className="NavBar__Content-LeftSide-Title-Catalog"
          >
            Каталог
          </NavLink>
        </div>
        <div className="NavBar__content-rightSide">
          <NavLink to={MYBOOKS} className="NavBar__content-rightSide-content">
            My books
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
