import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

const AddBtn = () => {

    const { setActivePage, activePage } = useContext(GlobalContext);

    const handleClick = () => {
        if (activePage === 'Add Transaction') {
            setActivePage('Dashboard');
        } else {
            setActivePage('Add Transaction')
        }
    }

    const FABtnStyle = {
        transform: 'rotate(0deg)',
    }

    const FABtnActiveStyle = {
        transform: 'rotate(45deg)',
    }

    return (
        <NavLink to={activePage === 'Add Transaction' ? "/" : "/add-transaction"}>
            <button className="floatingActionBtn" onClick={handleClick}>
                <i className="fas fa-plus" style={activePage === 'Add Transaction' ? FABtnActiveStyle : FABtnStyle}></i>
            </button>
        </NavLink>
    )
}

export default AddBtn;