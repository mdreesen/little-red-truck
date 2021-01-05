import React from 'react';
import navLogo from '../../images/navLogo.png';

function Navbar() {
    return(
        <div className="navbar-container">
            <nav className="navbar">
                        <ul className="navList-container">
                            <li>
                                <a className="nav-item" href="/contact">Contact</a>
                            </li>
                            <li>
                            <a className="nav-item" href="/"><img className="logoImage" src={navLogo}></img></a>
                            </li>
                            <li>
                                <a className="nav-item" href="/pricing">Pricing</a>
                            </li>
                        </ul>
            </nav>
        </div>
    );
}

export default Navbar;