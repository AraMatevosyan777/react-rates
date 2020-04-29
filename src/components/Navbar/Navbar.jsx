import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light text-light bg-dark">
                <h3 className="navbar-brand text-light">React Rate App</h3>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/something">About us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
