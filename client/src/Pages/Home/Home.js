import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../../context/GlobalState';

// Components
import Balance from '../../Components/Balance';
import Totals from '../../Components/Totals';

const Home = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
    }, []);
    
    return (
        <div className="center w-90 full-page">
            <p>Welcome back <span>Frozen Burrito</span></p>

            <Balance />
            <Totals />
            
        </div>
    )
}

export default Home;