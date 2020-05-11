import React from 'react';
import { NavLink } from 'react-router-dom';

const AddTransaction = (e) => {
    console.log('Add transaction');
}

const AddBtn = () => {
    return (
        <NavLink to="/add-transaction">
            <button className="floatingActionBtn" onClick={AddTransaction}>
                <i className="fas fa-plus"></i>
            </button>
        </NavLink>
    )
}

export default AddBtn;