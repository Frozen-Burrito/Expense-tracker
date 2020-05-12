import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount) 
    const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    const sign = balance < 0 ? '-' : '';

    return (
        <div className="balance">
            <h3>Your Balance</h3>
            <h1 id="balance">{sign}${Math.abs(balance)}</h1>
        </div>
    )
}

export default Balance;
