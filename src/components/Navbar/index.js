import React from 'react';
import navLogo from '../../images/navLogo.png';

function Navbar() {
    return(
        <div className="navbar-container">
            <nav className="navbar">
                        <ul className="navList-container">
                            <li>
                                <a className="nav-item" href="/">Home</a>
                            </li>
                            <li>
                                <a className="nav-item" href="/contact">Contact</a>
                            </li>
                            <li>
                                <img className="logoImage" src={navLogo}></img>
                            </li>
                            <li>
                                <a className="nav-item" href="/pricing">Pricing</a>
                            </li>
                            <li>
                                <a className="nav-item" href="/contract">Contract</a>
                            </li>
                        </ul>
            </nav>
        </div>
    );
}

export default Navbar;