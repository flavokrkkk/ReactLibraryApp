import React from 'react';
import './NavBar.scss'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="NavBar">
        <div className="NavBar__content">
            <div className="NavBar__content-leftSide">
                    <NavLink style={{textDecoration: 'none'}} to={'/catalog'}>
                        <div className="NavBar-logo">
                            Sbook
                        </div>
                    </NavLink>
            </div>
            <div className="NavBar__content-center">
                <NavLink to={'/catalog'} style={{textDecoration: 'none', color: '#fff'}} >
                    Каталог
                </NavLink>
            </div>
            <div className="NavBar__content-rightSide">
                <NavLink to={'/mybooks'} style={{textDecoration: 'none', color: '#fff'}} className="NavBar__content-rightSide-content">
                    My books
                </NavLink>
            </div>
        </div> 
        </div>
    );
};

export default NavBar;