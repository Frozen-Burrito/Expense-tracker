import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/activity"><i className="fas fa-history"></i></NavLink>
            <NavLink exact={true}  to="/"><i className="fas fa-seedling"></i></NavLink>
            <NavLink to="/stats"><i className="fas fa-chart-pie"></i></NavLink>
        </nav>
    )
}

export default NavBar;