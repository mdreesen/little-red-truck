import React from 'react';
import navLogo from '../../images/navLogo.png';

function Navbar() {
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <img className="logoImage" src={navLogo}></img>
                </a>
            </nav>
        </div>
    );
}

export default Navbar;