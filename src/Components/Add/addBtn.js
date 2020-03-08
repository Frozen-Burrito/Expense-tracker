import React from 'react';

const AddTransaction = (e) => {
    console.log('Add transaction');
}

const AddBtn = () => {
    return (
        <button className="floatingActionBtn" onClick={AddTransaction}>
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddBtn;