import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState';

const AppBar = () => {

    const { activePage } = useContext(GlobalContext);

    return (
        <div className="appbar transparent">
            <div className="header-bg" />
            <h2 className="header">{activePage}</h2>
        </div>
    )
}

export default AppBar;
