import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

const NavBar = () => {

    const { setActivePage } = useContext(GlobalContext);

    return (
        <nav className="navbar">
            <NavLink to="/activity" onClick={() => setActivePage('History')} ><i className="fas fa-history"></i></NavLink>
            <NavLink exact={true}  to="/" onClick={() => setActivePage('Dashboard')}><i className="fas fa-seedling"></i></NavLink>
            <NavLink to="/stats" onClick={() => setActivePage('Stats')}><i className="fas fa-chart-pie"></i></NavLink>
        </nav>
    )
}

export default NavBar;