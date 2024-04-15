import { NavLink } from "react-router-dom";
import { contentPages, mainPages } from "../../utils/pages";
import "./NavBarList.scss";

const NavBarList = () => {
  return (
    <>
      <div className="NavBar__content-leftSide">
        {mainPages.map(({ link, name }) => (
          <NavLink
            key={link}
            className="NavBar__Content-LeftSide-Title"
            to={link}
          >
            <div className="NavBar-logo">{name}</div>
          </NavLink>
        ))}
      </div>
      {contentPages.map(({ link, name }) => (
        <NavLink key={link} className="NavBar__content-center" to={link}>
          {name}
        </NavLink>
      ))}
    </>
  );
};

export default NavBarList;
