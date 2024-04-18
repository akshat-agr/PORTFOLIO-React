import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
    return (
        <div>
            <header className="navbar">
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/projects"><li>Projects</li></NavLink>
                    <NavLink to="/experiences"><li>Experiences</li></NavLink>
                    <NavLink to="/contact"><li>Contact</li></NavLink>
                </ul>
            </header>
        </div>
    );
}

export default Navbar;
