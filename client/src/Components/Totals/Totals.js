import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState';

import { formatAmount } from '../../utils/formatAmount';

const Totals = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount) 

    const income = amounts.filter(item => item > 0 ).reduce((acc, item) => acc += item, 0).toFixed(2);

    const expenses = (amounts.filter(item => item < 0).reduce((acc, item) => acc += item, 0) * -1 ).toFixed(2);

    return (
        <div className="card split">
            <div className="card-half">
                <h3>${ formatAmount(income) }</h3>
                <p>Income</p>
            </div>

            <div className="card-half">
                <h3>${ formatAmount(expenses) }</h3>
                <p>Expenses</p>
            </div>
        </div>
    )
}

export default Totals;
