import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className='topnav'>
            <div className='topnav-left'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/about"
                >
                    PORTFOLIO
                </NavLink>
            </div>
            <div className='topnav-right'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/portfolio"
                >
                   PROJECTS
                </NavLink>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/contact"
                >
                    CONTACT
                </NavLink>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/resume"
                >
                    SKILLSET
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;