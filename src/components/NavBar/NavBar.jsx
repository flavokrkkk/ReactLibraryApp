import React from 'react';
import './NavBar.scss'


const NavBar = () => {
    return (
        <div className="NavBar">
        <div className="NavBar__content">
            <div className="NavBar__content-leftSide">
                    <div className="NavBar-logo">Sbook</div>
            </div>
            <div className="NavBar__content-center">
                <div>
                    Каталог
                </div>
            </div>
            <div className="NavBar__content-rightSide">
                <p className="NavBar__content-rightSide-content">
                    My books
                </p>
            </div>
        </div> 
        </div>
    );
};

export default NavBar;