import React from 'react';
import './Navbar.css';
import './NavbarMedia.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h2>React Rate App</h2>
            <div className='navlink'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/something">About</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
