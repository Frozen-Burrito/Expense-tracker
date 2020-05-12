import React from 'react';

// Components
import Balance from '../../Components/Balance';
import Totals from '../../Components/Totals';

const Home = () => {
    return (
        <div className="center w-90 full-page">
            <p>Welcome back <span>Frozen Burrito</span></p>

            <Balance />
            <Totals />
            
        </div>
    )
}

export default Home;