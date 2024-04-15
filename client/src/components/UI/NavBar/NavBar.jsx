import "./NavBar.scss";
import NavBarList from "../../NavBarList/NavBarList";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__content">
        <NavBarList />
      </div>
    </div>
  );
};

export default NavBar;
