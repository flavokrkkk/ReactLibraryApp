import React from 'react';
import './NavBar.scss'
import { NavLink } from 'react-router-dom';
import { CATALOG, MYBOOKS } from '../../utils/const';


const NavBar = () => {
    return (
        <div className="NavBar">
        <div className="NavBar__content">
            <div className="NavBar__content-leftSide">
                    <NavLink style={{textDecoration: 'none'}} to={CATALOG}>
                        <div className="NavBar-logo">
                            Sbook
                        </div>
                    </NavLink>
            </div>
            <div className="NavBar__content-center">
                <NavLink to={CATALOG} style={{textDecoration: 'none', color: '#fff'}} >
                    Каталог
                </NavLink>
            </div>
            <div className="NavBar__content-rightSide">
                <NavLink to={MYBOOKS} style={{textDecoration: 'none', color: '#fff'}} className="NavBar__content-rightSide-content">
                    My books
                </NavLink>
            </div>
        </div> 
        </div>
    );
};

export default NavBar;